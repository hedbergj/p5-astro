var planet;
var Orbiters = [];

var launch;
var speedSlider, angleSlider;
var mass;
var h;
var c;
var count;
var instructions;

function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  planet = ellipse(width/2,height/2,40,40);

  mass = 400;
  h = 80;
  c = 0;
  count = 0;


  // Make a launch Button
  launch = createButton("launch");
  launch.mouseClicked(launchOrbiter);
  launch.position(50,200);
  launch.class("sim-button")

  // Make a speed controller
  speedSliderLabel = createP("Speed");
  speedSliderLabel.position(50,0);
  speedSlider = createSlider(0, 400,260 ,0);
  speedSlider.position(50,40);
  speedSlider.class("sim-slider");

  //Make an angle controller
  angleSliderLabel = createP("Direction");
  angleSliderLabel.position(50,80);
  angleSlider = createSlider(0, 360, 0 ,0);
  angleSlider.position(50,120);
  angleSlider.class("sim-slider");

  //show the intial velocity with a vector
  aVector = new Arrow(createVector(width/2,height/2-h),createVector(0,0));
  aVector.color = color('red');
  aVector.grab = false;
  aVector.draggable = false;
  aVector.showComponents = false;
  aVector.width=10;

}



function draw(){
  count++;
  background(255);
  //make the central planet
  push();
  fill('yellow');
  stroke('black');
  planet = ellipse(width/2,height/2,20,20);
  pop();

  aVector.target.x = width/2+.5*speedSlider.value()*cos(angleSlider.value()*Math.PI/180)
  aVector.target.y = height/2 - h+.5*speedSlider.value()*sin(angleSlider.value()*Math.PI/180)
  aVector.update();
  aVector.display();

  fill(150);
  noStroke();
  //update all the orbiters
  for (i = Orbiters.length-1; i >= 0; i--){
    a = Orbiters[i];
    a.drawOrbiter();

    dis = distance(a.position, createVector(width/2, height/2));

    //if one gets too far away, destroy it. Or if it hits the central object, destroy it.
    if ( dis < 20 || dis > 2000){
      Orbiters.splice(i,1);
    }
  }


}

function distance(pos, pos2){
  return sqrt(((pos.x-pos2.x)*(pos.x-pos2.x))+((pos.y-pos2.y)*(pos.y-pos2.y)));
}

 grav = function(pos){
   direction = createVector(width/2 - pos.x, height/2 - pos.y);
   direction.normalize();
   d = distance(pos, createVector(width/2, height/2));
   direction.mult(mass/(d*d));
   return direction;
 }


  var Orbiter = function(px, py, vx, vy){
  this.position = createVector(px, py);
  this.velocity = createVector(vx/100, vy/100);
  this.VertzOfAreas = [];
  }

Orbiter.prototype.drawOrbiter = function(){
    this.gravity = grav(this.position);
    this.velgrav = this.velocity;
    this.velgrav.add(this.gravity);
    this.position.add(this.velgrav);

    ellipse(this.position.x, this.position.y, 10, 10);
      c++

  }



function launchOrbiter(){

     for ( i = Orbiters.length-1; i >= 0; i--){
       Orbiters.splice(i,1);
     }
     for ( i = Trails.length-1; i >= 0; i--){
       Trails.splice(i,1);
     }

  Orbiters.push(new Orbiter(width/2, height/2 - h, speedSlider.value()*cos(angleSlider.value()*Math.PI/180), speedSlider.value()*sin(angleSlider.value()*Math.PI/180)));

}

function windowResized() {
    // Resize necessary elements to fit new window size
    resizeCanvas(windowWidth, windowHeight); // width and height system variables updated here
  }
function keyTyped(){
 if (key === 'c'){
    for ( i = Orbiters.length-1; i >= 0; i--){
      Orbiters.splice(i,1);
    }

  }
}
