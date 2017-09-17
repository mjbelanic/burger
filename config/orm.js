var connection  = require("./connection.js");

connection.connect(function(err){
    if(err){
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

function selectAll(){
    connection.query("Select * FROM burgers", function(err, results){
        //handlebar stuff with results
    });
};

function insertOne(name, devoured){
    var created = new Date();
    connection.query("INSERT INTO  burgers (name, devoured, date) VALUES (? , ? , ?)", [name, devoured, created], function(err, result){
        //handlebar stuff
    })
};

function updateOne(name){
    connection.queryy("UPDATE burgers SET devoured = false WHERE name = ?", [name], function(err,result){
        if(err){
            console.error("Error: " + err.stack);
        }else{
            //handlebar stuff
        }
    });
};