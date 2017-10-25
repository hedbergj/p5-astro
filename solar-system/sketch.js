var orbiters=[];
var neworbiters = [];
var gravity = 0.5;
var totalMass;
var Trails = [];
var c=0;
var SolarSystem;
function setup(){
  //frameRate(40);
  createCanvas(windowWidth, windowHeight);
v1 = 9;
massRatio = 1000;
 // orbiters.push(new TrailDot(createVector(width/2,height/2),createVector(0,v1),createVector(0,0),100));
 // orbiters.push(new TrailDot(createVector(200+width/2,height/2),createVector(0,-v1/massRatio),createVector(0,0),100*massRatio));
 Earth = orbiters.push(new Orbiter(createVector(-500+width/2,height/2),createVector(0,v1),createVector(0,0),100,color('blue')));
 InnerPlanet = orbiters.push(new Orbiter(createVector(-100+width/2,height/2),createVector(0,v1*2.5),createVector(0,0),30, color('gray')));
 InnerPlanet = orbiters.push(new Orbiter(createVector(-180+width/2,height/2),createVector(0,v1*1.8),createVector(0,0),30, color('yellow')));
 Sun = orbiters.push(new Orbiter(createVector(width/2,height/2),createVector(0,-v1/massRatio),createVector(0,0),100*massRatio, color('orange')));
 Moon = orbiters.push(new Orbiter(createVector(-512+width/2,height/2),createVector(0,v1+2),createVector(0,0) ,5, color('gray')));

 SolarSystem = new GravSystem(orbiters);

 //Comet = orbiters.push(new Orbiter(createVector(-112+width/2,height/2),createVector(0,v1*4),createVector(0,0) ,5, color('gray')));
 //  for (i = 0;i<20;i++)
 //  { orbiters.push(new Orbiter(createVector(random(100,width-100),random(100,height-100)),createVector(random(-2,2),random(-2,2)),createVector(0,0),100));
 // }
 //
 }



function draw(){
background(255);

  for (var k = 0; k < 2; k++) { // increase the greater than value to increase simulation step rate
      SolarSystem.do_physics(1.0 / 8); // increase the divisor to increase accuracy and decrease simulation speed
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
