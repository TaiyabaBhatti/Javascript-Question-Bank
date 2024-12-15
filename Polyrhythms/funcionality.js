
const canvasSize=600;
const canvasElement = document.getElementById("myCanvas");
canvasElement.width=canvasSize;
canvasElement.height=canvasSize;

const ctx = canvasElement.getContext("2d"); 
// context object, object used for drawing different things on canvas
let trackCenter = {x:canvasSize/2,y:canvasSize/2};
let trackRadius = 100;
let ballRadius = 8;
let ballSpeed = 0.01;
const track = new Track(trackCenter,trackRadius)
const ball = new Ball(track,ballRadius, ballSpeed);


animate()

// animate ball accoding to the track

function animate(){
    ctx.clearRect(0,0,canvasSize,canvasSize);
    track.draw(ctx);
    ball.move();
    ball.draw(ctx);
    requestAnimationFrame(animate)
}


