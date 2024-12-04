import sonic from "../entities/sonic";

import kCtx from "../kaplayContext";
import mob from "../entities/mob";

export default function game() {
  
kCtx.setGravity(3100);

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

let gameSpeed = 300;

kCtx.loop(1,()=>{
    gameSpeed+=50;
});

const sonicMake = sonic(kCtx.vec2(200,750));
sonicMake.setControls();
sonicMake.setEvents();
sonicMake.onCollide("enemy",(enemy)=>{
    if(!sonicMake.isGrounded()){
kCtx.play("Destroy",{volume:0.5})
kCtx.play("hyperring",{volume:0.8})
kCtx.destroy(enemy)
sonicMake.play("jump")
return;
    }

kCtx.play("hurt",{volume:0.8})
kCtx.go("game-over")

})

const spawnMotoBug = ()=>{
const motoBug = mob(kCtx.vec2(1960,773));
motoBug.onUpdate(()=>{
if(gameSpeed < 3000){
    motoBug.move(-(gameSpeed  +300),0)
    return
}
motoBug.move(-gameSpeed,0)
});

motoBug.onExitScreen(()=>{
    if(motoBug.pos.x < 0) kCtx.destroy(motoBug);
});
const waitTime = kCtx.rand(0.5,2.5);
kCtx.wait(waitTime,spawnMotoBug);

}

spawnMotoBug()

kCtx.add([
    kCtx.rect(1920,3000),
    kCtx.opacity(0),
    kCtx.area(),
    kCtx.body({isStatic:true}),
    kCtx.pos(0,832)
]);

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

platforms[0].move(-gameSpeed,0);
platforms[1].moveTo(platforms[0].pos.x + platformWidth * 4, 450)

bgPieces[0].moveTo(bgPieces[0].pos.x, sonicMake.pos.y / 10 -50);
bgPieces[1].moveTo(bgPieces[1].pos.x, sonicMake.pos.y / 10 -50);
})
}
