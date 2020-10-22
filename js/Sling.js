class Sling {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffeness : 0.8
        }    
        this.sling = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world,options);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;

        push();
        stroke(255);
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}