const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

var object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option = {
    
    isStatic :true

  }
   object = Bodies.rectangle(100,100,50,50,option);
  World.add(world,object);


   
}

function draw() {
  background(0);  
  rectMode(CENTER);
  Engine.update(engine);
  rect(object.position.x,object.position.y,50,50);

  drawSprites();
}