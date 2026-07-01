import { saveAs } from "file-saver";
import JSZip from "jszip";

export default async function downloadProject(files, projectName = "project") {
  const zip = new JSZip();
  files.forEach((f) => zip.file(f.name, f.content));
  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, `${projectName}.zip`);
}
