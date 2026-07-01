function LessonPractice({ practice }) {
  if (!practice || practice.length === 0) return null;
  return (

<div className="mt-16">

<h2 className="text-3xl font-bold">

Practice Questions

</h2>

<ul className="mt-6 space-y-4">

{practice.map((item, i) => (

<li key={i}>✅ {item}</li>

))}

</ul>

</div>

  );
}

export default LessonPractice;
