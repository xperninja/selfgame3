var currscreen;
var playbutton,playbuttonimg;
var accName = "home"
var curAcc = "home"
var text,bg

function preload () {
 playbuttonimg  = loadImage("./Images/playbutton2x.png")   

}
function setup(){
createCanvas(windowWidth,windowHeight);
    currscreen = "home"
    playbutton = createSprite(windowWidth/2,windowHeight/2,50,50)
   playbutton.addImage(playbuttonimg);
    text = createElement("h3")
   text.html("Name")
   text.position(windowWidth/2,windowHeight/2-40)
   text.hide()
   input = createInput("abd ")
   input.position(windowWidth/2,windowHeight/2) 
   input.hide()
   bg = "black"
}

function draw(){
background(bg)
if (mousePressedOver(playbutton)){
login()
bg = "grey"
}

addEventListener(BeforeUnloadEvent=>{
if(accName!=="home"){
Acchandle.deleteAcc(accName) 
}
})

drawSprites();
}

function login(){
playbutton.visible = false
input.show()
background(50,50,50)
text.show()
 var next = createButton("Next")
 next.position(windowWidth/2+150,windowHeight/2)
button.mousePressed(()=>{
  accName = input.value()
  Acchandle.newAcc(accName)
})

}


function checkName(bool){
if (bool == true){
  curAcc = account.new(accName)
}else{
warn = createElement("h3")
fill("red")
warn.position(windowWidth/2,windowHeight+25)
warn.html("Username is already taken")

}
}






function lobbysearch(){

}