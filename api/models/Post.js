/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {

    comments: {
      type: 'array'
    }

  },

  // Lifecycle Callbacks
  beforeCreate: function(values, next) {

    Post.find().limit(1).sort('createdAt DESC').done(function(err, posts) {
      if (err) return next(err);

      if (posts.length == 0)
        values.id = 1;
      else
        values.id = parseInt(posts[0].id)+ 1;

      next();
    });
  }

};
