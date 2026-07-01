import { usePlayground } from "../PlaygroundContext";
import buildPreview from "../helpers/buildPreview";

const deviceWidths = {
  mobile: 375,
  tablet: 768,
  desktop: "100%",
};

function PreviewPanel() {
  const { html, css, javascript, device } = usePlayground();
  const srcDoc = buildPreview(html, css, javascript);
  const width = deviceWidths[device] || "100%";

  return (
    <div className="h-full flex items-center justify-center bg-gray-900">
      <div
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: "100%",
          transition: "width 0.3s ease",
        }}
        className="bg-white"
      >
        <iframe
          srcDoc={srcDoc}
          title="preview"
          className="w-full h-full border-none"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}

export default PreviewPanel;
