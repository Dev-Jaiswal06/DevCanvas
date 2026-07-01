const lesson = {
  id: 27,
  slug: "transitions",
  title: "CSS Transitions",
  description: "Create smooth state changes with CSS transitions for interactive experiences",
  difficulty: "Intermediate",
  duration: "35 min",
  heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
  tags: ["CSS", "Transitions", "Animations", "Interactions"],
  theory: [
    "CSS transitions ek state se doosri state mein smooth change create karte hain — jaise hover karne par color instantly change nahi hota, smoothly fade hota hai",
    "transition-property batata hai ki kaun si property(s) transition hogi — all bhi likh sakte hain ya specific jaise opacity, transform, background-color",
    "transition-duration define karta hai ki transition kitne time mein complete hoga — seconds (s) ya milliseconds (ms) mein likhte hain, jaise 0.3s ya 300ms",
    "transition-timing-function decide karta hai ki transition ki speed kaise change hogi — ease (default), linear, ease-in, ease-out, ease-in-out, cubic-bezier()",
    "cubic-bezier() se custom timing function bana sakte hain — chaar points define karte hain (x1, y1, x2, y2) jo speed curve create karta hai",
    "transition-delay se transition start hone mein delay kar sakte hain — positive delay start slow karta hai, negative delay middle se start karta hai",
    "Transition shorthand: transition: property duration timing-function delay — ek line mein saari properties likh sakte hain",
    "Multiple properties ke liye comma-separated transitions: transition: opacity 0.3s, transform 0.5s ease — har property ka apna timing",
    "Hover effects transitions ke sabse common use case hain — button hover, card hover, link hover sab mein smooth animation hota hai",
    "Smooth interaction ke liye transitions real-world feel dete hain — jaise button dabana, card uthana, menu open karna"
  ],
  examples: [
    { title: "Button Hover Transition", description: "Button ka background aur transform smooth change", code: ".btn {\n  background: #3498db;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background: #2980b9;\n  transform: translateY(-3px);\n}", result: "Button hover karne par background color change hoga aur thoda upar uth jayega — dono changes smooth honge" },
    { title: "Staggered Card Entrance", description: "Cards delay ke saath ek ek karke appear ho rahe hain", code: ".card:nth-child(1) { transition-delay: 0s; }\n.card:nth-child(2) { transition-delay: 0.1s; }\n.card:nth-child(3) { transition-delay: 0.2s; }\n.card { transform: translateY(50px); opacity: 0; transition: all 0.5s ease; }\n.card.show { transform: translateY(0); opacity: 1; }", result: "Teeno cards ek ke baad ek appear honge, har card mein 0.1s ka delay hai" },
    { title: "Cubic Bezier Bounce Effect", description: "Custom timing function se bounce effect", code: ".ball {\n  width: 50px;\n  height: 50px;\n  background: #e74c3c;\n  border-radius: 50%;\n  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n.ball:hover {\n  transform: translateX(200px);\n}", result: "Ball hover pe bounce karte hue right side move karega — overshoot+settle effect" }
  ],
  syntax: [
    "transition: property duration timing-function delay;",
    "transition: all 0.3s ease;",
    "transition: opacity 0.5s ease-in-out, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);"
  ],
  diagram: [
    "┌────────────────────────────────────────────────────────────┐",
    "│                    CSS TRANSITIONS                         │",
    "│                                                            │",
    "│                    ┌──────┐                                │",
    "│  State A ─────────→│Trans.│─────────→ State B              │",
    "│                    │0.3s  │                                │",
    "│                    └──────┘                                │",
    "│                                                            │",
    "│  TIMING FUNCTIONS:                                         │",
    "│  ease:        ╱╲╱╲      (smooth start/end)               │",
    "│  linear:      ╱────╲     (constant speed)                 │",
    "│  ease-in:     ╱╲───      (slow start)                    │",
    "│  ease-out:    ───╱╲      (slow end)                      │",
    "│  ease-in-out: ╱────╲     (slow both)                     │",
    "│                                                            │",
    "│  transition-delay: 0.2s → waits 0.2s before starting      │",
    "└────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Smooth Accordion with Transitions", language: "css", code: ".accordion-item {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n\n.accordion-header {\n  background: #f8f9fa;\n  padding: 15px 20px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: background-color 0.3s ease;\n}\n\n.accordion-header:hover {\n  background: #e9ecef;\n}\n\n.accordion-content {\n  max-height: 0;\n  padding: 0 20px;\n  transition: max-height 0.4s ease, padding 0.3s ease;\n  overflow: hidden;\n}\n\n.accordion-item.active .accordion-content {\n  max-height: 300px;\n  padding: 15px 20px;\n}\n\n.accordion-item.active .accordion-header {\n  background: #3498db;\n  color: white;\n}" },
    { title: "Animated Navigation Menu", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body { font-family: 'Segoe UI', sans-serif; }\n    nav {\n      background: #2c3e50;\n      padding: 15px 30px;\n    }\n    nav ul {\n      list-style: none;\n      display: flex;\n      gap: 30px;\n    }\n    nav ul li a {\n      color: white;\n      text-decoration: none;\n      padding: 8px 0;\n      position: relative;\n      transition: color 0.3s ease;\n    }\n    nav ul li a::after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 0;\n      height: 2px;\n      background: #3498db;\n      transition: width 0.3s ease;\n    }\n    nav ul li a:hover {\n      color: #3498db;\n    }\n    nav ul li a:hover::after {\n      width: 100%;\n    }\n  </style>\n</head>\n<body>\n  <nav>\n    <ul>\n      <li><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">About</a></li>\n      <li><a href=\"#\">Services</a></li>\n      <li><a href=\"#\">Portfolio</a></li>\n      <li><a href=\"#\">Contact</a></li>\n    </ul>\n  </nav>\n</body>\n</html>" },
    { title: "Multiple Transitions Different Timing", language: "css", code: ".fancy-card {\n  background: white;\n  border-radius: 16px;\n  padding: 30px;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n  transition:\n    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    box-shadow 0.4s ease,\n    background-color 0.6s ease;\n  cursor: pointer;\n}\n\n.fancy-card:hover {\n  transform: translateY(-10px) scale(1.02);\n  box-shadow: 0 15px 40px rgba(0,0,0,0.15);\n  background-color: #f8f9ff;\n}\n\n/* Each property has its own timing */\n.fancy-card .icon {\n  display: inline-block;\n  font-size: 40px;\n  transition: transform 0.3s ease;\n}\n\n.fancy-card:hover .icon {\n  transform: rotate(20deg) scale(1.2);\n}\n\n.fancy-card h3 {\n  color: #333;\n  transition: color 0.3s ease 0.1s;\n}\n\n.fancy-card:hover h3 {\n  color: #3498db;\n}" }
  ],
  output: [
    "Accordion click karne par content slow open hoga max-height transition se",
    "Navigation links ke neeche hover pe underline smoothly left se right slide karega",
    "Fancy card hover pe lift+scale karega, shadow change hogi, icon rotate hoga — sab different timings se"
  ],
  commonMistakes: [
    "Transition property mein bhoolna ki kaun si property transition hogi — all use karte ho toh sab properties transition hoti hain, isse performance affect ho sakta hai",
    "Display property ko transition karne ki koshish — display animated nahi ho sakti, iske liye opacity aur visibility use karo",
    "Transition aur animation mein confuse hona — transition state change ke liye hai (hover/focus), animation continuous ya complex sequences ke liye",
    "Height: auto ko transition na karna — height: auto transition support nahi karta, iske liye max-height ka use karo",
    "Transition-delay negative value ka effect na samajhna — negative delay transition ko middle se start karta hai, starting point skip hota hai"
  ],
  bestPractices: [
    "Performance ke liye sirf transform aur opacity transition karo — yeh properties GPU-accelerated hain aur repaint trigger nahi karti",
    "Transition timing realistic rakho — 0.2s se 0.5s ke beech duration user-friendly hota hai, zyada slow annoying ho sakta hai",
    "All property ke jagah specific properties mention karo — transition: all 0.3s ki jagah transition: opacity 0.3s, transform 0.3s",
    "Reduced motion preference ka dhyan rakho — prefers-reduced-motion media query se motion-sensitive users ke liye transitions reduce ya disable karo",
    "Cubic-bezier se custom timing use karo jab specific feel chahiye — bounce, elastic, ya spring effects ke liye cubic-bezier best hai"
  ],
  tips: [
    "cubic-bezier.com pe jaa kar visually timing functions create kar sakte ho — copy-paste karo CSS mein",
    "Enter/exit animations ke liye transition delay ka use karo — ek element ke baad doosra aaye (staggered effect)",
    "Transform aur opacity transition karo, margin/padding/width/height ki jagah — isse smooth 60fps animation milega"
  ],
  practice: [
    "Ek navbar banaye jisme hover pe dropdown menu smoothly appear ho (max-height transition se)",
    "Ek notification toast banaye jo page pe aate time slide-in kare aur kuch der baad fade-out ho"
  ],
  exercise: {
    instruction: "Create a profile card with multiple hover transitions: card lifts up, avatar rotates, name color changes with a delay, and a hidden bio slides down",
    hint: "Use different transition properties for each element, cubic-bezier for card lift, and transition-delay for the name color change",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: 'Segoe UI', sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-height: 100vh;\n      background: linear-gradient(135deg, #667eea, #764ba2);\n    }\n    .profile-card {\n      width: 320px;\n      background: white;\n      border-radius: 20px;\n      padding: 40px 30px;\n      text-align: center;\n      cursor: pointer;\n    }\n    /* Add card transition here */\n    .avatar {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n      background: linear-gradient(135deg, #667eea, #764ba2);\n      margin: 0 auto 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 40px;\n      color: white;\n    }\n    /* Add avatar transition here */\n    .profile-card h2 {\n      color: #333;\n      margin-bottom: 5px;\n    }\n    /* Add heading transition here */\n    .profile-card .title {\n      color: #888;\n      font-size: 14px;\n      margin-bottom: 20px;\n    }\n    .bio {\n      color: #555;\n      line-height: 1.6;\n      max-height: 0;\n      overflow: hidden;\n    }\n    /* Add bio transition here */\n    .social-links {\n      margin-top: 20px;\n      display: flex;\n      justify-content: center;\n      gap: 15px;\n    }\n    .social-links a {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background: #f0f0f0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-decoration: none;\n      color: #666;\n      font-size: 18px;\n    }\n    /* Add social link transition here */\n    /* Hover states - complete these */\n    .profile-card:hover {\n      transform: translateY(-12px);\n    }\n    .profile-card:hover .avatar {\n      transform: rotate(360deg);\n    }\n    /* Add delayed color change for h2 */\n    .profile-card:hover .bio {\n      max-height: 100px;\n      padding-top: 15px;\n    }\n    .profile-card:hover .social-links a {\n      background: #667eea;\n      color: white;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"profile-card\">\n    <div class=\"avatar\">👤</div>\n    <h2>Priya Sharma</h2>\n    <p class=\"title\">Full Stack Developer</p>\n    <p class=\"bio\">Passionate about building beautiful and accessible web experiences with modern technologies.</p>\n    <div class=\"social-links\">\n      <a href=\"#\">🐦</a>\n      <a href=\"#\">📷</a>\n      <a href=\"#\">💼</a>\n      <a href=\"#\">📧</a>\n    </div>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "Transition ke liye kitni properties shorthand mein likhi jaati hain?", options: ["Do properties: property aur duration", "Chaare properties: property, duration, timing-function, delay", "Sirf duration", "Teen properties: property, duration, delay"], answer: 1 },
    { question: "transition: all 0.3s ease 0.2s mein 0.2s kya hai?", options: ["Duration", "Delay", "Timing-function", "Speed"], answer: 1 },
    { question: "Kaun si CSS property transition support nahi karti?", options: ["opacity", "transform", "display", "background-color"], answer: 2 },
    { question: "Default timing function kaunsa hai?", options: ["linear", "ease", "ease-in", "ease-out"], answer: 1 },
    { question: "Transition-delay negative value dene se kya hoga?", options: ["Transition fast chalega", "Transition skip hoke middle se shuru hoga", "Delay ignore hoga", "Error aayega"], answer: 1 }
  ],
  interview: [
    { question: "CSS transitions kya hain aur kab use karte hain?", answer: "CSS transitions ek state se doosri state mein smooth change create karte hain. Yeh tab use hote hain jab kisi element ki property change ho rahi ho (jaise hover, focus, class add/remove) aur hum chahte hain ki change instantly na ho balki smoothly ho. Transition ke liye chaar cheezein define karte hain: property, duration, timing-function, aur delay." },
    { question: "Transitions mein performance kaise optimize karte hain?", answer: "Transitions mein performance optimize karne ke liye sirf transform aur opacity properties transition karo, kyunki yeh GPU-accelerated hain aur repaint/layout trigger nahi karti. 'all' keyword avoid karo aur specific properties mention karo. will-change property use karo browser ko hint dene ke liye. prefers-reduced-motion media query se heavy transitions hata do." },
    { question: "Display: none ko transition kyun nahi kar sakte?", answer: "display property non-animatable hai kyunki browser immediately element ko DOM se add/remove kar deta hai bina intermediate states ke. Display none element visibility completely hatata hai, koi fade-out ya slide-out possible nahi. Alternative: opacity 0 + visibility: hidden + height: 0 (ya position: absolute se flow se hata do) — isse smooth hide/show transition ho sakta hai." }
  ],
  assignment: [
    "Ek hamburger menu banaye jisme 3 lines cross/arrow mein transition karein click karne par (morphing animation)",
    "Ek product filter bar banaye jisme active filter ko underline transition ho aur selected item highlight ho",
    "Ek notification system banaye jisme notifications queue mein aayein, slide-in karein, aur auto-dismiss ho"
  ],
  resources: [
    { title: "CSS Transition Reference (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition" },
    { title: "Cubic Bezier Generator", url: "https://cubic-bezier.com/" },
    { title: "CSS Transition Examples", url: "https://www.w3schools.com/css/css3_transitions.asp" }
  ],
  summary: "CSS transitions elements ke property changes ko smooth banati hain. transition-property batati hai kaun si property change hogi, transition-duration time specify karta hai, transition-timing-function speed curve decide karta hai (ease, linear, cubic-bezier), aur transition-delay start mein delay daalta hai. Transition shorthand chirono properties ek saath likhne deti hai. Multiple properties ke liye comma-separated transitions use hote hain. Best practices mein GPU-accelerated properties (transform, opacity) prefer karna, realistic durations (0.2s-0.5s), aur prefers-reduced-motion ka dhyan rakhna shamil hai."
};

export default lesson;
