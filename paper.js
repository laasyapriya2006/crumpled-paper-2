class Paper {
    constructor(x,y,radius) {
      var options = {
        'isStatic': false,
        'restitution':0.8,
        'friction':1,
        'density':1.2   
      };
      this.body = Bodies.circle(x, y,radius-20/2,options);
      this.radius = radius;
      this.image = loadImage("paper.png");
  
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius,this.radius);
      pop();
     
    }
  };
  