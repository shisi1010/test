var express = require("express");
var path = require("path");


var app = express();
var staticPath = path.resolve(__dirname, "./angularjs");
app.use(express.static(staticPath));

app.listen(3000);