// DB 연동시 삭제될 부분
var users = [];

$(function(){

	//js 호출시 바로 시작될 영역
	user.init();
});


var user = {

	$el : {},

	init : function(){
		
		//기본적인 이벤트 바인딩

		this.$el = $('.container');

		this.$el.find('#btnSignUp').click(function(){
			user.showModal();
		});

		this.$el.find('#btnClose').click(function(){
			user.closeModal();
		});	

		this.$el.find('#btnSubmit').click(function(){
			user.signUp();
		});

		this.$el.find('#btnLogin').click(function(){
			user.login();
		});

	},

	showModal : function(){
		this.resetModal();
		this.$el.find('#userModal').modal();
	},
	
	closeModal : function(){
		this.$el.find('#userModal').modal('hide');
	},

	resetModal : function(){
		this.$el.find('.signForms').val('');
	},

	signUp : function(){
		var email = this.$el.find('#inputEmail').val(),
			password = this.$el.find('#inputPassword').val(),
			passwordConfirm = this.$el.find('#inputPasswordConfirm').val(),
			name = this.$el.find('#inputName').val(),
			job = this.$el.find('#inputJob').val();
		
		var currentTime = new Date();

		// 1. 입력창에서 빈칸은 없는가?
		if(!this.validate()){
			alert('필수값을 모두 채워주세요');
			return;
		}
		
		// 2. password와 passwordConfirm이 같은가?
        if(password !== passwordConfirm){
            alert('패스워드가 일치하지 않습니다.');
            return;
        }
	
		// 3. 이미 등록된 사용자가 아닌가?
		if(this.find(email)){
			alert('이미 가입된 사용자입니다.');
			return;
		}

		// 4. 위 검증이 끝나면 회원 가입

		this.save({
					email : email,
					password : password,
					name : name,
					job : job,
					joinDate : currentTime,
					updateDate : currentTime
		});
	},

	validate : function(){
		var $signForms = this.$el.find('.signForms'),
			result = true;

		$.each($signForms, function(index, signForm){
			var $signForm = $(signForm);

			if(!$signForm.val()){
				$signForm.addClass('empty');
				result = false;
			}else{
				$signForm.removeClass('empty');
			}
		});

		return result;
	},

	//DB 연동시 수정
	find : function(email){
		var result;

		$.each(users, function(index, value){

			if(value.email === email){
				result = value;
				return;
			}
		});
		
		return result;
	},

	//DB 연동시 수정
	save : function(obj){

		users.push(obj);
		
		alert('등록 되었습니다.');

		this.closeModal();
	},

	login : function(){
		var email = this.$el.find('#loginEmail').val(),
			password = this.$el.find('#loginPassword').val();
		
		var result;

		$.each(users, function(index, value){

			if(value.email === email && value.password === password){
				result = value;
				return;
			}
		});

		if(result){
			alert('login!');
		}else{
			alert('check your email & password');
		}
	}
}