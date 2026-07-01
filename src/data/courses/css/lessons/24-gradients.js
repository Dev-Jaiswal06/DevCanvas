const lesson = {
  id: 24,
  slug: "gradients",
  title: "CSS Gradients",
  description: "Create smooth color transitions with linear, radial, and conic gradients",
  difficulty: "Intermediate",
  duration: "40 min",
  heroImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
  tags: ["CSS", "Gradients", "Colors", "Background"],
  theory: [
    "CSS gradients colors ke beech smooth transition create karte hain — yeh CSS images hain isliye background-image property se use hote hain",
    "Linear gradient (linear-gradient) ek line ke along colors blend karta hai — direction specify kar sakte hain jaise to right, to bottom, 45deg",
    "Linear gradient ke liye direction ke baad at least do color stops chahiye — color stop wo point hai jahan ek color start/end hota hai",
    "Radial gradient (radial-gradient) center se circular ya elliptical form mein spread hota hai — jaise suresh ke kiran nikal rahi ho",
    "Radial gradient mein shape (circle ya ellipse), size (closest-side, farthest-corner), aur position specify kar sakte hain",
    "Conic gradient (conic-gradient) center point ke around 360 degrees mein ghoomta hai — color wheel, pie charts ke liye perfect",
    "Repeating gradients (repeating-linear-gradient, repeating-radial-gradient) pattern create karte hain jo repeat hote rehte hain",
    "Multiple backgrounds mein ek se zyada gradients aur images ko comma se separate karke stack kar sakte hain",
    "Gradient patterns jaise stripes, checkerboard, zigzag pure gradients se bana sakte hain bina images ke",
    "Gradient text effect ke liye background-clip: text property use hoti hai jisse text ke andar gradient dikhe"
  ],
  examples: [
    { title: "Sunset Linear Gradient", description: "Top se bottom sunset colors ka smooth transition", code: "body {\n  background: linear-gradient(to bottom, #ff6b6b, #feca57, #48dbfb);\n}", result: "Red se yellow aur fir blue mein smooth transition — sunset jaisa effect" },
    { title: "Radial Glow Effect", description: "Center se spread hota hua glow", code: ".glow-circle {\n  background: radial-gradient(circle at center, #fff, #3498db, #2c3e50);\n}", result: "White center se blue hote hue dark blue mein merge ho raha hai" },
    { title: "Conic Color Wheel", description: "360 degree conic gradient se color wheel", code: ".color-wheel {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);\n}", result: "Ek circular color wheel jisme saare rainbow colors ghoom rahe hain" }
  ],
  syntax: [
    "background: linear-gradient(direction, color1, color2, ...);",
    "background: radial-gradient(shape size at position, color1, color2, ...);",
    "background: conic-gradient(from angle at position, color1, color2, ...);"
  ],
  diagram: [
    "┌────────────────────────────────────────────────────────────┐",
    "│                      CSS GRADIENTS                        │",
    "│                                                            │",
    "│  LINEAR GRADIENT:                                          │",
    "│  ┌─────┬─────┬─────┐   to right: red → blue → green       │",
    "│  │ Red │ Blu │ Grn │                                      │",
    "│  └─────┴─────┴─────┘                                      │",
    "│                                                            │",
    "│  RADIAL GRADIENT:     CONIC GRADIENT:                      │",
    "│     ┌─────┐              ╭─────╮                          │",
    "│   ╱  Blue ╲            ╱ Red ╲                           │",
    "│  │ Orange │   ←────   │      │  ← Colors around 360°     │",
    "│   ╲       ╱            ╲ Blue ╱                          │",
    "│    └─────┘              ╰─────╯                          │",
    "└────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Gradient Button with Hover Animation", language: "css", code: ".gradient-btn {\n  padding: 14px 36px;\n  border: none;\n  border-radius: 50px;\n  font-size: 16px;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  background-size: 200% 200%;\n  transition: background-position 0.5s ease;\n}\n\n.gradient-btn:hover {\n  background-position: right center;\n}\n\n.gradient-btn:active {\n  transform: scale(0.95);\n}" },
    { title: "Striped Pattern Using Repeating Gradient", language: "css", code: ".striped-bg {\n  width: 100%;\n  height: 200px;\n  background: repeating-linear-gradient(\n    45deg,\n    #3498db 0px,\n    #3498db 20px,\n    #ecf0f1 20px,\n    #ecf0f1 40px\n  );\n}\n\n.checkerboard {\n  width: 300px;\n  height: 300px;\n  background: repeating-conic-gradient(\n    #2c3e50 0% 25%,\n    #ecf0f1 0% 50%\n  );\n  background-size: 60px 60px;\n}" },
    { title: "Gradient Text Effect", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .gradient-text {\n      font-size: 64px;\n      font-weight: 900;\n      font-family: 'Arial Black', sans-serif;\n      background: linear-gradient(135deg, #f093fb 0%, #f5576c 25%, #4facfe 50%, #00f2fe 75%, #f093fb 100%);\n      background-size: 200% 200%;\n      -webkit-background-clip: text;\n      background-clip: text;\n      -webkit-text-fill-color: transparent;\n      animation: gradientShift 3s ease infinite;\n    }\n    @keyframes gradientShift {\n      0% { background-position: 0% 50%; }\n      50% { background-position: 100% 50%; }\n      100% { background-position: 0% 50%; }\n    }\n    .gradient-text {\n      text-shadow: none;\n    }\n  </style>\n</head>\n<body>\n  <h1 class=\"gradient-text\">Gradient Text</h1>\n</body>\n</html>" }
  ],
  output: [
    "Button ka background hover karne pe smoothly shift karega gradient position change hone se",
    "45 degree striped pattern repeat hoga jisme blue aur white stripes alternate hoti hain",
    "Text ke andar animated gradient effect dikhega jisme colors continuously shift hote rahenge"
  ],
  commonMistakes: [
    "background-color ki jagah gradient background-image se use karna — gradient ek image hai, isliye background-image ya background shorthand mein jaana chahiye",
    "Color stops mein unit bhoolna — linear-gradient(red, blue) to kaam karega lekin agar specific position dena hai toh px ya % dena zaroori hai jaise red 20%",
    "Vendor prefixes bhoolna — -webkit-background-clip: text jaise properties ke liye vendor prefix chahiye cross-browser support ke liye",
    "Conic gradient mein degrees aur percentage confuse karna — conic-gradient 0% se 100% tak hota hai (360 degrees), warna sirf degrees use karo",
    "Multiple backgrounds mein order galat rakhna — pehle wala gradient top pe aayega, baad wala neeche"
  ],
  bestPractices: [
    "Performance ke liye simple gradients use karo (do-teen color stops) — zyada color stops performance pe effect daal sakte hain",
    "Gradients ko fallback colour do — agar gradient support nahi bhi hua toh at least solid color dikhe: background: #3498db; background: linear-gradient(...)",
    "Repeating gradients ka use patterns banane mein karo bina images ke — isse HTTP requests bachti hain",
    "Color stops mein percentage ka use karo exact positioning ke liye, jaise linear-gradient(90deg, red 0%, blue 50%, green 100%)",
    "Gradient text ke liye background-clip: text aur -webkit-text-fill-color: transparent dono properties zaroori hain"
  ],
  tips: [
    "Gradient generators jaise cssgradient.io use karo complex gradients banane mein help ke liye",
    "Multiple gradients ko comma se separate karke ek hi background mein stack kar sakte ho — pehle wala top pe aayega",
    "Gradient animation ke liye background-size ka size badhakar background-position animate karo — isse performance better hoti hai"
  ],
  practice: [
    "Ek hero section banaye jisme multiple gradients ka combination ho — linear gradient overlay ke saath background image ho",
    "Ek gradient progress bar banaye jisme colors left se right smoothly transition karein"
  ],
  exercise: {
    instruction: "Create a pricing card with a gradient header, gradient button, and a subtle striped background pattern using repeating gradients",
    hint: "Use linear-gradient for the card header, conic-gradient for a small badge, and repeating-linear-gradient for subtle background stripes",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: 'Segoe UI', sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-height: 100vh;\n      background: #f0f2f5;\n    }\n    .pricing-card {\n      width: 340px;\n      border-radius: 16px;\n      overflow: hidden;\n      box-shadow: 0 10px 40px rgba(0,0,0,0.15);\n      background: white;\n    }\n    .card-header {\n      padding: 40px 30px;\n      text-align: center;\n      color: white;\n    }\n    /* Add gradient background to card-header here */\n    .card-header h2 {\n      font-size: 14px;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      margin-bottom: 10px;\n    }\n    .card-header .price {\n      font-size: 48px;\n      font-weight: 900;\n    }\n    .badge {\n      display: inline-block;\n      padding: 4px 12px;\n      border-radius: 20px;\n      font-size: 12px;\n      font-weight: 600;\n      color: white;\n      margin-bottom: 15px;\n    }\n    /* Add gradient background to badge here */\n    .card-body {\n      padding: 30px;\n    }\n    .card-body ul {\n      list-style: none;\n      margin-bottom: 25px;\n    }\n    .card-body li {\n      padding: 8px 0;\n      color: #555;\n    }\n    .card-body li::before {\n      content: '\\2713';\n      color: #27ae60;\n      margin-right: 10px;\n      font-weight: bold;\n    }\n    .cta-btn {\n      width: 100%;\n      padding: 14px;\n      border: none;\n      border-radius: 8px;\n      font-size: 16px;\n      font-weight: 600;\n      color: white;\n      cursor: pointer;\n      transition: transform 0.3s, box-shadow 0.3s;\n    }\n    /* Add gradient background to cta-btn here */\n    .cta-btn:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 6px 20px rgba(0,0,0,0.2);\n    }\n  </style>\n</head>\n<body>\n  <div class=\"pricing-card\">\n    <div class=\"card-header\">\n      <div class=\"badge\">POPULAR</div>\n      <h2>Professional Plan</h2>\n      <div class=\"price\">$29</div>\n      <p style=\"opacity: 0.9; margin-top: 10px;\">per month</p>\n    </div>\n    <div class=\"card-body\">\n      <ul>\n        <li>Unlimited projects</li>\n        <li>Advanced analytics</li>\n        <li>Priority support</li>\n        <li>Custom domain</li>\n      </ul>\n      <button class=\"cta-btn\">Get Started</button>\n    </div>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "Gradient CSS mein kaun si property se set kiya jaata hai?", options: ["background-color", "background-image", "color", "border-image"], answer: 1 },
    { question: "Linear gradient mein direction specify karne ke liye kya use hota hai?", options: ["Direction keyword (to right)", "Angle (45deg)", "Both direction and angle", "Sirf colors kafi hain"], answer: 2 },
    { question: "Radial gradient aur linear gradient mein kya antar hai?", options: ["Radial center se spread hota hai, linear line mein", "Linear center se spread hota hai", "Dono ek jaise hain", "Radial only for circles"], answer: 0 },
    { question: "Gradient text effect ke liye kaun si property zaroori hai?", options: ["background-clip: text", "color: transparent", "font-weight: bold", "text-shadow"], answer: 0 },
    { question: "Conic gradient kitne degrees ke around ghoomta hai?", options: ["180 degrees", "270 degrees", "360 degrees", "90 degrees"], answer: 2 }
  ],
  interview: [
    { question: "CSS gradients kya hain aur yeh kaise kaam karte hain?", answer: "CSS gradients CSS images hain jo do ya zyada colors ke beech smooth transition create karti hain. Yeh background-image property ke through use hoti hain. Gradient ke teen main types hain: linear (straight line mein), radial (center se circular), aur conic (360 degree around). Gradient mein color stops define hote hain jo batate hain ki kaunsa color kahan start/end ho raha hai." },
    { question: "Multiple backgrounds mein gradients kaise combine karte hain?", answer: "Multiple backgrounds comma-separated list se combine kiye jaate hain: background: linear-gradient(...), url(image.jpg), radial-gradient(...). Pehla gradient sabse upar render hota hai, baad wale uske neeche. Multiple backgrounds se complex layered effects create kiye ja sakte hain jaise image ke upar gradient overlay." },
    { question: "Repeating gradients kya hote hain aur kahan use hote hain?", answer: "Repeating gradients (repeating-linear-gradient, repeating-radial-gradient) regular gradients ki tarah hote hain lekin yeh apne aap ko repeat karte hain poori container width/height mein. Yeh patterns banane ke liye use hote hain jaise stripes, checkerboard, zigzag, bricks — bina images ke pure CSS se." }
  ],
  assignment: [
    "Ek animated gradient hero banner banaye jisme multiple linear gradients move karte rahein",
    "Ek gradient progress indicator banaye jisme colors percentage ke saath change ho (red se green tak)",
    "Ek gradient button collection banaye jisme different gradient types (linear, radial, conic) use hue ho"
  ],
  resources: [
    { title: "CSS Gradient Generator", url: "https://cssgradient.io/" },
    { title: "MDN CSS Gradients Guide", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients" },
    { title: "Webkit Gradient Text Support", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-fill-color" }
  ],
  summary: "CSS gradients colors ke beech smooth transition banane ka powerful tareeka hai. Teen main types hain: linear-gradient (line ke along), radial-gradient (center se circular), aur conic-gradient (360 degree ghoomta hua). Gradients background-image property se use hote hain aur multiple color stops support karte hain. Repeating gradients se patterns bana sakte hain, background-clip: text se gradient text effect milega, aur multiple gradients stack karke complex designs create kiye ja sakte hain. Gradients modern websites mein backgrounds, buttons, cards, aur decorative elements ke liye extensively use hote hain."
};

export default lesson;
