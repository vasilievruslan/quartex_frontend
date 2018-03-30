//= slick.js
//= anime.min.js
//= jquery.touchSwipe.min.js

$(function () {
	
	//= cards-slider.js

	$('.members__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
	})
	
	$('.carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
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
	        fade: true,
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
			$('.header__container').addClass('scroll');
			$('footer.block').fadeOut('200');
		}else{
			$('.header__container').removeClass('scroll')
			$('footer.block').fadeIn('400');
		}
	});



	$('.roadmap__responsive').click(function(event) {
		$('.roadmap__responsive__container').slideToggle(600);
		$('.rm__arrow').toggleClass('active');
	});

	$.get('https://wex.nz/api/3/ticker/btc_usd-eth_usd', function(data) {
		
		$('#btc_usd').html(Math.floor(data.btc_usd.avg));
		$('#eth_usd').html(Math.floor(data.eth_usd.avg));

		console.log(Math.floor(data.eth_usd.avg).toString().length)
	}, 'jsonp');
	
})