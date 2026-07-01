const TOKEN_KEY = "devcanvas_token";
const USER_KEY = "devcanvas_user";

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token) {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch {}
}

export function removeToken() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {}
}

export function getUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setUser(user) {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch {}
}

export function removeUser() {
  try {
    localStorage.removeItem(USER_KEY);
  } catch {}
}

export function clearAuth() {
  removeToken();
  removeUser();
}
