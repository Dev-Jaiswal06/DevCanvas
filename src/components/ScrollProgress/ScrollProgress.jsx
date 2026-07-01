import { useEffect, useState } from "react";

function ScrollProgress() {

  const [scroll,setScroll]=useState(0);

  useEffect(()=>{

    const handleScroll=()=>{

      const total=document.documentElement.scrollHeight-window.innerHeight;

      const current=window.scrollY;

      setScroll((current/total)*100);

    }

    window.addEventListener("scroll",handleScroll);

    return()=>window.removeEventListener("scroll",handleScroll);

  },[])

  return(

<div

className="fixed top-0 left-0 h-1 bg-cyan-400 z-[9999]"

style={{

width:`${scroll}%`

}}

>

</div>

  )

}

export default ScrollProgress
