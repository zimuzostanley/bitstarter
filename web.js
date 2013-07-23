#!/usr/bin/env node
process.env.PWD = process.cwd();
var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express.createServer(express.logger());
app.use(express.static(process.env.PWD + '/public'));
app.get('/', function(request, response) {
  response.send(fs.readFileSync("index.html", "utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
