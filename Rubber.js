class Rubber {
    constructor(x,y,r) {

        this.x=x; 
        this.y=y;
        this.r=r;
        var options = {
            restitution: 0.3,
            density: 1,
            friction: 5
        }
        this.x = x;
        this.y=y;
        this.r=r;
        this.body = Matter.Bodies.circle(x,y,r,options);
        this.radius = 20;
        World.add(world,this.body);
          
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.r);
        pop();
    }
}





