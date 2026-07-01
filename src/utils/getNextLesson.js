export function getNextLesson(course, slug) {

  const index = course.lessons.findIndex(
    item => item.slug === slug
  );

  return course.lessons[index + 1] || null;

}
