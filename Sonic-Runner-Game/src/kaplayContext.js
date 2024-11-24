import kaplay from "kaplay";
const kCtx = kaplay({
    width:2520,
    height:1090,
    letterbox:true,
    touchToMouse:true,
    global:false,
    background:[0,0,0],
    buttons:{
        jumpUp:{
            keyboard:["space"],
            mouse:"left",
        }, 
    },
    debugKey:"q",
    debug:true,
});

export default kCtx;