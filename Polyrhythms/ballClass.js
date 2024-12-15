class Ball{
    constructor(track,radius,speed){
        this.track=track;
        this.speed=speed;
        this.radius=radius;
        this.offset = 0; //ball track in beginneing we control by setting offset
        this.direction=1;
         this.center =  this.track.getPosition(this.offset);

    }

draw(ctx){

    ctx.beginPath();
    ctx.arc(this.center.x,this.center.y,this.radius,0,Math.PI*2)
    ctx.fillStyle = "white";
    ctx.fill()
    ctx.strokeStyle = "white";
    ctx.stroke();  //do the drawing now
}
move(){
    this.offset += this.speed * this.direction;
    this.center = this.track.getPosition(this.offset)
    if(this.center.y > this.track.center.y){

this.direction *=-1;


    }
    // console.log(this.center.y,this.track.center.y)
}

}