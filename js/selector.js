$(function(){

    $('#btnLogin').click(checkIdAndPw);
 	window.emailList = ['tom', 'joe', 'hong', 'oh'];
   

    //1. 허용된 id만 로그인 가능
    //2. password와 password2가 같아야함
});

function show(){
    alert('안녕하세요');
}

function showEmail(){
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val('');
    alert(email);
}

function checkIdAndPw(){
	var $inputs = $('.inputs');
	var required = true;

	$.each($inputs, function(index, value){
		var $input = $($inputs[index]);

		//'', null, undefinded, 0, false
		if(!$input.val()){// not false === true
			required = false;
		}
	});

	if(!required){
		alert('값을 채워주세요');
	}else{
		alert('로그인!');
	}
}

