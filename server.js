'use strict';
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./index.js");
var api = require("./timestamp.js");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(process.cwd() + '/'));
var port = process.env.PORT || 8080;
routes(app);
api(app);
app.listen(port, function() {
    console.log("server.js listening on port " + port + "...");
});