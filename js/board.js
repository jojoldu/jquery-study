$(function(){

	//js 호출시 바로 시작될 영역
	board.init();
});

var board = {
	$el : {},

	init : function(){
		var _ = this;
		_.$el = $('#board_main');

		this.$el.find('#btn_board_submit').click(function(){
			_.save();
		});

		this.$el.find('#btn_board_add').click(function(){
			_.showCollapse();
		})
	},
	
	showCollapse : function(){
		var _ = this;
		_.$el.find('#board_content').val('');
	},

	getList : function(){

	},

	save : function(){
		var _ = this;

		$.ajax({
			method: 'POST',
			url: '/board',
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