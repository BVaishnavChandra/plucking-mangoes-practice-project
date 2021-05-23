class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.launch_obj = Constraint.create(options);
        World.add(world, this.launch_obj);
    }

fly(){
    this.launch_obj.bodyA = null
}

attach(bodyA)
{
    this.launch_obj.bodyA = bodyA;
}


    display(){
        if(this.launch_obj.bodyA){
        var pointA = this.launch_obj.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}  
}