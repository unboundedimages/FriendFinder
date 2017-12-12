//Files I had to npm istall
var extroverts = require('../data/friends.js');
var path = require("path");
// var app = new require("express").Router();
//Mock Friend like the Myspace or the first time you make a facebook page.

// Your `apiRoutes.js` file should contain two routes:

function initRoutes(app) {

    // * A GET route with the url `/api/friends`. This will be used to display
    // a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(extroverts);
    });
    //* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        var newextroverts = req.body;
        var newscore = [];
        var yourFriend = {
            name: "",
            photo: "",

        };
        var bestMatch = Infinity;
        console.log("test test test test  " + JSON.stringify(newextroverts));
        //first loop through friends.
        for (i = 0; i < extroverts.length; i++) {
            // totalDiff will hold the scores and be used in the math later on
            var totalDiff = 0;
            //time to compare friends
            for (var j = 0; j < newextroverts.length; j++) {
                totalDiff += (Math.abs(parseInt(extroverts[i].scores[j]) - parseInt(newextroverts[j])));
            } //truthty work around
            if (totalDiff <= yourFriend.bestMatch) {

                yourFriend.name = newextroverts.name;
                yourFriend.photo = newextroverts.photo;
                yourFriend.bestMatch = totalDiff
            }
            extroverts.push(newextroverts);
        }
        //truthty work around
        res.JSON(yourFriend);
    });

}

module.exports = initRoutes;
