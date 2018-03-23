
var p = 0;

// autoplay

var autoPlay = setInterval(function(){
  var el = $('.cards_inner__card:last-child').attr('class').split(' ')[1];
  $('.cards_inner__card:last-child').css({
    transform: 'translateY(-320px) rotate(10deg)',
  })

  setTimeout(function(){
    $('.cards_inner__card:last-child').css({
      transform: 'translateY(0px) scale(0.92)',
      zIndex: '-2'
    })
  },250)
  setTimeout(function(){
    $('.cards_inner__card:last-child').remove();
    $('.cards').prepend('<div class="cards_inner__card ' + el + '"></div>');
  }, 600);
  
  if(p < 3){
    $('.points').find('.active').removeClass('active').next().addClass('active');
    p++;
  } else {
    $('.points').find('.active').removeClass('active')
    $('.points').find('.first').addClass('active') 
    p = 0
  }
}, 5000);


// on click to point

$('.points_point').click(function(event) {
  event.preventDefault();
  $(this).addClass('active').siblings().removeClass('active');
  var index = $(this).attr('data-index');
  $('.cards').find('.' + index).remove();
  $('.cards').append('<div class="cards_inner__card ' + index + '"></div>');
  $('.cards').find('.' + index).css({
    transform: 'scale(0.94)',
    opacity: '0',
    zIndex: '-2'
  });

  setTimeout(function(){
    $('.cards').find('.' + index).css({
      transform: 'scale(1) translateY(-300px)',
      opacity: '1',
      zIndex: '1'
    })
  }, 100)

  setTimeout(function(){
    $('.cards').find('.' + index).css({
      transform: ''
    })
  }, 1100)

  p = $(this).attr('data-id');
  setTimeout(function(){
    $('.cards').find('.' + index).css('opacity', '1')
  }, 50)
  setTimeout(function(){
    $('.cards').find('.' + index).css('transform', '')
  }, 500)
});

$('.points_point').hover(function() {
  clearInterval(autoPlay);
  console.log('mouseon');
}, function() {
  setInterval(autoPlay, 4000);  
  console.log('mouseover');
});

