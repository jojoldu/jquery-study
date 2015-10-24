$(function(){
	gnb.init();
});

var gnb = {
	$el : {},

	init : function(){
		var _ = this;
		_.$el = $('#gnb');

		this.$el.find('#btnProfile').click(function(){
			_.showModal();
		});

		this.$el.find('#btnProfileClose').click(function(){
			_.closeModal();
		});	

		this.$el.find('#btnProfileSubmit').click(function(){
			_.signUp();
		});
	},

	showModal : function(){
		this.resetModal();
		this.getProfile();
	},
	
	closeModal : function(){
		this.$el.find('#profileModal').modal('hide');
	},

	resetModal : function(){
		this.$el.find('.signForms').val('');
	},

	getProfile : function(){
		var _ = this;

		$.ajax({
			method: 'GET',
			url: '/profile',
			dataType: 'json',
			success: function(data){
				_.$el.find('#email').val(data.email);
				_.$el.find('#name').val(data.name);
				_.$el.find('#job').val(data.job);

				_.$el.find('#profileModal').modal();
				return false;
			}
		});
	},

	saveProfile : function(){
		var _ = this;
		var obj = {
			email : _.$el.find('#email'),
			originPassword : _.$el.find('#originPassword'),
			newPassword : _.$el.find('#newPassword'),
			name : _.$el.find('#name'),
			job : _.$el.find('#job'),
		};

		$.ajax({
			method: 'POST',
			url: '/profile',
			data: obj,
			dataType: 'json',
			success: function(data){
				_.$el.find('#email').val(data.email);
				_.$el.find('#name').val(data.name);
				_.$el.find('#job').val(data.job);

				_.$el.find('#profileModal').modal();
				return false;
			}
		});
	}
}