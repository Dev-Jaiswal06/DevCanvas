function LessonSyntax({ syntax }) {
  if (!syntax) return null;
  return (

<div className="mt-12">

<h2 className="text-3xl font-bold">

Syntax

</h2>

<div className="mt-6 rounded-2xl bg-[#1E1E1E] p-6 overflow-x-auto">

<code className="text-cyan-400">

{syntax}

</code>

</div>

</div>

  );
}

export default LessonSyntax;
