import { createContext, useContext, useState, useEffect, useCallback } from "react";

const TourContext = createContext();

export function TourProvider({ children }) {
  const [runTour, setRunTour] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem("devcanvas_tour_completed");
    if (!completed) {
      const timer = setTimeout(() => setRunTour(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const completeTour = useCallback(() => {
    localStorage.setItem("devcanvas_tour_completed", "true");
    setRunTour(false);
  }, []);

  const resetTour = useCallback(() => {
    localStorage.removeItem("devcanvas_tour_completed");
    setRunTour(true);
  }, []);

  return (
    <TourContext.Provider value={{ runTour, setRunTour, completeTour, resetTour }}>
      {children}
    </TourContext.Provider>
  );
}

export function useTour() {
  return useContext(TourContext);
}

export default TourContext;
