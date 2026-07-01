export function getLessonIndex(course, slug) {
  return course.lessons.findIndex(
    lesson => lesson.slug === slug
  );
}
