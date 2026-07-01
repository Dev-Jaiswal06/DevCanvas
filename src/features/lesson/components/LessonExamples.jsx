import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function LessonExamples({ examples }) {
  if (!examples || examples.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold">Examples</h2>
      <div className="mt-6 space-y-8">
        {examples.map((ex, i) => (
          <div key={i} className="rounded-2xl bg-white/5 p-6">
            {ex.title && <h3 className="text-xl font-semibold mb-3">{ex.title}</h3>}
            {ex.description && <p className="text-gray-400 mb-4">{ex.description}</p>}
            <SyntaxHighlighter language={ex.language || "html"} style={oneDark}>
              {ex.code}
            </SyntaxHighlighter>
            {ex.result && (
              <div className="mt-4 rounded-xl bg-white p-4 text-black">
                {ex.result}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LessonExamples;
