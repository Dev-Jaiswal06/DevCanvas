export const readingTime = (text) => {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};
