/**
 * Users
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {

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

    pass: {
        type: 'string',
        required: true
    },

    facebookToken: {
        type: 'string'
    },

    googleplusToken: {
        type: 'string'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.pass;
      return obj;
    }

  }

};

module.exports.hashPass = function(pass)
{
    var hasher = require('password-hash');
    return hasher.generate(pass);
}

module.exports.checkPass = function(pass, stored)
{
    var hasher = require('password-hash');
    return hasher.verify(pass, stored);
}
