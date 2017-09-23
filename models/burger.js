var orm = require("../config/orm.js");

var burger = {
    getAllBurgers: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertBurger: function(colName, userInput, cb){
        orm.insertOne("burgers", colName, userInput, function(res){
            cb(res);
        });
    },
    devourBurger: function(condition, burgerName, cb){
        orm.updateOne("burgers" , condition, burgerName, function(res){
            cb(res);
        })
    }
};

module.exports = burger;