const lesson = {
  id: 5,
  slug: "borders",
  title: "CSS Borders",
  description: "Learn about CSS borders - width, style, color, shorthand, border-radius, and individual sides",
  difficulty: "Beginner",
  duration: "35 min",
  heroImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
  tags: ["CSS", "Borders", "Border Radius", "Styling"],
  theory: [
    "CSS border element ke border (kinara) ko style karne ke liye use hota hai",
    "Border teen cheezon se milkar banta hai: border-width (thickness), border-style (type), border-color (rang)",
    "Border-style main values hain: solid, dashed, dotted, double, groove, ridge, inset, outset, none",
    "Border-width: thin (1px), medium (3px), thick (5px), ya pixels mein like 2px, 5px, 10px",
    "Border-color: koi bhi valid CSS color value - named, hex, rgb, rgba sab chalega",
    "Border shorthand: ek line mein sab likho - border: 2px solid #e74c3c; (width style color)",
    "Individual sides: border-top, border-right, border-bottom, border-left se sirf ek side ka border set kar sakte hain",
    "Individual properties: border-width, border-style, border-color bhi separately side-wise likh sakte hain",
    "Border-radius: corners ko round karne ke liye - value pixels ya percentage mein hoti hai",
    "Border-radius shorthand: 4 values (top-left, top-right, bottom-right, bottom-left) ya 1 value sabke liye",
    "Border-radius: 50% se circle bana sakte ho - perfect circle ke liye element square hona chahiye",
    "Border vs outline: border element ke box model mein count hota hai, outline nahi - outline content ke upar hota hai"
  ],
  examples: [
    { title: "Basic Borders", description: "Different border styles on elements", code: "div { border: 2px solid #3498db; }\np { border: 1px dashed #e74c3c; }", result: "Div gets solid blue border, paragraph gets dashed red border" },
    { title: "Individual Sides", description: "Different borders on each side", code: ".card {\n  border-top: 3px solid #2ecc71;\n  border-bottom: 1px solid #ddd;\n  border-left: none;\n  border-right: none;\n}", result: "Card with green top border, gray bottom border, no left/right borders" },
    { title: "Border Radius", description: "Rounded corners with border-radius", code: ".avatar { border-radius: 50%; }\n.button { border-radius: 25px; }", result: "Avatar becomes circular, button gets fully rounded pill shape" }
  ],
  syntax: [
    "border: width style color;",
    "border: 2px solid #e74c3c;",
    "border-top: 2px dashed blue;",
    "border-radius: 10px;",
    "border-radius: 10px 20px 30px 40px;",
    "border: none;"
  ],
  diagram: [
    "┌─────────────────────────────────────────────────────────────┐",
    "│                     CSS BORDER PROPERTIES                   │",
    "│                                                             │",
    "│  border-top (top edge)                                      │",
    "│  ┌─────────────────────────────────────────────────────┐    │",
    "│  │                                                   │    │",
    "│  │  border-left  │   CONTENT AREA    │ border-right   │    │",
    "│  │  (left edge)  │                    │ (right edge)   │    │",
    "│  │               │                    │               │    │",
    "│  └─────────────────────────────────────────────────────┘    │",
    "│  border-bottom (bottom edge)                                 │",
    "│                                                             │",
    "│  border-radius: all corners rounded                          │",
    "│  ┌─────────────────────────────────────────────────────┐    │",
    "│  │  ╭╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╮    │    │",
    "│  └─────────────────────────────────────────────────────┘    │",
    "└─────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Border Styles", language: "css", code: "/* Different border styles */\n.solid-border {\n  border: 2px solid #333;\n}\n\n.dashed-border {\n  border: 2px dashed #e74c3c;\n}\n\n.dotted-border {\n  border: 3px dotted #3498db;\n}\n\n.double-border {\n  border: 4px double #2ecc71;\n}\n\n.groove-border {\n  border: 3px groove #9b59b6;\n}\n\n.ridge-border {\n  border: 3px ridge #f39c12;\n}\n\n/* Individual sides */\n.side-borders {\n  border-top: 3px solid #e74c3c;\n  border-right: 2px dashed #3498db;\n  border-bottom: 1px solid #ddd;\n  border-left: 4px double #2ecc71;\n}\n\n/* No border */\n.no-border {\n  border: none;\n  /* or */\n  border: 0;\n}" },
    { title: "Border Radius Examples", language: "css", code: "/* Rounded corners */\n.rounded {\n  border-radius: 10px;\n}\n\n/* Circle */\n.circle {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: #3498db;\n}\n\n/* Pill shape */\n.pill {\n  padding: 10px 30px;\n  border-radius: 50px;\n  background-color: #2ecc71;\n  color: white;\n  border: none;\n}\n\n/* Different corners */\n.custom-corners {\n  border-radius: 10px 30px 50px 70px;\n  /* top-left: 10px, top-right: 30px, bottom-right: 50px, bottom-left: 70px */\n}\n\n/* Two values */\n.two-values {\n  border-radius: 20px 50px;\n  /* top-left & bottom-right: 20px, top-right & bottom-left: 50px */\n}\n\n/* Individual corner properties */\n.corner-props {\n  border-top-left-radius: 15px;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 35px;\n  border-bottom-left-radius: 45px;\n}" },
    { title: "HTML Border Examples", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .container {\n      display: flex;\n      gap: 20px;\n      flex-wrap: wrap;\n      padding: 20px;\n      font-family: Arial;\n    }\n    .box {\n      width: 120px;\n      height: 80px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      font-size: 12px;\n      padding: 5px;\n    }\n    .solid { border: 3px solid #e74c3c; }\n    .dashed { border: 3px dashed #3498db; }\n    .dotted { border: 3px dotted #2ecc71; }\n    .double { border: 4px double #9b59b6; }\n    .rounded { border: 2px solid #f39c12; border-radius: 15px; }\n    .circle { width: 80px; height: 80px; border: 3px solid #1abc9c; border-radius: 50%; }\n    .pill { width: auto; height: auto; border: 2px solid #e67e22; border-radius: 50px; padding: 10px 20px; }\n    .no-top { border: 2px solid #34495e; border-top: none; }\n    .bottom-only { border-bottom: 4px solid #e74c3c; border-left: none; border-right: none; border-top: none; }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <div class=\"box solid\">Solid</div>\n    <div class=\"box dashed\">Dashed</div>\n    <div class=\"box dotted\">Dotted</div>\n    <div class=\"box double\">Double</div>\n    <div class=\"box rounded\">Rounded</div>\n    <div class=\"box circle\">Circle</div>\n    <div class=\"box pill\">Pill Shape</div>\n    <div class=\"box no-top\">No Top</div>\n    <div class=\"box bottom-only\">Bottom Only</div>\n  </div>\n</body>\n</html>" }
  ],
  output: [
    "Solid border shows a solid continuous line around the element",
    "Dashed border shows a line made of small dashes",
    "Dotted border shows a line made of dots",
    "Double border shows two parallel lines",
    "Rounded element has smooth curved corners with border-radius",
    "Circle element becomes a perfect circle with border-radius: 50%"
  ],
  commonMistakes: [
    "border-style set kiye bina border-width dena - border-style mandatory hai, warna kuch nahi dikhega",
    "border-radius: 50% sirf square element ko circle banata hai - rectangle pe oval banega",
    "Border shorthand mein order galat karna - hamesha width style color hota hai: 2px solid red",
    "border: none aur border: 0 mein farak nahi hai, lekin none zyada readable hai",
    "Individual sides set karte time border-style bhool jana - har side ke liye style zaroori hai"
  ],
  bestPractices: [
    "Interactive elements (buttons, links) pe hover effect ke liye border-color change karo",
    "Border-radius consistent rakho design system mein - jaise small (4px), medium (8px), large (12px)",
    "Border ko accessibility ke liye use karo - focus indicators ke liye outline ya border zaroori hai",
    "Buttons mein border: none ke saath background-color use karo cleaner look ke liye",
    "Tables mein collapse borders use karo - border-collapse: collapse table borders ko merge karta hai"
  ],
  tips: [
    "Border ke saath outline property bhi hoti hai - outline border ke bahar hota hai aur box model mein count nahi hota",
    "Transparent border use karke spacing create kar sakte ho jo hover pe visible ho jaye",
    "Border-image property se custom images ko border ke roop mein use kar sakte ho"
  ],
  practice: [
    "Different border styles ke saath 5 buttons banao - solid, dashed, rounded, pill, aur bottom-only border wale",
    "Ek profile card banao jisme circle avatar, rounded corners card, aur bottom-only border heading ho"
  ],
  exercise: {
    instruction: "Create a profile card with a circular avatar image, card with rounded corners, and styled borders on different elements",
    hint: "Use border-radius: 50% for avatar, border-radius for card corners, individual side borders for sections",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    body {\n      font-family: 'Segoe UI', Arial, sans-serif;\n      background: #f0f2f5;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-height: 100vh;\n    }\n    .profile-card {\n      width: 350px;\n      background: white;\n      border-radius: 16px;\n      overflow: hidden;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n      border: 1px solid #e8e8e8;\n    }\n    .profile-header {\n      background: linear-gradient(135deg, #667eea, #764ba2);\n      padding: 40px 20px;\n      text-align: center;\n      border-bottom: 3px solid #5a67d8;\n    }\n    .avatar {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n      border: 4px solid white;\n      background: #ddd;\n      margin: 0 auto 15px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 36px;\n      color: #667eea;\n      background: white;\n    }\n    .profile-header h2 {\n      color: white;\n      font-size: 22px;\n    }\n    .profile-header p {\n      color: rgba(255,255,255,0.8);\n      font-size: 14px;\n      margin-top: 5px;\n    }\n    .profile-body {\n      padding: 20px;\n    }\n    .info-row {\n      padding: 12px 0;\n      border-bottom: 1px dashed #e0e0e0;\n      display: flex;\n      justify-content: space-between;\n    }\n    .info-row:last-child {\n      border-bottom: none;\n    }\n    .label {\n      color: #888;\n      font-size: 14px;\n    }\n    .value {\n      color: #333;\n      font-weight: 500;\n    }\n    .action-btn {\n      display: block;\n      width: 100%;\n      padding: 12px;\n      margin-top: 15px;\n      background: #667eea;\n      color: white;\n      border: none;\n      border-radius: 8px;\n      font-size: 16px;\n      cursor: pointer;\n      transition: background 0.3s;\n    }\n    .action-btn:hover {\n      background: #5a67d8;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"profile-card\">\n    <div class=\"profile-header\">\n      <div class=\"avatar\">👤</div>\n      <h2>John Doe</h2>\n      <p>Full Stack Developer</p>\n    </div>\n    <div class=\"profile-body\">\n      <div class=\"info-row\">\n        <span class=\"label\">Email</span>\n        <span class=\"value\">john@example.com</span>\n      </div>\n      <div class=\"info-row\">\n        <span class=\"label\">Location</span>\n        <span class=\"value\">New York, USA</span>\n      </div>\n      <div class=\"info-row\">\n        <span class=\"label\">Member Since</span>\n        <span class=\"value\">Jan 2024</span>\n      </div>\n      <button class=\"action-btn\">View Profile</button>\n    </div>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "CSS border ke liye kaun si teen properties zaroori hain?", options: ["width, height, color", "width, style, color", "size, type, color", "thick, thin, color"], answer: 1 },
    { question: "Element ka border hatane ke liye kaun si value use karte hain?", options: ["border: remove", "border: none", "border: 0px", "border: hide"], answer: 1 },
    { question: "Sirf element ke top side pe border lagane ke liye kaun si property use karte hain?", options: ["border-top", "border: top", "top-border", "border-on-top"], answer: 0 },
    { question: "Perfect circle banane ke liye border-radius ki value kya honi chahiye?", options: ["100%", "50%", "90%", "25%"], answer: 1 },
    { question: "Kaun si border style do parallel lines dikhati hai?", options: ["solid", "double", "groove", "ridge"], answer: 1 }
  ],
  interview: [
    { question: "CSS border ki properties kya hain aur kaise kaam karti hain?", answer: "Border ki teen main properties hain: border-width (thickness, pixels mein), border-style (solid, dashed, dotted, double, groove, ridge, inset, outset), border-color (any valid CSS color). Inhe shorthand mein ek saath likh sakte hain: border: 2px solid #333. Individual sides ko bhi target kar sakte hain: border-top, border-right, border-bottom, border-left." },
    { question: "border-radius kaise kaam karta hai aur iski shorthand kya hai?", answer: "Border-radius element ke corners ko round karta hai. 4 values clockwise hoti hain: top-left, top-right, bottom-right, bottom-left. Agar 1 value di toh sab corners same. 2 values: first = top-left & bottom-right, second = top-right & bottom-left. 50% se circle banata hai (square element pe). Percentage ya pixels dono use kar sakte hain." },
    { question: "Border aur outline mein kya antar hai?", answer: "Border element ke box model ka part hota hai - ye space leta hai aur element ke size mein add hota hai. Outline element ke upar draw hota hai, box model mein count nahi hota, aur koi space nahi leta. Outline rounded nahi ho sakta (border-radius follow nahi karta) aur outline-color, outline-style, outline-width properties hain." }
  ],
  assignment: [
    "Build a notification card component with a left colored border (like Gmail labels) using border-left property",
    "Create a photo gallery with image cards that have different border styles and hover effects"
  ],
  resources: [
    { title: "MDN CSS Border Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border" },
    { title: "CSS Border Radius Generator", url: "https://border-radius.com/" },
    { title: "CSS Border Image Generator", url: "https://cssgenerator.org/border-image-generator.html" }
  ],
  summary: "CSS borders element ke kinaare par line banate hain. Border mein width (thickness), style (solid, dashed, dotted), aur color hota hai. Shorthand 'border: width style color' se ek line mein sab likh sakte hain. Individual sides (top, right, bottom, left) separately set kar sakte hain. Border-radius corners ko round karta hai - 50% se circle ban jata hai. Border box model mein count hota hai, outline nahi hota."
};

export default lesson;
