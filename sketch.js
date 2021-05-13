
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var gameState="play"
var engine, world;
var ground;
var fish1=[]
var score
var bgSound
var shell
var starFish
function preload(){
    bg1=loadImage("images/bg2.jpg")
    oFishImg=loadAnimation("images/f1.png","images/f2.png","images/f3.png","images/f4.png")
    octopusImg=loadAnimation("images/octopus1.png","images/octopus2.png","images/octopus3.png","images/octopus4.png","images/octopus5.png")
    bgSound=loadSound("background_music.wav")
    shellImg=loadImage("images/shell.png")
    starfishImg=loadImage("images/star-fish.png")

}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight)
    engine = Engine.create();
    world = engine.world;
    console.log(windowHeight)
    police = new PoliceSubmarine(width/6,height-50,width/8,width/8)
    console.log(police.body.position.x)
    ground  = new Ground(width/2,height-10,width,width/100)
    target = new Target(width/5.5,height/4,width/8,width/8)
    ground1= new Ground(width/4,height/3.75,width/5,height/37)
    
    
    score=0
    fill(0)
    textSize(32)
    stroke("yellow")
    strokeWeight(3)


    
   
    

    

    
}

function draw(){
    background(bg1);
    Engine.update(engine);

    bgSound.play()
    if(gameState==="play"){

    
    police.display()
    fill("lightblue")
    ground.display()
  target.display()
  ground1.display()
  orangeFish()
  octopus()
  shell()
  starFish()
  if(frameCount%50===0){
    fish= new Fish(1200,300,50,50)
    fish1.push(fish)    
    }
    for(var i=0;i<fish1.length;i++){
    fish1[i].display() 
  
    }
   score=frameCount  
  var collision=Matter.SAT.collides(police.body,target.body)
  if(collision.collided){
  gameState="end"    
    
  console.log("collision")
  }   
    }
    if(gameState==="end"){
        image(bg1,0,0,width,height)   
        image(shellImg,width/3,height/3) 
        text("GAME OVER",width/2,height/2)
        
    }
 // fish.display()
  text("SCORE"+score,width-width/6,height/10)
  
drawSprites()  
   }
function orangeFish(){
if(frameCount%300===0){
var rand=Math.round(random(10,400))
var oFish= createSprite(1500,rand,20,20)   
oFish.velocityX=-2
oFish.addAnimation("f",oFishImg) 
oFish.scale=0.8

} 

}
function octopus(){
if(frameCount%200===0){
var rand=Math.round(random (50,1200))
var octopus= createSprite(rand,10,20,20) 
octopus.velocityY=2
octopus.addAnimation("o",octopusImg)   
octopus.scale=0.7

}    
}   
function shell(){
    if(frameCount%200===0){
    var rand=Math.round(random (50,1200))
    var octopus= createSprite(rand,10,20,20) 
    octopus.velocityY=2
    octopus.addAnimation("s",shellImg)   
    octopus.scale=0.7

}

}
function starFish(){
    if(frameCount%200===0){
    var rand=Math.round(random (50,1200))
    var octopus= createSprite(rand,10,20,20) 
    octopus.velocityY=2
    octopus.addAnimation("st",starfishImg)   
    octopus.scale=0.7
    }
}
