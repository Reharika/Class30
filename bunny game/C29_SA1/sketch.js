const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit;

function preload() {

  bg_img = loadImage("background.png");
  melon_img = loadImage("melon.png");
  rabbit_img = loadImage("Rabbit-01.png");
}


function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  bunny = createSprite(250,600,100,100)
  bunny.addImage(rabbit_img)
  bunny.scale =0.2;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30})

  fruit = Bodies.circle(240,300,20)
  //World.add(world,fruit);
  Matter.Composite.add(rope.body,fruit)
  fruit_con= new Link(rope,fruit)

  button = createImg('cut_btn.png')
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  ground.show();
  rope.show();
 // ellipse(fruit.position.x,fruit.position.y,20,20);
 imageMode(CENTER);
  image(melon_img,fruit.position.x,fruit.position.y,70,70)
  Engine.update(engine);
  

 
   drawSprites();
}
function drop() {
  rope.break();
  fruit_con.detach();
  fruit_con= null;
}