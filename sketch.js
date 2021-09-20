const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg, bgImg;
var engine,world;
var girl, girlImg;
var snow1, snow2, snow3, snow4, snow5, snow6, snow7, snow8;
function preload(){
bgImg=loadImage('snow2.jpg');
girlImg=loadImage('girl.jpg');
}
function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
 girl = createSprite(400, 335, 50, 50);
 girl.addImage('littlegirl',girlImg);
 girl.scale=0.25;
 snow1 = new Snow(100,100,10,10);
 snow2 = new Snow(150,100,10,10);
 snow3 = new Snow(250,100,10,10);
 snow4 = new Snow(300,100,10,10);
 snow5 = new Snow(400,100,10,10);
 snow6 = new Snow(450,100,10,10);
 snow7 = new Snow(500,100,10,10);
 snow8 = new Snow(600,100,10,10);
}

function draw() {
  background(bgImg); 
  drawSprites();
  snow1.display();
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()
  snow7.display()
  snow8.display()
}