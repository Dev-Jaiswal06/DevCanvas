import { createContext, useContext, useEffect, useState } from "react";

const themes = ["dark", "light"];

const ThemeContext = createContext();

function getInitialTheme() {
  try {
    return localStorage.getItem("devcanvas_theme") || "dark";
  } catch {
    return "dark";
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("devcanvas_theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
