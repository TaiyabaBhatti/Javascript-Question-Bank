class Ball{
    constructor(track,radius,speed, frequency,ballColor){
        this.track=track;
        this.speed=speed;
        this.radius=radius;
        this.offset = 0; //ball track in beginneing we control by setting offset
       
        this.round =0;
        this.ballColor=ballColor
        this.frequency=frequency
         this.center =  this.track.getPosition(this.offset);

    }

draw(ctx){

    ctx.beginPath();
    ctx.arc(this.center.x,this.center.y,this.radius,0,Math.PI*2)
    ctx.fillStyle = this.ballColor;
    ctx.fill()
    ctx.strokeStyle = this.ballColor;
    ctx.stroke();  //do the drawing now



}
move(){
    this.offset += this.speed;
    this.result = this.track.getPosition(this.offset);
    this.center = {x:this.result.x, y:this.result.y}

if(this.result.round != this.round){
    playSound(this.frequency)
    this.round=this.result.round;
}
    // console.log(this.center.y,this.track.center.y)
}

}