var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var initApiRoutes = require('./app/routing/apiRoutes.js');
var initHtmlRoutes = require('./app/routing/htmlRoutes.js');
var PORT = process.env.PORT || 8080;

var app = express();

//handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', initHtmlRoutes);
// initialize API routes after body parser
initApiRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
