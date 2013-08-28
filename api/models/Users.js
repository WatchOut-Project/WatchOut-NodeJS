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
        maxLength: 20,
        minLength: 5
    },

    emailAddress: {
        type: 'email',
        required: true
    },

    password: {
        type: 'string',
        required: true
    }

  }

};
