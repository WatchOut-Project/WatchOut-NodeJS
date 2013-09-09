/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

 var bcrypt = require('bcrypt');

 module.exports = {

  attributes: {

    id: {
      type: 'integer',
      unique: true,
      min: 1
    },

    username: {
        type: 'string',
        required: true,
        unique: true,
        maxLength: 20,
        minLength: 5
    },

    email: {
        type: 'email',
        required: true,
        unique: true
    },

    password: {
        type: 'string',
        required: true,
        minLength: '6',
        columnName: 'encrypted_password'
    },

    watchoutToken: {
        type: 'string'
    },

    facebookToken: {
        type: 'string'
    },

    facebookTokenExpire: {
      type: 'date'
    },

    googleplusToken: {
        type: 'string'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
  }

},

  // Lifecycle Callbacks
  beforeCreate: function(values, next) {

    bcrypt.hash(values.password, 10, function(err, hash) {
      if(err) return next(err);
      values.password = hash;

      User.find().limit(1).sort('createdAt DESC').done(function(err, users) {
        if (err) return next(err);

        if (users.length == 0)
          values.id = 1;
        else
          values.id = parseInt(users[0].id)+ 1;

        next();
      });
    });
  }

};
