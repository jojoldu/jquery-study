var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
<<<<<<< HEAD

=======
>>>>>>> feature/session-profile
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

//글 목록
var boards = [];

app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
	secret:'jquery salt',
	resave:false,
	saveUninitalized:true
}));

app.use(session({
  secret: 'jquery salt',
  resave: false,
  saveUninitialized: true
}));


app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/view/login.html'));
})

app.get('/user', function(req, res) {
    res.send(users);
});

app.get('/user/:idx', function(req, res) {
    res.send(users[req.params.idx]);
});

app.post('/user', function(req, res){
	var obj = req.body;
	var result = {
		status : true
	};

	for(var i=0;i<users.length;i++){
		if(obj.email === users[i].email){
			result.status = false;
			break;
		}
	}

	if(result.status){
		users.push(obj);
	}

	res.send(result);
});

app.post('/login', function(req, res){
	var obj = req.body;
	
	var result = {
		status : false
	};

	for(var i=0;i<users.length;i++){
		if(obj.email === users[i].email && obj.password === users[i].password){
			result.status = true;
<<<<<<< HEAD
			req.session.user = users[i];
=======
			req.session.user=users[i];
>>>>>>> feature/session-profile
			break;
		}
	}
	res.send(result);
});

app.get('/session', function(req, res){
	res.send(req.session.user);
});

<<<<<<< HEAD
app.get('/board/list', function(req, res){
	if(!req.session.user){
		res.redirect('/');
	}
	res.sendFile(path.join(__dirname + '/view/board.html'));
});

app.get('/profile', function(req, res){
	var user = {},
		loginUser = req.session.user;

	for(var prop in loginUser){
		if(loginUser.hasOwnProperty(prop) && prop !== 'password'){
			user[prop] = loginUser[prop];
		}
	}
	res.send(user);
});

app.post('/profile', function(req, res){
	var obj = req.body,
		loginUser = req.session.user;
=======
app.get('/logout', function(req, res){
	req.session.user=null;
	res.send(req.session.user);
});

app.post('/email', function(req, res){
	var obj = req.body;
>>>>>>> feature/session-profile
	
	var result = {
		status : false
	};

	if(obj.email !== loginUser.email || obj.originPassword !== loginUser.password){
		res.send(result);
	}


	for(var i=0;i<users.length;i++){
		if(obj.email === users[i].email && obj.password === users[i].password){
			result.status = true;
			req.session.user = users[i];
			break;
		}
	}
	res.send(result);
});

<<<<<<< HEAD
=======
app.get('/board/list', function(req, res){
	if(!req.session.user){
		res.redirect('/');
	}
	res.sendFile(path.join(__dirname + '/view/board.html'));
});

>>>>>>> feature/session-profile
app.listen(8080);
console.log('Express Listening on port 8080...');