#!/usr/bin/env node
var express = require('express');
var routes = require('./routes');
var app = express.createServer(express.logger());


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/login/:username/:loggedIn', routes.login);
app.get('/logout/:username/:loggedIn', routes.logout);
app.get('/username', routes.username);



var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
