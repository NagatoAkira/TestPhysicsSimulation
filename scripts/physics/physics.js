class Physics{
	constructor(self){
		this.self = self
		this.self.vector = {x:0, y:0}

		this.vectors = {}
		
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
	GenerateRotateBase(x,y){ // Reconstruct Position Into Degrees Coordinate System (degrees,distance)
		this.rotatePositions = []
		this.rotateBase = {x:x, y:y}
		this.rotatePermission = true
		for(let dot in this.self.dots){
			dot = this.self.dots[dot]
			let dist = getDistance(x,y,dot.x, dot.y)
			let degrees = Math.atan2(dot.y-y, dot.x-x)+Math.PI/2
			this.rotatePositions.push({degrees:degrees, distance:dist})
		}
	}
	rotate(deg){ // Rotate
		if(this.rotatePositions == null){return}
		if(this.rotateBase==null){return}
		if(this.rotatePermission==null){return}

		for(let dot in this.self.dots){
			let x,y
			let degrees, distance

			this.rotatePositions[dot].degrees += deg
			degrees = this.rotatePositions[dot].degrees
			distance = this.rotatePositions[dot].distance

			x = this.rotateBase.x+Math.sin(degrees)*distance
			y = this.rotateBase.y+Math.cos(degrees)*distance

			this.self.dots[dot].x = x
			this.self.dots[dot].y = y
		}
	}
	gyroscope(x,y){ // Measure balance between two parts and return heavier(left or right)
		// Usable only for symmetrical figures
		let left, right
		left = 0
		right = 0
		for(let dot in this.self.dots){
			dot = this.self.dots[dot]
			if(dot.x > x){
				right += getDistance(x,y,dot.x,dot.y)
			}
			if(dot.x < x){
				left += getDistance(x,y,dot.x,dot.y)
			}
		}
		if(right > left){
			return 1
		}
		else 
		if(right < left){
			return -1
		}
		return 0
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