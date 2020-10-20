const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
}

function setup() {
createCanvas(1200, 500);


engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
ball = new paper(200, 300, 60, 60);
dustbin1 = new DustBin(1000, 350);
dustbin2 = new DustBin(805, 415, 20, 100);
dustbin3 = new DustBin(995, 415, 20, 100);
ground = new Ground(600, 450, 1200, 20);
Engine.run(engine);
}


function draw() {
rectMode(CENTER);
background("pink");
ball.display();
dustbin3.display();
ground.display();
dustbin1.display();
dustbin2.display();

text("DUMP AND DUMPER", 300, 150);
drawSprites();
}

function keyPressed() {
if (keyCode === UP_ARROW) {


Matter.Body.applyForce(ball.body, ball.body.position, {x:220, y:-220})
}
}