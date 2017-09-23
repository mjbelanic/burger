var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.getAllBurgers(function(data){
        var burgerObject = {
            burgers: data
        };
        res.render("index" , burgerObject);
    });
});
  
router.post("/", function(req, res) {
    burger.insertBurger("burger_name", req.body.burgerName, function(){
        res.redirect("/");
    });
});

router.put("/:name", function(req,res){
    var condition;
    var burgerName = "'" + req.params.name + "'";
    console.log(req.body.devoured);
    if(req.body.devoured){
        condition = "devoured = true";
    }else{
        condition = "devoured = false";
    }
    burger.devourBurger(
        condition,
        burgerName,
        function(){
            res.redirect("/")
    });
});


module.exports = router;