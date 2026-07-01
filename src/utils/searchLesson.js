export const searchLesson = (query, lessons) => {
  const q = query.toLowerCase();
  return lessons.filter((l) => l.title.toLowerCase().includes(q));
};
