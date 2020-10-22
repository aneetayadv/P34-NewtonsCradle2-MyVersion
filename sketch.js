
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var bobRadius=30;

function preload()
{
	
}

function setup() {
	var cnv = createCanvas(windowWidth/2,windowHeight);
	//Centering the canvas
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
	cnv.pixelRatio = pixelDensity();

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	startBobPosX=250;
	startBobPosY=height-200;
	
	bob1 = new Pendulum(startBobPosX,startBobPosY,bobRadius,"blue");
	bob2 = new Pendulum(startBobPosX+bobRadius,startBobPosY,bobRadius,"yellow");
	bob3 = new Pendulum(startBobPosX+2*bobRadius,startBobPosY,bobRadius,"pink");
	bob4 = new Pendulum(startBobPosX+3*bobRadius,startBobPosY,bobRadius,"yellow");
	bob5 = new Pendulum(startBobPosX+4*bobRadius,startBobPosY,bobRadius,"blue");

	rope1= new Sling(bob1.body,{x:startBobPosX-2*bobRadius,y:startBobPosY-300});
	rope2= new Sling(bob2.body,{x:startBobPosX,y:startBobPosY-300});
	rope3= new Sling(bob3.body,{x:startBobPosX+2*bobRadius,y:startBobPosY-300});
	rope4= new Sling(bob4.body,{x:startBobPosX+4*bobRadius,y:startBobPosY-300});
	rope5= new Sling(bob5.body,{x:startBobPosX+6*bobRadius,y:startBobPosY-300});
}


function draw() {
  
  background(0);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-85});
	}
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
}

