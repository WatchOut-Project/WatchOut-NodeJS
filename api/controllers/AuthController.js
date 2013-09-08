/**
 * AuthController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var passport = require('passport');

module.exports = {

	index: function (req,res)
	{
		res.view();
	},

	login: function(req, res)
	{
		passport.authenticate(
			'local',
			function(err, user, info)
			{
				if ((err) || (!user))
				{
					res.cookie('error', info.message);
					res.redirect('/login');
					return;
				}

				req.logIn(
					user,
					function(err)
					{
						if (err)
						{
							res.cookie('error', err);
							res.redirect('/login');
							return;
						}

						res.redirect('/');
						return;
					}
				);
			}
		)(req, res);
	},

	logout: function (req, res)
	{
		req.logout();
		res.redirect('/login');
	},

	register: function (req, res)
	{
		if(req.isAuthenticated())
		{
			res.cookie('info', "You can't register while logged in.");
			res.redirect('/');
			return;
		}
		res.view();
	}

};