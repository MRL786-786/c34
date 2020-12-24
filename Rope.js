class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness :0.4,
            lenght: 200

        }
        this.pointB=pointB
        this.rope=Matter.Constraint.create(options)
        World.add(myWorld, this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position;
        fill("white");
        line(pointA.x,pointA.y,this.pointB.x, this. pointB.y)

    }
}