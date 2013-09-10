/**
 * Comment
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {
    
  },

  // Lifecycle Callbacks
  beforeCreate: function(values, next) {

    Comment.find().limit(1).sort('createdAt DESC').done(function(err, comments) {
      if (err) return next(err);

      if (comments.length == 0)
        values.id = 1;
      else
        values.id = parseInt(comments[0].id)+ 1;

      next();
    });
  }

};
