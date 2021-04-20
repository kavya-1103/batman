const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    bgImg=loadImage("bg.jpg");

    walkinganim =loadAnimation("man/walking_1.png","man/walking_2.png","man/walking_3.png","man/walking_4.png","man/walking_5.png","man/walking_6.png","man/walking_7.png","man/walking_8.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;
man = createSprite(20,560)
man.scale=0.35
man.addAnimation("walking",walkinganim)
    createCanvas(400,700);

    umbrella = new Umbrella(20,500);
    //creating drops
    
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
//push drops
drops.push(new createDrop(random(0,400),random(0,400)))
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    drawSprites();

  

    man.x=umbrella.body.position.x;
    
    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
         case 1:thunder.addImage(thunder1)
         break 
         case 2:thunder.addImage(thunder2)
         break 
         case 3:thunder.addImage(thunder3)
         break 
         case 4:thunder.addImage(thunder4)
         break 
         default:break


        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

   // umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
      
        drops[i].showDrop();
        drops[i].updateY();
        
    }

  
}   

