

exports.index = function(req, res){
	var loggedIn = req.session.loggedIn;
	var username = req.session.username;
	console.log("index");
        res.render('index', {layout: false, 'username': req.session.username, 'loggedIn': req.session.loggedIn});
};

exports.login = function(req, res){
	req.session.loggedIn = true;
	req.session.username = req.params.username;
	console.log("login");
    res.render('username', {layout: false, 'username': req.session.username, 'loggedIn': req.session.loggedIn});
};

exports.logout = function(req, res){
    	req.session.loggedIn = false;
	req.session.username = req.params.username;
	console.log("logout");
    res.render('username', {layout: false, 'username': req.session.username, 'loggedIn': req.session.loggedIn});
};
