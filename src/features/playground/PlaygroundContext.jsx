import { createContext, useContext, useState, useCallback, useEffect } from "react";
import defaultHTML from "./data/defaultHTML";
import defaultCSS from "./data/defaultCSS";
import defaultJS from "./data/defaultJS";

const PlaygroundContext = createContext();

const STORAGE_KEY = "dv_playground";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

export function PlaygroundProvider({ children }) {
  const saved = loadState();

  const [html, setHTML] = useState(saved?.html ?? defaultHTML);
  const [css, setCSS] = useState(saved?.css ?? defaultCSS);
  const [javascript, setJavaScript] = useState(saved?.javascript ?? defaultJS);
  const [activeTab, setActiveTab] = useState("html");
  const [theme, setTheme] = useState(saved?.theme ?? "One Dark");
  const [fontSize, setFontSize] = useState(saved?.fontSize ?? 14);
  const [wordWrap, setWordWrap] = useState(saved?.wordWrap ?? true);
  const [autoRun, setAutoRun] = useState(saved?.autoRun ?? true);
  const [console, setConsole] = useState([]);
  const [errors, setErrors] = useState([]);
  const [previewMode, setPreviewMode] = useState("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [device, setDevice] = useState("desktop");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [explorerOpen, setExplorerOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      saveState({ html, css, javascript, theme, fontSize, wordWrap, autoRun });
    }, 1500);
    return () => clearTimeout(timer);
  }, [html, css, javascript, theme, fontSize, wordWrap, autoRun]);

  const reset = useCallback(() => {
    setHTML(defaultHTML);
    setCSS(defaultCSS);
    setJavaScript(defaultJS);
    setConsole([]);
    setErrors([]);
  }, []);

  const clearConsole = useCallback(() => {
    setConsole([]);
    setErrors([]);
  }, []);

  const loadTemplate = useCallback((template) => {
    if (template.html !== undefined) setHTML(template.html);
    if (template.css !== undefined) setCSS(template.css);
    if (template.javascript !== undefined) setJavaScript(template.javascript);
    setConsole([]);
    setErrors([]);
  }, []);

  return (
    <PlaygroundContext.Provider value={{
      html, setHTML, css, setCSS, javascript, setJavaScript,
      activeTab, setActiveTab, theme, setTheme,
      fontSize, setFontSize, wordWrap, setWordWrap,
      autoRun, setAutoRun, console, setConsole,
      errors, setErrors, previewMode, setPreviewMode,
      isFullscreen, setIsFullscreen, device, setDevice,
      settingsOpen, setSettingsOpen, shortcutsOpen, setShortcutsOpen,
      explorerOpen, setExplorerOpen, reset, clearConsole, loadTemplate,
    }}>
      {children}
    </PlaygroundContext.Provider>
  );
}

export const usePlayground = () => useContext(PlaygroundContext);
