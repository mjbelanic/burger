var mysql = require("mysql");

//Connection credentials
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password: 'test',
    database: "burger_db"
});

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