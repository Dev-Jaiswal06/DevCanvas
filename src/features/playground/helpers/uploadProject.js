export default function uploadProject(accept = ".html,.css,.js") {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    input.multiple = true;
    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      Promise.all(
        files.map((f) =>
          f.text().then((content) => ({ name: f.name, content }))
        )
      ).then(resolve);
    };
    input.click();
  });
}
