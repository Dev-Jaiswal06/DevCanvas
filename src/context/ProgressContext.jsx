import { createContext, useContext, useState, useCallback, useEffect } from "react";

const ProgressContext = createContext();

function loadProgress() {
  try {
    const saved = localStorage.getItem("devcanvas_progress");
    return saved
      ? JSON.parse(saved)
      : { xp: 0, streak: 0, totalDays: 1, completedLessons: [], unlockedAchievements: [], lastVisit: null };
  } catch {
    return { xp: 0, streak: 0, totalDays: 1, completedLessons: [], unlockedAchievements: [], lastVisit: null };
  }
}

function saveProgress(data) {
  localStorage.setItem("devcanvas_progress", JSON.stringify(data));
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const addXP = useCallback((amount) => {
    setProgress((prev) => ({ ...prev, xp: prev.xp + amount }));
  }, []);

  const completeLesson = useCallback((lessonId) => {
    setProgress((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return { ...prev, completedLessons: [...prev.completedLessons, lessonId], xp: prev.xp + 50 };
    });
  }, []);

  const unlockAchievement = useCallback((id) => {
    setProgress((prev) => {
      if (prev.unlockedAchievements.includes(id)) return prev;
      return { ...prev, unlockedAchievements: [...prev.unlockedAchievements, id] };
    });
  }, []);

  const updateStreak = useCallback(() => {
    setProgress((prev) => {
      const today = new Date().toDateString();
      if (prev.lastVisit === today) return prev;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      const newStreak = prev.lastVisit === yesterday ? prev.streak + 1 : 1;
      return { ...prev, streak: newStreak, totalDays: prev.totalDays + 1, lastVisit: today };
    });
  }, []);

  return (
    <ProgressContext.Provider value={{ progress, addXP, completeLesson, unlockAchievement, updateStreak }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}

export default ProgressContext;
