const { application } = require("express");
var express = require("express");
var path = require("path");

var routes = require("./routes");

var app = express();

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 4001);

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
})
