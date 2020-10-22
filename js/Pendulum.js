class Pendulum
{
	constructor(x,y,color)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			}
		this.x=x;
		this.y=y;
		this.r=30;
		this.color = color;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);
	}

	display()
	{
			var angle = this.body.angle;
			var pos=this.body.position;		

			push();
			translate(pos.x, pos.y);
			//rotate(angle);
			rectMode(CENTER)
			stroke(255);
			strokeWeight(2);
			fill(this.color);
			ellipse(0,0,this.r*2, this.r*2);
			pop();
			
	}

}