import { useState, useEffect } from "react";

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      setShowPrompt(false);
      setDeferredPrompt(null);
    });
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!showPrompt) return null;

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === "accepted") setShowPrompt(false);
    setDeferredPrompt(null);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl max-w-xs animate-slide-up">
      <p className="text-sm font-semibold mb-2">Install DevCanvas</p>
      <p className="text-xs text-gray-400 mb-3">Install our app for a better experience with offline support.</p>
      <div className="flex gap-2">
        <button onClick={handleInstall} className="flex-1 px-3 py-1.5 rounded-lg bg-cyan-500 text-xs font-semibold hover:bg-cyan-600 transition">Install</button>
        <button onClick={() => setShowPrompt(false)} className="px-3 py-1.5 rounded-lg bg-white/10 text-xs hover:bg-white/20 transition">Later</button>
      </div>
    </div>
  );
}

export default InstallPrompt;
