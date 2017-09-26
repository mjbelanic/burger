var mysql = require("mysql");
var express = require("express");
var app = express();

var connection;
if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.databaseName
    });
} else {
    connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "test",
        database: "burger_db"
    });
}

//Make connection
connection.connect(function(err){
    if(err){
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;