var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
  burger.all(function(data){
    var burgers = {
      burgers: data
    }
    res.render("index", burgers);
  });
});

router.post("/", function(req, res){
  burger.post(req.body.burger, function(data){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res){
  var id = req.params.id;
  burger.update(id, true, function(data){
    //console.log(data);
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res){
  var id = req.params.id;
  burger.delete("id", id, function(data){
    //console.log(data);
    res.redirect("/");
  });
});




module.exports = router;