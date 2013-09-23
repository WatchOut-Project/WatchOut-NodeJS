/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {

    _id: {
      type: 'string'
    },

    message: {
      type: 'string',
      minLength: 10
    },

    pictures: {
      type: 'array',
      defaultsTo: []
    },

    videos: {
      type: 'array',
      defaultsTo: []
    },

    category: {
      type: 'string'
    },

    comments: {
      type: 'array',
      defaultsTo: []
    }

  },

  // Lifecycle Callbacks
  beforeCreate: function(values, next) {
    Post.find().limit(1).sort('createdAt DESC').done(function(err, collections) {
      if (err) return next(err);

      var seqNo;
      if (collections.length == 0)
        seqNo = 1;
      else
        seqNo = parseInt(collections[0].id)+ 1;
      values._id = seqNo.toString();

      next();
    });
  }

};
