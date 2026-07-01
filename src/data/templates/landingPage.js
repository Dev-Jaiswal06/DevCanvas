export default {
  name: "Landing Page",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Landing</title>
</head>
<body>
  <nav>
    <div class="logo">Logo</div>
    <ul>
      <li>Features</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
  </nav>
  <main>
    <h1>Amazing Product</h1>
    <p>Built for modern teams.</p>
    <button>Get Started</button>
  </main>
</body>
</html>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui; }
nav { display: flex; justify-content: space-between; padding: 1rem 2rem; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
nav ul { display: flex; list-style: none; gap: 2rem; }
main { text-align: center; padding: 6rem 2rem; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; min-height: 80vh; }
h1 { font-size: 4rem; margin-bottom: 1rem; }
button { padding: 1rem 2rem; font-size: 1.2rem; border: none; border-radius: 8px; background: white; color: #333; cursor: pointer; margin-top: 2rem; }`,
  javascript: ""
};
