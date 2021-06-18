const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(600,400,200,20);
    ground2 = new Ground(800,200,200,20);
    box1 = new Box(600,350,40,40);
    box2 = new Box(800,150,40,40);
    box3 = new Box(650,350,40,40);
    box4 = new Box(770,150,40,40);
    box5 = new Box(550,350,40,40);
    box6 = new Box(850,150,40,40);
    

    
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:100, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    ground1.display();
    ground2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    
   

    bird.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
