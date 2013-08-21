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
        required: true
    },

    emailAddress: {
        type: 'email',
        required: true
    },

  }

};
