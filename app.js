var express = require('express'),
	bodyParser = require('body-parser');
var app = express();

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

app.get('/user/:id', function(req, res) {
	var result = {
					id : req.params.id,
					name : req.params.id + '님의 이름',
					age : '29'
				 };
    res.jsonp(result);
});

  
app.listen(8087);
console.log('Express Listening on port 8087...');