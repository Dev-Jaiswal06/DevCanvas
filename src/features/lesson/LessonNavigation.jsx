import { Link } from "react-router-dom";

function LessonNavigation({

courseName,

previous,

next

}){

return(

<div className="flex justify-between mt-20">

{

previous?

<Link

to={`/${courseName}/${previous.slug}`}

className="px-6 py-3 rounded-xl bg-white/10"

>

← {previous.title}

</Link>

:

<div/>

}

{

next?

<Link

to={`/${courseName}/${next.slug}`}

className="px-6 py-3 rounded-xl bg-cyan-400 text-black"

>

{next.title} →

</Link>

:

<div/>

}

</div>

)

}

export default LessonNavigation;
