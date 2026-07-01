export default function filterLessons(lessons, filters) {
  let result = [...lessons];

  if (filters.difficulty) {
    result = result.filter(
      (l) => l.difficulty?.toLowerCase() === filters.difficulty.toLowerCase()
    );
  }

  if (filters.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(
      (l) =>
        l.title?.toLowerCase().includes(q) ||
        l.description?.toLowerCase().includes(q) ||
        l.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }

  return result;
}
