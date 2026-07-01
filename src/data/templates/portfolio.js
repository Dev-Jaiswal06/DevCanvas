export default {
  name: "Portfolio",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
</head>
<body>
  <header>
    <h1>John Doe</h1>
    <p>Web Developer</p>
  </header>
  <section>
    <h2>Projects</h2>
    <div class="project">Project 1</div>
    <div class="project">Project 2</div>
  </section>
  <footer>
    <p>Contact: john@example.com</p>
  </footer>
</body>
</html>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui; line-height: 1.6; color: #333; }
header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 4rem 2rem; text-align: center; }
h1 { font-size: 3rem; }
.project { background: #f4f4f4; padding: 2rem; margin: 1rem; border-radius: 8px; }
footer { text-align: center; padding: 2rem; background: #333; color: white; }`,
  javascript: ""
};
