const lesson = {
  id: 31,
  slug: "variables",
  title: "CSS Variables (Custom Properties)",
  description: "Write maintainable CSS with custom properties and dynamic theming",
  difficulty: "Intermediate",
  duration: "45 min",
  heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
  tags: ["CSS", "Variables", "Custom Properties", "Theming"],
  theory: [
    "CSS variables reusable values hain jo CSS mein define karte hain aur poore document mein use kar sakte hain",
    "Variable declare karne ke liye double dash prefix use karte hain: --primary-color: #3498db;",
    "Variable use karne ke liye var() function use karte hain: color: var(--primary-color);",
    ":root selector mein variables define karte hain to globally accessible hote hain poore document mein",
    "Variables specific elements pe bhi define kar sakte hain - isse scoped variables kehte hain",
    "var() function mein fallback value de sakte hain: var(--primary, blue)",
    "CSS variables inheritance follow karte hain - child elements apne parent ke variables inherit karte hain",
    "Dynamic theming CSS variables ka sabse powerful use case hai - JavaScript se values change karke theme switch kar sakte hain",
    "Dark/light mode CSS variables se easy hai - :root mein light, data-theme dark mein dark variables define karo",
    "JavaScript se CSS variables access: getComputedStyle(element).getPropertyValue('--var')",
    "JavaScript se CSS variables set: element.style.setProperty('--var', 'value')",
    "Variables ko media queries mein bhi redefine kar sakte hain - responsive theming ke liye perfect",
    "CSS variables animations aur transitions ke saath kaam karte hain - preprocessor variables ki tarah static nahi hain",
    "@property rule se CSS variables ko type aur initial value de sakte hain - animations ke liye useful",
    "CSS variables runtime mein values change ki ja sakti hain - jo preprocessors mein possible nahi hai"
  ],
  examples: [
    { title: "Basic Variables", description: "Declaring and using CSS variables in :root", code: ":root { --primary: #3498db; --padding: 16px; } .box { color: var(--primary); padding: var(--padding); }", result: "Box element primary color aur defined padding ke saath style hoga" },
    { title: "Fallback Values", description: "Using fallback when variable is not defined", code: ".text { color: var(--text-color, #333); }", result: "Agar --text-color define nahi hai to default #333 use hoga" },
    { title: "Scoped Variables", description: "Variables limited to a specific component", code: ".card { --radius: 12px; } .card img { border-radius: var(--radius); }", result: "--radius variable sirf .card component ke andar accessible hai" }
  ],
  syntax: [
    "Declaration: --variable-name: value;",
    "Usage: property: var(--variable-name, fallback);",
    "@property: @property --my-color { syntax: '<color>'; inherits: false; initial-value: red; }"
  ],
  diagram: [
    "+------------------------------------------------------------------+",
    "|                CSS VARIABLES INHERITANCE                          |",
    "|                                                                  |",
    "|  :root { --primary: blue; }                                      |",
    "|    |                                                             |",
    "|  body { color: var(--primary); } -> blue                          |",
    "|    |                                                             |",
    "|  .container { --primary: red; }  <- Override at any level         |",
    "|    |                                                             |",
    "|  .child { color: var(--primary); } -> red (overridden)            |",
    "|    |                                                             |",
    "|  .card { color: var(--primary, green); } -> green (fallback)      |",
    "+------------------------------------------------------------------+"
  ],
  code: [
    { title: "Dark/Light Theme with Variables", language: "css", code: "/* Light theme default */\n:root {\n  --bg: #ffffff;\n  --text: #1a1a2e;\n  --primary: #4361ee;\n  --secondary: #3f37c9;\n  --accent: #f72585;\n  --card-bg: #f8f9fa;\n  --border: #dee2e6;\n  --shadow: rgba(0,0,0,0.1);\n}\n\n/* Dark theme */\n[data-theme='dark'] {\n  --bg: #1a1a2e;\n  --text: #e0e0e0;\n  --primary: #4cc9f0;\n  --secondary: #4895ef;\n  --accent: #f72585;\n  --card-bg: #16213e;\n  --border: #2a2a4a;\n  --shadow: rgba(0,0,0,0.4);\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n  transition: background 0.3s, color 0.3s;\n}\n\n.card {\n  background: var(--card-bg);\n  border: 1px solid var(--border);\n  box-shadow: 0 2px 8px var(--shadow);\n}\n\n.button {\n  background: var(--primary);\n  color: white;\n  padding: 0.5em 1em;\n  border: none;\n  border-radius: 4px;\n}\n\n@media (max-width: 768px) {\n  :root {\n    --font-size-base: 14px;\n    --spacing: 8px;\n  }\n}" },
    { title: "JavaScript Theme Toggle", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    :root { --bg: white; --text: #333; --primary: #4361ee; }\n    [data-theme='dark'] { --bg: #1a1a2e; --text: #e0e0e0; --primary: #4cc9f0; }\n    body { background: var(--bg); color: var(--text); font-family: Arial; padding: 40px; transition: background 0.3s, color 0.3s; }\n    button { background: var(--primary); color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px; }\n  </style>\n</head>\n<body>\n  <h1>Theme Toggle Demo</h1>\n  <p>Current theme: <span id=theme-label>Light</span></p>\n  <button id=theme-btn>Toggle Dark Mode</button>\n  <script>\n    const btn = document.getElementById('theme-btn');\n    const label = document.getElementById('theme-label');\n    btn.addEventListener('click', () => {\n      const html = document.documentElement;\n      const current = html.getAttribute('data-theme');\n      const next = current === 'dark' ? 'light' : 'dark';\n      html.setAttribute('data-theme', next);\n      label.textContent = next.charAt(0).toUpperCase() + next.slice(1);\n    });\n  </script>\n</body>\n</html>" },
    { title: "Advanced Variable Patterns", language: "css", code: "/* Typography scale with variables */\n:root {\n  --font-base: 1rem;\n  --scale-ratio: 1.25;\n  --h6: var(--font-base);\n  --h5: calc(var(--h6) * var(--scale-ratio));\n  --h4: calc(var(--h5) * var(--scale-ratio));\n  --h3: calc(var(--h4) * var(--scale-ratio));\n  --h2: calc(var(--h3) * var(--scale-ratio));\n  --h1: calc(var(--h2) * var(--scale-ratio));\n}\n\nh1 { font-size: var(--h1); }\nh2 { font-size: var(--h2); }\nh3 { font-size: var(--h3); }\n\n/* Spacing system */\n:root {\n  --space-xs: 0.25rem;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 2rem;\n  --space-xl: 4rem;\n}\n\n.card { padding: var(--space-md); }\n.section { margin-top: var(--space-xl); }\n\n/* @property for animation */\n@property --gradient-angle {\n  syntax: '<angle>';\n  inherits: false;\n  initial-value: 0deg;\n}\n\n.box {\n  --gradient-angle: 0deg;\n  background: linear-gradient(var(--gradient-angle), #ff6b6b, #4ecdc4);\n  animation: rotate 3s linear infinite;\n}\n\n@keyframes rotate {\n  to { --gradient-angle: 360deg; }\n}" }
  ],
  output: [
    "CSS variables :root mein define hote hain aur globally accessible hote hain",
    "var() function fallback value accept karta hai agar variable define na ho",
    "JavaScript se CSS variables ko read/write karke dynamic theming possible hai"
  ],
  commonMistakes: [
    "Variable name mein dash ki jagah underscore ya camelCase use karna - CSS mein double dash hi sahi syntax hai",
    "var() function mein fallback value dena bhool jana - hamesha fallback do",
    "Variables ko har jagah define karna bina planning ke - ek centralized file banao",
    "Preprocessor variables aur CSS variables mein difference na samajhna - CSS variables runtime mein change ho sakte hain",
    "var() ke andar var() nesting kar dena - ye kam karta hai par readability kharab hoti hai"
  ],
  bestPractices: [
    "Saare theme-related variables ko :root mein define karo ek hi jagah",
    "Naming convention consistent rakho: --component-property (jaise --btn-bg, --card-shadow)",
    "Fallback values always do var() mein - production code ke liye zaroori hai",
    "JavaScript se theme toggle implement karte waqt data-attribute use karo (data-theme)",
    "Responsive breakpoints ke liye media queries mein variables redefine karo"
  ],
  tips: [
    "CSS variables DevTools ke Computed panel mein inspect kar sakte hain",
    "Var() ko calc() ke andar use kar sakte hain: calc(var(--spacing) * 2)",
    "CSS variables transitions aur keyframe animations ke saath smoothly animate karte hain"
  ],
  practice: [
    "Apni website ke liye ek color palette banayein using CSS variables with primary, secondary, accent colors",
    "Agar pehle se colors hardcoded hain to unhe CSS variables mein convert karein"
  ],
  exercise: {
    instruction: "Create a themed card component using CSS variables with dark/light mode support. Include a toggle button to switch between themes.",
    hint: ":root mein light theme variables define karo, [data-theme='dark'] mein dark theme. data-theme attribute ko JavaScript se toggle karo.",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    :root {\n      --bg: #f0f2f5;\n      --card-bg: #ffffff;\n      --text-primary: #1a1a2e;\n      --text-secondary: #555;\n      --btn-bg: #4361ee;\n      --btn-text: #ffffff;\n      --border: #e0e0e0;\n      --shadow: 0 4px 12px rgba(0,0,0,0.1);\n    }\n    [data-theme='dark'] {\n      --bg: #0f0f23;\n      --card-bg: #1a1a3e;\n      --text-primary: #e0e0ff;\n      --text-secondary: #aaa;\n      --btn-bg: #4cc9f0;\n      --btn-text: #0f0f23;\n      --border: #2a2a5a;\n      --shadow: 0 4px 12px rgba(0,0,0,0.4);\n    }\n    body {\n      background: var(--bg);\n      font-family: Arial, sans-serif;\n      min-height: 100vh;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 20px;\n      transition: background 0.3s;\n    }\n    .theme-toggle {\n      position: fixed;\n      top: 20px;\n      right: 20px;\n      background: var(--card-bg);\n      color: var(--text-primary);\n      border: 1px solid var(--border);\n      padding: 10px 20px;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 14px;\n      transition: all 0.3s;\n    }\n    .card {\n      background: var(--card-bg);\n      border: 1px solid var(--border);\n      border-radius: 12px;\n      padding: 24px;\n      max-width: 360px;\n      box-shadow: var(--shadow);\n      transition: all 0.3s;\n    }\n    .card-image {\n      width: 100%;\n      height: 200px;\n      background: linear-gradient(135deg, var(--btn-bg), var(--text-primary));\n      border-radius: 8px;\n      margin-bottom: 16px;\n    }\n    .card h2 { color: var(--text-primary); margin-bottom: 8px; font-size: 22px; }\n    .card p { color: var(--text-secondary); font-size: 14px; line-height: 1.6; margin-bottom: 16px; }\n    .card button {\n      background: var(--btn-bg);\n      color: var(--btn-text);\n      border: none;\n      padding: 10px 20px;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 14px;\n      font-weight: 600;\n    }\n  </style>\n</head>\n<body>\n  <button class=theme-toggle id=toggleBtn>Switch to Dark Mode</button>\n  <div class=card>\n    <div class=card-image></div>\n    <h2>CSS Variables Magic</h2>\n    <p>CSS variables allow dynamic theming without any preprocessor. Change theme and watch this card adapt instantly using custom properties.</p>\n    <button>Learn More</button>\n  </div>\n  <script>\n    const btn = document.getElementById('toggleBtn');\n    btn.addEventListener('click', () => {\n      const html = document.documentElement;\n      const isDark = html.getAttribute('data-theme') === 'dark';\n      html.setAttribute('data-theme', isDark ? 'light' : 'dark');\n      btn.textContent = isDark ? 'Switch to Dark Mode' : 'Switch to Light Mode';\n    });\n  </script>\n</body>\n</html>"
  },
  quiz: [
    { question: "CSS variable declare karne ke liye kaunsa prefix use karte hain?", options: ["$ (dollar)", "@ (at)", "-- (double dash)", "# (hash)"], answer: 2 },
    { question: "var() function mein fallback value kaise provide karte hain?", options: ["var(--color, blue)", "var(--color || blue)", "var(--color | blue)", "fallback(--color, blue)"], answer: 0 },
    { question: "CSS variables globally accessible karne ke liye kahan define karte hain?", options: ["body mein", "html mein", ":root mein", "style attribute mein"], answer: 2 },
    { question: "JavaScript se CSS variable ki value kaise change karein?", options: ["document.style.var = value", "element.style.setProperty('--var', 'value')", "element.setAttribute('--var', 'value')", "element.variable('--var') = value"], answer: 1 },
    { question: "CSS variables ki unique advantage kya hai jo preprocessor variables mein nahi hai?", options: ["Faster compilation", "Runtime mein values change ho sakti hain", "Better syntax", "Type safety"], answer: 1 }
  ],
  interview: [
    { question: "CSS variables aur SCSS variables mein kya antar hai?", answer: "CSS variables runtime mein change ho sakte hain, JavaScript se accessible hain, inheritance follow karte hain, aur dynamic theming allow karte hain. SCSS variables compile time pe process hote hain aur runtime mein change nahi ho sakte. CSS variables ko media queries mein redefine kar sakte hain, SCSS mein nahi." },
    { question: "CSS variables ki inheritance kaise kaam karti hai?", answer: "CSS variables DOM tree ke through inherit hote hain. Agar kisi element pe variable define nahi hai to browser parent element ko check karta hai, phir grandparent, aur aise hi upar :root tak. Inheritance ke kaaran hum scoped variables bana sakte hain jo specific component tree mein hi available hote hain." },
    { question: "Dark mode implement karne ke liye CSS variables kaise use karte hain?", answer: ":root mein light theme variables, phir [data-theme='dark'] selector mein dark theme variables. JavaScript se document.documentElement ka data-theme attribute toggle karo. Transitions add karo smooth switching ke liye. Saare colors variable references se replace karo." }
  ],
  assignment: [
    "Apne project ke saare hardcoded colors ko CSS variables mein convert karein aur dark mode feature add karein",
    "Ek design system variables file banayein jisme typography, spacing, colors, breakpoints sab defined ho"
  ],
  resources: [
    { title: "MDN - Using CSS Custom Properties", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" },
    { title: "CSS Tricks - Guide to Custom Properties", url: "https://css-tricks.com/a-complete-guide-to-custom-properties/" },
    { title: "CSS Variables for Theming", url: "https://www.smashingmagazine.com/2021/07/css-custom-properties-theming/" }
  ],
  summary: "CSS variables (custom properties) reusable values hain jo -- se declare hote hain aur var() function se use hote hain. :root mein globally define kar sakte hain ya specific elements mein scoped. var() mein fallback values de sakte hain. JavaScript se access aur modify kiye ja sakte hain jo dynamic theming (dark/light mode) ke liye perfect hai. Inheritance follow karte hain, media queries mein override ho sakte hain, aur animations ke saath kaam karte hain."
};

export default lesson;
