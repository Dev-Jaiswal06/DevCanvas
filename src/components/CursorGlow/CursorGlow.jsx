import {useState,useEffect} from "react";

function CursorGlow(){

const[pos,setPos]=useState({

x:0,

y:0

})

useEffect(()=>{

const move=(e)=>{

setPos({

x:e.clientX,

y:e.clientY

})

}

window.addEventListener("mousemove",move)

return()=>window.removeEventListener("mousemove",move)

},[])

return(

<div

className="fixed pointer-events-none z-0 w-72 h-72 rounded-full bg-cyan-500/20 blur-[120px]"

style={{

left:pos.x-150,

top:pos.y-150

}}

>

</div>

)

}

export default CursorGlow
