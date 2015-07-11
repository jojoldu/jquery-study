$(function(){

    //$('#btnLogin').click(show);
    alert('위험');
    $('#btnLogin').click(showEmail);
});

function show(){
    alert('안녕하세요');
}

function showEmail(){
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val('');
    alert(email);
}