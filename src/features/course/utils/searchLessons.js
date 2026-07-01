export default function searchLessons(lessons, query) {
  if (!query) return lessons;
  const q = query.toLowerCase();
  return lessons.filter(
    (l) =>
      l.title?.toLowerCase().includes(q) ||
      l.description?.toLowerCase().includes(q) ||
      l.tags?.some((t) => t.toLowerCase().includes(q)) ||
      l.slug?.includes(q)
  );
}
