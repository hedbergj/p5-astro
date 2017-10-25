// this sketch makes a simple circular orbiter
// it obeys keplers third law, but other than that, is rather physically unrealistic.


var theta = 0;
// this variable will hold the orbital speed
var orbitspeed;
// distance is the radius of the orbit
var distance = 150;
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
  // make a sun
  fill('yellow')
  ellipse(centerx,centery,50,50)

  push();
  fill('green')
  //Kepler's 3rd law - speed proportional to 3/2 the radius
  orbitspeed = 20/(Math.pow(distance,1.5));
  //update theta
  theta += orbitspeed;
  // move planet to center
  translate(centerx,centery)
  // rotate every frame by a theta, which is changing
  rotate(theta);
  // translate out by the radius of the orbit
  translate(distance,0);
  // draw the ellipse
  ellipse(0,0,20,20)
  pop();

}
