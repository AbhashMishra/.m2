class paper {
    constructor(x, y, width, height) {
    
    
    var options = {
    isStactic:false,
    'density':1.2,
    'friction': 1,
    'restitution':0.2
    }
    this.width = width
    this.height = height
    this.body = Matter.Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
    
    
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    textSize(50)
    text("DUMP AND DUMPER", 150, 350)
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
    }
    }