class Box {
    constructor(x,y,width,height){
        var boption={restitution:0.1}
        this.body=Bodies.rectangle(x,y,width,height,boption);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        push();
        rotate(this.body.angle);
        translate(this.body.position.x,this.body.position.y);
        rect(0,0,this.width,this.height);
        pop();
    
    }
}