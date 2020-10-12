class Drop {
    constructor(x,y) {
       
        this.body = Bodies.circle(x,y,10);
        this.radius = 10;
        World.add(world, this.body);
        }

        updatePosition(){
            if (this.body.position.y >height){
                Matter.Body.setPosition(this.body, {x:random(0,1200), y:random(0,400)})
            }
        }
        display(){
            fill("blue")
            noStroke();
            ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
        }

};
