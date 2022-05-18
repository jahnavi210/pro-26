class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
            //stiffness:

		}
		
		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		if(this.rope.bodyA){
	     var pointA=this.rope.bodyA.position;
		 var pointB=this.rope.bodyB.position;
	
			strokeWeight(4);
			//Write code TO RENDER A LINE BETWEEN THE TWO BODIES
		   line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
		}
		
		
	}

}
