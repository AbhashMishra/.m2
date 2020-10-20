class dustbin {
    constructor(x, y) {
    
    var options={
    isStatic: true
    }
    this.body = Bodies.rectangle(x, y, 225, 225, options);
    
    World.add(world, this.body)
    
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red")
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect( 0, 0, 225, 225);
    pop();
    }
}