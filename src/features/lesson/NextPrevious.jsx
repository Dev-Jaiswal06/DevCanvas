function NextPrevious({

previous,

next

}){

return(

<div className="flex justify-between mt-20">

<button>

← {previous}

</button>

<button>

{next} →

</button>

</div>

)

}

export default NextPrevious;
