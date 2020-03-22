class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.reee1=loadImage("sprites/sling1.png")
        this.reee2=loadImage("sprites/sling2.png")
        this.reee3=loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.reee1, 200, 25);
        image(this.reee2,175,25)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke(48,22,8)
            line(pointA.x-20, pointA.y-5, pointB.x, pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+50,pointB.y);
        image(this.reee3,pointA.x-25,pointA.y-5,20,20)
        }
    }
    
}