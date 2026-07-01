import { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext();

let nid = 0;

export function NotificationProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const notify = useCallback((message, type = "info", duration = 4000) => {
    const id = ++nid;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ toasts, notify, removeToast }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotify() {
  return useContext(NotificationContext);
}

export default NotificationContext;
