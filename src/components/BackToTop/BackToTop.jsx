import {FaArrowUp} from "react-icons/fa";

function BackToTop(){

return(

<button

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center leading-none p-0"

>

<FaArrowUp className="text-lg" />

</button>

)

}

export default BackToTop;
