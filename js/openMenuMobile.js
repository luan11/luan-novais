var btnOpenMenu = $('.btn-openMenu');
var btnCloseMenu = $('.btn-closeMenu');
var nav = $('#navPrincipal');

btnOpenMenu.on('click',function(event){
	event.preventDefault();
	nav.fadeIn(300).removeClass("mobile-d-none");
	btnCloseMenu.addClass('mobile-d-block');
	btnCloseMenu.on('click',function(){
		nav.fadeOut(300).addClass('mobile-d-none');
		btnCloseMenu.removeClass('mobile-d-block');
	});
});