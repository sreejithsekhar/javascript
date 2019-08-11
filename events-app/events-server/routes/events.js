var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var db;
MongoClient.connect("mongodb://localhost:27017/", function (err, database) {
    if (err) return console.log("error", err);
    db = database.db("eventsdb");
});

router.get("/", function(req, res, next) {
    db.collection("events").find().toArray(function (err, results) {
        if (err) res.send(err);
        res.send(results);
    });
});

module.exports = router;