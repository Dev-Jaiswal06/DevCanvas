export const copyCode = async (code) => {
  try {
    await navigator.clipboard.writeText(code);
    return true;
  } catch {
    return false;
  }
};
