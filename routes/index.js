exports.index = function(req, res){
	var loggedIn = false;
	var username = '';
	console.log("index");
    res.render('index', {layout: false, 'username': username, 'loggedIn': loggedIn});
};

exports.login = function(req, res){
	var loggedIn = false;
	var username = '';
	console.log("login");
        res.send('loggginnn');
};

exports.logout = function(req, res){
	var loggedIn = false;
	var username = '';
	console.log("logout");
    res.render('username', {layout: false, 'username': username, 'loggedIn': loggedIn});
};

exports.username = function(req, res){
    res.send('userrrname');
};



