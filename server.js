var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var initApiRoutes = require('./app/routing/apiRoutes.js');
var initHtmlRoutes = require('./app/routing/htmlRoutes.js');
var PORT = process.env.PORT || 8080;

var app = express();
//check to see if initApiRoutes is pulling the correct info from ./app/routing/apiRoutes.js
console.log(JSON.stringify(initApiRoutes));

//handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//alternative way to export/initalize API routes
// app.use('/', initHtmlRoutes);
// app.use('/', initApiRoutes);

// initialize API routes after body parser
initApiRoutes(app);
app.use('/', initHtmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
