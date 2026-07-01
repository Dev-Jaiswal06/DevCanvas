import LessonCard from "./LessonCard";

function LessonGrid({ lessons, courseName }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} courseName={courseName} />
      ))}
    </div>
  );
}

export default LessonGrid;
