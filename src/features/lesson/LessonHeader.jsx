import BookmarkButton from "./BookmarkButton";

function LessonHeader({ lesson }) {
  return (

<div>

<div className="flex justify-between items-start">

<div>

<h1 className="text-5xl font-black">

{lesson.title}

</h1>

<p className="mt-5 text-gray-400">

{lesson.description}

</p>

</div>

<BookmarkButton />

</div>

<div className="flex gap-4 mt-8">

<span className="px-4 py-2 rounded-xl bg-cyan-500/20">

{lesson.difficulty || lesson.level}

</span>

<span className="px-4 py-2 rounded-xl bg-purple-500/20">

{lesson.duration}

</span>

</div>

<p className="mt-5">

Reading Time : {lesson.duration}

</p>

<p className="mt-8 leading-8">

💡 {lesson.analogy}

</p>

</div>

  );
}

export default LessonHeader;
