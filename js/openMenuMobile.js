var btnOpenMenu = $('.btn-openMenu');
var btnCloseMenu = $('.btn-closeMenu');
var nav = $('#navPrincipal');

var larguraTela = $(window).width();

window.onload = function(){
btnOpenMenu.on('click',function(){
	nav.fadeIn(300).removeClass("mobile-d-none");
	btnCloseMenu.addClass('mobile-d-block');
	btnCloseMenu.on('click',function(){
		nav.fadeOut(200).addClass('mobile-d-none');
		btnCloseMenu.removeClass('mobile-d-block');
	});
});
};