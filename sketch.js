const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var holder,ball,ground;
var stand1,stand2;
var slingshot;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9;
var polygonImage;

function preload(){
  polygonImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world();

  ground = new Ground();

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);

  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  block16 = new Box(390,155,30,40);

  blocks1 = new Box(640,175,30,40);
  blocks2 = new Box(670,175,30,40);
  blocks3 = new Box(700,175,30,40);
  blocks4 = new Box(730,175,30,40);
  blocks5 = new Box(760,175,30,40);

  blocks6 = new Box(670,135,30,40);
  blocks7 = new Box(700,135,30,40);
  blocks8 = new Box(730,135,30,40);

  blocks9 = new Box(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new SlingShot(this.ball,{x:100,y:200});
}

function draw() {
  background(56,44,44);
  
  textSize(20);
  fill("yellow");
  text("Drag the Hexagonal Stone and Release It, to Launch It Towards the Blocks",100,30);

  ground.display();

  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");

  block13.display();
  block14.display();
  block15.display();

  fill("grey");

  block16.display();

  fill("skyblue");

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  fill("turquoise");

  blocks6.display();
  blocks7.display();
  blocks8.display();

  fill("pink");

  blocks9.display();

  fill("gold");

  imageMode(CENTER);
  image(polygonImage,ball.position.x,ball.position.y,40,40);

  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
