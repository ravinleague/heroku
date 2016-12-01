var express = require('express');
var mongoose = require('mongoose');
var app = express();

var database;

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var server = app.listen(5000,function(){
	console.log('listening on port: ',server.address().port);
})

app.get('https://api.themoviedb.org/3/discover/movie?api_key="'+apikey+'"&sort_by=popularity.desc',getMovies);

function getMovies(req,res){
	//res.send(res);
	console.log(res);
}

mongoose.connect("mongodb://localhost:27017/test",function(err,db){
	if(!err){
		console.log("we are connected to mongo");
		database=db;
	}
})