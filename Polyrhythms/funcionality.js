
const canvasSize=600;
const canvasElement = document.getElementById("myCanvas");
canvasElement.width=canvasSize;
canvasElement.height=canvasSize/2;

const ctx = canvasElement.getContext("2d"); 
// context object, object used for drawing different things on canvas
let trackCenter = {x:canvasSize/2,y:canvasSize/2};
let trackMinRadius = 100;
let trackStep =9;
let ballRadius = 5;
let ballMinSpeed = 0.01;
let ballSpeedStep = -0.0001;
let soundFrequencies = [1760, 1567.98, 1396.91, 1318.51, 1174.66, 1046.5, 987.77, 880,
    783.99, 698.46, 659.25, 587.33, 523.25, 493.88, 440, 392, 349.23,
    329.63, 293.66, 261.63];
    const colors = [
        "red", "blue", "green", "yellow", "purple",
        "orange", "pink", "brown", "black", "white",
        "cyan", "magenta", "lime", "teal", "indigo",
        "violet", "gold", "silver", "gray", "maroon"
      ];
      

let trackArr = [];
let ballArr = [];
let n=20;

for (let index = 0; index <= n; index++) {
    let ballSpeed =ballMinSpeed + index * ballSpeedStep;
    let ballColor= colors[index]
    let frequency = soundFrequencies[index]
    const trackRadius = trackMinRadius + index * trackStep ;
    const track = new Track(trackCenter,trackRadius)
const ball = new Ball(track,ballRadius, ballSpeed,frequency,ballColor);
trackArr.push(track);
ballArr.push(ball);
}
animate()

// animate ball accoding to the track

function animate(){
    ctx.clearRect(0,0,canvasSize,canvasSize);
    // for (let i = 0; i < n; i++) {
    //     trackArr[i].draw(ctx);
    //     ballArr[i].move();
    //     ballArr[i].draw(ctx); 
    // }
    trackArr.forEach((track) => track.draw(ctx));
    ballArr.forEach((ball) => ball.move(ctx));
    ballArr.forEach((ball) => ball.draw(ctx));

    requestAnimationFrame(animate)
}


