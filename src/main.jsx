import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./styles/variables.css";
import "./styles/themes.css";
import "./styles/animations.css";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { SidebarProvider } from "./context/SidebarContext";
import { CourseProvider } from "./context/CourseContext";
import { PlaygroundProvider } from "./features/playground/PlaygroundContext";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./features/toast/NotificationContext";
import { ProgressProvider } from "./context/ProgressContext";

import { QuizProvider } from "./context/QuizContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <AuthProvider>
          <CourseProvider>
            <NotificationProvider>
              <ProgressProvider>
              <QuizProvider>
              <PlaygroundProvider>
                <App />
                <Toaster position="top-right" />
              </PlaygroundProvider>
              </QuizProvider>
              </ProgressProvider>
            </NotificationProvider>
          </CourseProvider>
        </AuthProvider>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);
