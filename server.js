//Dependencies
// =============================================================================
var express = require("express"),
bodyParser = require("body-parser"),
exphbs = require("express-handlebars"),
methodOverride = require("method-override"),
// orm = require("./config/orm.js"),
routes = require("./controllers/burgers_controller.js");



var app = express();
var port = process.env.port || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.use(express.static("public"));
app.set("view engine", "handlebars");

app.use("/", routes);
app.listen(port, function(){
  console.log("Listening on port " + port);
});

