var express = require('express');
var app = express();


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


app.get('/user', function(req, res) {
    res.send(users);
});

app.get('/user/:idx', function(req, res) {
    res.send(users[req.params.idx]);
});

app.listen(8080);
console.log('Express Listening on port 8080...');