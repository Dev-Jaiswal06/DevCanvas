import Toolbar from "./components/Toolbar";
import ExplorerPanel from "./components/ExplorerPanel";
import EditorPanel from "./components/EditorPanel";
import PreviewPanel from "./components/PreviewPanel";
import ConsolePanel from "./components/ConsolePanel";
import StatusBar from "./components/StatusBar";
import EditorSettings from "./components/settings/EditorSettings";
import ShortcutModal from "./components/settings/ShortcutModal";
import { usePlayground } from "./PlaygroundContext";

function PlaygroundLayout() {
  const pg = usePlayground();

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col bg-[#121212]">
      <Toolbar />

      <div className="flex-1 flex">
        {pg.explorerOpen && (
          <div className="w-52 shrink-0">
            <ExplorerPanel />
          </div>
        )}

        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 flex">
            <div className="flex-1 min-w-0">
              <EditorPanel />
            </div>
            <div className="w-px bg-white/10" />
            <div className="flex-1 min-w-0">
              <PreviewPanel />
            </div>
          </div>

          <div className="h-48 border-t border-white/10">
            <ConsolePanel />
          </div>
        </div>
      </div>

      <StatusBar />

      {pg.settingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#1E1E1E] rounded-2xl p-8 w-full max-w-md border border-white/10 max-h-[80vh] overflow-y-auto">
            <EditorSettings />
            <button
              onClick={() => pg.setSettingsOpen(false)}
              className="mt-6 w-full py-3 rounded-xl bg-cyan-500 font-semibold hover:bg-cyan-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {pg.shortcutsOpen && (
        <ShortcutModal onClose={() => pg.setShortcutsOpen(false)} />
      )}
    </div>
  );
}

export default PlaygroundLayout;
