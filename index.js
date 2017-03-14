var express = require("express");
var server = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var todoRouter = require("./routers/todo.router");

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require("./secrets").mongoURI;

// powerup -- middleware
//handle json data as part of the body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
//connect to the database
mongoose.connect(mongoURI);

// Routes
server.use(todoRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
})
