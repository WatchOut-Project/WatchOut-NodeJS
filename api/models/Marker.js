/**
 * Marker
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {
  	
  	markerid: {
  		type: 'integer',
  		unique: true,
  		min: 1
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

    placename: {
    	type: 'string',
    	required: true
    },

    posts: {
    	type: 'array',
      	defaultsTo: []
    },

    category: {
    	type: 'string'
    }
    
  }

};
