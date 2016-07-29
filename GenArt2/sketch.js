// create list of variables
var x = []
var y = []
var rectColor = []
var colors = []
var song



function preload(){
  song = loadSound("sound/fuzzy58.mp3")
  
}

function setup() {
  createCanvas(1200, 800)
  background(0, 0, 0)
  
  //play song as soon as page loads on screen
  song.play()
  song.loop(1)
  
  //list of colors that will be chosen at random for lines
  colors = [
    color(0,0,204,20),
    color(204, 102, 255, 20),
    color(191, 64, 64, 20),
    color(255, 102, 0, 20),
    color(249, 249, 6, 20)
    
    ]

  // assigned the starting x and y point for each circle
  for (var i= 0; i < 100; i=i +1){
    x[i] = random(0, width)
    y[i] = random(0, height)
    //loop through the array or list of colors randomly
    rectColor[i] = random(colors)
 }
   
}

function draw() {
  
  
  for (var i = 0; i < 100; i= i+1){
    
     // draw shapes
     
     line(x[i], y[i], 600, 400)
     
     stroke (0, 0, 0)
     fill (163, 163, 117, 50)
     ellipse(x[i], y[i], 30, 30)
    
     fill(0, 77, 0, 50)
     stroke(0, 0, 0, 20)
     rect(x[i], y[i], 25, 25)
    
    // lines, circles, and squares move in random directions
  x[i] = x[i] + random(-5, 5)
  y[i] = y[i] + random(-5, 5)
  
  for (var j = 0; j< 100; j=j +1){
    //find distance between circles
  var distance = dist(x[i], y[i], x[j], y[j])
  if (distance < 25){
    //color of lines will change randomly
    stroke(rectColor[i])
    line(x[i], y[i], x[j], y[i])
    
    
    
     }
  
   }
  
 }
  
}