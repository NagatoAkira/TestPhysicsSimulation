class Rectangle{
	constructor(x,y,width,height,isDynamic=true){
		this.figure = new Figure([new Dot(x-width/2,y-height/2),
								  new Dot(x+width/2,y-height/2),
								  new Dot(x+width/2,y+height/2),
								  new Dot(x-width/2,y+height/2)], 
								  new Center(x,y),isDynamic)
	}
	update(){
		this.figure.update()
	}
}

class Circle{
	constructor(x,y,radius,amount=3,isDynamic=true){
		this.x = x
		this.y = y
		this.radius = radius
		this.amount = amount

		this.isDynamic = isDynamic

		this.figure = null
		this.initFigure()
	}
	initFigure(){
		let dots = []

		let step = 360/this.amount
		let degrees = this.amount%2==0 ? -step : 0
		let rad = this.radius

		for(let i=0; i<this.amount; i++){
			let vec = {x: Math.sin(Math.PI/360*degrees), y: Math.cos(Math.PI/360*degrees)}
			dots.push(new Dot(this.x+vec.x*rad, this.y+vec.y*rad))
			degrees += step*2
		}

		this.figure = new Figure(dots,new Center(this.x, this.y),this.isDynamic)
	}
	update(){
		this.figure.update()
	}
}