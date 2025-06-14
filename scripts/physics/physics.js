class Physics{
	constructor(self){
		this.self = self
		this.self.vector = {x:0, y:0}

		this.vectors = {}

		//this.Collision = this.self.Collision
		
		this.gravity()
	}
	gravity(){
		this.vectors.gravity = {x:0, y:1, power:1} 
	}
	stop(figure){ // Input Figure // TEST CONTINUE LATER
		if(this.self.Collision.isCollidedFigure(figure)){
			figure.Physics.vectors.gravity.power = 0
		}else{
			figure.Physics.vectors.gravity.power = 1
		}
	}
	update(){
		//this.gravity()

		// Vector Update
		this.self.vector.x = 0
		this.self.vector.y = 0
		for(let vec in this.vectors){
			vec = this.vectors[vec]

			this.self.vector.x += vec.x*vec.power
			this.self.vector.y += vec.y*vec.power
		}

		// Update Position of Dots And Center
		this.self.center.x += this.self.vector.x
		this.self.center.y += this.self.vector.y
		for(let dot in this.self.dots){
			dot = this.self.dots[dot]
			dot.x += this.self.vector.x
			dot.y += this.self.vector.y
		}
	}
}