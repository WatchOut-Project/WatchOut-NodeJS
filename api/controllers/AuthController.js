/**
 * AuthController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var passport = require('passport');

module.exports = {

  register: function (req, res) {
    if (req.body) {
      User.create({
        username: req.param('registerUsername'),
        email: req.param('registerEmail'),
        password: req.param('registerPassword')
      }).done(function(err, user) {

        // Error handling
        if (err) {
          return console.log(err);

        // The User was created successfully!
        } else {
          res.redirect('/');
          return;
        }
      });
    }
  },

  login: function (req ,res) {
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        res.cookie('error', info.message);
        console.log('error : ' + info.message);
        return;
      }
   
      req.logIn(user, function(err) {
        if (err) {
          res.cookie('error', err);
          console.log('error : ' + err);
          return;
        }
            
        res.redirect('/');
        return;
      });
    })(req, res);
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
