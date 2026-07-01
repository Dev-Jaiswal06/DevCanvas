export default function combineCode(html, css, javascript) {
  return `<!DOCTYPE html>
<html>
<head>
<style>${css}</style>
</head>
<body>
${html}
<script>${javascript}<\/script>
</body>
</html>`;
}
