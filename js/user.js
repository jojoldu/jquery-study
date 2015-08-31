
// DB 연동시 삭제될 부분
var users = [];

$(function(){

	user.init();
});

var user = {
	$el : {},

	init : function(){
		//기본적인 버튼 이벤트 binding
		this.$el = $('.container');

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
		this.$el.find('#inputEmail').val('');
		this.$el.find('#inputPassword').val('');
		this.$el.find('#inputName').val('');
		this.$el.find('#inputJob').val('');
	},

	signUp : function(){
		var email = this.$el.find('#inputEmail').val(),
			password = this.$el.find('#inputPassword').val(),
			name = this.$el.find('#inputName').val(),
			job = this.$el.find('#inputJob').val();

		if(this.find(email)){
			alert('이미 가입된 사용자입니다.');
			return;
		}
		
		this.save({ email : email, password : password, name : name, job : job});
	},
	
	//DB 연동시 수정
	find : function(email){
		var result;

		$.each(users, function(index, value){
			if(value.email === email){
				result = value;
				return false;
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

	}
}