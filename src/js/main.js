//= slick.js
//= anime.min.js

$(function () {
	
	//= cards-slider.js
	
	$('.carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
	    {
	      breakpoint: 824,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        centerMode: true,
	      }
	    }]
	});

	$('.bt-menu').click(function(e) {
		e.preventDefault();
    	$(this).toggleClass('active');
    	$('.header__container').toggleClass('active');
    	$('.header__nav').toggleClass('open');
	});

	$(window).scroll(function(){
		if ( $(window).scrollTop() > 43 ) {
			$('.header__container').addClass('scroll')
		}else{
			$('.header__container').removeClass('scroll')
		}
	})
})