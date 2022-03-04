
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var plane;
var block1, block2, block3;
var block1_options;
var block2_options;
var block3_options;
var options;

function preload()
{
	

}

function setup() {

	createCanvas(500,700);
	engine = Engine.create();
	world = engine.world;
	
	
	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0,
	}
	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1,
	}
	var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3,
	}
	
	//Crie os Corpos Aqui.
	
    var plane ={
		isStatic=true
	}

	plane = Bodies.rectangle(250,700, 750,20, options);
	World.add(world,plane);


	block1 = Bodies.circle(220, 10, 10, block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110, 50 , 10, 10, block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350, 50 , 10, 10, block3_options);
	World.add(world,block3);


	rectMode(CENTER);
	ellipseMode(RADIUS);
   
}


function draw() {

  rectMode(CENTER);
  background("LightBlue");
  Engine.update(engine);

	
  ellipse(block1.position.x, block1.position.y, 20);
  rect(block2.position.x, block2.position.y, 50);
  rect(block3.position.x, block3.position.y, 75,50);
  rect(plane.position.x,plane.position.y,500,30);
}



