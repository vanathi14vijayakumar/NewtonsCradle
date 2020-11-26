
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob,bob2,bob3,bob4,bob5;
var roof;
var chain,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob = new Bob(400,400,30)
	bob2 = new Bob(460,400,30);
	bob3 = new Bob(520,400,30);
	bob4 = new Bob(340,400,30);
	bob5 = new Bob(280,400,30);
	roof = new Roof(400,120,300,20)
  chain = new Chain(bob.body,{x:400,y:120})
   chain2 = new Chain(bob2.body,{x:460,y:120} );
   chain3 = new Chain(bob3.body,{x:520,y:120} );
   chain4 = new Chain(bob4.body,{x:340,y:120} );
   chain5 = new Chain(bob5.body,{x:280,y:120} );
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain.display();
   chain2.display();
   chain3.display();
   chain4.display();
   chain5.display();
  drawSprites();
 
}


function keyPressed(){
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(bob3.body,bob3.body.position, {x:500,y:-500})
  }
}
