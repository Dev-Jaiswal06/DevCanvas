export default function generateFiles(html, css, javascript) {
  return [
    { name: "index.html", content: html },
    { name: "style.css", content: css },
    { name: "script.js", content: javascript },
  ];
}
