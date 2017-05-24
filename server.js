'use strict';
var express = require("express");
var bodyParser =require("body-parser");
var routes = require("./routes.js");
var api = require("./timestamp.js");
var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use("/public", express.static(process.cwd() + "/public"));
routes(app);
api(app);
app.listen(8080, function() {
    console.log("server.js listening on port 8080...");
});