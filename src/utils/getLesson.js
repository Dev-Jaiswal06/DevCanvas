export function getLesson(course, slug) {
  return course.lessons.find(
    lesson => lesson.slug === slug
  );
}
