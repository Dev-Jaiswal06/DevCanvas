import { getItem, setItem } from "./storage";

const KEY = "course_progress";

export const getProgress = () => getItem(KEY) || {};

export const markComplete = (courseId, lessonId) => {
  const progress = getProgress();
  if (!progress[courseId]) progress[courseId] = [];
  if (!progress[courseId].includes(lessonId)) {
    progress[courseId].push(lessonId);
  }
  setItem(KEY, progress);
};
