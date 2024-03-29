/**
 * Global adapter config
 *
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {

  // If you leave the adapter config unspecified
  // in a model definition, 'default' will be used./23
  'default': 'mongo',

  // In-memory adapter for DEVELOPMENT ONLY
  memory: {
    module: 'sails-memory'
  },

  // Persistent adapter for DEVELOPMENT ONLY
  // (data IS preserved when the server shuts down)
  disk: {
    module: 'sails-disk'
  },

  // MySQL is the world's most popular relational database.
  // Learn more: http://en.wikipedia.org/wiki/MySQL
  mysql: {
    module: 'sails-mysql',
    host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user: 'YOUR_MYSQL_USER',
    password: 'YOUR_MYSQL_PASSWORD',
    database: 'YOUR_MYSQL_DB'
  },

  // MONGOLAB_URI: mongodb://heroku_app17543428:dsa372je382k8sgqa4hadm2g6g@ds039768.mongolab.com:39768/heroku_app17543428
  mongo: {
    module   : 'sails-mongo',
    host     : 'ds039768.mongolab.com',
    port     : 39768,
    user     : 'heroku_app17543428',
    password : 'dsa372je382k8sgqa4hadm2g6g',
    database : 'heroku_app17543428'
  }

  // Shell Command
  // mongo heroku_app17543428 --host ds039768.mongolab.com --port 39768 --username heroku_app17543428 --password dsa372je382k8sgqa4hadm2g6g

};