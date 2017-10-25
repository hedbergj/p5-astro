var Orbiter = function(position, velocity, acceleration, mass, color){
this.position = position;
this.velocity = velocity;
this.acceleration = acceleration;
this.mass = mass;
this.radius = Math.pow(mass,.333)
this.color = color;
}

Orbiter.prototype.display = function(){
  push();
  fill(this.color)
  ellipse(this.position.x, this.position.y, this.radius*2, this.radius*2)
  pop();
  c++
  if(c % 2 == 0){
    Trails.push(new TrailDot(createVector(this.position.x, this.position.y),60));
  }
}
