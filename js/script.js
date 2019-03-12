(function($) {
  "use strict";

//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(400).fadeOut("slow"); 
});

$(document).ready(function(){
	
	

	if (!(/android|blackberry|windows phone|iphone|ipod/i).test(navigator.userAgent.toLowerCase())) {

		var header = $('.mainHeader'),
			pos = header.offset();

			$(window).scroll(function(){
				if($(this).scrollTop() > pos.top+20 && header.hasClass('default')){
					header.fadeOut('fast', function(){
						$(this).removeClass('default').addClass('switchedHeader').slideDown(200);
					});
				} else if($(this).scrollTop() <= pos.top+20 && header.hasClass('switchedHeader')){
					header.slideUp(200, function(){
						$(this).removeClass('switchedHeader').addClass('default').fadeIn(200);
					});
				}
		});

	}

	
	
//------------------------------------- Navigation setup ------------------------------------------------//

$('a.scroll').smoothScroll({
        speed: 800,
        offset: -78
});



$('.showOffsetNav').click(function(e){
	
	e.preventDefault();
		$('.wrapper').toggleClass('showNav');
		$('.mainHeader').toggleClass('showNav');
		$('.offestNavCanvas').toggleClass('showNav');

	if($(this).hasClass('showNav')){
		$('.wrapper').toggleClass('showNav');
		$('.mainHeader').toggleClass('showNav');
		$('.offestNavCanvas').toggleClass('showNav');
		
		
	}
	
});


//------------------------------------- End navigation setup ------------------------------------------------//



//---------------------------------- Main slider setup-----------------------------------------//

$('.teaser').flexslider({
	animation: "fade",
	slideshow: true,
	directionNav:false,
	controlNav: false,
	animationSpeed: 1500
});


$('.teaser .slides li').css('height', $(window).height());


for(var i = 0; i < $('.teaser .slides li').length; i++){

    var path = $('.teaser .slides li').eq(i).find('img.slide').attr('src');
	$('.teaser .slides li').eq(i).addClass('parallax');
    $('.teaser .slides li').eq(i).css('backgroundImage', 'url("' + path + '")');
    $('.teaser .slides li').eq(i).find('img.slide').detach();

}


$(document).scroll(function () {

        var treshhold = Math.round($(window).scrollTop() / 5);
        $('li.parallax').css('backgroundPosition', '100% ' + treshhold + 'px');    
});

//---------------------------------- End main slider setup-----------------------------------------//



//---------------------------------- Site slider-----------------------------------------//


$('.postSlider, .postSliderLarge, .projectSlider').flexslider({
	animation: "slide",
	slideshow: true,
	directionNav:false,
	controlNav: true
});

//---------------------------------- End site slider-----------------------------------------//

});

})(jQuery);
