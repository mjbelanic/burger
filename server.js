//import all needed files
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var app = express();
app.set("port", process.env.PORT || 3000);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Set up handlebar files
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine" , "handlebars");


app.use("/" , routes);

app.listen(app.get("port"), function(){
    console.log("App is listening on PORT: " + app.get("port"));
});
