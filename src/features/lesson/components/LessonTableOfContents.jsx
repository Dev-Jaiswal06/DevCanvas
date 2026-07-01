function LessonTableOfContents() {

const items=[
"Theory",
"Real Life Example",
"Code",
"Output",
"Quiz",
"Interview",
"Summary"
]

return(

<div className="rounded-3xl bg-white/5 p-8 my-10">

<h2 className="text-2xl font-bold">

Contents

</h2>

<ul className="mt-6 space-y-4">

{

items.map(item=>(

<li key={item}>

• {item}

</li>

))

}

</ul>

</div>

)

}

export default LessonTableOfContents;
