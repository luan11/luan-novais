var links = $('#navPrincipal li a');
var menu = $('.home');
var socialMedias = $('.social-medias');
var navHeight = $('.home').height();

links.on('click',function(){
	var selector = $(this).attr('href');
	if(selector == '#home'){
		$("html, body").animate({scrollTop: 0},600);
	}else{
	var pos = $(selector).offset().top;
	$("html, body").animate({scrollTop: pos-navHeight},700);
	}
});

$(window).scroll(function(){
	var minhaposicao = $(this).scrollTop();
		if(minhaposicao > 300) {
			menu.addClass("position-sticky");
			socialMedias.slideUp(200);
		}else {
			menu.removeClass("position-sticky");
			socialMedias.slideDown(0);
		}
});
