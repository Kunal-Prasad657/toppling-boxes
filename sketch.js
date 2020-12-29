const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   ground1 = new Ground();

   Box1=new Box(200,200,30,50);
   Box2=new Box(220,50,30,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
   Box1.display();
   Box2.display();
}