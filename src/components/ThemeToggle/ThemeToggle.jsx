import { useTheme } from "../../context/ThemeContext";

const themeIcons = {
  dark: "🌙",
  light: "☀️",
};

function ThemeToggle() {
  const { theme, themes, setTheme } = useTheme();
  const currentIndex = themes.indexOf(theme);

  const cycleTheme = () => {
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <button
      onClick={cycleTheme}
      className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition flex items-center justify-center shrink-0"
      title={`Theme: ${theme} (click to cycle)`}
    >
      <span className="text-sm">{themeIcons[theme] || "🌙"}</span>
    </button>
  );
}

export default ThemeToggle;
