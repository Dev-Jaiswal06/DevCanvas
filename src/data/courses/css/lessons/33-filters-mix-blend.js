const lesson = {
  id: 33,
  slug: "filters-mix-blend",
  title: "Filters & Blend Modes",
  description: "Apply visual effects like blur, color shifting, and blending in CSS",
  difficulty: "Intermediate",
  duration: "40 min",
  heroImage: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800",
  tags: ["CSS", "Filters", "Blend Modes", "Visual Effects"],
  theory: [
    "CSS filter property visual effects apply karta hai elements pe - blur, brightness, contrast, grayscale, aur bhi bahut kuch",
    "filter: blur(radius) - element ko dhundhla (blur) kar deta hai, radius mein px ya rem value dete hain",
    "filter: brightness(value) - brightness adjust karta hai, 0 black, 1 normal, >1 brighter",
    "filter: contrast(value) - contrast adjust karta hai, 0 gray, 1 normal, >1 more contrast",
    "filter: grayscale(value) - element ko gray-scale mein convert karta hai, 0 to 1 ya 0% to 100%",
    "filter: sepia(value) - sepia tone effect, 0 (normal) se 1 (full sepia) tak",
    "filter: saturate(value) - saturation adjust karta hai, 0 desaturated, 1 normal, >1 vibrant",
    "filter: hue-rotate(angle) - colors ko hue wheel pe rotate karta hai, 0deg to 360deg",
    "filter: invert(value) - colors invert kar deta hai, 0 normal, 1 completely inverted",
    "filter: opacity(value) - transparency set karta hai, 0 transparent se 1 opaque",
    "filter: drop-shadow(offset-x offset-y blur color) - element ke shape ke hisaab se shadow banata hai, box-shadow se better hai irregular shapes ke liye",
    "Multiple filters combine kar sakte hain: filter: brightness(1.2) contrast(1.1) saturate(1.3);",
    "mix-blend-mode property element ke colors ko parent ke background ke saath blend karti hai",
    "Common blend modes: multiply, screen, overlay, darken, lighten, color-dodge, color-burn, difference, exclusion, hue, saturation, color, luminosity",
    "background-blend-mode multiple background images ko ek doosre ke saath blend karta hai",
    "backdrop-filter property element ke background content pe filter apply karti hai - glassmorphism effect ke liye famous"
  ],
  examples: [
    { title: "Image Hover Effects", description: "Grayscale to color on hover", code: "img { filter: grayscale(1); transition: 0.3s; } img:hover { filter: grayscale(0); }", result: "Image hover karne pe black & white se colorful ho jayegi" },
    { title: "Drop Shadow", description: "Shadow following the element's shape", code: ".icon { filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3)); }", result: "Icon ke exact shape ke around shadow aayega, box-shadow ki tarah nahi" },
    { title: "Glassmorphism with backdrop-filter", description: "Frosted glass effect", code: ".card { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); }", result: "Card ke peeche ka content blur ho jayega, glass effect dega" }
  ],
  syntax: [
    "filter: function(value); or filter: function(value) function2(value);",
    "mix-blend-mode: blend-mode-name;",
    "backdrop-filter: function(value);"
  ],
  diagram: [
    "┌──────────────────────────────────────────────────────────────────┐",
    "│              FILTERS & BLEND MODES                               │",
    "│                                                                  │",
    "│  FILTER (element ke upar)    BLEND (element aur background mix)  │",
    "│  ┌────────────┐              ┌──────────────────┐                │",
    "│  │ blur()     │              │ mix-blend-mode   │                │",
    "│  │ brightness │              │ multiply          │                │",
    "│  │ contrast() │              │ screen            │                │",
    "│  │ grayscale  │              │ overlay           │                │",
    "│  │ sepia()    │              │ difference        │                │",
    "│  │ saturate() │              │ exclusion         │                │",
    "│  │ hue-rotate │              └──────────────────┘                │",
    "│  │ invert()   │              ┌──────────────────┐                │",
    "│  │ opacity()  │              │ background-       │                │",
    "│  │ drop-shadow│              │ blend-mode       │                │",
    "│  └────────────┘              │ (multiple bg)     │                │",
    "│                              └──────────────────┘                │",
    "│                              ┌──────────────────┐                │",
    "│                              │ backdrop-filter   │                │",
    "│                              │ (background blur) │                │",
    "│                              └──────────────────┘                │",
    "└──────────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "All Filter Functions", language: "css", code: "/* Individual filters */\n.blur { filter: blur(5px); }\n.bright { filter: brightness(1.5); }\n.dark { filter: brightness(0.5); }\n.high-contrast { filter: contrast(2); }\n.gray { filter: grayscale(100%); }\n.sepia { filter: sepia(80%); }\n.vibrant { filter: saturate(2); }\n.rotated { filter: hue-rotate(90deg); }\n.inverted { filter: invert(1); }\n.transparent { filter: opacity(0.5); }\n\n/* Drop shadow - follows element shape */\n.shadow-icon {\n  filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.4));\n}\n\n/* Multiple filters combined */\n.enhanced {\n  filter: brightness(1.1) contrast(1.2) saturate(1.3);\n}\n\n/* Instagram-like preset */\n.instagram-effect {\n  filter: sepia(30%) saturate(150%) contrast(110%) brightness(105%);\n}\n\n/* Hover transition */\n.hover-effect {\n  filter: grayscale(100%) blur(2px);\n  transition: filter 0.4s ease;\n}\n.hover-effect:hover {\n  filter: grayscale(0%) blur(0px);\n}\n\n/* Backdrop filter - glassmorphism */\n.glass-card {\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(12px) saturate(180%);\n  -webkit-backdrop-filter: blur(12px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 16px;\n}\n\n/* Animating filters */\n@keyframes hueShift {\n  from { filter: hue-rotate(0deg); }\n  to   { filter: hue-rotate(360deg); }\n}\n.animated-gradient {\n  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);\n  animation: hueShift 6s linear infinite;\n}" },
    { title: "Blend Modes Demo", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; padding: 20px; background: #1a1a2e; }\n    h1 { color: white; margin-bottom: 20px; }\n    \n    .blend-grid {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 20px;\n    }\n    \n    .blend-item {\n      position: relative;\n      height: 200px;\n      border-radius: 8px;\n      overflow: hidden;\n    }\n    \n    .blend-item::before {\n      content: '';\n      position: absolute;\n      inset: 0;\n      background: linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff);\n    }\n    \n    .blend-item::after {\n      content: attr(data-label);\n      position: absolute;\n      inset: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 24px;\n      font-weight: bold;\n      color: white;\n      text-shadow: 0 2px 4px rgba(0,0,0,0.5);\n    }\n    \n    .blend-item img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      position: relative;\n      z-index: 1;\n    }\n    \n    /* Applying blend modes to images */\n    .multiply img { mix-blend-mode: multiply; }\n    .screen img { mix-blend-mode: screen; }\n    .overlay img { mix-blend-mode: overlay; }\n    .difference img { mix-blend-mode: difference; }\n    .hue img { mix-blend-mode: hue; }\n    .color img { mix-blend-mode: color; }\n    .luminosity img { mix-blend-mode: luminosity; }\n  </style>\n</head>\n<body>\n  <h1>Mix Blend Modes</h1>\n  <div class=\"blend-grid\">\n    <div class=\"blend-item multiply\" data-label=\"multiply\"></div>\n    <div class=\"blend-item screen\" data-label=\"screen\"></div>\n    <div class=\"blend-item overlay\" data-label=\"overlay\"></div>\n    <div class=\"blend-item difference\" data-label=\"difference\"></div>\n  </div>\n</body>\n</html>" },
    { title: "Glassmorphism Card", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      min-height: 100vh;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-family: Arial, sans-serif;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      padding: 20px;\n    }\n    \n    .glass-card {\n      max-width: 380px;\n      padding: 40px;\n      border-radius: 20px;\n      background: rgba(255, 255, 255, 0.1);\n      backdrop-filter: blur(16px) saturate(180%);\n      -webkit-backdrop-filter: blur(16px) saturate(180%);\n      border: 1px solid rgba(255, 255, 255, 0.2);\n      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n      color: white;\n    }\n    \n    .glass-card h2 {\n      font-size: 28px;\n      margin-bottom: 12px;\n      font-weight: 600;\n    }\n    \n    .glass-card p {\n      font-size: 16px;\n      line-height: 1.6;\n      opacity: 0.9;\n      margin-bottom: 24px;\n    }\n    \n    .glass-card .btn {\n      display: inline-block;\n      padding: 12px 28px;\n      border: 1px solid rgba(255, 255, 255, 0.3);\n      border-radius: 50px;\n      background: rgba(255, 255, 255, 0.1);\n      color: white;\n      text-decoration: none;\n      font-size: 14px;\n      font-weight: 500;\n      backdrop-filter: blur(4px);\n      transition: background 0.3s;\n    }\n    \n    .glass-card .btn:hover {\n      background: rgba(255, 255, 255, 0.2);\n    }\n  </style>\n</head>\n<body>\n  <div class=\"glass-card\">\n    <h2>Glassmorphism</h2>\n    <p>backdrop-filter ka use karke hum aisi glass-like cards bana sakte hain jo background ko blur karte hain. Yeh modern UI design mein bahut popular hai.</p>\n    <a href=\"#\" class=\"btn\">Learn More</a>\n  </div>\n</body>\n</html>" }
  ],
  output: [
    "filter: grayscale(100%): image black and white ho jayegi, hover pe color revert",
    "filter: drop-shadow(): element ke exact shape ke around shadow, irregular shapes ke liye perfect",
    "backdrop-filter: blur(12px): background content blur karta hai, glassmorphism effect"
  ],
  commonMistakes: [
    "drop-shadow aur box-shadow mein antar na samajhna - drop-shadow element ke alpha channel ke hisaab se shadow banata hai, box-shadow sirf box ke",
    "backdrop-filter ko element ke background pe samajhna - backdrop-filter element ke peeche ke content pe lagta hai, element khud pe nahi",
    "bhool jana -webkit-backdrop-filter prefix lagana - Safari ke liye vendor prefix zaroori hai",
    "Filter ka zyada use karke performance kharab karna - animate karte waqt GPU acceleration ka dhyan rakho",
    "mix-blend-mode ko parent-child relationship mein galat lgana - blend mode element ke content ko parent ke saath blend karta hai"
  ],
  bestPractices: [
    "Filters ko animate karte waqt will-change: filter ya will-change: transform use karo for better performance",
    "backdrop-filter ke saath fallback background color bhi do agar browser support na kare",
    "Images ke hover effects ke liye transition ke saath filters combine karo",
    "Dark mode mein invert filter se careful raho - full invert harsh lagta hai, 80-90% better hai",
    "Drop-shadow ka use karo icons aur irregular shapes ki shadow ke liye, box-shadow sirf rectangular boxes ke liye"
  ],
  tips: [
    "filter: contrast(1.4) brightness(1.1) saturate(1.2) se images ka color pop badha sakte ho without Photoshop",
    "mix-blend-mode: multiply dark backgrounds ke liye aur screen light backgrounds ke liye best hai",
    "backdrop-filter ke saath background: rgba(255,255,255,0.1) do taake glass effect properly work kare"
  ],
  practice: [
    "Ek image gallery banayein jahan hover karne pe grayscale se color ho aur slight blur effect ho",
    "Agar pehle se website hai to usme ek glassmorphism styled card add karein"
  ],
  exercise: {
    instruction: "Create an interactive image gallery using CSS filters and blend modes. Each image should have hover effects using filters (grayscale, brightness, blur), a glassmorphism overlay with backdrop-filter for the caption, and blend modes for creative effects.",
    hint: "Images ko grayscale(100%) se start karo aur hover pe grayscale(0). Overlay ke liye backdrop-filter: blur(8px). Glass panel ke liye background: rgba(0,0,0,0.3) with backdrop-filter.",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    \n    body {\n      font-family: 'Segoe UI', Arial, sans-serif;\n      background: #0f0f23;\n      min-height: 100vh;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 40px 20px;\n    }\n    \n    h1 {\n      color: white;\n      font-size: 2rem;\n      margin-bottom: 2rem;\n      text-align: center;\n    }\n    \n    .gallery {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n      gap: 24px;\n      max-width: 1000px;\n      width: 100%;\n    }\n    \n    .gallery-item {\n      position: relative;\n      border-radius: 12px;\n      overflow: hidden;\n      cursor: pointer;\n      aspect-ratio: 4 / 3;\n    }\n    \n    .gallery-item img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      display: block;\n      filter: grayscale(80%) brightness(0.8);\n      transition: filter 0.5s ease, transform 0.5s ease;\n    }\n    \n    .gallery-item:hover img {\n      filter: grayscale(0%) brightness(1);\n      transform: scale(1.05);\n    }\n    \n    .gallery-overlay {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      padding: 20px;\n      background: rgba(0, 0, 0, 0.3);\n      backdrop-filter: blur(8px);\n      -webkit-backdrop-filter: blur(8px);\n      border-top: 1px solid rgba(255, 255, 255, 0.15);\n      color: white;\n      transform: translateY(100%);\n      transition: transform 0.4s ease;\n    }\n    \n    .gallery-item:hover .gallery-overlay {\n      transform: translateY(0);\n    }\n    \n    .gallery-overlay h3 {\n      font-size: 1.2rem;\n      margin-bottom: 4px;\n    }\n    \n    .gallery-overlay p {\n      font-size: 0.875rem;\n      opacity: 0.8;\n    }\n    \n    .blend-section {\n      margin-top: 40px;\n      text-align: center;\n      color: white;\n    }\n    \n    .blend-example {\n      width: 200px;\n      height: 200px;\n      margin: 20px auto;\n      position: relative;\n      border-radius: 50%;\n      overflow: hidden;\n    }\n    \n    .blend-example::before {\n      content: '';\n      position: absolute;\n      inset: 0;\n      background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #ffe66d);\n      z-index: 0;\n    }\n    \n    .blend-example::after {\n      content: 'CSS';\n      position: absolute;\n      inset: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 3rem;\n      font-weight: bold;\n      color: white;\n      background: #333;\n      mix-blend-mode: multiply;\n      z-index: 1;\n    }\n  </style>\n</head>\n<body>\n  <h1>Filter & Blend Gallery</h1>\n  \n  <div class=\"gallery\">\n    <div class=\"gallery-item\">\n      <img src=\"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400\" alt=\"Mountain\">\n      <div class=\"gallery-overlay\">\n        <h3>Mountain View</h3>\n        <p>Hover to reveal colors</p>\n      </div>\n    </div>\n    <div class=\"gallery-item\">\n      <img src=\"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400\" alt=\"Forest\">\n      <div class=\"gallery-overlay\">\n        <h3>Forest Trail</h3>\n        <p>Grayscale to color transition</p>\n      </div>\n    </div>\n    <div class=\"gallery-item\">\n      <img src=\"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400\" alt=\"Nature\">\n      <div class=\"gallery-overlay\">\n        <h3>Natural Beauty</h3>\n        <p>Filter effects with animation</p>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"blend-section\">\n    <p>Blend Mode Demo (mix-blend-mode: multiply)</p>\n    <div class=\"blend-example\"></div>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "filter: grayscale(1) ka kya effect hota hai?", options: ["Image ko blur kar deta hai", "Image ko black and white kar deta hai", "Image ko rotate kar deta hai", "Image ki brightness badha deta hai"], answer: 1 },
    { question: "drop-shadow aur box-shadow mein kya difference hai?", options: ["drop-shadow sirf text ke liye hai", "drop-shadow element ke shape (alpha) ke hisaab se shadow banata hai", "Dono same hain", "box-shadow zyada powerful hai"], answer: 1 },
    { question: "Glassmorphism effect ke liye kaunsa property use hota hai?", options: ["filter: blur()", "opacity", "backdrop-filter: blur()", "mix-blend-mode: blur"], answer: 2 },
    { question: "mix-blend-mode: multiply ka kya effect hota hai?", options: ["Colors ko mix kar ke light kar deta hai", "Colors ko multiply kar ke dark kar deta hai", "Colors ko invert kar deta hai", "Colors ko gray-scale kar deta hai"], answer: 1 },
    { question: "Kitne filters ek saath combine kar sakte hain?", options: ["Sirf do", "Sirf ek", "Multiple, space se separate karke", "Sirf teen"], answer: 2 }
  ],
  interview: [
    { question: "filter aur backdrop-filter mein kya antar hai?", answer: "filter element khud pe visual effects apply karta hai (blur, brightness, etc.). backdrop-filter element ke peeche ke content pe filter apply karta hai - element ka background transparent hona chahiye taake peeche ka content dikhe. backdrop-filter glassmorphism effect ke liye use hota hai." },
    { question: "drop-shadow kab use karein vs box-shadow?", answer: "drop-shadow element ke actual shape (alpha channel) ke hisaab se shadow banata hai - transparent areas ko ignore karta hai. box-shadow element ke bounding box ke hisaab se shadow banata hai. drop-shadow icons, PNG images, aur pseudo-elements ke liye best hai. box-shadow regular rectangular divs ke liye better performance deta hai." },
    { question: "CSS filters use karne ke performance implications kya hain?", answer: "Filters GPU-accelerated hote hain aur generally performant hain. Lekin zyada filters ek saath ya heavy animations CPU usage badha sakte hain. will-change property use karo browser ko optimize karne ke liye. backdrop-filter performance-heavy ho sakta hai kyunki har frame pe background re-render karna padta hai." }
  ],
  assignment: [
    "Apni website ke liye ek image gallery component banayein with filter hover effects",
    "Ek hero section banayein with backdrop-filter glassmorphism overlay and animated gradient"
  ],
  resources: [
    { title: "MDN - CSS Filter Effects", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/filter" },
    { title: "CSS Tricks - Blend Modes Guide", url: "https://css-tricks.com/almanac/properties/m/mix-blend-mode/" },
    { title: "Glassmorphism Generator", url: "https://glassmorphism.com/" }
  ],
  summary: "CSS filters visual effects apply karte hain jaise blur, brightness, contrast, grayscale, sepia, saturate, hue-rotate, invert, aur opacity. drop-shadow element ke shape ke hisaab se shadow banata hai. mix-blend-mode element ke content ko background ke saath blend karta hai, aur background-blend-mode multiple backgrounds ko blend karta hai. backdrop-filter element ke peeche ke content pe filter lagata hai - glassmorphism effect ke liye famous. Filters ko combine karke professional visual effects bana sakte hain jo pehle sirf Photoshop mein possible the."
};

export default lesson;
