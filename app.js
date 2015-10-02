var express = require('express'),
	bodyParser = require('body-parser');
var app = express();
var path = require('path');

/*
	DB 연동시 삭제될 부분
*/
var currentTime = new Date();
var users = [{
		email : '1',
		password : '1',
		name : '1',
		job : '1',
		joinDate : currentTime,
		updateDate : currentTime
},
{
		email : '2',
		password : '2',
		name : '2',
		job : '2',
		joinDate : currentTime,
		updateDate : currentTime
}];



app.get('/login', function(req, res){
	res.sendFile(path.join(__dirname + '/view/login.html'));
})

app.get('/user', function(req, res) {
	res.header("Content-Type", "application/json; charset=utf-8");
    res.send(users);
});

app.get('/user/:id', function(req, res) {
	var result = {
					id : req.params.id,
					name : req.params.id,
					age : '29'
				 };
	res.header("Content-Type", "application/json; charset=utf-8");
    res.json(result);
});

app.post('/user', function(req, res){
	
});
  
app.listen(8080);
console.log('Express Listening on port 8080...');