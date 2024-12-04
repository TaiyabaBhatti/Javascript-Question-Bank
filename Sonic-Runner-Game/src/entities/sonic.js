import kCtx from "../kaplayContext";


export default function sonic(pos) {
 

const sonicPlayer = kCtx.add([
    kCtx.sprite("sonic-player",{anim:"run"}),
    kCtx.scale(4),
    kCtx.area(),
    kCtx.anchor("center"),
    kCtx.pos(pos),
    kCtx.body({jumpForce:1700}),
    {
        setControls(){
            kCtx.onButtonPress("jump",()=>{
                if(this.isGrounded()){
                    this.play("jump")
                    this.jump();
                    kCtx.play("jump",{volume:0.5})
                }
            });
        },

        setEvents(){
            this.onGround(()=>{
                this.play("run");
            })
        }
    }

])
   return sonicPlayer; 
  
}
