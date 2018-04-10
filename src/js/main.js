'use strict'

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

		var sb = $(this).scrollTop() + $(this).height();
		var mp = $('.roadmap').offset().top + $('.roadmap').height() / 2;
		if(sb > mp){
		console.log('now')
		progress.play()
		}
	});

	var rects = document.querySelectorAll('.progress__rect')
	var progress = anime({
		direction: 'reverse',
		targets: rects,
		width: 0,
		easing: 'linear',
	})

	setTimeout(function(){
		progress.pause(); 
	}, 50)


	$('.roadmap__responsive').click(function(event) {
		$('.roadmap__responsive__container').slideToggle(600);
		$('.rm__arrow').toggleClass('active');
		$('.roadmap__responsive__button').toggleClass('active');
	});

	$.get('https://wex.nz/api/3/ticker/btc_usd-eth_usd', function(data) {
		
		$('#btc_usd').html(Math.floor(data.btc_usd.avg));
		$('#eth_usd').html(Math.floor(data.eth_usd.avg));

		console.log(Math.floor(data.eth_usd.avg).toString().length)
	}, 'jsonp');


	// countdown


	var second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	var countDown = new Date('Apr 26, 2018 00:00:00 UTC'),
	x = setInterval(function() {

		var now = new Date().getTime(),
		distance = countDown - now;
		var arr = [Math.floor(distance / (day)), Math.floor((distance % (day)) / (hour)), Math.floor((distance % (hour)) / (minute)), Math.floor((distance % (minute)) / second)]

		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i] < 10) {
				arr[i] = '0' + arr[i]
			}
		}
		
		$('#days').html(arr[0]),
		$('#hours').html(arr[1]),
		$('#minutes').html(arr[2]),
		$('#seconds').html(arr[3]);

		if (distance < 0) {
		 clearInterval(x);
		}

	}, second)


	// calculator

	var price = 0.125223

	$('#input').keyup(function(event) {
		var res = parseFloat($('#input').val()) / price
		$('#output').val(res.toFixed(2))
	});
	
})