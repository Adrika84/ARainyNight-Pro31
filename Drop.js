class drop {
    constructor(x, y) {
      var options = {
      isStatic:true,
			restitution : 0,
      friction : 0.1,
     }
      this.body = Bodies.circle(x, y,1, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      fill("blue");
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y);
    }
  }