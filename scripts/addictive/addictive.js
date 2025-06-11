function drawCircle(x,y,radius,color=colors.light,gap=3){
	let lineWidth = ctx.lineWidth
	let strColor = ctx.strokeStyle
	let fillColor = ctx.fillStyle

	ctx.beginPath()
	ctx.arc(x,y,radius, 0, Math.PI*2)
	ctx.lineWidth = gap
	ctx.strokeStyle = color
	ctx.fillStyle = colors.dark
	ctx.fill()
	ctx.stroke()
	ctx.closePath()

	ctx.lineWidth = lineWidth
	ctx.strokeStyle = strColor
	ctx.fillStyle = fillColor
}

function getDistance(x1,y1,x2,y2){
	let dist = Math.sqrt((x2-x1)**2+(y2-y1)**2)
	return dist
}
function getVector(x1,y1,x2,y2){
	let vector = {x: x2-x1, y:y2-y1}
	let dist = getDistance(x1,y1,x2,y2)
	return {x:vector.x/dist, y:vector.y/dist} 
}
