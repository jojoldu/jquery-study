
$(function(){

	member.init();

});

var member = {
	$el : {},
	list : [],

	showModal : function(){
		$('#memberModal').modal();
	},

	init : function(){
		this.list = this.generateMembers();
		this.makeTbody(this.list);
		this.$el = $('#memberMain');
	
		this.$el.on('click', '.member_info', function(){
			member.edit(member.find(this));
			member.showModal();
		});
	},

	generateMembers : function(){
		var members = [
			{
				no			: 1,
				email 	 	: 'jojoldu@gmail.com',
				name 		: '이동욱',
				job 		: 'web developer',
				joinDate	: '2015-02-12',
				updateDate 	: '2015-07-30'
			},
			{
				no			: 2,
				email 	 	: 'soultomind930@gmail.com',
				name 		: '이바우',
				job 		: 'web developer',
				joinDate	: '2015-02-12',
				updateDate 	: '2015-07-30'
			},
			{
				no			: 3,
				email 	 	: 'jusaha1109@gmail.com',
				name 		: '김태영',
				job 		: 'web developer',
				joinDate	: '2015-02-12',
				updateDate 	: '2015-07-30'
			},
			{
				no			: 4,
				email  		: 'usdrd90@gmail.com',
				name 		: '전옥현',
				job 		: 'web publisher',
				joinDate	: '2015-02-12',
				updateDate 	: '2015-07-30'
			},
			{
				no			: 5,
				email 	 	: 'talkyfull@gmail.com',
				name 		: '신윤아',
				job 		: 'web publisher',
				joinDate	: '2015-02-12',
				updateDate 	: '2015-07-30'
			}								
		];

		return members;		
	},

	makeTbody : function(members){
		var $table = $('#tMember'),
			$tbody = $(document.createElement('tbody'));

		$.each(members, function(index, member){
			var $tr = $(document.createElement('tr'));
			$tr.addClass('member_info');
			$tr.attr('id', 'member_'+member.no);

			for(prop in member){
				var $td = $(document.createElement('td'));
				$td.text(member[prop]);
				$tr.append($td);
			}
			$tbody.append($tr);
		});
		$table.append($tbody);
	},

	find : function(target){
		var $target = $(target),
			members = this.list,
			no = $target.attr('id').slice(7);

		$.each(members, function(index, member){
			if(member.no == no){
				return member;
			}
		});
	},
	
	edit : function(member){
		var member = member || {};

	}	

}
