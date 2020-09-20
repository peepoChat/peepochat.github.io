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


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const nicknameColors = ['#ff0000', '#3172ff', '#00dd0e', '#b22222', '#ff7f50', '#9acd32', '#ff4500', '#2e8b57', '#daa520', '#d2691e', '#5f9ea0', '#1e90ff', '#ff69b4', '#8a2be2', '#00ff7f']

const getRuMessage = function(n){
  const a = getRandomInt(n)
  if (a < 5){
    const message = rupastas[getRandomInt(rupastas.length)]
    return message
  }
  else if(a === 6){
    const message = ascii[getRandomInt(ascii.length)]
    return message
  }
  else{
    const message = rumessages[getRandomInt(rumessages.length)]
    return message
  }
  console.log(message)
  return message
}

const getEnMessage = function(n){
  const a = getRandomInt(n)
  if (a < 5){
    const message = enpastas[getRandomInt(enpastas.length)]
    return message
  }
  else if(a === 6){
    const message = ascii[getRandomInt(ascii.length)]
    return message
  }
  else{
    const message = enmessages[getRandomInt(enmessages.length)]
    return message
  }
  console.log(message)
  return message
}

function createRuMessage(){
  $("tbody :nth-last-child(100)").remove()
  const message = document.createElement('tr')
  message.insertAdjacentHTML('afterbegin', `                                                                 
                            <tr>
                              <td>
                                <div class="message"><b style="color:${nicknameColors[getRandomInt(15)]}"> ${ruusers[getRandomInt(383)]}</b>: ${stringPasring(getEnMessage(100), en_emotes)}</div>
                              </td>
                            </tr>
  `)
  $('.ru').append(message)
  // return message
}

function createEnMessage(){
  $("tbody :nth-last-child(100)").remove()
  const message = document.createElement('tr')
  message.insertAdjacentHTML('afterbegin', `                                                                 
                            <tr>
                              <td>
                                <div class="message"><b style="color:${nicknameColors[getRandomInt(15)]}"> ${enusers[getRandomInt(383)]}</b>: ${stringPasring(getEnMessage(100), en_emotes)}</div>
                              </td>
                            </tr>
  `)
  $('.en').append(message)
  // return message
}

$(document).ready(function(){
  $('.start1').click(function(event){
    $('.start1').addClass('hide')
    $('tbody.ru').addClass('without-btn')
    setInterval(createRuMessage, 500)
  })
})

$(document).ready(function(){
  $('.start2').click(function(event){
    $('.start2').addClass('hide')
    $('tbody.en').addClass('without-btn')
    setInterval(createEnMessage, 500)
  })
})

$(document).ready(function(){
    $('.ch2').toggleClass('hide')
    $('.slider').slick({
      arrows: false,
      adapativeHeight: true,
      // variableWidth: true,
      infinite: false,
      touchMove: false,
      touchTreshold: 3,
      slidesPerRow: 1,
      slidesToShow: 1,
    })
})

function stringPasring(string, map) {
  for (let key of map.keys()) {
    let parsed = new RegExp(key, "g");
    string = string.replace(parsed, map.get(key));
  }
  return string;
}