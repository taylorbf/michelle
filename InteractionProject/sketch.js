var img
var imgOne
var x = 0
var y = 0
var imgTwo
var carX=0
function preload() {
  img = loadImage ("images/marlyn.png")
  imgOne = loadImage ("images/pop.png")
  imgTwo = loadImage("images/car.png")
}




function setup() {
  createCanvas(600, 600)
  noStroke()
 
}


function draw() {
  
  fill (153, 255, 255)
if (x > 600){
   x = 0
}
if (y > 600){
   y = 0
}
  ellipse( x, 25, 30, 30)
  ellipse( 350, y, 30, 30)
  ellipse( x, 250, 30, 30)
  ellipse( 200, y, 30, 30)  
  
x = x + 3 
y = y + 3



  imageMode("center")
  image( imgTwo, carX, 300, 100,100)
 
 if (carX < 600){
 carX = carX + 5
}
else{
  carX = 0
}
 // Erase gradually 
 background (255, 50)
 imageMode(" center")
 if (mouseIsPressed) {
  image(img, mouseX, mouseY, 250, 250)

 }
  
}

/************ 
*   MOUSE   *
************/


function mouseMoved() {
   fill( 230, 0, 230)
   quad( mouseX, mouseY, 20, 35, 60, 40, 15, 25)
   
   fill(148, 77, 255)
   quad(400, 250, 300, 45, 200, 325, 400, mouseY)
  
  fill(0, 230, 0)
  quad( 150, 180, 415, 50, mouseX, 146, -150, mouseY)
  console.log(mouseX)
  


}  
 
function mouseReleased() {
  imageMode ("center")
  image( imgOne, mouseX, mouseY, 700, 700)

  
}

  

  

  



