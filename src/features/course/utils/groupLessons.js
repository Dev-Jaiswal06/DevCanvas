export default function groupLessons(lessons, groupSize = 5) {
  const groups = [];
  for (let i = 0; i < lessons.length; i += groupSize) {
    groups.push({
      title: `Lessons ${i + 1}-${Math.min(i + groupSize, lessons.length)}`,
      lessons: lessons.slice(i, i + groupSize),
    });
  }
  return groups;
}
