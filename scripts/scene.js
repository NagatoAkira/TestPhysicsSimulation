class Scene{
	constructor(gameobjects=[]){
		this.gameobjects = gameobjects
	}
	add(gameobject){
		this.gameobjects.push(gameobject)
	}
	update(){
		for(let gmobj in this.gameobjects){
			gmobj = this.gameobjects[gmobj]
			gmobj.update()
		}
	}
}