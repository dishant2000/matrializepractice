$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('#signup-toggle').click(function(){
        $('#login-toggle').removeClass('red').removeClass('white-text').addClass('white lighten-1  black-text');
        $('#signup-toggle').removeClass('white').removeClass('lighten-1').removeClass('black-text').addClass('red white-text');
        $('.my-form-content-1').addClass('hide');
        $('.my-form-content-2').removeClass('hide');

    });
    $('#login-toggle').click(function(){
        $('#login-toggle').removeClass('white').removeClass('lighten-1').removeClass('black-text').addClass('red white-text');
        $('#signup-toggle').removeClass('red').removeClass('white-text').addClass('white lighten-1  black-text');
        $('.my-form-content-1').removeClass('hide');
        $('.my-form-content-2').addClass('hide');

    });

    

 });