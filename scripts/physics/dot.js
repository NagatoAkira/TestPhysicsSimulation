class Dot{
	constructor(x,y){
		this.x = x
		this.y = y

		// Decorative
		this.radius = 20

		this.weight = 1
	}
	draw(){
		drawCircle(this.x, this.y, this.radius, colors.highlight01)
		ctx.font = "bold 20px Roboto"
		let width = ctx.measureText(this.weight).width // Text Width 
		ctx.fillText(this.weight, this.x-width/2, this.y+6)
	}
	update(){
		this.draw()
	}
}