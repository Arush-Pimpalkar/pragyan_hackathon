// Load Node modules
var express = require("express");
const ejs = require("ejs");
// Initialise Express
var app = express();
// Render static files
app.use(express.static("public"));
//Set the view engine to ejs
app.set("view engine", "ejs");
// Port website will run on
app.listen(8080);

// *** GET Routes - display pages ***
// Root Route
app.get("/", function (req, res) {
  var name = "Sakshi";
  res.render("pages/index", { name: name });
});
