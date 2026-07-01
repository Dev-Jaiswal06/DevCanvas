const achievements = [
  { id: "first-lesson", title: "First Lesson", icon: "📖", desc: "Complete your first lesson", xp: 50, requirement: { type: "lessons", count: 1 } },
  { id: "ten-lessons", title: "Getting Started", icon: "🌟", desc: "Complete 10 lessons", xp: 200, requirement: { type: "lessons", count: 10 } },
  { id: "twenty-five", title: "Dedicated Learner", icon: "🔥", desc: "Complete 25 lessons", xp: 500, requirement: { type: "lessons", count: 25 } },
  { id: "fifty-lessons", title: "Half Way There", icon: "💪", desc: "Complete 50 lessons", xp: 1000, requirement: { type: "lessons", count: 50 } },
  { id: "hundred", title: "Century Mark", icon: "🏆", desc: "Complete 100 lessons", xp: 2500, requirement: { type: "lessons", count: 100 } },
  { id: "first-project", title: "Builder", icon: "🛠️", desc: "Complete your first project", xp: 300, requirement: { type: "projects", count: 1 } },
  { id: "perfect-quiz", title: "Perfect Score", icon: "🎯", desc: "Score 100% on a quiz", xp: 100, requirement: { type: "quiz_perfect", count: 1 } },
  { id: "week-streak", title: "7 Day Streak", icon: "🔥", desc: "Study for 7 days in a row", xp: 500, requirement: { type: "streak", count: 7 } },
  { id: "month-streak", title: "Monthly Warrior", icon: "⚡", desc: "Study for 30 days in a row", xp: 2000, requirement: { type: "streak", count: 30 } },
];

export default achievements;
