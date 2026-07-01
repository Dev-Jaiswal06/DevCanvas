import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import Background from "../components/Background/Background";
import CursorGlow from "../components/CursorGlow/CursorGlow";
import BackToTop from "../components/BackToTop/BackToTop";
import Particles from "../components/Particles/Particles";

import CommandPalette from "../components/CommandPalette/CommandPalette";
import NotificationCenter from "../features/toast/NotificationCenter";
import InstallPrompt from "../components/PWA/InstallPrompt";
import { useSidebar } from "../context/SidebarContext";
import { useNotify } from "../features/toast/NotificationContext";

function MainLayout({ children }) {
  const { isOpen } = useSidebar();
  const { toasts, removeToast } = useNotify();

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen max-w-[100vw] overflow-x-hidden">

      <ScrollProgress />

      <CommandPalette />

      <NotificationCenter toasts={toasts} removeToast={removeToast} />

      <Navbar />

      <Background />

      <CursorGlow />

      <Particles />

      <Sidebar />

      <div
        className={`pt-20 transition-all duration-300 min-h-screen flex flex-col ${
          isOpen ? "ml-0 lg:ml-64" : "ml-0 lg:ml-24"
        }`}
      >
        <main className="flex-1 max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </div>

      <InstallPrompt />

      <BackToTop />

    </div>
  );
}

export default MainLayout;
