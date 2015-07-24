var myEmail = 'jojoldu@naver.com';
var myPassword = '1234';

$(function(){

    $('#btnLogin').click(checkEmailAndPassword);
		$('font').hide();
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

function checkEmailAndPassword(){
		 if(checkEmail()){
			 alert('로그인!');
		 }


}

function checkEmail(){
	var $inputEmail = $('#inputEmail');
	var $parent = $inputEmail.closest('p');
	var $fontChild = $parent.find('font');

	//inputEmail is false
	if(!$inputEmail.val()){

		$fontChild.show();
		$inputEmail.addClass('empty');
		return false;
	}else{
		$fontChild.hide();
		$inputEmail.removeClass('empty');
	}
	return true;
}

function checkPassword(){

}

function checkPasswordConfirm(){

}

