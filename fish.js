class Fish{
constructor(x,y,w,h){

 
var options={
 restitution:1.0,
 density:1.0,
 friction:0.5   
}  

this.image=loadAnimation("images/fish 1.png","images/fish 2.png","images/fish 3.png","images/fish 4.png")
this.body=Bodies.rectangle(x,y,w,h,options)
this.w=w,
this.h=h
World.add(world,this.body)
}
display(){
imageMode(CENTER)  
animation(this.image,this.body.position.x,this.body.position.y,this.w,this.h)  
this.body.position.x+=-1
}
}