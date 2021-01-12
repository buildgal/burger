const express = require ("express"); 
const router = express.Router();
const burger = require ("../db/models/burger.js");

//these are the routes to the API calls, you can test these using postman to validate the data 

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      let hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", "sleepy" //connect this data to what is pulled in the database 
    ], [
      req.body.name, req.body.sleepy
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      sleepy: req.body.sleepy //again update here based on the database
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  /*
  router.delete("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    
    });
  });
  */
 
  // Export routes for server.js to use.
  module.exports = router;
  
