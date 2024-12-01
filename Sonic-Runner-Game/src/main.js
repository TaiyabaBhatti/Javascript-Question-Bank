import kCtx from "./kaplayContext";
import mainMenu from "./scenes/mainMenu";

kCtx.loadSprite("chemical-bg", "graphics/chemical-bg.png");
kCtx.loadSprite("platform", "graphics/platforms.png");
kCtx.loadSprite("sonic-player", "graphics/sonic.png", {
  sliceX: 8,
  sliceY: 2,
  anims: {
    run: { from: 0, to: 7, loop: true, speed: 30 },
    jump: { from: 8, to: 15, loop: true, speed: 100 },
  },
});

kCtx.loadSprite("rings", "graphics/ring.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
      spin: { from: 0, to: 15, loop: true, speed: 30 },
    },
  })

  kCtx.loadSprite("motobug", "graphics/motobug.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
      run: { from: 0, to: 4, loop: true, speed: 30 }
    },
  });

kCtx.loadFont("mania","mania.ttf");
kCtx.loadSound("city","sounds/city.mp3");
kCtx.loadSound("Destroy","sounds/Destroy.wav");
kCtx.loadSound("hurt","sounds/Hurt.wav");
kCtx.loadSound("hyperring","sounds/HyperRing.wav");
kCtx.loadSound("jump","sounds/Jump.wav");
kCtx.loadSound("ring","sounds/Ring.wav");

kCtx.scene("main-menu",mainMenu);

kCtx.scene("game",()=>{});

kCtx.scene("game-over",()=>{});

kCtx.go("main-menu")