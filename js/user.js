

$(function(){

	//js 호출시 바로 시작될 영역
	user.init();
});

//db연동시 삭제
var users = [];
var currentTime = new Date();

users.push({
		email : '1',
		password : '1',
		name : '1',
		job : '1',
		joinDate : currentTime,
		updateDate : currentTime
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

		// 4. 위 검증이 끝나면 회원 가입
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
	}
}