function Interview({items}){

return(

<div className="mt-16">

<h2 className="text-3xl font-bold">

Interview Questions

</h2>

<ul className="mt-6 space-y-4">

{

items.map((item,index)=>(

<li key={index}>

🎯 {item}

</li>

))

}

</ul>

</div>

)

}

export default Interview
