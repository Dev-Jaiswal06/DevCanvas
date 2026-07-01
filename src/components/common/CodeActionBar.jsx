import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function CodeActionBar({ code, language }) {
  return (
    <div className="flex gap-3 mt-4">
      <CopyToClipboard text={code} onCopy={() => toast.success("Copied!")}>
        <button className="px-4 py-2 rounded-lg bg-white/10 text-sm hover:bg-white/20">
          Copy
        </button>
      </CopyToClipboard>

      <Link
        to={`/playground?code=${encodeURIComponent(code)}&lang=${language}`}
        className="px-4 py-2 rounded-lg bg-cyan-500/20 text-sm hover:bg-cyan-500/30"
      >
        Open in Playground
      </Link>
    </div>
  );
}

export default CodeActionBar;
