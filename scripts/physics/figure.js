class Figure{
	constructor(dots, center, IsDynamic=true){ 
		this.dots = dots

		this.center = center 

		// Physics variables
		this.vector = {x:0, y:0}

		// Inner Physics of Every Object
		this.Physics = new Physics(this)
		this.IsDynamic = IsDynamic
	}
	drawDots(){ // Draw Connection Between Dots
		ctx.beginPath()
		ctx.moveTo(this.dots[0].x,this.dots[0].y)
		for(let dot in this.dots){
			dot = this.dots[dot]
			ctx.lineTo(dot.x, dot.y)
		}
		ctx.lineTo(this.dots[0].x,this.dots[0].y)
		ctx.strokeStyle = colors.light
		ctx.lineWidth = 3
		ctx.stroke()
		ctx.closePath()

		// Draw Dot Themselves
		for(let dot in this.dots){
			dot = this.dots[dot]
			dot.update()
		}
	}
	drawCenter(){ // Draw Connection From Dots To Center
		ctx.beginPath()
		for(let dot in this.dots){
			dot = this.dots[dot]
			ctx.moveTo(dot.x,dot.y)
			ctx.lineTo(this.center.x, this.center.y)
		}
		ctx.strokeStyle = "green"
		ctx.lineWidth = 4
		ctx.stroke()
		ctx.closePath()
	}
	draw(){ 
		this.drawCenter()
		this.drawDots()
	}
	update(){
		this.draw()
		this.center.update()

		// Inner Physics of Object
		this.IsDynamic ? this.Physics.update():null
	}
}