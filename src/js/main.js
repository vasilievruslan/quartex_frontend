'use strict'

//= slick.js
//= anime.min.js
//= jquery.touchSwipe.min.js



$(function () {

	$(document).ready(function($) {
		setTimeout(function () {
			$('.loader').fadeOut(600);
		}, 1500);
	});


	$.get('https://wex.nz/api/3/ticker/btc_usd-eth_usd', function(data) {
		
		$('#btc_usd').html(Math.floor(data.btc_usd.avg));
		$('#eth_usd').html(Math.floor(data.eth_usd.avg));

	}, 'jsonp');

	$('.block__btn').click(function(event) {
		event.preventDefault();
		$(this).find('.store__toolkit').fadeIn(300).delay(3000).fadeOut(600);
	});
	
	$('.kakao').click(function(event) {
		$(this).toggleClass('active');
	});

	//= cards-slider.js

	$('.members__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		dots: true,
		pauseOnDotsHover: true,
	})
	
	$('.carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnDotsHover: true,
		adaptiveHeight: false,
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

	//menu navbar

	$('.bt-menu').click(function(e) {
		e.preventDefault();
    	$(this).toggleClass('active');
    	$('.header__container').toggleClass('active');
    	$('.header__nav').toggleClass('open');
	});

	// roadmap

	$(window).scroll(function(){
		if ( $(window).scrollTop() > 43 ) {
			$('.header__container').addClass('scroll');
			$('footer.block').fadeOut('200');
		}else{
			$('.header__container').removeClass('scroll')
			$('footer.block').fadeIn('400');
		}

		var sb = $(this).scrollTop() + $(this).height();
		
		try {
			var mp = $('.roadmap').offset().top + $('.roadmap').height() / 2;
		} catch(e) {

		}

		if(sb > mp){
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


	$('.roadmap__responsive').on('click', function(event) {

		if($('.roadmap__responsive__button').is('.active')){
			$('.roadmap__responsive__container').slideToggle(600);
			setTimeout(function(){
				$('.rm__arrow').toggleClass('active');
				$('.roadmap__responsive__button').toggleClass('active');
			}, 600)
		}else{
			$('.rm__arrow').toggleClass('active');
			$('.roadmap__responsive__button').toggleClass('active');
			setTimeout(function(){
				$('.roadmap__responsive__container').slideToggle(600);
			}, 200)
		}
	});

	// countdown


	var second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	var countDown = new Date('May27, 2018 09:00:00 UTC+9'),
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

	// pogressbar

	var APIkey = 'C4Y9FU5SXSE1TDBHT4SWHMG9SXA4SMGJTP';
	var contract = '0x745fa4002332c020f6a05b3fe04bccf060e36dd3';
	var address = '0xb25ceF763846FE25185dE5cF970Fdf2AC13FC16d';
	var amount = null;
	var totalSupply = 201000000;
	var saleProgress = null;

	$.get('https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=' + contract + '&address='+ address +'&tag=latest&apikey='+ APIkey +'', function(data) {
		amount = parseFloat(data.result) / 1000000000000000000;
	}).done(function(){
		saleProgress = (totalSupply - amount) / totalSupply * 100;

		$('.progress-bar__fill-bar').css({width: saleProgress + '%'});
		$('.qtx-amount').html(totalSupply - amount + ' QTX')
	});

	if (saleProgress < 5) {
		$('.qtx-amount').css({
			right: '-70px'
		});
	}

	// calculator

	var price = 0.000125

	$('#input').keyup(function(event) {
		var res = parseFloat($('#input').val()) / price
		$('#output').val(res.toFixed(2))
	});


	// pop-up video

	var stopVideo = function(player) {
		var vidSrc = player.prop('src');
	    player.prop('src', ''); // to force it to pause
	    player.prop('src', vidSrc);
	};

	function showPopUp(curPopUp) {
		curPopUp
		.fadeIn(400)
		.addClass('active');
	}
	function closePopUp (){
		stopVideo($('.pop-up.active').find('iframe'))
		$('.pop-up.active')
		.fadeOut(400)
		.removeClass('active');
	}

	$('.rose__playbtn').click(function(event) {
		showPopUp($('#main-video'));
	});
	$('#metamask').click(function(event) {
		event.preventDefault();
		showPopUp($('#meta-video'))
	});
	$('#mew').click(function(event) {
		event.preventDefault();
		showPopUp($('#mew-video'));
	});

	$('.close-btn').click(function() {
		closePopUp();
	});
	$('.pop-layout').click(function(){
		closePopUp();
	})


	//scrollTo

	$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
    // raffle banner

    $('.raffle__close').click(function() {
    	$('.raffle').fadeOut('600');
    });
	$('#raffle__open').click(function(event) {
		event.preventDefault();
		$('.raffle').fadeIn(600);
	});

    // faq accordion

    $('.faq__item').click(function(event) {
    	$(this)
    	.toggleClass('active')
		.find('.item__p')
		.slideToggle(400)
		.parent()
		.siblings()
		.removeClass('active')
		.find('.item__p')
		.slideUp(400);
    });

    //= anim-diagram.js
	
})