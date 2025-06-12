class Collision{
	constructor(self){ // Input Figure
		this.self = self

		this.dots = this.self.dots
		this.center = this.self.center

		this.mesh = []
	}
	generateMesh(){
		for(let dot in this.dots){
			if(dot == this.dots-1){break}
			let dot01 = this.dots[dot]
			let dot02 = this.dots[dot]+1


			let vec01 = getVector(dot01.x, dot01.y, dot02.x, dot02.y)
			let vec02 = getVector(this.center.x, this.center.y, dot02.x, dot02.y)

		 
		}
	}
}