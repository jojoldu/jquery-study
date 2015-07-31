
$(function(){

	member.init();

});

var member = {
	
	init : function(){

	},

	generateMembers : function(){
		var members = [
			{
				email 	 	:'jojoldu@gmail.com',
				name 		: '이동욱',
				job 		: 'web developer',
				updateDate 	: '2015-07-30'
			},
			{
				email 	 	:'soultomind930@gmail.com',
				name 		: '이바우',
				job 		: 'web developer',
				updateDate 	: '2015-07-30'
			},
			{
				email 	 	:'jusaha1109@gmail.com',
				name 		: '김태영',
				job 		: 'web developer',
				updateDate 	: '2015-07-30'
			},
			{
				email  		:'usdrd90@gmail.com',
				name 		: '전옥현',
				job 		: 'web publisher',
				updateDate 	: '2015-07-30'
			},
			{
				email 	 	:'talkyfull@gmail.com',
				name 		: '신윤아',
				job 		: 'web publisher',
				updateDate 	: '2015-07-30'
			}								
		];

		return members;		
	},

	makeTbody : function(members){
		var $tbody = $('tbody');

		$.each(members, function(index, value){
			var $tr = $(document.createElement('tr')),
				$td = $(document.createElement('td'));
			
			


		});


	}


}
