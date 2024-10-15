 const startBtn=document.getElementById("start-btn");
 const canvas=document.getElementById("canvas");  // screen 3 game screen 
//  const startScreen=document.querySelector(".start-screen");  //screen 1
 const checkpointScreen=document.querySelector(".checkpoint-screen"); //screen 2 winning screen

 const checkpointMessage = document.querySelector(".checkpoint-screen > p");  //winning script


//  Using Canvas API for creating graphics


const ctx = canvas.getContext("2d");  // its a drawing object for canvas
canvas.width = innerWidth;
canvas.height = innerHeight;       //using this format fro better internal pixel resolutions

const gravity = 0.5;
let isCheckpointCollisionDetectionActive =true;

//responsive ness for every component,
const proportionalSize = (size) => {
return innerHeight<500?Math.ceil((size / 500) * innerHeight):size;
}

// characteristics for main player
class Player{

    constructor(){
        this.position = {
            x:proportionalSize(10),
            y:proportionalSize(500),
        };
        this.velocity = {
x:0,
y:0,
        };
        this.width=proportionalSize(40);
        this.height=proportionalSize(40);
    }

    // draw player
    draw(){
        ctx.fillStyle = "#99c9ff";
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
// method which will be responsible for updating the player's position and velocity as it moves throughout the game.

    update(){
        this.draw();

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if((this.position.y+this.height+this.velocity.y) <= canvas.height ){

if(this.position.y < 0){
    this.position.y = 0;
    this.velocity.y= gravity;
}

this.velocity.y+= gravity;

        }
        else{
            this.velocity.y= 0;
        }

        if(this.position.x < this.width){
           this.position.x = this.width;
        }

        if(this.position.x >= canvas.width - this.width * 2){
this.position.x=canvas.width - this.width * 2;
        }

    }
}
class Platform{
    constructor(x,y){
       this.position= {x,y};
       this.width=200;
       this.height=proportionalSize(40);
    }

    draw(){
        ctx.fillStyle = "#acd157";
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
 
}

const player =new Player();
const platformPositions=[
{ x:500, y:proportionalSize(450) },
{x:700, y:proportionalSize(400) },
{ x:850, y:proportionalSize(350) },
{x:900, y:proportionalSize(350) },
{ x:1050, y:proportionalSize(150) },
{x:2500, y:proportionalSize(450) },
{ x:2900, y:proportionalSize(400) },
{x:3150, y:proportionalSize(350) },
{ x:3900, y:proportionalSize(450) },
{x:4200, y:proportionalSize(400) },
{ x:4400, y:proportionalSize(200) },
{x:4700, y:proportionalSize(150) },


];

const platforms = platformPositions.map((platform)=> new Platform(platform.x,platform.y));







const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);

platforms.forEach((platform)=>{

    platform.draw();
})


    player.update();

if(keys.rightKey.pressed && player.position.x<proportionalSize(400)){
player.velocity.x=5;
}

else if(keys.leftKey.pressed && player.position.x>proportionalSize(100)){
    player.velocity.x=-5;
}

else{
    player.velocity.x=0; 

if(keys.rightKey.pressed && isCheckpointCollisionDetectionActive){
platforms.forEach((platform)=>{
    platform.position.x-=5;
});
}

else if(keys.leftKey.pressed && isCheckpointCollisionDetectionActive){
    platforms.forEach((platform)=>{
        platform.position.x+=5;
    });




}

}

// Collision detection logic for platforms

    platforms.forEach((platform)=>{

const collisionDetectionRules = [player.position.y + player.height <= platform.position.y,];


    })
    



}




















const keys ={
rightKey:{pressed:false},
leftKey:{pressed:false},
};

const movePlayer = (key,xVelocity, isPressed)=>{

if(!isCheckpointCollisionDetectionActive){
player.velocity.x=0;
player.velocity.y=0;
return;
}

switch(key){

case "ArrowLeft": keys.leftKey.pressed=isPressed;
if(xVelocity === 0){
player.velocity.x = xVelocity;
}
player.velocity.x -= xVelocity;
break;
case "ArrowUp":
case " ":
case "Spacebar":player.velocity.y -= 8;
break;
case "ArrowRight": keys.rightKey.pressed=isPressed;
if(xVelocity === 0){
player.velocity.x = xVelocity;
}
player.velocity.x 
+= xVelocity;
break;
}



}


window.addEventListener("keydown",({key})=>{

movePlayer(key,8,true);

})

window.addEventListener("keyup",({key})=>{
    movePlayer(key,0,false);
    })





const startGame = () => {
    // canvas.style.display = "block";
    // startScreen.style.display = "none";
    animate();
  }
  startGame();
//   startBtn.addEventListener("click",startGame);