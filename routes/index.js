var loggedInGlobal = '';
var usernameGlobal = '';

exports.index = function(req, res){
	var loggedIn = loggedInGlobal;
	var username = usernameGlobal;
	console.log("index");
        res.render('index', {layout: false, 'username': username, 'loggedIn': loggedIn});
};

exports.login = function(req, res){
	var loggedIn = true;
	var username = req.param('username');
	loggedInGlobal = loggedIn;
	usernameGlobal = username;
	console.log("login");
    res.render('username', {layout: false, 'username': username, 'loggedIn': loggedIn});
};

exports.logout = function(req, res){
	var loggedIn = false;
	var username = '';
	loggedInGlobal = loggedIn;
	usernameGlobal = username;
	console.log("logout");
    res.render('username', {layout: false, 'username': username, 'loggedIn': loggedIn});
};
