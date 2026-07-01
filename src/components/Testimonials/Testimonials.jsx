const reviews=[

{

name:"Rahul",

review:"Best platform to learn Frontend."

},

{

name:"Priya",

review:"Animations make learning fun."

},

{

name:"Ankit",

review:"Interview preparation is amazing."

}

]

function Testimonials(){

return(

<section className="py-24">

<h2 className="text-5xl font-black text-center">

Student Reviews

</h2>

<div className="grid lg:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto">

{

reviews.map((item,index)=>(

<div

key={index}

className="rounded-3xl bg-white/5 border border-white/10 p-8"

>

<h3 className="text-2xl font-bold">

{item.name}

</h3>

<p className="mt-5 text-gray-400">

{item.review}

</p>

</div>

))

}

</div>

</section>

)

}

export default Testimonials
