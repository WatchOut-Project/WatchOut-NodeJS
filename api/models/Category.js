/**
 * Category
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {

  	categoryid: {
  		type: 'integer',
  		unique: true,
  		min: 1
  	},

  	categoryname: {
  		type: 'string'
  	}
    
  }

};
