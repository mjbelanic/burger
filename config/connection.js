var mysql = require("mysql");
var express = require("express");
var app = express();

var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.databaseName
});
/* 
host: 'us-cdbr-iron-east-05.cleardb.net'
user: 'bc261581376989'
password: '2b2ae125'
database: `heroku_566b689674139e4'
*/

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