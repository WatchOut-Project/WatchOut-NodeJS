/**
 * UserController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {
	// destroy: function(req, res) {
	// 	res.contentType('application/json');

	// 	User.findOneById(1)
	// 	.done(function(err, user) {

	// 		if (err) return console.log(err);
	// 		if (!user) return console.log('No User Found');

	// 		user.destroy(function(err) {
	// 			if (err) return console.log(err);
	// 			console.log("destroyed");
	// 			return;
	// 		});

	// 		var userJSON = JSON.stringify(user);
	// 		res.send(userJSON);
	// 	});
	// }

	// create: function(req, res)
	// {

	// 	if(req.body)
	// 	{
	// 		console.log("body : " + req.param('username'));
	// 		console.log("JSON : " + req.isJson);
	// 		// req.body.pass = Users.hashPass(req.body.pass);
	// 		// Users.create(req.body).done(
	// 		// 	function(err, user)
	// 		// 	{
	// 		// 		if (err)
	// 		// 		{
	// 		// 			res.cookie('error', "There was an error" + err);
	// 		// 			res.redirect('/register');
	// 		// 			return;
	// 		// 		}
	// 		// 		else
	// 		// 		{
	// 		// 			res.cookie('info', "You have succesfully registered.");
	// 		// 			res.redirect('/login');
	// 		// 			return;
	// 		// 	  	}
	// 		// 	}
	// 		// );
	// 		return;
	// 	}
	// 	else
	// 	{
	// 		console.log("nobody");
	// 		// res.redirect('/login');
	// 		return;
	// 	}
	// }
};
