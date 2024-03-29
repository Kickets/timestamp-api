'use strict';
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./app/routes/index.js");
var api = require("./app/api/timestamp.js");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));
var port = process.env.PORT || 8080;
routes(app);
api(app);
app.listen(port, function() {
    console.log("Node.js listening on port " + port + "...");
});