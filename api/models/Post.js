/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {

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

};
