/**
 * Marker
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
    
  },

  // Lifecycle Callbacks
  beforeCreate: function(values, next) {
    Marker.find().limit(1).sort('createdAt DESC').done(function(err, collections) {
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
