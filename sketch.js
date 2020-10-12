const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World  = Matter.World 
var engine, world;
var drops = [];
 var umbrella 
var maxDrops = 100;

function preload(){
    umbrella = loadImage("pwu.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    if (frameCount % 80 === 0){
        for (var i=0;i<maxDrops; i++){
        drops.push(new Drop(random(0,1200), random(0,400)))
    }
    }
    
}

function draw(){
    Engine.update(engine);
    background("grey");
    for (var counter = 0 ; counter < maxDrops ; counter++){
    drops[counter].display();
    drops[counter].updatePosition();
    }
    image(umbrella, 100, 100, 100,150)
    
}   
