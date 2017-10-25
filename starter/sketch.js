
function setup() {
  //create a canvas
  canvas=createCanvas(500, 500);
  //attach it to the sketch-holder on the index.html page
  canvas.parent('sketch-holder');
  //define our center
  centerx = width/2;
  centery = height/2;
}

function draw() {
  // draw a gray background
  background(200)
  //make a green circle
  fill('green')
  ellipse(centerx,centery,40,40)
  //make a red rectangle
  fill('red')
  rect(centerx-150,centery-25,50,50)
  // make a blue line
  // add push/pop to keep everything from having a blue outline
  push()
  stroke('blue')
  line(centerx+150,centery-50,centerx+150,centery+50)
  pop()
}
