//Files I had to npm istall
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
//the port is made to process.env.PORT || 8080 b/c heroku will create a random number.
// var PORT = process.env.PORT || 8080;
//handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//   * A GET Route to `/survey` which should display the survey page.
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = app;
