class Target{
    constructor(x,y,w,h){
    var options={
    restitution:1.0,
    density:1.0,
    friction:0.5,
    
    }
    this.image=loadImage("images/ts.png")
    this.body=Bodies.rectangle(x,y,w,h,options)
    this.w=w
    this.h=h
    World.add(world,this.body)
    }  
    display(){
    push()   
    var angle=this.body.angle
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    imageMode(CENTER) 
    image(this.image,0,0,this.w,this.h)
    if(keyDown("t" || touches.length>0)){
    this.body.position.x+=2
    touches=[]
    }
    pop()  
      
    }
    
    
    }