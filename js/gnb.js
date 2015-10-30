$(function(){
	gnb.init();
});

var gnb = {
	$el : {},

	init : function(){
		var _ = this;
		_.$el = $('#gnb');

		this.$el.find('#btn_profile').click(function(){
			_.showModal();
		});

		this.$el.find('#btn_profile_close').click(function(){
			_.closeModal();
		});	

		this.$el.find('#btn_profile_submit').click(function(){
			_.saveProfile();
		});
	},

	showModal : function(){
		this.resetModal();
		this.getProfile();
	},
	
	closeModal : function(){
		this.$el.find('#profile_modal').modal('hide');
	},

	resetModal : function(){
		this.$el.find('.sign_forms').val('');
	},

	getProfile : function(){
		var _ = this;

		$.ajax({
			method: 'GET',
			url: '/profile',
			dataType: 'json',
			success: function(data){
				_.$el.find('#my_email').val(data.email);
				_.$el.find('#my_name').val(data.name);
				_.$el.find('#my_job').val(data.job);
				_.$el.find('#profile_modal').modal();
				return false;
			}
		});
	},

	saveProfile : function(){
		var _ = this;
		var obj = {
			email : _.$el.find('#my_email').val(),
			originPassword : _.$el.find('#my_origin_password').val(),
			newPassword : _.$el.find('#my_new_password').val(),
			name : _.$el.find('#my_name').val(),
			job : _.$el.find('#my_job').val(),
		};

		$.ajax({
			method: 'POST',
			url: '/profile',
			data: obj,
			dataType: 'json',
			success: function(result){
				if(!result.status){
					alert('비밀번호가 잘못되었습니다.');
					return false;
				} 
				var user = result.user;
				alert('회원정보가 변경되었습니다.');
				_.$el.find('#my_name').val(user.name);
				_.$el.find('#my_job').val(user.job);
				_.closeModal();
				return false;
			}
		});
	}
}