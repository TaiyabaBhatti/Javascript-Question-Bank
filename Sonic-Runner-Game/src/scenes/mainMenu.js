import sonic from "../entities/sonic";
import kCtx from "../kaplayContext";

export default function mainMenu() {
  if (!kCtx.getData("best-score")) kCtx.setData("best-score", 0);

  kCtx.onButtonPress("jump", () => kCtx.go("game"));
  const bgPieceWidth = 1920;
  const platformWidth = 1280;

  const bgPieces = [
    kCtx.add([kCtx.sprite("chemical-bg"),kCtx.pos(0, 0),kCtx.scale(2),kCtx.opacity(0.8),kCtx.area()]),
    kCtx.add([kCtx.sprite("chemical-bg"),kCtx.pos(bgPieceWidth * 2, 0),kCtx.scale(2),kCtx.opacity(0.8),kCtx.area()]),
  ];
  const platforms = [
    kCtx.add([kCtx.sprite("platform"), kCtx.pos(0, 450), kCtx.scale(4)]),
    kCtx.add([kCtx.sprite("platform"),kCtx.pos(platformWidth * 4, 450),kCtx.scale(4),]),
  ];


//   Text
 kCtx.add([
    kCtx.text("Sonic Ring Run",{font:"mania",size:65})
 ]) 


kCtx.add([
    kCtx.text("Press Space/ Click",{font:"mania",size:50}),
    kCtx.anchor("center"),
    kCtx.pos(kCtx.center().x,150)
])



// Sonic anim call
sonic(kCtx.vec2(200,745));


// update loop,  run every frame, 60 times per seconds
kCtx.onUpdate(()=>{
    if(bgPieces[1].pos.x < 0){
        bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth*2,0);
        bgPieces.push(bgPieces.shift());
    }

bgPieces[0].move(-100,0);
bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth*2,0);

if(platforms[1].pos.x < 0){
    platforms[0].moveTo(platforms[1].pos.x + platformWidth * 4,450);
    platforms.push(platforms.shift());
}

platforms[0].move(-4000,0);
platforms[1].moveTo(platforms[0].pos.x + platformWidth * 4, 450)
});


}
