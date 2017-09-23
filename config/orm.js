var connection  = require("./connection.js");

var orm = {
    selectAll: function(tableName , cb){
        var queryString = "SELECT * FROM "+tableName+";";
        connection.query(queryString, function(err, results){
            if(err){
                console.error(err.stack);
            }
            cb(results);
        });
    },

    insertOne: function(tableName, colName, value, cb){
        //Ask about escaping and table name
        value = "'" + value + "'";
        var queryString = "INSERT INTO "+tableName+" ("+colName+", devoured, date) VALUES("+value+", false, NOW());";
        console.log(queryString);
        connection.query(queryString, function(err, results){
            cb(results);
        })
    },

    updateOne: function(tableName, condition, name, cb){
        console.log(condition);
        var queryString = "UPDATE "+tableName+" SET "+condition+" WHERE burger_name = " +name+";";
        connection.query( queryString, function(err,results){
            if(err){
                console.error("Error: " + err.stack);
            }else{
                cb(results);
            }
        });
    }
};

module.exports = orm;