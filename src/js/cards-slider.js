

var p = 0;
$('.cards_inner__card').swipe({
  swipe: function(event, direction, distance, duration, fingerCount, fingerData){
    if(direction == 'left'){
      $(this).addClass('animate').attr('data-card-id', '0').siblings().each(function(){
        var i = $(this).attr('data-card-id');
        i++
        $(this).attr('data-card-id', i);
      });

      setTimeout(function(){
        $('.cards_inner__card').removeClass('animate');
      }, 200);
      
      
      
      if(p < 3){
        $('.points').find('.active').removeClass('active').next().addClass('active');
        p++;
      } else {
        $('.points').find('.active').removeClass('active')
        $('.points').find('.first').addClass('active') 
        p = 0
      }
    }
  },
  allowPageScroll: 'auto',
});

var sibI = [0, 1, 2];
var i = 0

$('.points_point').on('click', function(event) {
  p = parseFloat($(this).attr('data-id'));  
  event.preventDefault();
  $(this).addClass('active').siblings().removeClass('active');
  var index = $(this).attr('data-index');
  $('.cards').find('.' + index).addClass('animate').attr('data-card-id', '3').siblings().each(function(){
    if(i != 3){
      $(this).attr('data-card-id', sibI[i])
      i++
    }else{
      i = 0;
      $(this).attr('data-card-id', sibI[i])
      i++
    }
  })
  
  setTimeout(function(){
    $('.cards').find('.' + index).removeClass('animate')
  }, 200)
});