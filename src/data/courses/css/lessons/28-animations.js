const lesson = {
  id: 28,
  slug: "animations",
  title: "CSS Animations",
  description: "Master @keyframes and animation properties for complex, engaging motion design",
  difficulty: "Intermediate",
  duration: "40 min",
  heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  tags: ["CSS", "Animations", "Keyframes", "Motion"],
  theory: [
    "CSS animations @keyframes rule aur animation properties ka combination hain jo complex, continuous, ya repeatable motion create karte hain",
    "@keyframes animation ka blueprint hai — isme hum define karte hain ki animation ke different points pe element kaisa dikhega (using percentages ya from/to)",
    "animation-name @keyframes ke naam ko reference karta hai — batata hai ki kaunsa keyframe animation apply karna hai element pe",
    "animation-duration define karta hai ki ek cycle of animation kitne time mein complete hoga — seconds (s) ya milliseconds (ms) mein",
    "animation-timing-function speed curve define karta hai — same as transition: ease, linear, ease-in, ease-out, cubic-bezier()",
    "animation-delay animation start karne se pehle ka wait time — positive delay rukta hai, negative delay directly kisi point se start karta hai",
    "animation-iteration-count batata hai ki animation kitni baar chalega — 1 (default), 5, ya infinite (continuous)",
    "animation-direction define karta hai ki animation forward, backward, ya alternate direction mein chale — normal, reverse, alternate, alternate-reverse",
    "animation-fill-mode decide karta hai ki animation ke start/end pe element kaun si state dikhe — none, forwards, backwards, both",
    "Animation shorthand ek line mein saari animation properties likhne ka tareeka hai — animation: name duration timing-function delay iteration-count direction fill-mode",
    "Step animations steps() function se frame-by-frame animation banate hain — sprite sheet animations (running man, clock tick) ke liye perfect",
    "Performance ke liye GPU-accelerated properties use karo (transform, opacity) aur unnecessary repaints avoid karo — will-change property se browser optimizations trigger hoti hain"
  ],
  examples: [
    { title: "Bouncing Ball Animation", description: "Ball continuously bounce karta hai", code: "@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-100px);\n  }\n}\n.ball {\n  animation: bounce 1s ease-in-out infinite;\n}", result: "Ball continuously upar neeche bounce karta rahega, 1 second ka ek cycle" },
    { title: "Fade In Animation", description: "Element slowly appear hota hai", code: "@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.hero-title {\n  animation: fadeIn 1s ease-out forwards;\n}", result: "Title neeche se upar aata hua appear hoga, end mein apni final position pe rukega" },
    { title: "Pulse Loading Effect", description: "Loading circle pulse karta hai", code: "@keyframes pulse {\n  0% { transform: scale(0.8); opacity: 0.5; }\n  50% { transform: scale(1); opacity: 1; }\n  100% { transform: scale(0.8); opacity: 0.5; }\n}\n.loading-dot {\n  animation: pulse 1.5s ease-in-out infinite;\n}\n.loading-dot:nth-child(2) { animation-delay: 0.3s; }\n.loading-dot:nth-child(3) { animation-delay: 0.6s; }", result: "Teen dots ek ke baad ek pulse karte hain — loading indicator jaisa effect" }
  ],
  syntax: [
    "@keyframes animationName { from { ... } to { ... } }",
    "@keyframes animationName { 0% { ... } 50% { ... } 100% { ... } }",
    "animation: name duration timing-function delay iteration-count direction fill-mode;"
  ],
  diagram: [
    "┌────────────────────────────────────────────────────────────┐",
    "│                     CSS ANIMATIONS                         │",
    "│                                                            │",
    "│  @keyframes bounce {                                       │",
    "│    0%   ┌──────┐   50%    ┌──────┐   100%   ┌──────┐      │",
    "│         │  🏀  │   ╱╲    │  🏀  │   ╱╲    │  🏀  │      │",
    "│         │down  │  ╱  ╲   │  up  │  ╱  ╲   │down  │      │",
    "│         └──────┘ ╱    ╲  └──────┘ ╱    ╲  └──────┘      │",
    "│  }              ╱      ╲         ╱      ╲                 │",
    "│                                                            │",
    "│  ANIMATION PROPERTIES:                                     │",
    "│  name       → bounce (keyframes reference)                 │",
    "│  duration   → 1s (cycle time)                             │",
    "│  timing     → ease-in-out (speed curve)                    │",
    "│  delay      → 0.2s (start delay)                          │",
    "│  iteration  → infinite (how many times)                    │",
    "│  direction  → alternate (forward/backward)                │",
    "│  fill-mode  → forwards (end state)                        │",
    "└────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Loading Spinner Animation", language: "css", code: ".spinner {\n  width: 50px;\n  height: 50px;\n  border: 5px solid #e0e0e0;\n  border-top-color: #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n/* Variant: Dual ring spinner */\n.dual-spinner {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 4px solid transparent;\n  border-top-color: #e74c3c;\n  border-bottom-color: #3498db;\n  animation: spin 1.2s ease-in-out infinite;\n}" },
    { title: "Floating Elements with Animation", language: "css", code: ".float-animation {\n  animation: float 3s ease-in-out infinite;\n}\n\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  25% {\n    transform: translateY(-15px) rotate(-3deg);\n  }\n  75% {\n    transform: translateY(-8px) rotate(2deg);\n  }\n}\n\n.delay-1 { animation-delay: 0s; }\n.delay-2 { animation-delay: 0.5s; }\n.delay-3 { animation-delay: 1s; }\n\n/* Smooth undo animation */\n@keyframes smoothUndo {\n  0% { transform: scale(1) rotate(0deg); }\n  50% { transform: scale(1.1) rotate(5deg); }\n  100% { transform: scale(1) rotate(0deg); }\n}" },
    { title: "Step Animation - Typewriter Effect", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: 'Courier New', monospace;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-height: 100vh;\n      background: #2c3e50;\n    }\n    .typewriter {\n      overflow: hidden;\n      white-space: nowrap;\n      border-right: 3px solid #3498db;\n      font-size: 32px;\n      color: white;\n      width: 0;\n      animation:\n        typing 3s steps(30) 1s forwards,\n        blink 0.7s step-end infinite;\n    }\n    @keyframes typing {\n      from { width: 0; }\n      to { width: 100%; }\n    }\n    @keyframes blink {\n      50% { border-color: transparent; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"typewriter\">Hello, welcome to CSS Animations!</div>\n</body>\n</html>" }
  ],
  output: [
    "Spinner continuously ghoomta rahega infinite animation se — loading indicator ke liye",
    "Floating elements upar neeche halke se move karein ge jaise hawa mein ho",
    "Typewriter effect text ko letter-by-letter type karega with blinking cursor"
  ],
  commonMistakes: [
    "@keyframes syntax galat likhna — @keyframes naam likhte hai curly braces ke saath, andar percentage ya from/to blocks hote hain",
    "Animation fill-mode nahi dena — animation khatam hone ke baad element apni original state pe jump back karta hai, forwards use karo final state retain karne ke liye",
    "Animation-name mein typo — @keyframes mein jo naam diya hai aur animation-name mein same name hona chahiye, mismatch pe animation nahi chalega",
    "Animation aur transition ek saath confuse karna — transition hover/focus jaise state changes ke liye, animation complex multi-step sequences ke liye",
    "Performance ka dhyan na rakhna — har property animate nahi karni chahiye, sirf transform aur opacity use karo smooth 60fps ke liye"
  ],
  bestPractices: [
    "GPU-accelerated properties use karo (transform, opacity) — yeh repaint/layout trigger nahi karti aur compositor thread pe chalti hain",
    "Animation ko hardware accelerate karne ke liye will-change property ka use karo — jaise will-change: transform, opacity",
    "Animation timing realistic rakho — ease-in-out natural feel deta hai, linear mechanical lagta hai",
    "Infinite animations ko prefers-reduced-motion media query se disable karo — motion sensitivity wale users ke liye",
    "Animation chhote rakho — 0.3s se 2s ke beech durations best hain, 3s+ boring lagte hain agar story nahi hai"
  ],
  tips: [
    "steps() function frame-by-frame animation ke liye use karo — sprite sheets, typewriter effect, clock tick ke liye perfect",
    "animation-direction: alternate + animation-iteration-count: infinite se back-and-forth animation milega bina double keyframes likhe",
    "Multiple animations ek element pe comma-separate karke lagao — animation: float 3s ease infinite, pulse 1.5s ease infinite"
  ],
  practice: [
    "Ek animated loading screen banaye jisme spinner, progress bar, aur dots hoon",
    "Ek hero section banaye jisme heading fade-in, image slide-in, aur button bounce-in animation ho"
  ],
  exercise: {
    instruction: "Create an animated notification toast with a slide-in, shake/attention effect, pause on hover, and slide-out after some time",
    hint: "Use multiple @keyframes (slideIn, shake, slideOut), animation-fill-mode: forwards, animation-play-state: paused on hover",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: 'Segoe UI', sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-height: 100vh;\n      background: #f0f2f5;\n    }\n    .notification {\n      position: fixed;\n      top: 30px;\n      right: 30px;\n      background: white;\n      padding: 20px 30px;\n      border-radius: 12px;\n      box-shadow: 0 10px 40px rgba(0,0,0,0.15);\n      display: flex;\n      align-items: center;\n      gap: 15px;\n      max-width: 400px;\n      border-left: 4px solid #27ae60;\n    }\n    .notification-icon {\n      width: 40px;\n      height: 40px;\n      background: #d4edda;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 20px;\n    }\n    .notification-content h3 {\n      color: #2c3e50;\n      font-size: 16px;\n    }\n    .notification-content p {\n      color: #888;\n      font-size: 14px;\n      margin-top: 3px;\n    }\n    .notification-close {\n      background: none;\n      border: none;\n      font-size: 20px;\n      cursor: pointer;\n      color: #aaa;\n      padding: 5px;\n    }\n    /* Add slideIn animation */\n    /* Add shake animation */\n    /* Add slideOut animation */\n    .notification {\n      /* Apply animations here */\n    }\n    .notification:hover {\n      /* Pause animation on hover */\n    }\n  </style>\n</head>\n<body>\n  <div class=\"notification\">\n    <div class=\"notification-icon\">✓</div>\n    <div class=\"notification-content\">\n      <h3>File uploaded successfully!</h3>\n      <p>Your document has been saved to the cloud.</p>\n    </div>\n    <button class=\"notification-close\">×</button>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "@keyframes animation ke blueprint mein kya hota hai?", options: ["Animation ka naam aur duration", "Different stages pe element ka style", "Animation ka delay", "Sirf element ka selector"], answer: 1 },
    { question: "Animation ko infinite baar chalane ke liye kaun si property use karte hain?", options: ["animation-duration: infinite", "animation-iteration-count: infinite", "animation-direction: infinite", "animation-repeat: infinite"], answer: 1 },
    { question: "animation-fill-mode: forwards kya karta hai?", options: ["Animation ko forward direction mein chalata hai", "Last keyframe ki state retain karta hai", "Animation ko reverse karta hai", "Animation delay add karta hai"], answer: 1 },
    { question: "Kaun si property step animations ke liye use hoti hai?", options: ["cubic-bezier()", "steps()", "linear()", "ease-out()"], answer: 1 },
    { question: "Animation shorthand mein properties ka sahi order kya hai?", options: ["duration name timing delay", "name duration timing delay iteration direction fill-mode", "delay timing duration name", "name delay duration timing fill-mode"], answer: 1 }
  ],
  interview: [
    { question: "CSS animations aur transitions mein kya difference hai?", answer: "Transitions state changes ke liye hote hain — element hover/focus/active se trigger hote hain aur ek state se doosri state mein smooth change karte hain. Animations @keyframes se define hote hain aur complex, multi-step, continuous, ya auto-play sequences ke liye hote hain bina kisi trigger ke. Transitions do states ke beech hote hain, animations multiple keyframes (0%, 50%, 100%) support karti hain." },
    { question: "CSS animations mein performance kaise optimize karte hain?", answer: "Performance optimization ke liye: 1) Sirf transform aur opacity animate karo — yeh GPU-accelerated hain. 2) will-change property use karo browser ko hint dene ke liye. 3) Complex @keyframes avoid karo jisme layout properties (width, height, margin) animate ho. 4) prefers-reduced-motion media query se animations disable karo motion-sensitive users ke liye. 5) animation ke liye separate compositor layer banane ke liye translateZ(0) ya will-change trigger karo." },
    { question: "animation-fill-mode ke different values kya karti hain?", answer: "animation-fill-mode four values hain: none (default) — animation khatam hote hi element original state pe aa jata hai. forwards — animation end hone ke baad last keyframe ki state retain karta hai. backwards — animation delay ke time first keyframe ki state apply karta hai (jaise opacity: 0 delay mein bhi). both — forwards + backwards combine, shuru aur khatam dono state manage karta hai." }
  ],
  assignment: [
    "Ek animated landing page hero section banaye jisme text fade-in ho, images slide-in ho, aur CTA button bounce effect ke saath aaye",
    "Ek sprite sheet animation banaye using steps() function — jaise running character ya blinking eyes",
    "Ek animated skill bar banaye jisme percentage ke hisaab se bar fill ho aur number count-up animation ho"
  ],
  resources: [
    { title: "MDN CSS Animation Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation" },
    { title: "CSS Animation Generator", url: "https://animista.net/" },
    { title: "Keyframes.app - Visual Animation Tool", url: "https://keyframes.app/" }
  ],
  summary: "CSS animations @keyframes rule aur animation properties ka powerful combination hai jo complex multi-step motion create karta hai. @keyframes define karta hai animation ke different stages (0%, 50%, 100%) pe element ka style. animation-name keyframes ko reference karta hai, animation-duration time define karta hai, animation-timing-function speed curve set karta hai, animation-delay start mein rukawat daalta hai, animation-iteration-count repeat count batata hai, animation-direction forward/backward control karta hai, aur animation-fill-mode start/end states manage karta hai. Performance ke liye transform aur opacity animate karna chahiye, aur prefers-reduced-motion ka dhyan rakhna chahiye."
};

export default lesson;
