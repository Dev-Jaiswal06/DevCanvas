import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

function LessonCode({ code }) {
  if (!code || code.length === 0) return null;

  const codeArray = Array.isArray(code) ? code : [{ title: "Code", language: "html", code }];

  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold">Code</h2>
      <div className="mt-4 space-y-8">
        {codeArray.map((item, i) => (
          <div key={i} className="rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center bg-[#1E1E1E] p-4">
              <span className="text-xs uppercase tracking-wider text-gray-400">
                {item.title || item.language || "html"}
              </span>
              <CopyToClipboard text={item.code} onCopy={() => toast.success("Copied!")}>
                <button className="text-sm text-cyan-400 hover:text-cyan-300">Copy</button>
              </CopyToClipboard>
            </div>
            <SyntaxHighlighter language={item.language || "html"} style={oneDark}>
              {item.code}
            </SyntaxHighlighter>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LessonCode;
