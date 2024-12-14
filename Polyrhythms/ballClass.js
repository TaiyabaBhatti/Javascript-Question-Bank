class Ball{
    constructor(track,radius,speed){
        this.track=track;
        this.speed=speed;
        this.radius=radius
    }

draw(ctx){

    ctx.beginPath();
    ctx.arc(this.track.center.x,this.track.center.y,this.radius,0,Math.PI*2)
    ctx.fillStyle = "white";
    ctx.fill()
    ctx.strokeStyle = "white";
    
    ctx.stroke();  //do the drawing now
}

}