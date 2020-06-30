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