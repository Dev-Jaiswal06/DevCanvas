const lesson = {
  id: 32,
  slug: "functions",
  title: "CSS Functions",
  description: "Use powerful CSS functions for dynamic calculations and responsive values",
  difficulty: "Intermediate",
  duration: "45 min",
  heroImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
  tags: ["CSS", "Functions", "calc", "clamp", "Math"],
  theory: [
    "CSS functions predefined operations hain jo dynamic values generate karte hain - math calculations, color manipulation, aur responsive sizing",
    "calc() function different units ko mix karne deta hai: calc(100% - 80px) - addition, subtraction, multiplication, division sab possible",
    "calc() mein + aur - ke around spaces mandatory hain, * aur / ke liye spaces optional hain",
    "min() function multiple values mein se sabse chhoti value select karta hai: min(100%, 1200px) - responsive layouts ke liye",
    "max() function multiple values mein se sabse badi value select karta hai: max(300px, 50%) - minimum size guarantee ke liye",
    "clamp() teen values leta hai: minimum, preferred, maximum - clamp(16px, 4vw, 48px) fluid typography ke liye",
    "var() function CSS variables ki value access karta hai: var(--primary, blue) - fallback value bhi de sakte hain",
    "attr() function HTML attribute ki value ko CSS mein use karta hai - content property ke saath sabse common",
    "url() function external resources (images, fonts, SVGs) ko reference karne ke liye: url('image.jpg')",
    "rgb() aur hsl() functions colors define karne ke liye - alpha channel ke saath bhi: rgba(52, 152, 219, 0.5)",
    "hsl() color function more intuitive hai - hue (0-360), saturation (%), lightness (%) - hsl(200, 50%, 50%)",
    "env() function environment variables access karta hai - safe area insets (notch devices) ke liye useful",
    "env(safe-area-inset-top) iPhone notch ke liye padding add karta hai",
    "Functions ko nest kar sakte hain: clamp(1rem, calc(2vw + 1rem), 3rem)",
    "Modern CSS mein aur bhi functions hain: minmax() grid ke liye, repeat(), fit-content(), etc."
  ],
  examples: [
    { title: "calc() Mixed Units", description: "Fixed sidebar with fluid content width", code: ".content { width: calc(100% - 300px); }", result: "Content area 300px sidebar ke baad bachi hui jagah lega" },
    { title: "clamp() Fluid Typography", description: "Font that scales between min and max", code: "h1 { font-size: clamp(1.5rem, 5vw, 3rem); }", result: "Heading 1.5rem se 3rem ke beech scale karega viewport ke saath" },
    { title: "min() Responsive Width", description: "Container that is either full width or max-width", code: ".container { width: min(100%, 1200px); }", result: "Container 1200px tak full-width rahega, phir fixed" }
  ],
  syntax: [
    "calc(): calc(expression) - arithmetic on values",
    "min()/max(): min(value1, value2) / max(value1, value2)",
    "clamp(): clamp(minimum, preferred, maximum)"
  ],
  diagram: [
    "+------------------------------------------------------------------+",
    "|                    CSS FUNCTIONS OVERVIEW                         |",
    "|                                                                  |",
    "|  +------------+  +------------+  +--------------------------+    |",
    "|  | calc()     |  | min/max()  |  | clamp()                  |    |",
    "|  | % + px     |  | 100% vs    |  | min: 16px               |    |",
    "|  | em + vw    |  | 1200px     |  | pref: 4vw               |    |",
    "|  | (100%-80px)|  | min wins   |  | max: 48px               |    |",
    "|  +------------+  +------------+  +--------------------------+    |",
    "|  +------------+  +------------+  +--------------------------+    |",
    "|  | hsl/rgb()  |  | attr()     |  | env()                    |    |",
    "|  | hsl(200    |  | content:   |  | safe-area-inset-top     |    |",
    "|  | 50% 50%)   |  | attr(href) |  | for notch devices        |    |",
    "|  +------------+  +------------+  +--------------------------+    |",
    "+------------------------------------------------------------------+"
  ],
  code: [
    { title: "All Major CSS Functions", language: "css", code: "/* ===== calc() ===== */\n.sidebar-layout { display: flex; }\n.sidebar { width: 280px; flex-shrink: 0; }\n.main {\n  width: calc(100% - 280px);\n  padding: calc(1rem + 2%);\n  margin-left: calc(2 * 1rem);\n}\n\n/* ===== min() ===== */\n.container {\n  width: min(100% - 2rem, 1200px);\n  margin-inline: auto;\n}\n\n/* ===== max() ===== */\n.sidebar { width: max(250px, 20%); }\n\n/* ===== clamp() ===== */\nh1 { font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem); }\np { font-size: clamp(0.875rem, 2vw + 0.5rem, 1.125rem); }\n\n/* ===== var() ===== */\n:root { --primary: #4361ee; --spacing: 16px; }\n.button { background: var(--primary, #333); padding: var(--spacing); }\n\n/* ===== rgb() / hsl() ===== */\n.element {\n  color: rgb(52, 152, 219);\n  background: rgba(52, 152, 219, 0.1);\n  border-color: hsl(200, 70%, 50%);\n}\n\n/* ===== env() ===== */\n.fixed-header {\n  padding-top: env(safe-area-inset-top, 0px);\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n}\n\n/* ===== attr() ===== */\n.tooltip::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  background: #333;\n  color: white;\n  padding: 4px 8px;\n}\n\n/* ===== url() ===== */\n.banner {\n  background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800');\n  background-size: cover;\n}" },
    { title: "Fluid Typography with clamp()", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body { font-family: Georgia, serif; padding: 2rem; background: #fafafa; }\n    .content { max-width: min(100% - 2rem, 800px); margin: 0 auto; }\n    h1 { font-size: clamp(1.75rem, 5vw, 3.5rem); line-height: 1.15; margin-bottom: clamp(1rem, 3vw, 2rem); }\n    h2 { font-size: clamp(1.25rem, 3vw, 2.5rem); line-height: 1.2; margin-bottom: 1rem; }\n    p { font-size: clamp(1rem, 2vw, 1.25rem); line-height: 1.7; color: #444; margin-bottom: 1.5rem; }\n    .info { background: hsl(200, 60%, 95%); padding: clamp(1rem, 3vw, 2rem); border-radius: 8px; margin-top: 2rem; }\n    .info strong { color: hsl(200, 70%, 40%); }\n  </style>\n</head>\n<body>\n  <div class=content>\n    <h1>Fluid Typography with CSS Functions</h1>\n    <p>clamp() function ka use karke hum aisi typography bana sakte hain jo har screen size pe perfect lage. Yeh viewport ke saath smoothly scale karta hai bina media queries ke.</p>\n    <h2>Why clamp() is Powerful</h2>\n    <p>clamp(min, preferred, max) ek fluid range banata hai. Preferred value viewport units mein hoti hai jaise vw, aur min/max fixed values hoti hain jaise rem. Is tarah text kabhi bhi chhota ya bada nahi hoga.</p>\n    <div class=info><strong>Pro Tip:</strong> calc() ke saath clamp() use karke aur bhi precise control pa sakte hain: clamp(1rem, calc(1rem + 1vw), 2rem)</div>\n  </div>\n</body>\n</html>" },
    { title: "Practical Function Combinations", language: "css", code: "/* Responsive container system */\n:root {\n  --container-max: 1200px;\n  --gutter: clamp(1rem, 2vw, 2rem);\n}\n\n.container {\n  width: min(calc(100% - var(--gutter) * 2), var(--container-max));\n  margin-inline: auto;\n}\n\n/* Dynamic card grid */\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));\n  gap: clamp(0.5rem, 2vw, 1.5rem);\n}\n\n/* Fluid spacing scale */\n:root {\n  --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);\n  --space-sm: clamp(0.5rem, 1vw, 0.75rem);\n  --space-md: clamp(1rem, 2vw, 1.5rem);\n  --space-lg: clamp(1.5rem, 4vw, 3rem);\n  --space-xl: clamp(2rem, 6vw, 5rem);\n}\n\n.section { padding-block: var(--space-xl); }\n\n/* Aspect ratio with calc */\n.video-embed {\n  aspect-ratio: 16 / 9;\n  width: 100%;\n  max-width: min(100%, 800px);\n}\n\n/* Color with alpha */\n.overlay { background: hsl(200, 60%, 50%, 0.8); }\n\n/* Safe area for mobile */\n.app-layout {\n  padding-top: calc(env(safe-area-inset-top, 0px) + 1rem);\n  padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 1rem);\n}\n\n/* Tooltip with attr() */\n[data-tooltip]:hover::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #333;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n}" }
  ],
  output: [
    "calc(100% - 300px): fluid width minus fixed sidebar - perfect for mixed unit layouts",
    "clamp(1rem, 4vw, 3rem): fluid typography that scales between 16px and 48px",
    "min(100%, 1200px): container that is full width on mobile, capped on desktop"
  ],
  commonMistakes: [
    "calc() mein + aur - ke around spaces bhoolna - calc(50%-20px) kaam nahi karega, calc(50% - 20px) sahi hai",
    "clamp() mein values wrong order mein dena - pehle minimum, phir preferred, phir maximum",
    "var() mein fallback bhool jana - hamesha fallback do: var(--color, black)",
    "attr() ko sirf content property ke saath use karna - non-content properties mein kaam nahi karta",
    "rgb() mein values comma se nahi lena - modern syntax rgb(52 152 219 / 0.5) bhi valid hai"
  ],
  bestPractices: [
    "Fluid typography ke liye clamp() use karo, multiple media queries nahi",
    "Responsive containers ke liye min(100%, maxWidth) pattern use karo",
    "calc() ke saath CSS variables combine karo for maintainable calculations",
    "Hsl() color function use karo - ye rgb() se zyada intuitive hai",
    "env() hamesha use karo mobile layouts mein safety areas handle karne ke liye"
  ],
  tips: [
    "DevTools mein computed styles dekh kar verify kar sakte ho ki function actual value kya generate kar raha hai",
    "CSS functions ko nest kar sakte hain: min(max(300px, 50%), 800px)",
    "calc(var(--a) + var(--b)) pattern se dynamic spacing systems banao"
  ],
  practice: [
    "Ek fluid typography system banayein jahan h1-h6 clamp() ka use kare different scales ke saath",
    "min(), max(), aur clamp() ka use karke ek responsive pricing card component banayein"
  ],
  exercise: {
    instruction: "Create a responsive pricing page using CSS functions. Use clamp() for fluid typography, min() for container width, calc() for layout calculations, and hsl() for a color scheme. Include 3 pricing tiers with responsive cards.",
    hint: "Card widths ke liye min(max(280px, 30%), 400px) use karo. Pricing amounts ke liye clamp(2rem, 5vw, 3.5rem) use karo.",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body {\n      font-family: Arial, sans-serif;\n      background: hsl(220, 20%, 95%);\n      padding: 2rem;\n      min-height: 100vh;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .container {\n      width: min(calc(100% - 2rem), 1100px);\n      margin-inline: auto;\n    }\n    .section-title { text-align: center; margin-bottom: clamp(2rem, 5vw, 4rem); }\n    .section-title h1 { font-size: clamp(2rem, 5vw, 3rem); color: hsl(220, 60%, 20%); margin-bottom: 0.5rem; }\n    .section-title p { font-size: clamp(1rem, 2vw, 1.2rem); color: hsl(220, 20%, 50%); }\n    .pricing-grid {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: clamp(1rem, 3vw, 2rem);\n    }\n    .pricing-card {\n      background: white;\n      border-radius: 12px;\n      padding: clamp(1.5rem, 3vw, 2.5rem);\n      width: min(max(280px, calc(33% - 2rem)), 350px);\n      box-shadow: 0 2px 16px hsl(220, 20%, 80%);\n      text-align: center;\n      display: flex;\n      flex-direction: column;\n      transition: transform 0.3s;\n    }\n    .pricing-card:hover { transform: translateY(-4px); }\n    .pricing-card.featured { background: hsl(220, 60%, 20%); color: white; }\n    .pricing-card h2 { font-size: clamp(1.25rem, 2vw, 1.5rem); margin-bottom: 1rem; }\n    .price { font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 0.25rem; }\n    .price-period { font-size: clamp(0.875rem, 1.5vw, 1rem); opacity: 0.7; margin-bottom: 2rem; }\n    .features { list-style: none; margin-bottom: 2rem; flex: 1; }\n    .features li { padding: 0.5rem 0; font-size: clamp(0.875rem, 1.5vw, 1rem); border-bottom: 1px solid hsl(220, 20%, 90%); }\n    .btn {\n      display: inline-block;\n      padding: clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 2rem);\n      border-radius: 8px;\n      text-decoration: none;\n      font-weight: 600;\n      font-size: clamp(0.875rem, 1.5vw, 1rem);\n    }\n    .btn-primary { background: hsl(220, 60%, 50%); color: white; }\n    .btn-primary:hover { background: hsl(220, 60%, 40%); }\n    .pricing-card.featured .btn-primary { background: white; color: hsl(220, 60%, 20%); }\n  </style>\n</head>\n<body>\n  <div class=container>\n    <div class=section-title>\n      <h1>Choose Your Plan</h1>\n      <p>Flexible pricing that scales with your needs</p>\n    </div>\n    <div class=pricing-grid>\n      <div class=pricing-card>\n        <h2>Starter</h2>\n        <div class=price>$9</div>\n        <div class=price-period>per month</div>\n        <ul class=features>\n          <li>5 Projects</li><li>10GB Storage</li><li>Basic Support</li><li>1 Team Member</li>\n        </ul>\n        <a href=# class=\"btn btn-primary\">Get Started</a>\n      </div>\n      <div class=\"pricing-card featured\">\n        <h2>Professional</h2>\n        <div class=price>$29</div>\n        <div class=price-period>per month</div>\n        <ul class=features>\n          <li>Unlimited Projects</li><li>100GB Storage</li><li>Priority Support</li><li>5 Team Members</li><li>Advanced Analytics</li>\n        </ul>\n        <a href=# class=\"btn btn-primary\">Get Started</a>\n      </div>\n      <div class=pricing-card>\n        <h2>Enterprise</h2>\n        <div class=price>$99</div>\n        <div class=price-period>per month</div>\n        <ul class=features>\n          <li>Unlimited Everything</li><li>1TB Storage</li><li>24/7 Support</li><li>Unlimited Members</li><li>Custom Integrations</li><li>SLA Guarantee</li>\n        </ul>\n        <a href=# class=\"btn btn-primary\">Get Started</a>\n      </div>\n    </div>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "calc() mein + aur - ke operators ke around kya zaroori hai?", options: ["Semicolon", "Spaces", "Commas", "Brackets"], answer: 1 },
    { question: "clamp(16px, 5vw, 48px) mein 5vw kya represent karta hai?", options: ["Minimum value", "Maximum value", "Preferred fluid value", "Fallback value"], answer: 2 },
    { question: "Container ko full-width rakhne lekin 1200px se bada na hone ke liye kaunsa function?", options: ["calc(100% - 1200px)", "max(100%, 1200px)", "min(100%, 1200px)", "clamp(100%, 1200px, 100%)"], answer: 2 },
    { question: "attr() function kaise kaam karta hai?", options: ["Element property access karta hai", "HTML attribute value CSS mein use karta hai", "File path generate karta hai", "Viewport size return karta hai"], answer: 1 },
    { question: "iPhone notch ke liye safe area padding kaise add karein?", options: ["padding: env(safe-area-inset-top)", "padding: var(--safe-area)", "padding: notch()", "padding: device-safe()"], answer: 0 }
  ],
  interview: [
    { question: "calc() function ka use case kya hai aur isme spaces kyun zaroori hain?", answer: "calc() different CSS units ko combine karne ke liye use hota hai. + aur - operators ke around spaces mandatory hain kyunki 50%-20px negative number ki tarah parse ho sakta hai. * aur / ke saath spaces optional hain." },
    { question: "clamp() vs media queries - kab kaunsa use karein?", answer: "clamp() fluid values ke liye use karo jo continuous scaling chahte ho - typography, spacing, widths. Media queries use karo jab discrete layout changes chahiye - column count change, navigation style switch, element hide/show." },
    { question: "min() aur max() functions practical use cases kya hain?", answer: "min() responsive container ke liye: width: min(100%, 1200px). max() minimum size guarantee ke liye: width: max(300px, 50%). Dono ko combine kar sakte hain: width: min(max(300px, 50%), 800px)." }
  ],
  assignment: [
    "Apne project mein saari typography ko clamp() based fluid system mein convert karein",
    "Ek component banayein jo min(), max(), calc(), aur hsl() chaaro functions ka use karta ho"
  ],
  resources: [
    { title: "MDN - CSS Functions Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions" },
    { title: "Modern CSS Solutions for clamp()", url: "https://moderncss.dev/practical-uses-of-css-math-functions-calc-clamp-min-max/" },
    { title: "CSS Functions Interactive Guide", url: "https://css-tricks.com/complete-guide-to-css-functions/" }
  ],
  summary: "CSS functions reusable, dynamic values banane ke powerful tools hain. calc() mixed unit arithmetic ke liye, min()/max() responsive limits ke liye, aur clamp() fluid value ranges ke liye use hota hai. var() CSS variables access karta hai, attr() HTML attributes read karta hai, hsl()/rgb() colors define karte hain, aur env() device environment variables access karta hai. CSS functions ko nest karke complex responsive calculations bana sakte hain jo media queries ke bina kaam karte hain."
};

export default lesson;
