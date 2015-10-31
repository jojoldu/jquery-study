	var user = {},
		loginUser = {
			age : '29',
			name : '이동욱',
			job : '개발자',
			password : '11'
		};

	for(var prop in loginUser){
		if(loginUser.hasOwnProperty(prop) && prop !== 'password'){
			user[prop] = loginUser[prop];
			console.log(prop);
		}
	}
	console.log(user);