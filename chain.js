class Chain{
    constructor(body1,body2){
        var option={
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:0.04
        }
        this.chain=Constraint.create(option)
        World.add(world,this.chain)
    }
    display(){
        var posa=this.chain.bodyA.position;
        var posb=this.chain.bodyB.position;
        line(posa.x,posa.y,posb.x,posb.y)
    }
}