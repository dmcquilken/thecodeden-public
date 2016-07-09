'use strict';

var express = require('express');
var app = express();


app.use(express.static(__dirname + '/www'));  
app.listen(8080);

console.log("App listening on port 8080");