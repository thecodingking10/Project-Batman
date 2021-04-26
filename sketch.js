const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var fc;
var thunder, thunderImg1, thunderImg2, thunderImg3, thunderImg4;
var engine, world;
var drops = [];
var random; 

function preload(){
    thunderImg1 = loadImage("1.png");
    thunderImg2 = loadImage("2.png");
    thunderImg3 = loadImage("3.png");
    thunderImg4 = loadImage("4.png");


}

function setup(){
   engine = Engine.create();
   world = engine.world;
    createCanvas(400,700);

    umbrella = new Umbrella(200,500);
    if(frameCount % 150 === 0){
        for(var i = 0; i<100; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }

}

function draw(){
    Engine.update(engine);
    background(0);
    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
       fc = frameCount;
        console.log("first "+fc);
    
    thunder = createSprite(random(10,370),random(10,30), 10,10);
    switch(rand){
        case 1: thunder.addImage(thunderImg1);
        break;
        case 2: thunder.addImage(thunderImg2);
        break;
        case 3: thunder.addImage(thunderImg3);
        break;
        case 4: thunder.addImage(thunderImg4);
        break;
    }
    thunder.scale = random(0.3,0.6);
}
console.log("second"+fc)
    if(fc + 10 === frameCount && thunder){
        thunder.destroy();
        //console.log("working");
    }
    umbrella.display();
    for(var i = 0; i<100; i++){
        drops[i].display();
        drops[i].updateY();
    }
    drawSprites();
}   

