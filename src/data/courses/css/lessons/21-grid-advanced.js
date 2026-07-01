const lesson = {
  id: 21,
  slug: "grid-advanced",
  title: "Advanced CSS Grid",
  description: "Grid template areas, named grid lines, nested grids, and complex responsive layouts",
  difficulty: "Advanced",
  duration: "55 min",
  heroImage: "https://images.unsplash.com/photo-1550681560-5c41e6b6e5b5?w=800",
  tags: ["CSS", "Grid", "Advanced", "Layout", "Responsive"],
  theory: [
    "Grid-template-areas — layout ko visual ASCII-art jaise define karte ho. Har cell ka naam do, aur grid-area se items assign karo. Layout changes bahut easy ho jaate hain.",
    "Grid-area property — item ko named area assign karta hai. Example: grid-area: header; mobile par media query me grid-template-areas change kar do — layout complete change!",
    "Named grid lines — grid lines ko descriptive names do. Jaise grid-template-columns: [sidebar-start] 250px [sidebar-end main-start] 1fr [main-end];",
    "Grid line names ke saath span bhi kar sakte ho — grid-column: sidebar-start / main-end; directly line names reference karo.",
    "Nested grids — ek grid item ke andar display:grid laga kar doosra grid banao. Complex layouts ke liye powerful technique.",
    "Grid vs Flexbox decision: Page-level layout → Grid. Component-level alignment → Flexbox. Combine both for best results.",
    "Subgrid — parent grid ke tracks ko child grid inherit kar sakta hai. grid-template-rows: subgrid; se child parent ki rows align karta hai. (browser support check karo)",
    "Masonry layout — CSS Grid native masonry abhi experimental hai (grid-template-rows: masonry). JavaScript ya third-party libraries aaj bhi common hain.",
    "Complex layouts: Grid ke saath overlapping elements bana sakte ho using grid-column/grid-row overlap. Z-index stacking context ka dhyan rakho.",
    "Responsive grid patterns: 12-column grid system (like Bootstrap) easily CSS Grid se implement kar sakte ho. Mobile par stack, tablet par 6-column, desktop par 12-column.",
    "Implicit grid ka control: grid-auto-rows, grid-auto-columns, grid-auto-flow se unexpected grid behavior control karo. grid-auto-flow: dense; se gaps fill hote hain.",
    "Alignment in Grid: justify-items (cell me horizontal), align-items (cell me vertical), justify-content (poora grid container me horizontal), align-content (vertical). Place-items shorthand dono axes ke liye."
  ],
  examples: [
    {
      title: "Grid Template Areas",
      description: "Visual layout definition using named areas.",
      code: ".layout {\n  grid-template-areas:\n    'header  header  header'\n    'nav     main    aside'\n    'footer  footer  footer';\n}\nheader { grid-area: header; }",
      result: "3-column layout: header full width, nav (left), main (center), aside (right), footer full width."
    },
    {
      title: "Named Grid Lines",
      description: "Grid lines ko names dena for better readability.",
      code: ".grid { grid-template-columns: [left] 1fr [center] 2fr [right] 1fr; }\n.item { grid-column: left / right; }",
      result: "Item left line se right line tak span kar raha hai — numeric indexes ki jagah readable names."
    },
    {
      title: "Nested Grids",
      description: "Grid item ke andar doosra grid banana.",
      code: ".parent-grid { display: grid; grid-template-columns: 1fr 1fr; }\n.child-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }",
      result: "Parent 2 columns me divide. Ek column ke andar 3-column child grid."
    }
  ],
  syntax: [
    { property: "grid-template-areas", values: "<string>+", example: "grid-template-areas: 'header header' 'main aside' 'footer footer';" },
    { property: "grid-area", values: "<name> | <row-start> / <col-start> / <row-end> / <col-end>", example: "grid-area: main;" },
    { property: "grid-template-columns (with named lines)", values: "[<name>] <track>", example: "grid-template-columns: [sidebar] 250px [main] 1fr;" },
    { property: "subgrid", values: "subgrid", example: "grid-template-rows: subgrid;" },
    { property: "grid-auto-flow", values: "row | column | dense", example: "grid-auto-flow: dense;" }
  ],
  diagram: [
    "GRID TEMPLATE AREAS:",
    "",
    "grid-template-areas:",
    "  'header  header  header '",
    "  'nav     main    aside '",
    "  'footer  footer  footer '",
    "",
    "┌─────────┬──────────┬─────────┐",
    "│  HEADER │  HEADER  │ HEADER  │",
    "├─────────┼──────────┼─────────┤",
    "│  NAV    │   MAIN   │  ASIDE  │",
    "├─────────┼──────────┼─────────┤",
    "│ FOOTER  │  FOOTER  │ FOOTER  │",
    "└─────────┴──────────┴─────────┘",
    "",
    "MOBILE LAYOUT (rearranged):",
    "  grid-template-areas:",
    "    'header '",
    "    'nav    '",
    "    'main   '",
    "    'aside  '",
    "    'footer '",
    "",
    "NAMED GRID LINES:",
    "  [header-start] ──── [header-end]",
    "  [sidebar] 200px [content] 1fr [end]"
  ],
  code: [
    {
      title: "Grid Template Areas - Full Page Layout",
      language: "html",
      code: "<div class=\"page\">\n  <header class=\"header\">Header</header>\n  <nav class=\"nav\">Navigation</nav>\n  <main class=\"main\">\n    <h1>Main Content</h1>\n    <p>Grid template areas make layout changes super easy!</p>\n  </main>\n  <aside class=\"aside\">Sidebar</aside>\n  <footer class=\"footer\">Footer</footer>\n</div>\n\n<style>\n.page {\n  display: grid;\n  min-height: 100vh;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 200px 1fr 200px;\n  grid-template-areas:\n    'header header header'\n    'nav    main   aside'\n    'footer footer footer';\n  gap: 4px;\n  font-family: system-ui, sans-serif;\n}\n.header { grid-area: header; background: #2c3e50; color: white; padding: 1rem; }\n.nav { grid-area: nav; background: #ecf0f1; padding: 1rem; }\n.main { grid-area: main; padding: 1rem; }\n.aside { grid-area: aside; background: #ecf0f1; padding: 1rem; }\n.footer { grid-area: footer; background: #2c3e50; color: white; padding: 1rem; text-align: center; }\n\n@media (max-width: 768px) {\n  .page {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      'header'\n      'nav'\n      'main'\n      'aside'\n      'footer';\n  }\n}\n</style>"
    },
    {
      title: "Complex Dashboard with Overlapping Grid Items",
      language: "html",
      code: "<div class=\"dashboard\">\n  <div class=\"widget welcome\">\n    <h2>Welcome Back!</h2>\n    <p>Your dashboard overview</p>\n  </div>\n  <div class=\"widget chart\">📊 Chart Widget</div>\n  <div class=\"widget stats\">📈 Stats</div>\n  <div class=\"widget activity\">\n    <h3>Recent Activity</h3>\n    <ul>\n      <li>User signed up</li>\n      <li>Order completed</li>\n      <li>Payment received</li>\n    </ul>\n  </div>\n  <div class=\"widget tasks\">\n    <h3>Tasks</h3>\n    <div class=\"task\">✓ Design review</div>\n    <div class=\"task\">✓ Code deploy</div>\n    <div class=\"task\">○ Testing</div>\n  </div>\n  <div class=\"widget calendar\">📅 Calendar</div>\n</div>\n\n<style>\n.dashboard {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: 200px;\n  gap: 16px;\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n  font-family: system-ui, sans-serif;\n}\n.widget {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n.welcome {\n  grid-column: span 2;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.chart { grid-column: span 2; }\n.activity { grid-row: span 2; }\n.tasks { grid-column: span 2; }\n\n@media (max-width: 768px) {\n  .dashboard { grid-template-columns: 1fr; }\n  .welcome, .chart, .tasks { grid-column: span 1; }\n  .activity { grid-row: span 1; }\n}\n</style>"
    }
  ],
  output: [
    "Page layout: header full width, nav left (200px), main center (flexible), aside right (200px), footer full width",
    "Mobile: ek column me sab stack ho gaye — sirf grid-template-areas change kiya",
    "Dashboard: 4-column grid with overlapping and spanning widgets — chart span 2, activity span 2 rows"
  ],
  commonMistakes: [
    "Grid-template-areas mein dot (.) ka use na karna — empty cells ke liye dot use karte hain, jaise 'header header .'",
    "Grid-area names ka grid-template-areas se match na karna — case-sensitive hai, spelling exact match karo",
    "Nested grids mein parent grid ki properties child par apply na karna — child grid apna separate context hai",
    "Subgrid ka browser support check na karna — abhi fully supported nahi hai sab browsers mein",
    "Complex overlapping layouts mein z-index na dena — overlapping items ka stacking order unexpected ho sakta hai"
  ],
  bestPractices: [
    "Grid-template-areas use karo readability ke liye — layout ek nazar me samajh aata hai",
    "Named grid lines use karo numeric indexes se better hai code maintainability ke liye",
    "Mobile-first approach: pehle mobile layout (single column), phir media query me complex layout",
    "Grid for page-level layout, Flexbox for component-level alignment — dono ka combination best hai",
    "Grid-auto-flow: dense use karo dynamic content ke liye — gaps automatically fill ho jayenge"
  ],
  tips: [
    "Grid-template-areas mein same name multiple cells ho sakte hain — item utne span karega",
    "Dots (.) se empty cells represent karte hain template areas mein",
    "Place-items: center se grid items dono axes par center ho jaate hain (justify-items + align-items shorthand)"
  ],
  practice: [
    "Ek magazine cover layout banaiye jisme grid-template-areas use ho aur mobile responsive ho",
    "Ek nested grid component banaiye — ek card grid jahan har card ke andar icon, title, aur stats ka sub-grid ho"
  ],
  exercise: {
    instruction: "Ek portfolio homepage banaiye. Grid-template-areas use karein. Layout: header, hero section (2 columns — text left, image right), skills section (3 cards), projects section (2×2 grid), aur footer. Mobile par sab ek column ho jaaye.",
    hint: "Grid-template-areas define karo: 'header header' 'hero hero' 'skills skills' 'proj1 proj2' 'proj3 proj4' 'footer footer'. Mobile: sab single column. Nested grid skills section ke andar 3-column grid banao.",
    starterCode: "<div class=\"portfolio\">\n  <header class=\"port-header\">\n    <h2>Portfolio</h2>\n    <nav>\n      <a href=\"#\">Work</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Contact</a>\n    </nav>\n  </header>\n\n  <section class=\"hero\">\n    <div class=\"hero-text\">\n      <h1>I Design & Build</h1>\n      <p>Full-stack developer passionate about creating amazing web experiences.</p>\n      <button>View Work</button>\n    </div>\n    <div class=\"hero-image\">\n      <div class=\"placeholder\">[Your Image]</div>\n    </div>\n  </section>\n\n  <section class=\"skills\">\n    <h2>My Skills</h2>\n    <div class=\"skills-grid\">\n      <div class=\"skill\">HTML/CSS</div>\n      <div class=\"skill\">JavaScript</div>\n      <div class=\"skill\">React</div>\n    </div>\n  </section>\n\n  <section class=\"projects\">\n    <div class=\"project\">Project 1</div>\n    <div class=\"project\">Project 2</div>\n    <div class=\"project\">Project 3</div>\n    <div class=\"project\">Project 4</div>\n  </section>\n\n  <footer class=\"port-footer\">© 2025 Portfolio</footer>\n</div>\n\n<style>\n.portfolio {\n  /* Add grid with template areas */\n}\n.skills-grid {\n  /* Nested grid */\n}\n.projects {\n  /* Project grid */\n}\n@media (max-width: 768px) {\n  /* Mobile layout */\n}\n</style>"
  },
  quiz: [
    {
      question: "Grid-template-areas mein dot (.) ka kya matlab hai?",
      options: ["Important cell", "Empty cell", "Last cell", "Hidden cell"],
      answer: 1
    },
    {
      question: "Page-level ke liye kaun sa layout better hai?",
      options: ["Flexbox", "Grid", "Float", "Inline-block"],
      answer: 1
    },
    {
      question: "Subgrid kya karta hai?",
      options: ["Grid ko delete karta hai", "Parent grid ke tracks child ko inherit karne deta hai", "Grid items ko hide karta hai", "Grid lines ko remove karta hai"],
      answer: 1
    },
    {
      question: "Grid-auto-flow: dense ka kya effect hai?",
      options: ["Grid ko slow karta hai", "Khali gaps ko items se fill karta hai", "Grid lines ko dense banata hai", "Colors change karta hai"],
      answer: 1
    },
    {
      question: "Mobile layout ke liye grid-template-areas kaise change karein?",
      options: ["Sirf HTML change karo", "New CSS file banao", "Media query mein grid-template-areas ko single column karo", "Kuch nahi karna"],
      answer: 2
    }
  ],
  interview: [
    {
      question: "Grid-template-areas kaise kaam karta hai? Example do.",
      answer: "Grid-template-areas se layout ko visual string pattern ki tarah define karte hain. Har cell ka naam hota hai. Items ko grid-area property se assign karte hain. Media query mein sirf template-areas change karke pura layout rearrange kar sakte ho. Example: 'header header' 'nav main' 'footer footer'."
    },
    {
      question: "CSS Grid me overlapping items kaise bana sakte hain?",
      answer: "Grid items ko same grid lines par assign karke overlap bana sakte ho. Jaise do items ko grid-column: 1 / 3; grid-row: 1 / 3; do — wo overlap karenge. Z-index se stacking order control karo."
    },
    {
      question: "Grid aur Flexbox ko ek saath kaise use karte hain? Practical example do.",
      answer: "Grid page-level layout ke liye (header, sidebar, main, footer) aur Flexbox component-level alignment ke liye (navbar links, card content, button groups). Example: Grid se 3-column layout banao, har column ke andar Flexbox se items align karo."
    }
  ],
  assignment: [
    "Grid-template-areas se ek news homepage banaiye with breaking news (large), article grid, sidebar, aur footer — mobile responsive",
    "Named grid lines use karke ek 12-column grid system banaiye (like Bootstrap grid), jisme items span classes ke through kaam kare",
    "Ek nested grid layout banaiye — ek product listing page jahan left side filters (column), right side product grid (nested grid 3 columns), aur product cards ke andar details flexbox"
  ],
  resources: [
    { title: "MDN - Grid Template Areas", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas" },
    { title: "CSS-Tricks - Named Grid Lines", url: "https://css-tricks.com/a-whole-website-in-a-css-grid/" },
    { title: "Grid by Example", url: "https://gridbyexample.com/" }
  ],
  summary: "Advanced CSS Grid mein grid-template-areas se layout visual ASCII-art jaise define hote hain — media queries se pura layout rearrange karna easy ho jaata hai. Named grid lines se code readable banata hai. Nested grids se complex component-level layouts bante hain. Subgrid parent grid tracks inherit karta hai. Grid-auto-flow: dense se gaps fill hote hain. Grid page-level layout ke liye best hai, Flexbox component-level alignment ke liye. Dono ka combination modern web development ki superpower hai. Grid-template-areas, named lines, aur responsive patterns se complex production layouts easily bana sakte ho."
};

export default lesson;
