class Ground {
constructor(){
    var goptions= { isStatic:true}
 this.body=  Bodies.rectangle(200,390,400,30,goptions); 
 World.add(world,this.body);
}
display(){
rectMode(CENTER);
push();
fill("brown");
rect(this.body.position.x,this.body.position.y,400,30);
pop();

}



}