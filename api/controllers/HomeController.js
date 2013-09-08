/**
 * HomeController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  index: function (req, res) {
    res.view();
  },

  login: function (req, res) {
    $('#loginModal').modal('show');
  },

  register: function (req, res) {

  }

};
