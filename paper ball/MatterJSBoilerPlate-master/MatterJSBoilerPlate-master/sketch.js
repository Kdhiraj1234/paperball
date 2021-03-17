
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,groundSprite;
var box1Body,box2Body,box3Body;
var paperball,paperballBody;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = createSprite(width/2,height-35,200,20);
	box2 = createSprite(300,height-75,20,100);
	box3 = createSprite(500,height-75,20,100);

	box1.shapeColor = "red";
	box2.shapeColor = "red";
	box3.shapeColor = "red";

	box1Body = Bodies.rectangle(width/2,height-35,200,20,{isStatic : true});
	box2Body = Bodies.rectangle(300,height-75,20,100,{isStatic : true});
	box3Body = Bodies.rectangle(500,height-75,20,100,{isStatic : true});

	World.add(world,box1Body);
    World.add(world,box2Body);
	World.add(world,box3Body);

	paperball = createSprite(100,650,25,25);

	var paperballBody_options = {
		'isStatic':false,
        'restitution':0.5,
	    'friction':0.3,
		'density':1.2
	}
	
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(paperball.isTouching(box1)){
	  paperball.velocityX=0;
	  paperball.velocityY=0;
  }

  drawSprites();
 
}

 function keyPressed(){

if(keyCode === UP_ARROW){

	paperball.velocityY=-3;

}
if(keyCode === DOWN_ARROW){

	paperball.velocityY=3;

}
if(keyCode === LEFT_ARROW){

	paperball.velocityX=-3;

}
if(keyCode === RIGHT_ARROW){

	paperball.velocityX=3;

}
 }

 //maam i have created a class and also tried to code it to make a paperball using the class but it does not show anything on 200 ok server if i use the class,thats why i made a sprite instead.and even i did not delete the class to show you that i made.

