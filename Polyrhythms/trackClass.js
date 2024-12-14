class Track{
    constructor(center, radius){
this.center=center;
this.radius=radius;
    }

    draw(ctx){
ctx.beginPath();
ctx.arc(this.center.x,this.center.y,this.radius,0,Math.PI*2)
ctx.strokeStyle = "white";
ctx.stroke();  //do the drawing now
    }
}
