// Start sails
require('sails').lift(
  {
     appName: "Watch Out"
  },
  function(err, sails) {
     // pass it command line arguments
     require('optimist').argv;
   }
);