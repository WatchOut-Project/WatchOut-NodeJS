/**
 * AuthController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var passport = require('passport');

module.exports = {

  register: function (req, res) {
    console.log("ok");
    if (req.body) {
      User.create({
        username: req.param('username'),
        email: req.param('email'),
        password: req.param('password')
      }).done(function(err, user) {

        // Error handling
        if (err) {
          return console.log(err);

        // The User was created successfully!
        } else {
          console.log("User created:", user.password);
          res.redirect('/');
          return;
        }
      });
    }
  },

  login: function (req, res) {
    res.view();
  },

  logout: function (req, res) {
      req.logout();
      res.redirect('/');
  },

  'github': function (req, res) {
      passport.authenticate('github', { failureRedirect: '/login' },
          function (err, user) {
              req.logIn(user, function (err) {
                  if (err) {
                      console.log(err);
                      res.view('500');
                      return;
                  }

                  res.redirect('/');
                  return;
              });
          })(req, res);
  },

  'github/callback': function (req, res) {
      passport.authenticate('github',
          function (req, res) {
              res.redirect('/');
          })(req, res);
  },

  'google': function (req, res) {
    res.redirect('/');
    return;
      passport.authenticate('google', { failureRedirect: '/login', scope:['https://www.googleapis.com/auth/plus.login','https://www.googleapis.com/auth/userinfo.profile'] },
          function (err, user) {
              req.logIn(user, function (err) {
                  if (err) {
                      console.log(err);
                      res.view('500');
                      return;
                  }

                  res.redirect('/');
                  return;
              });
          })(req, res);
  },

  'google/callback': function (req, res) {
      passport.authenticate('google',
          function (req, res) {
              res.redirect('/');
          })(req, res);
  },

  'facebook': function (req, res) {
    res.redirect('/');
    return;
  }

};
