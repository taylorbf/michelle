//create all my variables
var cellSize = 20;
var cols, rows;
var pastFrame = []
var capture;
var lastDiff = 0


var oneX = []
var oneY = []
var img




//load in my song
function preload(){
  song= loadSound("sound/jessie.mp3")
  img = loadImage("image/color.png")
}


function setup() {
  createCanvas(1200, 600);
  frameRate(7);
  noStroke();
  fill(255);
  song.play()

  capture = createCapture(VIDEO)
  capture.size(640, 480)
  capture.hide()

  cols = capture.width / cellSize;
  rows = capture.height / cellSize;
  
  
   for(var i = 0; i <100; i = i +1){
   oneX[i] = random(0,width)
   oneY[i] = random(0,height)
 }
}


function draw() { 
  
 capture.loadPixels()

  var totalDiff = 0
  var locs = []
  
  // create loop for columns
  for (var i = 0; i < cols; i++) {
  // create loop for rows
  for (var j = 0; j < rows; j++) {
    
      // Where are we, pixel-wise?
      var x = i*cellSize
      var y = j*cellSize
      var loc = (capture.width - x - 1) + y*capture.width; // Reversing x to mirror the image
    
      // Make a new color from this pixel
      var r = capture.pixels[loc*4]
      var g = capture.pixels[loc*4 + 1]
      var b = capture.pixels[loc*4 + 2]
      var c = color(r, g, b)

      if (pastFrame[i*rows+j]) {
        //Compare brightness of this frame to last frame       
        var bdiff = abs(brightness(c) - brightness(pastFrame[i*rows+j]))
        if (bdiff > 20) {
          totalDiff++;
          locs.push([x,y])

          //console.log(x)
        }
      }
    
      //This frame becomes prev frame
      pastFrame[i*rows+j] = c

      //console.log(locs)

    }
  } 

  var smoothedDiff = (totalDiff + lastDiff*9) / 10
  lastDiff = totalDiff

  if (locs.length) {

    var xloctotal = 0
    var yloctotal = 0

    for (var i=0;i<locs.length;i++) {
      xloctotal += locs[i][0]
      yloctotal += locs[i][1]
    }

    var xloc = xloctotal / locs.length
    var yloc = yloctotal / locs.length

  } else {
    xloc = 0
    yloc = 0
  }
  xloc = xloc * width / capture.width
  yloc = yloc * height / capture.height

  fill(smoothedDiff)
  stroke(0,255)
 


  background(0,0,0)
   // Loop the following code 100 times
  for (var i = 0;i <100;i = i +1) {
    
    var size = random(50)
    // give our circles, rectangles, and lines a random width and height
    var x = random(width)
    var y = random(height)
    // draw a circle and rectangle using our x, y, and size
    
    rect(x, y, size, size)
    ellipse(x,y,size,size)
    stroke(0,0, 255)
    line(x, y, 600, 300)
   
   
    
}

if(mouseIsPressed){
  background(0,0,0)
  
  for (var i = 0; i < 100; i = i +1){
    image(img,oneX[i], oneY[i], 150, 150)
    
    oneX[i] = oneX[i] + random(-70,70)
    oneY[i]= oneY[i] + random(-50, 50)
    
 }
}
  

} 
  
   function mouseMoved(){
   background(0,0,0)
   stroke(255)
   line(mouseX, mouseY, pmouseX, pmouseY)
   
} 
  

  
  
  

  
  
  
  













