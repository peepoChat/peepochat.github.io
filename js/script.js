$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger,.right,.left').toggleClass('active')
        $('body').toggleClass('lock')
        const draggable = $('.slider').slick('slickGetOption', 'draggable')
        if (draggable == true){
          $('.slider').slick('slickSetOption', 'draggable', false)
          delete draggable
        } else {
          $('.slider').slick('slickSetOption', 'draggable', true)
          delete draggable
        }
        const swipe = $('.slider').slick('slickGetOption', 'swipe')
        if (swipe == true){
          $('.slider').slick('slickSetOption', 'swipe', false)
          delete swipe
        } else {
          $('.slider').slick('slickSetOption', 'swipe', true)
          delete swipe
        }
    })
})

$('.slider').slick({
            arrows: false,
            adapativeHeight: true,
            infinite: false,
            touchMove: false,
            touchTreshold: 3,
            slidesPerRow: 2,
            slidesToShow: 2,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                  }
                }
              ]
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const nicknameColors = ['#ff0000', '#0000ff', '#008000', '#b22222', '#ff7f50', '#9acd32', '#ff4500', '#2e8b57', '#daa520', '#d2691e', '#5f9ea0', '#1e90ff', '#ff69b4', '#8a2be2', '#00ff7f']

var app = new Vue({
  el: '#app',
  data: {
  ruUser: ruusers[getRandomInt(383)],
  ruMessage: rumessages[getRandomInt(9269)],
  ruNicknameColor: nicknameColors[getRandomInt(15)],
  }
})

// $(document).ready(function(){
//   $('.close').click(function(event){
//     $('.modal').addClass('animate__slideOutDown')
//     setTimeout(() => {
//       $('.modal').removeClass('animate__slideOutDown')
//     }, 100);
//   })
// })

// $(document).ready(function(){
//   $('.btn').click(function(event){
//     $('.modal').addClass('animate__slideOutDown')
//     setTimeout(() => {
//       $('.modal').removeClass('animate__slideOutDown')
//     }, 100);
//   })
// })
