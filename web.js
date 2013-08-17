#!/usr/bin/env node

var express = require('express');
var db = require('./models');
var routes = require('./routes');
var app = express.createServer(express.logger());


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.cookieParser());
app.use(express.session({secret: 'secret'}));
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/login/:username', routes.login);
app.get('/logout', routes.logout);




var port = process.env.PORT || 8000;

db.sequelize.sync().complete(function(err){
    if(err){
	throw err;
    }

    else {
	app.listen(port, function() {
	    console.log("Listening on " + port);
	});

	}
});

