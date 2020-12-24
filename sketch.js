const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 
var myEngine, myWorld;


function setup() {
  createCanvas(1000,600);
  myEngine=Engine.create();
  myWorld= myEngine.world
  ground= new Ground(500,580,1000,20);
  box1= new Box(700,100,70,70);
  box2= new Box(700,100,70,70);
  box3= new Box(700,100,70,70);
  box4= new Box(700,100,70,70);
  ball= new Ball(200,200,70,70);
  rope1= new Rope(ball.body,{x:500, y:50});

}



function draw() {
  background(0);  
Engine.update(myEngine);



ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
ball.display();
rope1.display();
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

