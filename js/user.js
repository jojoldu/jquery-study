

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
		

		// 1. 입력창에서 빈칸은 없는가? 빈칸이 있으면 해당 입력창에 강조효과 주기 & 저장 실패 alert

		// 2. password와 passwordConfirm이 같은가? 다르면 패스워드 확인 alert

		// 3. 이미 등록된 사용자가 아닌가?

		// 4. 위 검증이 끝나면 회원 가입

	}
}