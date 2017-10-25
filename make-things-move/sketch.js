//initialize theta
var theta = 0;


function setup() {
  //create a canvas 500 pixels by 500 pixels
  canvas=createCanvas(500, 500);
  //attach it to the sketch-holder on the index.html page
  canvas.parent('sketch-holder');
  //define our center in relation the width and height of the canvas. width and height are global variables.
  centerx = width/2;
  centery = height/2;


}

function draw() {
  // draw a gray background
  background(200)
  //move everything to be based at the center
  translate(centerx,centery)


  //make a green circle ocsillate up and down
  push()
  fill('green')
  ellipse(0,+10*sin(frameCount*.1),40,40)
  pop()


  //make a red rectangle rotate
  push();
  fill('red')
  translate(-150,0)
  //tell the rectangle to rotate by theta times .04 each frame. The .04 just slows it down
  rotate(-theta*.04)
  //move it so it rotates about its center
  translate(-25,-25)
  rect(0,0,50,50)
  pop();

  // make a blue rotate line

  push()
  stroke('blue')
  translate(150,0)
  rotate(theta*.01)
  line(0,-50,0,50)
  pop()

  //increment theta each frame
  theta += 1;
}
