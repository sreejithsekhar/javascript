var express = require("express");
var router = express.Router();
var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;

var db;
MongoClient.connect("mongodb://localhost:27017/", function(err, database) {
  if (err) return console.log("error", err);
  db = database.db("eventsdb");
});

router.get("/", function(req, res, next) {
  db.collection("events")
    .find()
    .toArray(function(err, results) {
      if (err) res.send(err);
      res.send(results);
    });
});

router.post("/add-event", function(req, res, next) {
  db.collection("events").insertOne(req.body, function(err, result) {
    if (err) res.send(err);
    res.send({ error: null });
  });
});

router.delete("/remove-event", function(req, res, next) {
  console.log("id", req.body.eventId);
  db.collection("events").deleteOne(
    { _id: new mongo.ObjectId(req.body.eventId) },
    function(err, result) {
      if (err) {
        console.log("err", err);
        res.send({ error: "DB_FAILED" });
      }
      res.send({ error: null });
    }
  );
});

module.exports = router;
