const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var maxDrops = 100;

function preload(){
    
}

function setup(){
    canvas = createCanvas(1000, 500);

    engine = Engine.create();
	world = engine.world;

    

if(frameCount % 60) {
    drops = new drop(Math.round(random(0, 400)), maxDrops);
}

    Engine.run(engine);  
    
}

function draw(){
    background(0);

    drops = new drop;

    for(var i = 0; i < maxDrops; i++) {
        drops.push(new createdrop(random(0, 400), random(0, 400)));
    }

    if(this.rain.position.y > height) {
        matter.Body.setPosition(this.rain, {x: random(0, 400), y: random(0, 400)})
    }

    drawSprites();
    
}   

function createdrop() {

    drops = new drop;
}
