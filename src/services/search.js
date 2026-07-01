export function searchLessons(query, lessons) {
  const q = query.toLowerCase();
  return lessons.filter(
    (l) =>
      l.title.toLowerCase().includes(q) ||
      l.tags?.some((t) => t.toLowerCase().includes(q))
  );
}
