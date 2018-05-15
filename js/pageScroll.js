var links = $('#navPrincipal li a');
var menu = $('.home');
var navHeight = $('.home').height();

links.on('click',function(){
	var selector = $(this).attr('href');
	if(selector == '#home'){
		$("html, body").animate({scrollTop: 0},700);
	}else{
	var pos = $(selector).offset().top;
	$("html, body").animate({scrollTop: pos-navHeight},700);
	}
});

$(window).scroll(function(){
	var minhaposicao = $(this).scrollTop();
		if(minhaposicao >= 200) {
			menu.addClass("position-sticky");
		}else {
			menu.removeClass("position-sticky");
		}
});
