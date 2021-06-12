const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand, box1, box2, box3, box4, box5, box6, connect, polygon;
function preload() {}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  myWorld = engine.world;
  Engine.run(engine);
  ground = new Ground(450, 395, 900, 10);
  stand = new Ground(420, 295, 200, 10);
  box1 = new Box(390, 275, 30, 30);
  box2 = new Box(420, 275, 30, 30);
  box3 = new Box(450, 275, 30, 30);
  box4 = new Box(405, 245, 30, 30);
  box5 = new Box(435, 245, 30, 30);
  box6 = new Box(420, 215, 30, 30);
  polygon = new Polygon(150, 100, 60, 60);
  connect = new Connection(polygon.polygon, { x: 150, y: 100 });
}
function draw() {
  background(56, 44, 44);
  ground.display();
  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  polygon.display();
  connect.display();
}
function mouseDragged() {
  Matter.Body.setPosition(polygon.polygon, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  connect.break();
}
