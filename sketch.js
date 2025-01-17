const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball,rope;

function setup(){
createCanvas(2000,1000);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(300,300,40);
  ground = new Ground();
  box1 = new Box(700,500,70,70);
  box2 = new Box(700,500,70,70);
  box3 = new Box(700,500,70,70);
  box4 = new Box(700,500,70,70);
  box5 = new Box(700,500,70,70);
  box6 = new Box(600,500,70,70);
  box7 = new Box(600,500,70,70);
  box8 = new Box(600,500,70,70);
  box9 = new Box(600,500,70,70);
  box10 = new Box(600,500,70,70);

}

function draw(){
  background('white');
  Engine.update(engine);
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display(); 
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display(); 
}