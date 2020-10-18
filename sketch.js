
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1, Leftbox, Rightbox, Bottombox, ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600,height,1200,20)
       
	Leftbox = new Dustbin(520, 647, 20, 85);
	Rightbox = new Dustbin(720, 628, 20, 125);
	Bottombox = new Dustbin(620, 680, 200, 20);
	
	ball = new Paper(40, 640, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground1.display();

  Leftbox.display();
  Rightbox.display();
  Bottombox.display();

  ball.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	    Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:149});
	}
  }
  


