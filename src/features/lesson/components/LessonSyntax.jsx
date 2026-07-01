import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function LessonSyntax({ syntax }) {
  if (!syntax) return null;

  const codeStr = Array.isArray(syntax) ? syntax.join("\n") : syntax;

  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold">Syntax</h2>
      <div className="mt-4 rounded-2xl overflow-hidden">
        <SyntaxHighlighter language="html" style={oneDark}>
          {codeStr}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}

export default LessonSyntax;
