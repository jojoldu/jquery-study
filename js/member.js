
$(function(){

	member.init();

});

var member = {
	
	init : function(){
		this.makeTbody(this.generateMembers());
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

			for(prop in member){
				var $td = $(document.createElement('td'));
				$td.text(member[prop]);
				$tr.append($td);
			}
			$tbody.append($tr);
		});

		$table.append($tbody);
	}
}
