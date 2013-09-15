/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {

    postid: {
      type: 'integer',
      unique: true,
      min: 1
    },

    message: {
      type: 'string',
      minLength: 10
    },

    latitude: {
      type: 'float',
      unique: true,
      required: true
    },

    longitude: {
      type: 'float',
      unique: true,
      required: true
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

    Post.find().limit(1).sort('createdAt DESC').done(function(err, posts) {
      if (err) return next(err);

      if (posts.length == 0)
        values.postid = 1;
      else
        values.postid = parseInt(posts[0].postid)+ 1;

      next();
    });
  }

};
