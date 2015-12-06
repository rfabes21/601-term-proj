$(document).ready(function(){

    var menuOpen = function(){
        $('nav.navbar').addClass('menu-open');
    }

    var menuClose = function(){
        $('nav.navbar').removeClass('menu-open');
    }

    $('.burger-menu').click(function(){
        if(!$('nav.navbar').hasClass('menu-open'))  {
            menuOpen();
        } else {
            menuClose();
        }
    });

});
