function Particles(){

return(

<div className="fixed inset-0 -z-20">

{

[...Array(50)].map((_,i)=>(

<div

key={i}

className="absolute w-1 h-1 rounded-full bg-white/30 animate-pulse"

style={{

top:`${Math.random()*100}%`,

left:`${Math.random()*100}%`

}}

></div>

))

}

</div>

)

}

export default Particles;
