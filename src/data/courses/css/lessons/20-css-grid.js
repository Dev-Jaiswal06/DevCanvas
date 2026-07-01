const lesson = {
  id: 20,
  slug: "css-grid",
  title: "CSS Grid",
  description: "Two-dimensional layout system: grid container, grid items, tracks, and responsive patterns",
  difficulty: "Intermediate",
  duration: "50 min",
  heroImage: "https://images.unsplash.com/photo-1550681560-5c41e6b6e5b5?w=800",
  tags: ["CSS", "Grid", "Layout", "Responsive"],
  theory: [
    "CSS Grid ek two-dimensional layout system hai jo rows aur columns simultaneously control karta hai. Flexbox one-dimensional hai, Grid two-dimensional.",
    "Display:grid se grid container banta hai. Direct children automatically grid items ban jaate hain. Grid sirf parent-child relationship me kaam karta hai.",
    "Grid-template-columns aur grid-template-rows se tracks define karte hain. Example: grid-template-columns: 200px 1fr 200px — three columns.",
    "Fr unit (fraction) — available space ko proportionally distribute karta hai. 1fr = ek hissa. Flexbox ke flex-grow jaisa but grid ke liye.",
    "Repeat() function — repetitive track patterns ke liye. repeat(3, 1fr) = 1fr 1fr 1fr. Auto-fill aur auto-fit ke saath powerful.",
    "Minmax() — minimum aur maximum size define karta hai. minmax(200px, 1fr) matlab minimum 200px, maximum 1fr. Responsive grids ke liye perfect.",
    "Gap (formerly grid-gap) — grid items ke beech spacing. Shorthand: gap: 20px; ya row-gap: 10px; column-gap: 20px;",
    "Grid-column aur grid-row — span multiple tracks ke liye. grid-column: 1 / 3 matlab column 1 se 3 tak span. Ya span keyword: grid-column: span 2;",
    "Grid-area — shorthand for grid-row-start / grid-column-start / grid-row-end / grid-column-end. Template areas ke saath use hota hai.",
    "Auto-fit vs auto-fill — dono responsive columns banate hain. Auto-fit collapsed tracks ko collapse kar deta hai, auto-fill unhe retain karta hai.",
    "Implicit grid — jab items declared tracks se zyada ho to automatically new rows/columns create hote hain. grid-auto-rows/grid-auto-columns control karte hain.",
    "Justify-items (horizontal) aur align-items (vertical) grid cells me content alignment ke liye. Justify-content aur align-content poori grid ko container me align karte hain."
  ],
  examples: [
    {
      title: "Basic Grid with fr Units",
      description: "3-column responsive grid using fr units.",
      code: ".grid { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 20px; }",
      result: "3 columns — left/right 1 hissa, middle 2 hisse (double width)."
    },
    {
      title: "Spanning Items",
      description: "Item ko multiple columns ya rows me span karna.",
      code: ".featured { grid-column: 1 / 3; grid-row: 1 / 3; }\n.sidebar { grid-column: 3; grid-row: 1 / 4; }",
      result: "Featured item 2 columns aur 2 rows span kar raha hai, sidebar 3 rows."
    },
    {
      title: "Responsive Grid with auto-fit",
      description: "Auto-fit se automatically responsive columns.",
      code: ".grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }",
      result: "Columns automatically adjust hote hain — 250px se chhota nahi, available space fill karte hain."
    }
  ],
  syntax: [
    { property: "display", values: "grid | inline-grid", example: "display: grid;" },
    { property: "grid-template-columns / grid-template-rows", values: "<track-size> ...", example: "grid-template-columns: 200px 1fr 200px;" },
    { property: "repeat()", values: "repeat(<count>, <track>)", example: "repeat(3, 1fr)" },
    { property: "minmax()", values: "minmax(<min>, <max>)", example: "minmax(200px, 1fr)" },
    { property: "grid-column / grid-row", values: "<start> / <end> | span <number>", example: "grid-column: 1 / span 2;" },
    { property: "gap", values: "<row-gap> <column-gap>", example: "gap: 16px;" }
  ],
  diagram: [
    "CSS GRID CONCEPT:",
    "",
    "  Column 1   Column 2   Column 3  ",
    " ┌─────────┬─────────┬─────────┐",
    " │         │         │         │ Row 1",
    " │   A     │    B    │    C    │",
    " ├─────────┼─────────┼─────────┤",
    " │         │         │         │ Row 2",
    " │   D     │    E    │    F    │",
    " ├─────────┼─────────┼─────────┤",
    " │         │         │         │ Row 3",
    " │   G     │    H    │    I    │",
    " └─────────┴─────────┴─────────┘",
    "",
    "SPANNING:",
    " ┌──────────────────┬─────────┐",
    " │                  │         │",
    " │   FEATURED       │  SIDE   │",
    " │   (span 2 cols)   │  BAR    │",
    " │                  │ (span 3  │",
    " ├─────────┬────────┤  rows)  │",
    " │   C     │   D    │         │",
    " └─────────┴────────┴─────────┘"
  ],
  code: [
    {
      title: "Basic Grid Layout",
      language: "html",
      code: "<div class=\"grid\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n  <div class=\"item\">5</div>\n  <div class=\"item\">6</div>\n</div>\n\n<style>\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 16px;\n  padding: 20px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.item {\n  background: #3498db;\n  color: white;\n  padding: 30px;\n  text-align: center;\n  font-size: 1.5rem;\n  border-radius: 8px;\n  font-family: system-ui, sans-serif;\n}\n.item:nth-child(1) {\n  background: #e74c3c;\n  grid-column: 1 / -1;\n}\n.item:nth-child(2) {\n  background: #2ecc71;\n  grid-column: span 2;\n}\n</style>"
    },
    {
      title: "Responsive Grid with auto-fit & minmax",
      language: "html",
      code: "<section class=\"gallery\">\n  <div class=\"photo\">Photo 1</div>\n  <div class=\"photo\">Photo 2</div>\n  <div class=\"photo\">Photo 3</div>\n  <div class=\"photo\">Photo 4</div>\n  <div class=\"photo\">Photo 5</div>\n  <div class=\"photo\">Photo 6</div>\n  <div class=\"photo\">Photo 7</div>\n  <div class=\"photo\">Photo 8</div>\n</section>\n\n<style>\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n  font-family: system-ui, sans-serif;\n}\n.photo {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 1.2rem;\n  transition: transform 0.3s;\n}\n.photo:hover {\n  transform: scale(1.05);\n}\n.photo:first-child {\n  grid-column: span 2;\n  grid-row: span 2;\n  height: auto;\n}\n</style>"
    }
  ],
  output: [
    "Basic grid: 3-column layout with gap — first item full width, second item 2 columns span",
    "Responsive gallery: auto-fit + minmax(200px, 1fr) — columns automatically adjust",
    "First photo: grid-column: span 2, grid-row: span 2 — featured size"
  ],
  commonMistakes: [
    "Grid me gap ki jagah margin lagana — gap property grid ka native feature hai, clean aur predictable",
    "Fr units aur fixed px units mix karte waqt total width calculate na karna — 200px + 1fr + 200px ka sum container width ke barabar hona chahiye",
    "Auto-fit aur auto-fill me confusion — auto-fit empty tracks collapse kar deta hai, auto-fill nahi",
    "Grid items ko direct row/column number dena lekin grid-template-columns define na karna — implicit grid banega jo unexpected ho sakta hai",
    "Grid sirf do-dimensional layouts ke liye hai — one-dimensional layout ke liye Flexbox better hai"
  ],
  bestPractices: [
    "Grid-template-columns me repeat(auto-fit, minmax(250px, 1fr)) use karo responsive layouts ke liye — ye media queries ki zaroorat khatam kar deta hai",
    "Desktop-first layout me explicit grid lines define karo, mobile-first me auto-fit use karo",
    "Gap property use karo margin ki jagah — gap grid items ke beech spacing ka native tarika hai",
    "Grid lines ke liye meaningful names do — grid-template-columns: [sidebar] 250px [main] 1fr; se readability badhti hai",
    "Complex layouts me grid-template-areas use karo — ye visual representation deta hai layout ka"
  ],
  tips: [
    "Grid-column: 1 / -1 se item poori width le leta hai (first to last line)",
    "Implicit rows ke size ke liye grid-auto-rows: 200px set karo — unexpected row sizes se bachoge",
    "Dense packing ke liye grid-auto-flow: dense; use karo — gaps fill ho jaate hain (masonry-like)"
  ],
  practice: [
    "Ek photo gallery banaiye with auto-fit minmax grid jahan pehli photo double size ho",
    "Ek 3-column layout banaiye jahan left sidebar 250px, main content 1fr, right sidebar 200px ho"
  ],
  exercise: {
    instruction: "Ek dashboard layout banaiye jisme 2 columns hon: left sidebar (250px) aur right main area. Main area me 4 cards 2×2 grid me ho. Repeat aur minmax use karein. Screen chhoti ho to single column ho jaaye.",
    hint: "Grid container: grid-template-columns: 250px 1fr. Main area ke andar nested grid: grid-template-columns: repeat(2, 1fr). Mobile: media query mein grid-template-columns: 1fr.",
    starterCode: "<div class=\"dashboard\">\n  <aside class=\"sidebar\">\n    <h2>Dashboard</h2>\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">Analytics</a>\n      <a href=\"#\">Settings</a>\n    </nav>\n  </aside>\n  <main class=\"main-area\">\n    <h1>Overview</h1>\n    <div class=\"cards-grid\">\n      <div class=\"stat-card\">Users\n        <span>1,234</span>\n      </div>\n      <div class=\"stat-card\">Revenue\n        <span>$5,678</span>\n      </div>\n      <div class=\"stat-card\">Orders\n        <span>456</span>\n      </div>\n      <div class=\"stat-card\">Growth\n        <span>12.5%</span>\n      </div>\n    </div>\n  </main>\n</div>\n\n<style>\n.dashboard {\n  /* Add grid styles */\n}\n</style>"
  },
  quiz: [
    {
      question: "CSS Grid kaunsa layout system hai?",
      options: ["One-dimensional", "Two-dimensional", "Three-dimensional", "All of these"],
      answer: 1
    },
    {
      question: "Fr unit kya represent karta hai?",
      options: ["Fixed rem", "Fraction of available space", "Frame rate", "Font relative"],
      answer: 1
    },
    {
      question: "grid-column: 1 / -1 ka kya matlab hai?",
      options: ["Column 1 se 1 tak", "First column se last column tak", "Negative column", "Kuch nahi"],
      answer: 1
    },
    {
      question: "Auto-fit aur auto-fill me kya difference hai?",
      options: ["Kuch nahi", "Auto-fit empty tracks collapse karta hai, auto-fill nahi", "Auto-fit sirf images ke liye hai", "Auto-fill fast hai"],
      answer: 1
    },
    {
      question: "Responsive grid banane ke liye best combo kya hai?",
      options: ["grid-template-columns: 1fr 1fr 1fr", "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))", "grid-template-columns: repeat(3, auto)", "grid-template-columns: 33% 33% 33%"],
      answer: 1
    }
  ],
  interview: [
    {
      question: "CSS Grid aur Flexbox me kya difference hai? Kab kya use karna chahiye?",
      answer: "Grid two-dimensional (rows + columns simultaneously) layout ke liye hai. Flexbox one-dimensional (row ya column) ke liye. Grid layout-first approach hai, Flexbox content-first. Page-level layout ke liye Grid, component-level alignment ke liye Flexbox use karo."
    },
    {
      question: "Fr unit kya hai aur kaise kaam karta hai?",
      answer: "Fr (fraction) unit available space ko proportionally distribute karta hai. 1fr = ek hissa. Grid-template-columns: 1fr 2fr 1fr ka matlab 4 hisson me divide — left/right 1 hissa, middle 2 hisse. Fixed units (px) ke saath mix kar sakte ho."
    },
    {
      question: "Auto-fit / auto-fill with minmax() kaise responsive layout banata hai?",
      answer: "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) ka matlab — jitne 250px columns fit ho sakein utne banao, aur agar space bache to 1fr se expand karo. Auto-fit empty tracks collapse kar deta hai. Isse media queries ki zaroorat nahi padti."
    }
  ],
  assignment: [
    "Ek magazine-style layout banaiye jisme 3-column grid ho, ek featured article 2 columns span kare, sidebar ho",
    "Ek image gallery banaiye jisme auto-fit minmax grid ho, kuch images double size span karein",
    "Ek pricing table grid banaiye jisme 3 plans ho, popular plan slightly bigger ho aur highlight ho"
  ],
  resources: [
    { title: "CSS-Tricks Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
    { title: "MDN - CSS Grid", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" },
    { title: "Grid Garden Game", url: "https://cssgridgarden.com/" }
  ],
  summary: "CSS Grid ek two-dimensional layout system hai jo rows aur columns ek saath control karta hai. Grid-template-columns aur grid-template-rows se tracks define hote hain. Fr unit space proportionally distribute karta hai. Repeat() function se repetitive patterns bante hain. Minmax() se responsive minimum/maximum set hota hai. Auto-fit aur auto-fill se media queries ke bina responsive columns bante hain. Grid-column/grid-row se items multiple tracks span kar sakte hain. Gap se items ke beech spacing hoti hai. Grid complex layouts ko simple, predictable, aur maintainable banata hai."
};

export default lesson;
