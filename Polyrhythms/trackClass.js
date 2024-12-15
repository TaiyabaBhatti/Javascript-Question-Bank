class Track{
    constructor(center, radius){
this.center=center;
this.radius=radius;
    }

    draw(ctx){
ctx.beginPath();
// ctx.arc(this.center.x,this.center.y,this.radius,0,Math.PI*2)
for (let line = 0; line <= Math.PI * 2; line+= 0.1) {
    let pos = this.getPosition(line)
   ctx.lineTo(pos.x,pos.y)
}
ctx.closePath();
ctx.strokeStyle = "white";
ctx.stroke();  //do the drawing now
    }

    getPosition(ballOffset){
      
return {
    x:this.center.x + Math.cos(ballOffset) * this.radius  ,
    y:this.center.y - Math.sin(ballOffset) * this.radius,
}
    }
// returning position according to angle offset
}
