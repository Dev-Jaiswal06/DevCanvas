const lesson = {
  id: 30,
  slug: "units",
  title: "CSS Units",
  description: "Master absolute and relative CSS units for flexible, accessible layouts",
  difficulty: "Intermediate",
  duration: "45 min",
  heroImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800",
  tags: ["CSS", "Units", "Typography", "Layout"],
  theory: [
    "CSS units do types ki hoti hain: absolute units (fixed size) aur relative units (context ke hisaab se change)",
    "px (pixels) sabse common absolute unit hai - 1px = 1/96th of an inch, fixed size hota hai jo zoom pe bhi same rehta hai",
    "em relative unit hai jo parent element ke font-size pe depend karta hai - 2em = parent font-size ka double",
    "rem (root em) relative unit hai jo root element ke font-size pe depend karta hai - 2rem = root font-size ka double",
    "rem em se better hai kyunki nesting mein complex calculations se bachata hai - ek hi reference point (root)",
    "% percentage relative unit hai jo parent element ke same property ke value pe depend karta hai",
    "vw (viewport width) unit 1vw = viewport width ka 1% - 100vw = full viewport width",
    "vh (viewport height) unit 1vh = viewport height ka 1% - 100vh = full viewport height",
    "vmin 1% of smaller dimension (width ya height jo chhota ho) aur vmax 1% of larger dimension",
    "ch unit character width pe based hai - 1ch = zero character ki width, text input sizing ke liye useful",
    "ex unit x-height pe based hai jo font ke lowercase x ki height hoti hai",
    "calc() function se different units ko mix kar sakte hain: calc(100% - 80px)",
    "Accessibility ke liye relative units (rem, em, %) use karna important hai - zoom karne pe content adjust hota hai",
    "Line-height ke liye unitless values use karo (1.5), px ya em nahi - isse inheritance better hoti hai",
    "min-width aur max-height jaise properties mein relative units use karo flexible layouts ke liye"
  ],
  examples: [
    { title: "em vs rem", description: "Understanding the difference between em and rem", code: ".parent { font-size: 20px; } .child-em { font-size: 2em; } .child-rem { font-size: 2rem; }", result: "child-em = 40px (parent ke hisaab se), child-rem = 32px (root 16px ke hisaab se)" },
    { title: "Viewport Units", description: "Full-screen hero section using vh and vw", code: ".hero { height: 100vh; width: 100vw; } .text { font-size: 5vw; }", result: "Hero section full screen cover karega, text viewport width ke saath scale karega" },
    { title: "calc() in Action", description: "Mixing fixed and relative units", code: ".sidebar { width: calc(100% - 250px); }", result: "Sidebar 100% width minus 250px, perfect for fixed-width side navigation" }
  ],
  syntax: [
    "length: value + unit (16px, 2rem, 50%, 100vh)",
    "calc(): calc(expression with mixed units)",
    "ch: width-in-character-units { width: 60ch; }"
  ],
  diagram: [
    "+------------------------------------------------------------------+",
    "|                      CSS UNITS COMPARISON                        |",
    "|                                                                  |",
    "|  +---------------------------------------------+               |",
    "|  | ABSOLUTE UNITS  | RELATIVE TO                |               |",
    "|  | px              | Screen pixels              |               |",
    "|  | pt, cm, mm, in  | Physical units (print)     |               |",
    "|  | RELATIVE UNITS  | RELATIVE TO                |               |",
    "|  | em              | Parent element font-size   |               |",
    "|  | rem             | Root (html) font-size      |               |",
    "|  | %               | Parent element value       |               |",
    "|  | vw              | Viewport width             |               |",
    "|  | vh              | Viewport height            |               |",
    "|  | vmin/vmax       | Min/max viewport dimension |               |",
    "|  | ch              | Character width            |               |",
    "|  +---------------------------------------------+               |",
    "+------------------------------------------------------------------+"
  ],
  code: [
    { title: "All Units in Action", language: "css", code: "/* Root setup */\nhtml {\n  font-size: 16px;\n}\n\n/* Absolute - fixed size */\n.px-box {\n  width: 300px;\n  padding: 10px;\n  border: 1px solid black;\n}\n\n/* Relative to parent */\n.parent {\n  font-size: 20px;\n}\n.child-em {\n  font-size: 1.5em;\n  margin-bottom: 2em;\n}\n\n/* Relative to root */\n.rem-box {\n  font-size: 1.125rem;\n  padding: 1rem;\n}\n\n/* Percentage */\n.container {\n  width: 80%;\n  max-width: 1200px;\n}\n.column {\n  width: 50%;\n}\n\n/* Viewport units */\n.hero {\n  width: 100vw;\n  height: 100vh;\n}\n.title {\n  font-size: calc(1rem + 3vw);\n}\n\n/* ch for readable text */\n.article {\n  max-width: 65ch;\n}\n\n/* calc() combination */\n.content {\n  width: calc(100% - 320px);\n  min-height: calc(100vh - 80px);\n}" },
    { title: "Responsive Typography with rem", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    html { font-size: 16px; }\n    h1 { font-size: 2.5rem; }\n    h2 { font-size: 2rem; }\n    h3 { font-size: 1.75rem; }\n    p { font-size: 1rem; line-height: 1.6; }\n    small { font-size: 0.875rem; }\n    .card {\n      padding: 1.5rem;\n      margin-bottom: 1rem;\n      border-radius: 0.5rem;\n    }\n  </style>\n</head>\n<body>\n  <h1>Heading (2.5rem = 40px)</h1>\n  <h2>Subheading (2rem = 32px)</h2>\n  <p>Regular paragraph text at 1rem (16px) with good readability.</p>\n  <small>Small text (0.875rem = 14px)</small>\n</body>\n</html>" },
    { title: "Accessible Units Practice", language: "css", code: "/* Accessibility-first unit usage */\n:root {\n  --font-base: 1rem;\n  --font-lg: 1.25rem;\n  --spacing-unit: 1rem;\n}\n\n.button {\n  font-size: var(--font-base);\n  padding: 0.5em 1em;\n  border-radius: 0.25em;\n}\n\nimg, video {\n  max-width: 100%;\n  height: auto;\n}\n\n.content {\n  max-width: 70ch;\n}\n\n.hero-title {\n  font-size: max(2rem, min(5vw, 4rem));\n}" }
  ],
  output: [
    "rem unit: consistent sizing regardless of nesting - best for typography and spacing",
    "ch unit: text columns max 65-75 characters wide for optimal readability",
    "calc() unit mixing: perfect for full width minus sidebar layouts"
  ],
  commonMistakes: [
    "em unit ko nesting mein use karna - nested elements mein em compound hota jaayega, rem use karo",
    "Line-height mein px ya em dena - line-height hamesha unitless (1.5) rakho for proper inheritance",
    "Font-size ke liye sirf px use karna - accessibility ke liye rem ya relative units use karo",
    "Width 100% + padding dena bhool jana - box-sizing: border-box set karo warna overflow hoga",
    "vh, vw ko har jagah use karna - mobile browsers mein 100vh issues create kar sakta hai, min-height prefer karo"
  ],
  bestPractices: [
    "Font sizes ke liye rem use karo, spacing (margin/padding) ke liye em ya rem",
    "Line-height unitless rakho (1.5), relative units nahi",
    "Container widths ke liye % use karo, max-width fixed rakho",
    "calc() use karo jab mixed units combine karne ho",
    "Accessibility ke liye relative units prefer karo, users browser zoom settings respect karo"
  ],
  tips: [
    "DevTools mein computed tab dekho to pata chalega ki actual pixel value kya hai",
    "clamp(min, preferred, max) function se fluid typography banao jo screen size ke saath adjust ho",
    "Root font-size ko 62.5% (10px) set kar sakte ho taake rem calculations easy ho: 1.6rem = 16px"
  ],
  practice: [
    "Using only rem units, create a consistent typography scale for h1 through h6 and paragraphs",
    "Build a full-viewport hero section with text that scales using viewport units"
  ],
  exercise: {
    instruction: "Create a blog post layout using relative CSS units. Use rem for typography, % for layout widths, ch for readable line lengths, and calc() for a sidebar-main content layout.",
    hint: "html font-size 62.5% set karo taake 1rem = 10px ho. Article text ke liye max-width 65ch use karo. Sidebar layout ke liye calc(100% - 300px) use karo.",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    html { font-size: 62.5%; }\n    body {\n      font-family: Georgia, serif;\n      font-size: 1.6rem;\n      line-height: 1.8;\n      color: #333;\n      background: #fafafa;\n    }\n    .container {\n      max-width: 1200px;\n      margin: 0 auto;\n      padding: 2rem;\n      display: flex;\n      gap: 4rem;\n    }\n    .main-content { flex: 1; }\n    .sidebar { width: 300px; flex-shrink: 0; }\n    h1 { font-size: 3.2rem; margin-bottom: 0.5em; color: #111; }\n    .meta { font-size: 1.4rem; color: #888; margin-bottom: 2em; }\n    .article-text { max-width: 70ch; }\n    .article-text p { margin-bottom: 1.5em; }\n    .sidebar-widget {\n      background: #fff;\n      padding: 2rem;\n      border-radius: 4px;\n      box-shadow: 0 1px 4px rgba(0,0,0,0.1);\n      margin-bottom: 2rem;\n    }\n    .sidebar-widget h3 { font-size: 1.8rem; margin-bottom: 1rem; }\n    .sidebar-widget ul { list-style: none; }\n    .sidebar-widget li { padding: 0.5rem 0; border-bottom: 1px solid #eee; }\n  </style>\n</head>\n<body>\n  <div class=container>\n    <main class=main-content>\n      <article class=article-text>\n        <h1>Understanding CSS Units</h1>\n        <p class=meta>Published on January 15, 2026 - 5 min read</p>\n        <p>CSS mein units bohot important hain kyunki ye decide karte hain ki elements kaise size honge aur screen sizes pe kaise behave karenge.</p>\n        <p>Absolute units like px fixed size dete hain jo kabhi nahi badalte. Yeh useful hain borders, shadows, aur fixed-width layouts ke liye.</p>\n        <p>rem unit sabse popular hai modern CSS mein kyunki ye root font-size pe based hai.</p>\n      </article>\n    </main>\n    <aside class=sidebar>\n      <div class=sidebar-widget>\n        <h3>Related Topics</h3>\n        <ul>\n          <li>CSS Variables</li>\n          <li>Responsive Design</li>\n          <li>Typography</li>\n        </ul>\n      </div>\n    </aside>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "rem unit kiske relative mein size calculate karta hai?", options: ["Parent ke font-size ke hisaab se", "Root element ke font-size ke hisaab se", "Viewport width ke hisaab se", "Container element ke hisaab se"], answer: 1 },
    { question: "1vw ka matlab kya hai?", options: ["Viewport width ka 100%", "Viewport width ka 1%", "Viewport height ka 1%", "1 visual pixel"], answer: 1 },
    { question: "Text readability ke liye line-width kitni chahiye?", options: ["20-30 chars", "45-75 chars using ch unit", "100-120 chars", "Jitna bada ho utna acha"], answer: 1 },
    { question: "calc() function mein kya kiya ja sakta hai?", options: ["Sirf same units add/subtract", "Different units combine jaise % aur px", "Sirf multiplication", "Sirf division"], answer: 1 },
    { question: "Accessibility ke liye kaunsa unit best hai?", options: ["px", "rem", "cm", "pt"], answer: 1 }
  ],
  interview: [
    { question: "em aur rem mein kya antar hai?", answer: "em parent element ke font-size ke relative hota hai, jabki rem root element ke font-size ke relative hota hai. em nesting mein compound ho jata hai (1.5em ke andar 1.5em = 2.25em), jabki rem hamesha consistent rehta hai. Isliye rem zyada predictable aur accessible hai." },
    { question: "Viewport units (vw, vh) kab use karte hain?", answer: "vw aur vh viewport ke size ke hisaab se elements ko size karne ke liye use hote hain. 100vh se full-screen sections banaye ja sakte hain. vw responsive typography mein use hota hai. Mobile browsers mein 100vh se careful rahna chahiye kyunki address bar actual height ko affect karta hai." },
    { question: "px ko kab use karna chahiye?", answer: "px fixed-size elements ke liye use karo jaise borders (1px solid), box-shadows, aur images. Typography, spacing, aur layout ke liye relative units (rem, em, %) use karo. Print stylesheets mein pt, cm, mm units ka use karo." }
  ],
  assignment: [
    "Apne existing project mein saare px units ko rem ya relative units mein convert karein",
    "Ek fluid typography scale banayein jo clamp() ka use karke h1 se h6 tak consistent ho"
  ],
  resources: [
    { title: "MDN CSS Values and Units", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" },
    { title: "CSS Units Guide", url: "https://www.sitepoint.com/css-units-guide/" },
    { title: "Px to Rem Converter", url: "https://nekocalc.com/px-to-rem-converter" }
  ],
  summary: "CSS units do categories mein aate hain: absolute (px, pt, cm, in) aur relative (rem, em, %, vw, vh, vmin, vmax, ch, ex). Pixels fixed size dete hain jabki relative units context ke hisaab se adjust hote hain. Modern CSS mein rem typography ke liye best hai kyunki ye root font-size pe based hai aur nesting mein compound nahi hota. Viewport units (vw, vh) full-screen layouts ke liye use hote hain. calc() function different units ko combine karne mein madad karta hai. Accessibility ke liye relative units prefer karein."
};

export default lesson;
