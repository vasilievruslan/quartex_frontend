$(function(){
  
  var p = 0;
  $('.cards_inner__card').on('mouseenter', function(){
    $(this).css('transition', 'auto');
    on();
    console.log('ok');
  }).on('mouseleave', function(){
    $(this).css('transition', 'all 0.2s ease-in-out')
  })
  // on();
 // autoplay
  
//   var autoPLay = setInterval(function(){
//     var el = $('.cards_inner__card:last-child').attr('class').split(' ')[1];
//     $('.cards_inner__card:last-child').css({
//       transform: 'translateY(-320px) rotate(10deg)',
//     })

//     setTimeout(function(){
//       $('.cards_inner__card:last-child').css({
//         transform: 'translateY(0px) scale(0.92)',
//         zIndex: '-2'
//       })
//     },250)
//     setTimeout(function(){
//       $('.cards_inner__card:last-child').remove();
//       $('.cards').prepend('<div class="cards_inner__card ' + el + '"></div>');
//     }, 600);

//     if(p < 3){
//       $('.points').find('.active').removeClass('active').next().addClass('active');
//       p++;
//     } else {
//       $('.points').find('.active').removeClass('active')
//       $('.points').find('.first').addClass('active') 
//       p = 0
//     }
// }, 5000)
  
     
  // on click to point

  $('.points_point').on('click', function(event) {
    
    event.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).attr('data-index');
    if(index !== $('.cards_inner__card:last-child').attr('class').split(' ')[1]){
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
        });
        // on();
      }, 1100)

      p = $(this).attr('data-id');
      setTimeout(function(){
        $('.cards').find('.' + index).css('opacity', '1')
      }, 50)
      setTimeout(function(){
        $('.cards').find('.' + index).css('transform', '')
      }, 500)
    }
    
  });

  // $('.points_point').hover(function() {
  //   clearInterval(autoPlay);
  //   console.log('mouseon');
  // }, function() {
  //   var play = setInteval(autoPlay(), 5000)
  //   console.log('mouseover');
  // });
  
  function on(){
    $('.cards_inner__card').draggable({
      start: function( event, ui ) {
        startPosition = ui.position.left;
      },
      drag:function(e, ui){
        if(ui.position.left > startPosition){
          ui.position.left = startPosition;
        }
        if(ui.position.left < -250){
          ui.position.left = -250;
        }
        x = ui.position.left;
        $(this).css('transform',' rotate(' + x/36 + 'deg)')
      },
      revert:function(valid) {
        if(x > 60 || x < - 60) {
          var el = $('.cards_inner__card:last-child');
          setTimeout(function(){
            el_class_end = el.attr('class').split(' ')[1]
            el.css({
              opacity: 0,
            })
            if(p < 3){
              $('.points').find('.active').removeClass('active').next().addClass('active') 
              p++
            } else {
              $('.points').find('.active').removeClass('active')
              $('.points').find('.first').addClass('active') 
              p = 0
            }
          }, 10)
          setTimeout(function(){
            $('.cards').append('<div class="cards_inner__card ' + el_class_end + '"></div>')
            el.remove();
            on();
            
          },200);
        } else {
          $(this).css('transform','rotate(0deg)')
          return !valid;
        }
      },
      axis:'x',
      containment:'.cards_inner'
    });
    $('.cards_inner__card:nth-of-type(1)').draggable( 'disable' )
    $('.cards_inner__card:nth-of-type(2)').draggable( 'disable' )
    $('.cards_inner__card:nth-of-type(3)').draggable( 'disable' )
    $('.cards_inner__card:nth-of-type(4)').draggable( 'enable' )
  }
// on();


})