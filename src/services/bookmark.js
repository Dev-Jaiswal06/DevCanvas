import { getItem, setItem } from "./storage";

const KEY = "bookmarks";

export const getBookmarks = () => getItem(KEY) || [];

export const toggleBookmark = (lessonId) => {
  const bookmarks = getBookmarks();
  const idx = bookmarks.indexOf(lessonId);
  if (idx === -1) bookmarks.push(lessonId);
  else bookmarks.splice(idx, 1);
  setItem(KEY, bookmarks);
  return bookmarks;
};

export const isBookmarked = (lessonId) => {
  return getBookmarks().includes(lessonId);
};
