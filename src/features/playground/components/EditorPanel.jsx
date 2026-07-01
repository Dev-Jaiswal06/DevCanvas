import CodeMirror from "@uiw/react-codemirror";
import { html as htmlLang } from "@codemirror/lang-html";
import { css as cssLang } from "@codemirror/lang-css";
import { javascript as jsLang } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { usePlayground } from "../PlaygroundContext";

const extensions = {
  html: htmlLang({ autoCloseTags: true }),
  css: cssLang(),
  javascript: jsLang(),
};

const codeMap = {
  html: { state: "html", setter: "setHTML" },
  css: { state: "css", setter: "setCSS" },
  javascript: { state: "javascript", setter: "setJavaScript" },
};

function EditorPanel() {
  const pg = usePlayground();
  const active = codeMap[pg.activeTab];
  const value = pg[active.state];
  const setter = pg[active.setter];

  const handleChange = (val) => {
    setter(val);
    if (pg.autoRun) {
      pg.clearConsole();
    }
  };

  return (
    <div className="h-full flex flex-col">
      <CodeMirror
        value={value}
        onChange={handleChange}
        extensions={[extensions[pg.activeTab]]}
        theme={pg.theme !== "light" ? oneDark : undefined}
        height="100%"
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: true,
          autoClosingBrackets: true,
          autoClosingTags: true,
          bracketMatching: true,
          closeBrackets: true,
          highlightSelectionMatches: true,
          tabSize: 2,
        }}
        style={{ fontSize: `${pg.fontSize}px`, height: "100%" }}
      />
    </div>
  );
}

export default EditorPanel;
