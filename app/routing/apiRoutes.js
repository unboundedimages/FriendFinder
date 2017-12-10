//Files I had to npm istall
var extroverts = require('../data/friends.js');
var path = require("path");

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
        newextroverts.routeName = newextroverts.name.replace(/\s+/g, "").toLowerCase();

        console.log(newextroverts);

        extroverts.push(newextroverts);

        res.json(newextroverts);
    });

}

module.exports = initRoutes;
