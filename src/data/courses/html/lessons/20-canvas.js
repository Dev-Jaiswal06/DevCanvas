const lesson = {
  id: 20, slug: "canvas", title: "HTML Canvas",
  description: "Canvas mein JavaScript se graphics draw karna seekhein. Hinglish mein seekhein.",
  difficulty: "Advanced", duration: "25 Minutes", heroImage: "",
  tags: ["HTML", "Canvas", "JavaScript"],
  theory: [
    "<canvas> tag JavaScript ke saath pixel-based graphics banata hai.",
    "Canvas SVG se different hai — Canvas pixel-based hota hai (resolution dependent), SVG vector-based (resolution independent).",
    "getContext('2d') method se 2D drawing context milta hai jiske saath hum draw karte hain.",
    "Key methods: fillRect (filled rectangle), strokeRect (outline), fillStyle/strokeStyle (colors), beginPath/moveTo/lineTo (lines), arc (circles), fillText (text).",
    "Canvas games, real-time charts, image processing, photo editors, animations ke liye use hota hai.",
    "Canvas ko JavaScript se control karte hain — har frame mein clear karke redraw karte hain animation ke liye."
  ],
  examples: [{
    title: "Simple Canvas Drawing",
    description: "Canvas pe rectangle draw karna.",
    code: "<canvas id=\"myCanvas\" width=\"200\" height=\"100\"></canvas>\n<script>\n  const canvas = document.getElementById('myCanvas');\n  const ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'cyan';\n  ctx.fillRect(10, 10, 150, 80);\n</script>",
    result: "[Cyan rectangle drawn on canvas]"
  }],
  syntax: [
    "<canvas id=\"draw\" width=\"400\" height=\"300\"></canvas>",
    "<script>",
    "  const c = document.getElementById('draw').getContext('2d');",
    "  c.fillStyle = 'blue';",
    "  c.fillRect(10, 10, 100, 100);",
    "  c.beginPath();",
    "  c.arc(200, 150, 50, 0, Math.PI * 2);",
    "  c.fill();",
    "</script>"
  ],
  diagram: [
    "<canvas> → Drawing surface",
    "  getContext('2d') → Drawing tools",
    "  fillRect() → Filled rectangle",
    "  fillStyle → Fill color",
    "  beginPath() → Start new shape",
    "  arc() → Circle/arc",
    "  requestAnimationFrame → Animation loop"
  ],
  code: [{
    title: "Canvas Drawing with Multiple Shapes",
    language: "html",
    code: "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Canvas Drawing</h2>\n  <canvas id=\"canvas\" width=\"400\" height=\"300\"></canvas>\n  <script>\n    const ctx = document.getElementById('canvas').getContext('2d');\n    ctx.fillStyle = '#1e293b';\n    ctx.fillRect(0, 0, 400, 300);\n    ctx.fillStyle = '#06b6d4';\n    ctx.fillRect(50, 50, 100, 100);\n    ctx.fillStyle = '#a855f7';\n    ctx.beginPath();\n    ctx.arc(300, 150, 60, 0, Math.PI * 2);\n    ctx.fill();\n    ctx.fillStyle = 'white';\n    ctx.font = '16px Arial';\n    ctx.fillText('Canvas Graphics', 120, 260);\n  </script>\n</body>\n</html>"
  }],
  output: ["[Canvas with rectangle, circle and text]"],
  commonMistakes: [
    "Canvas ko CSS se resize karna (quality loss hota hai — width/height attributes use karo)",
    "Canvas aur SVG mein confuse hona — Canvas pixel-based, SVG vector-based",
    "Canvas size HTML attributes mein set karna bhool jana (sirf CSS se size mat do)",
    "Animation ke liye requestAnimationFrame ki jagah setInterval use karna"
  ],
  bestPractices: [
    "Canvas width/height hamesha HTML attributes mein do (CSS sirf styling ke liye)",
    "Animation ke liye requestAnimationFrame use karo, setInterval nahi",
    "Complex scenes ke liye clearRect() se frame clear karo har frame mein",
    "Canvas games ke liye object-oriented approach use karo"
  ],
  tips: [
    "Canvas games, charts aur image processing ke liye best hai",
    "SVG icons aur logos ke liye best hai — dono ka apna use case hai",
    "Canvas content accessible nahi hai — fallback content provide karo"
  ],
  practice: [
    "Canvas pe ek circle aur rectangle draw karo",
    "Canvas pe text draw karo with different fonts and colors",
    "Ek simple animation banao — moving circle jo left-to-right move kare"
  ],
  exercise: {
    instruction: "Canvas pe ek scene banao jisme blue sky background, green ground, ek orange sun (circle) aur ek brown house (rectangle with triangle roof) ho.",
    hint: "Triangle ke liye beginPath → moveTo → lineTo → closePath → fill use karo.",
    starterCode: "<canvas id=\"scene\" width=\"400\" height=\"300\"></canvas>\n<script>\n  const ctx = document.getElementById('scene').getContext('2d');\n</script>"
  },
  quiz: [
    { question: "Canvas ke drawing context ke liye kaunsa method?", options: ["getContext('2d')", "getCanvas('2d')", "drawContext('2d')", "createContext('2d')"], answer: 0, explanation: "getContext('2d') 2D drawing methods aur properties ka object return karta hai." },
    { question: "Canvas animation ke liye best method kaunsa hai?", options: ["setInterval", "setTimeout", "requestAnimationFrame", "setAnimation"], answer: 2, explanation: "requestAnimationFrame browser ke refresh rate ke saath sync hota hai aur better performance deta hai." }
  ],
  interview: [
    { question: "Canvas kya hai?", answer: "Canvas HTML element hai jo JavaScript ke saath pixel-based graphics banata hai. getContext('2d') se drawing context milta hai jisme shapes, text, images draw kar sakte hain." },
    { question: "Canvas aur SVG mein kya antar hai?", answer: "Canvas pixel-based (resolution dependent), fast rendering, DOM accessible nahi, games/charts ke liye best. SVG vector-based (resolution independent), DOM accessible, logos/icons ke liye best." }
  ],
  assignment: {
    title: "Canvas Animation Assignment",
    description: "Canvas pe ek simple animation banayein.",
    tasks: ["Ek bouncing ball animation banao jo canvas boundaries se bounce kare", "Ball ka color har bounce pe change ho", "Mouse click pe ek naya random circle add ho", "FPS counter display karo", "Clear and efficient code lo"],
    submission: "Code ko GitHub pe push karein aur working demo link submit karein", deadline: "2 weeks"
  },
  resources: [
    { title: "MDN - Canvas Guide", url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" },
    { title: "W3Schools - Canvas", url: "https://www.w3schools.com/html/html5_canvas.asp" },
    { title: "Canvas Animation", url: "https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame" }
  ],
  summary: [
    "<canvas> JavaScript ke saath pixel-based graphics banata hai.",
    "getContext('2d') se drawing context milta hai.",
    "Canvas games, charts, animations ke liye use hota hai.",
    "Canvas SVG se different hai — pixel-based vs vector-based."
  ]
};

export default lesson;
