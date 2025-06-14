canvas = document.querySelector("canvas")
ctx = canvas.getContext('2d')

canvas.height = 480
canvas.width = 640

var colors = {dark:"#102136", light:"#c2fffe", highlight01:"#ed9600", highlight02:"#d42a00"}

function clearScene(){
	ctx.clearRect(0,0,canvas.width, canvas.height)
	ctx.fillStyle = "#102136"
	ctx.fillRect(0,0,canvas.width, canvas.height)
}

var scene = new Scene()

scene.add(new Circle(150,150,80,5))
scene.add(new Rectangle(150,350,150,30,false))
//scene.add(new Figure([new Dot(150,150),new Dot(250,150),new Dot(250,250),new Dot(150,250)], new Center(200,200)))

var fps = 60 

function main(){
	setTimeout(()=>{
	window.requestAnimationFrame(main)
	}, 1000/fps)
	clearScene()

	ctx.fillStyle = "#c2fffe"
	// TEST
	scene.gameobjects[1].figure.Physics.stop(scene.gameobjects[0].figure) // TEST

	scene.update()

	
}
main()

onmouseup = function(event){
	scene.gameobjects[1].figure.Collision.isCollidedDot(event.x-window.innerWidth/2+canvas.width/2,
													 event.y-window.innerHeight/2+canvas.height/2)
}
