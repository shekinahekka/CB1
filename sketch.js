
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1;
var world;
var ground1;
var dustbinObj;
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,450,40);

	ground1 = new Ground (width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  //KeyPressed();
 dustbinObj.display();
  paper1.display();
  ground1.display();
 
 
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
	
	
	
}

