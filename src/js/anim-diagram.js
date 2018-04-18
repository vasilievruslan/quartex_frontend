var animCycles = [anime({
    targets: '#fdOval-5-Copy-4',
    r: [function(target) {
        return target.getAttribute('r') * 1.2;
    }],
    easing: 'linear',
    duration: 3000,
    loop: true,
    direction: 'alternate',
    autoplay: false,
}), anime({
    targets: '#fdOval-5-Copy-6',
    r: [function(target) {
        return target.getAttribute('r') / 1.2;
    }],
    easing: 'linear',
    duration: 3000,
    loop: true,
    direction: 'alternate',
    autoplay: false,
}), anime({
    targets: '#fdOval-5-Copy-5',
    r: [function(target) {
        return target.getAttribute('r') / 1.2;
    }],
    easing: 'linear',
    duration: 3000,
    loop: true,
    direction: 'alternate',
    autoplay: false,
}), anime({
    targets: '#fdOval-5-Copy-7',
    r: [function(target) {
        return target.getAttribute('r') * 1.2;
    }],
    easing: 'linear',
    duration: 3000,
    loop: true,
    direction: 'alternate',
    autoplay: false,
})]

var animCycles1 = [anime({
    targets: '#tOval-5-Copy-2',
    r: [function(target) {
        return target.getAttribute('r') / 1.2;
    }],
    easing: 'linear',
    duration: 3000,
    loop: true,
    direction: 'alternate',
    autoplay: false,
}), anime({
    targets: '#tOval-5',
    r: [function(target) {
        return target.getAttribute('r') * 1.2;
    }],
    easing: 'linear',
    duration: 3000,
    loop: true,
    direction: 'alternate',
    autoplay: false,
}), anime({
    targets: '#tOval-5-Copy',
    r: [function(target) {
        return target.getAttribute('r') / 1.2;
    }],
    easing: 'linear',
    duration: 3000,
    loop: true,
    direction: 'alternate',
    autoplay: false,
}), anime({
    targets: '#tOval-5-Copy-3',
    r: [function(target) {
        return target.getAttribute('r') / 1.2;
    }],
    easing: 'linear',
    duration: 3000,
    loop: true,
    direction: 'alternate',
    autoplay: false,
})]

var i = 0;

var c = 0

var firstDiargrams1 = setInterval(function () {
  if(c <= 3){
    animCycles1[i].play()
    c++
  }else{
    clearInterval(firstDiargrams1)
  }
    
}, 1000);

var firstDiargrams = setInterval(function () {
  if(i <= 3){
    animCycles[i].play()
    i++
  }else{
    clearInterval(firstDiargrams)
  }
    
}, 1000)

// for (var i = animCycles.length - 1; i >= 0; i--) {
//   var sec = i * 1000;
//   console.log(animCycles[i])
//   setTimeout(function () {
//     animCycles[i].play()
//   }, sec)
// }

