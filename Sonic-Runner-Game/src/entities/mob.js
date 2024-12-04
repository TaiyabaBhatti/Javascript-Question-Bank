import kCtx from "../kaplayContext";


export default function mob(pos) {
  return kCtx.add([
    kCtx.sprite("motobug",{anim:"run"}),
    kCtx.area(),
    kCtx.anchor("center"),
    kCtx.pos(pos),
    kCtx.scale(4),
    kCtx.offscreen(),
    "enemy"
  ])
    
}
