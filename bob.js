class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':5,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      this.radius = radius
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
       translate(pos.x, pos.y);
       rotate(angle);
      ellipseMode(RADIUS);
      fill(232,344,339);
     ellipse(0, 0, this.radius);
     //ellipse(pos.x,pos.y,this.radius)
       pop();
    }
  };
  