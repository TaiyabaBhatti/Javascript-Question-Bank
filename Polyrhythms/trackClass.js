class Track {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
    this.period = Math.PI;
  }

  draw(ctx) {
    ctx.beginPath();
    // ctx.arc(this.center.x,this.center.y,this.radius,0,Math.PI*2)
    for (let line = 0; line <= Math.PI * 2; line += 0.1) {
      let pos = this.getPosition(line);
      ctx.lineTo(pos.x, pos.y);
      //    ctx.closePath();
    }
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke(); //do the drawing now
  }

  getPosition(ballOffset) {
    return {
      x: this.center.x + Math.cos(ballOffset) * this.radius,
      y: this.center.y - Math.abs(Math.sin(ballOffset)) * this.radius,
      round: Math.floor(ballOffset / this.period),
    };
  }
  // returning position according to angle offset
}
