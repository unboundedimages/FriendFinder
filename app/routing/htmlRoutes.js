//Files I had to npm istall
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
//the port is made to process.env.PORT || 8080 b/c heroku will create a random number.
var PORT = process.env.PORT || 8080;
//handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Mock Friend like the Myspace or the first time you make a facebook page.
// var extroverts = [{
//     routeName: "tom",
//     photo: "Tomhttps://tctechcrunch2011.files.wordpress.com/2011/07/tom-anderson.jpg",
//     score: ""

// }];

//     Your `htmlRoutes.js` file should include two routes:

//
//   * A GET Route to `/survey` which should display the survey page.
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
//   * A default, catch-all route that leads to `home.html` which displays the home page.
// * is a wildcard.  It wll take any route and if nothing matches, it will take you
//back to home.html.
// app.get("/api", function(req, res) {
//     res.sendFile(path.join(__dirname, "../data/friends.js"));
// });
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = app;
