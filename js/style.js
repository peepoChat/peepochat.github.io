function fromLeftF(){
   fromLeft = innerWidth / 2 - 170;
} 
function fromTopF(){
   fromTop = innerHeight / 2 - 48 - 21;
}
function Chat() {   
    leftpx = fromLeft.toString() + "px";
    $(".chat").css("left", leftpx)
    $(".chat").css("height", innerHeight)
}
function Chat1() {
    fromLeft1 = fromLeft + 350
    leftpx = fromLeft1.toString() + "px";
    $(".chat1").css("left", leftpx)
    $(".chat1").css("height", innerHeight)
}
function Chat2() {
    fromLeft2 = fromLeft - 350
    leftpx = fromLeft2.toString() + "px";
    $(".chat2").css("left", leftpx)
    $(".chat2").css("height", innerHeight)
}
function Menul0() {
    toppx = fromTop.toString() + "px";
    $(".menul0").css("top", toppx)
}
function Menul1() {
    fromTop1 = fromTop + 201
    toppx = fromTop1.toString() + "px";
    $(".menul1").css("top", toppx)
}
function Menul2() {
    fromTop2 = fromTop - 201
    toppx = fromTop2.toString() + "px";
    $(".menul2").css("top", toppx)
}
function Menur0() {
    toppx = fromTop.toString() + "px";
    $(".menur0").css("top", toppx)
}
function Menur1() {
    fromTop1 = fromTop + 201
    toppx = fromTop1.toString() + "px";
    $(".menur1").css("top", toppx)
}
function Menur2() {
    fromTop2 = fromTop - 201
    toppx = fromTop2.toString() + "px";
    $(".menur2").css("top", toppx)
}

  setInterval(fromTopF)
  setInterval(fromLeftF)
  setInterval(Chat)
  setInterval(Chat1) 
  setInterval(Chat2)
  setInterval(Menul0)
  setInterval(Menul1)
  setInterval(Menul2)
  setInterval(Menur0)
  setInterval(Menur1)
  setInterval(Menur2)
  