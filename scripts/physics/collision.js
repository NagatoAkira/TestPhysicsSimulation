class Collision{
	constructor(self){ // Input Figure
		this.self = self

		this.dots = this.self.dots
		this.center = this.self.center

		this.mesh = []
		this.generateMesh()
	}
	generateMesh(){ // Use Normalized Vectors To Find Collision
		let dots = []
		for(let dot in this.dots){
			dots.push(this.dots[dot])
		}
		dots.push(dots[0])
		for(let dot in dots){
			if(dot == dots.length-1){break}
			let dot01 = dots[dot]
			let dot02 = dots[parseInt(dot)+1]

			let vec01 = getVector(dot01.x, dot01.y, dot02.x, dot02.y)
			let vec02 = getVector(dot01.x, dot01.y, this.center.x, this.center.y)

			let angle = Math.PI/2-Math.atan2(vec01.y,vec01.x)
			let sign = getSign(Math.cos(Math.atan2(vec02.y,vec02.x)+angle))

			let vec = {sign:sign, anchor: dot01, angle: angle}
		 	this.mesh.push(vec)
		}
	}
	isCollided(x,y){ // self is other figure // TEST with POS
		let state = []
		for(let mesh in this.mesh){
			mesh = this.mesh[mesh]
			let vec = getVector(mesh.anchor.x, mesh.anchor.y, x, y)

			let sign = getSign(Math.cos(Math.atan2(vec.y, vec.x)+mesh.angle))
			
			if(sign != mesh.sign){
				return false
			}
		}
		console.log("Mouse is Collided")
		return true
	}
	update(){
		return
	}
}