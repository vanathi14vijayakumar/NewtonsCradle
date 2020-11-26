/*class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var option = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY},
            //stiffness:1,
            //length:200

        }
        //this.chain = Constraint.create(option)
        this.chain = Constraint.create(option)
        World.add(world,this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position
       var pointB = this.chain.bodyB.position
       strokeWeight(4)
       line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}*/

class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.08,
            length: 250
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
    var pointA = this.body.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}
