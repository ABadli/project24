class Paper {
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.2,
            friction : 0.5,
            density : 1.2
        }
        this.body =Bodies.circle(x,y,10,options);
        World.add(world,this.body)
    }

    display(){

    
        var pos = this.body.position;

        push();
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
    
        fill("red");
        ellipse(0, 0, 50, 50);
        pop();
        
    }

}