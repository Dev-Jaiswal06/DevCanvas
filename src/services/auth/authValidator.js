export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePassword(password) {
  if (password.length < 6) return "Password must be at least 6 characters";
  if (password.length > 50) return "Password must be at most 50 characters";
  return null;
}

export function validateUsername(username) {
  if (username.length < 3) return "Username must be at least 3 characters";
  if (username.length > 20) return "Username must be at most 20 characters";
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return "Username can only contain letters, numbers, and underscores";
  return null;
}

export function validateName(name) {
  if (name.length < 2) return "Name must be at least 2 characters";
  if (name.length > 50) return "Name must be at most 50 characters";
  return null;
}
