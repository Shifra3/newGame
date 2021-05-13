class Fish2{
constructor(x,y,w,h){
var options={
    restitution:1.0,
    density:1.0,
    friction:0.5 
}
this.image=loadImage("images/fish1.png")
this.body=Bodies.rectangle(x,y,w,h,options)  
this.w=w,
this.h=h 
World.add(world,this.body)
} 
display(){
imageMode(CENTER)  
image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)  
}   
}    

