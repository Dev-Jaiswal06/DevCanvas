import { useState } from "react";

function LessonQuiz({ quiz }) {
  const [selected, setSelected] = useState({});

  if (!quiz || quiz.length === 0) return null;

  const handleSelect = (qIndex, option) => {
    setSelected({ ...selected, [qIndex]: option });
  };

  return (

<div className="mt-16">

<h2 className="text-3xl font-bold">

MCQs

</h2>

<div className="mt-6 space-y-8">

{quiz.map((q, qIndex) => (

<div key={qIndex} className="rounded-2xl bg-white/5 border border-white/10 p-6">

<p className="font-bold mb-4">

{qIndex + 1}. {q.question}

</p>

<div className="space-y-3">

{q.options.map((opt, oIndex) => (

<button

key={oIndex}

onClick={() => handleSelect(qIndex, opt)}

className={`w-full text-left p-4 rounded-xl transition ${
selected[qIndex] === opt
? "bg-cyan-500 text-black"
: "bg-white/10 hover:bg-white/20"
}`}

>

{opt}

</button>

))}

</div>

</div>

))}

</div>

</div>

  );
}

export default LessonQuiz;
