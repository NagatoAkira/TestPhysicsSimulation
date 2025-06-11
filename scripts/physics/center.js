class Center{
	constructor(x,y){
		this.x = x
		this.y = y

		// Decorative
		this.radius = 20
	}
	draw(){
		drawCircle(this.x, this.y, this.radius, colors.highlight02)
	}
	update(){
		this.draw()
	}
}