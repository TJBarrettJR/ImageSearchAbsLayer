// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var mongoClient = require("mongodb").MongoClient;
var google = require("googleapis");
var customSearch = google.customsearch('v1');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

mongoClient.connect(process.env.dbconnect, function(err, db) {
  if (err) {
    throw err;
  } else {
    console.log("Connected to database");
    app.get("/latest", function(req, res) { // returns 10 most recent searches
      db.collection("recent").find({}, {sort: {"when": -1}, "limit": 10, "fields": {"term": 1, "when": 1, "_id": 0}}).toArray(function(err, records) { 
        if (err) {
          console.log("Error in find");
          throw err;
        } else {
          res.json(records);
        }
      });
    });

    app.get("/imagesearch/:what", function(req, res) { // use google to search for images and return the number requested
      var offset = req.query.offset || 1; // check if offset was entered
      var what = req.params.what;
      var insertTime = new Date(Date.now());
               
      var json = [];
      var searchParams = {cx: process.env.google_engineid, q: what, auth: process.env.google_key, start: offset, num: "10", searchType: "image"};
      
      customSearch.cse.list(searchParams, function (err, resp) {
        if (err) {
          console.log("search error");
          throw err;
        }
        if (resp.items && resp.items.length > 0) {
          resp.items.forEach(function(item) {
            json.push({url: item.link, snippet: item.snippet, context: item.image.contextLink});
          });
        }
        
        res.json(json);
      });
      
      db.collection("recent").insert({"term": what, "when": insertTime.toISOString()}, function(err, item) { // adds to recent collection
        if (err) {
          console.log("Item not added");
          throw err;
        } else {
          console.log("Item added");
        }
      });
    });
  }
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});