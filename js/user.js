
// DB 연동시 삭제될 부분
var users = [];

$(function(){

	user.init();
});

var user = {
	$el : {},

	//기본적인 버튼 이벤트 binding
	init : function(){
		
		this.$el = $('.container');

		this.$el.find('#btnLogin').click(function(){
			user.login();
		});

		this.$el.find('#btnSignUp').click(function(){
			user.showModal();
		});

		this.$el.find('#btnSubmit').click(function(){
			user.signUp();
		});
		
		this.$el.find('#btnClose').click(function(){
			user.closeModal();
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
			name = this.$el.find('#inputName').val(),
			job = this.$el.find('#inputJob').val();
		
		var obj = {
			email : email
		}

		if(!this.validate()){
			alert('필수값을 모두 채워주세요');
			return;
		}

		if(this.find(obj)){
			alert('이미 가입된 사용자입니다.');
			return;
		}
	
		obj.password = password;
		obj.name = name;
		obj.job = job;
		
		this.save(obj);
	},
	
	//DB 연동시 수정
	find : function(obj){
		var result;

		$.each(users, function(index, value){
			
			if(obj.password){ //로그인시
				if(value.email === obj.email && value.password === obj.password){
					result = value;
					return;
				}		
			}else{ //가입 중복체크시
				if(value.email === email){
					result = value;
					return;
				}
			}

		});
		

		return result;
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
	save : function(obj){
		var joinDate = new Date(),
			updateDate = joinDate;
	
		try{
			obj.joinDate = joinDate;
			obj.updateDate = updateDate;

			users.push(obj);
		}catch(err){
			alert('등록이 실패하였습니다.');
		}
		
		alert('등록 되었습니다.');
		this.closeModal();
	},

	login : function(){
		var loginUser = {},
			loginEmail = this.$el.find('#loginEmail').val(),
			loginPassword = this.$el.find('#loginPassword').val();

		loginUser.email = loginEmail;
		loginUser.password = loginPassword;


	}
}