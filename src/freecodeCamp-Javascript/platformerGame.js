 const startBtn=document.getElementById("start-btn");
 const canvas=document.getElementById("canvas");  // screen 3 game screen 
 const startScreen=document.querySelector(".start-screen");  //screen 1
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

}
