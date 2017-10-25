var orbiters=[];
var neworbiters = [];
var gravity =.5;
var totalMass;
var Trails = [];
//var c=0;
var SolarSystem;


function setup(){
  //frameRate(40);
  createCanvas(windowWidth, windowHeight);
v1 = 13;
massRatio =1000;

//Make a new GravSystem
//Orbiters is an array of things bodies

 SolarSystem = new GravSystem(orbiters);

//define a relationship between the radius and the mass
r = 300*Math.pow((100/(3*100*massRatio)),(1/3))

//create the three orbiters
mass1 =  orbiters.push(new Orbiter(createVector(width/2,-300+height/2),createVector(v1,0),createVector(0,0),100, random(50,200)));
mass2 = orbiters.push(new Orbiter(createVector(width/2,height/2),createVector(-v1/massRatio,0),createVector(0,0),100*massRatio, random(50,200)));
sat = orbiters.push(new Orbiter(createVector(width/2,-300+r+height/2),createVector(v1*.94182909640315,0),createVector(0,0),1, random(50,200)));
 }



function draw(){
background(255);

//the following solves the physics
  for (var k = 0; k < 4; k++) { // increase the greater than value to increase simulation step rate
      SolarSystem.do_physics(1.0 / 16); // increase the divisor to increase accuracy and decrease simulation speed
  }

  for (i=0;i<orbiters.length;i++){
    orbiters[i].display();
  }

  COM();

  for (var i = Trails.length-1; i >= 0; i--) {
    var p = Trails[i];
    p.run();
    if (p.isDead()) {
      //remove the TrailDot
      Trails.splice(i, 1);
    }
  }

}


function COM(){

  m1 = createVector(0,0)

  totalMass=0;


  for(i=0;i<orbiters.length;i++){
    totalMass=totalMass+orbiters[i].mass;
    m1 = p5.Vector.add(m1,p5.Vector.mult(orbiters[i].position,orbiters[i].mass))
  }

  com = p5.Vector.div(m1,totalMass);
  push();
  fill(0)
  stroke(0)
  line(com.x-5,com.y,com.x+5,com.y,)
  line(com.x,com.y-5,com.x,com.y+5,)
  pop();
}




function windowResized() {
    // Resize necessary elements to fit new window size
    resizeCanvas(windowWidth, windowHeight); // width and height system variables updated here
  }

function keyTyped(){
 if (key === 'c'){
    for ( i = orbiters.length-1; i >= 0; i--){
      orbiters.splice(i,1);
    }
    // for ( i = Trails.length-1; i >= 0; i--){
    //   Trails.splice(i,1);
    // }
  }
}
