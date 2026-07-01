const lesson = {
  id: 29,
  slug: "media-queries",
  title: "Media Queries",
  description: "Build websites that adapt to any screen size with responsive breakpoints",
  difficulty: "Intermediate",
  duration: "45 min",
  heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  tags: ["CSS", "Media Queries", "Responsive", "Mobile"],
  theory: [
    "Media queries CSS ki ek feature hai jo different screen sizes, devices, aur orientations ke hisaab se alag styles apply karne deti hai",
    "@media rule se hum conditions check karte hain jaise viewport width, height, orientation, resolution",
    "Mobile-first approach mein pehle mobile ke liye styles likhte hain phir min-width se bigger screens ke liye override karte hain",
    "Desktop-first approach mein pehle desktop styles likhte hain phir max-width se smaller screens ke liye override karte hain",
    "Mobile-first recommended hai kyunki performance better hoti hai aur progressive enhancement follow hoti hai",
    "Main breakpoints (standard device widths): 480px mobile, 768px tablet, 1024px laptop, 1280px+ desktop",
    "min-width ka matlab hai 'agar viewport isse bada hai toh' aur max-width ka matlab 'agar viewport isse chota hai toh'",
    "Orientation queries se portrait aur landscape modes ke liye alag styles de sakte hain: @media (orientation: portrait)",
    "Responsive typography ke liye clamp() ya viewport units use karte hain taake font sizes screen ke saath scale karein",
    "Responsive images ke liye max-width: 100% aur height: auto use karo taake image container se bahar na nikle",
    "Print styles ke liye @media print use karte hain - isme backgrounds hatao, fonts dark karo, unnecessary elements chhupao",
    "Media queries ko CSS ke end mein rakhna best hai taaki specificity issues na aayein",
    "Multiple conditions && ki tarah kaam karte hain: @media (min-width: 768px) and (max-width: 1024px)",
    "Comma separated conditions OR ki tarah kaam karte hain: @media (max-width: 480px), (orientation: landscape)",
    "only keyword older browsers mein media query ko apply hone se rokta hai"
  ],
  examples: [
    { title: "Mobile-First Media Query", description: "Basic responsive layout with mobile-first approach", code: ".container { padding: 10px; } @media (min-width: 768px) { .container { padding: 30px; } }", result: "Mobile pe 10px padding, tablet+ pe 30px padding" },
    { title: "Orientation Query", description: "Landscape vs portrait styling", code: "@media (orientation: landscape) { .sidebar { display: flex; } }", result: "Landscape mode mein sidebar flexbox mein aa jayega" },
    { title: "Print Styles", description: "Printer-friendly page styles", code: "@media print { body { font-size: 12pt; } .nav { display: none; } }", result: "Print karte waqt font badal jayega aur navbar chhup jayega" }
  ],
  syntax: [
    "@media media-type and (condition) { /* CSS rules */ }",
    "@media (min-width: 768px) { .container { width: 750px; } }",
    "@media (max-width: 480px) and (orientation: portrait) { body { font-size: 14px; } }"
  ],
  diagram: [
    "┌──────────────────────────────────────────────────────────────────┐",
    "│                    RESPONSIVE BREAKPOINTS                         │",
    "│                                                                  │",
    "│  Mobile          Tablet        Laptop         Desktop            │",
    "│  ────────       ────────      ────────       ────────            │",
    "│  │      │       │      │      │      │       │      │            │",
    "│  │  <480│       │768   │      │1024  │       │ >1280│            │",
    "│  │      │       │      │      │      │       │      │            │",
    "│  ────────       ────────      ────────       ────────            │",
    "│      ↑              ↑              ↑              ↑              │",
    "│   min-width      min-width      min-width      min-width         │",
    "│    : 0px         : 480px        : 768px        : 1024px          │",
    "└──────────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Mobile-First Layout", language: "css", code: "/* Mobile styles (default) */\nbody {\n  font-size: 16px;\n  line-height: 1.5;\n}\n.container {\n  padding: 10px;\n}\n.sidebar {\n  display: none;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n  .container {\n    padding: 20px;\n  }\n  .sidebar {\n    display: block;\n    width: 250px;\n  }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  body {\n    font-size: 18px;\n  }\n  .container {\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n}" },
    { title: "Responsive Grid with Media Queries", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; padding: 20px; }\n    .grid {\n      display: grid;\n      gap: 15px;\n      grid-template-columns: 1fr;\n    }\n    .card {\n      background: #f0f0f0;\n      padding: 20px;\n      border-radius: 8px;\n      text-align: center;\n    }\n    @media (min-width: 600px) {\n      .grid { grid-template-columns: repeat(2, 1fr); }\n    }\n    @media (min-width: 900px) {\n      .grid { grid-template-columns: repeat(3, 1fr); }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"grid\">\n    <div class=\"card\">Card 1</div>\n    <div class=\"card\">Card 2</div>\n    <div class=\"card\">Card 3</div>\n    <div class=\"card\">Card 4</div>\n    <div class=\"card\">Card 5</div>\n    <div class=\"card\">Card 6</div>\n  </div>\n</body>\n</html>" },
    { title: "Responsive Typography", language: "css", code: "/* Fluid typography using clamp */\nh1 {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}\np {\n  font-size: clamp(1rem, 2.5vw, 1.25rem);\n}\n\n/* Responsive images */\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n\n/* Print styles */\n@media print {\n  header, footer, nav, .ads {\n    display: none !important;\n  }\n  body {\n    color: black;\n    background: white;\n  }\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n}" }
  ],
  output: [
    "Mobile (480px se chota): single column layout, small padding, sidebar hidden",
    "Tablet (768px+): two column grid, sidebar visible, increased padding",
    "Desktop (1024px+): three column grid, max-width container, larger fonts"
  ],
  commonMistakes: [
    "Breakpoints fixed device widths ke hisaab se rakhna - content breakpoints use karo, device nahi",
    "min-width aur max-width dono ek saath use karna without understanding - mobile-first mein sirf min-width kaafi hai",
    "Media queries ko inline ya component level pe use karna - saari media queries ek jagah CSS file ke end mein rakho",
    "Mobile ke liye alag breakpoint nahi banana - mobile default styles hote hain, unke liye media query zaroori nahi",
    "max-width: 767px aur min-width: 768px dono use karna - gap avoid karo, overlapping breakpoints consistent rakho"
  ],
  bestPractices: [
    "Mobile-first approach use karo (min-width), isse code clean rehta hai aur performance better hoti hai",
    "Content ke hisaab se breakpoints decide karo, popular device sizes nahi",
    "CSS custom properties ke saath media queries use karo - ek jagah breakpoints define karo",
    "Media queries ko CSS file ke end mein group karo, component file mein scattered nahi",
    "Only print media queries ke saath print styles likho - background hatao, fonts dark karo, nav chhupao"
  ],
  tips: [
    "Chhoti screen pe touch targets (buttons, links) kam se kam 44x44px rakho",
    "Responsive images ke liye <picture> element aur srcset attribute use karo",
    "Media queries ke saath container queries bhi explore karo - modern CSS mein component-level responsiveness ke liye"
  ],
  practice: [
    "Mobile-first approach se ek 3-column layout banaye jo mobile pe 1-column ho jaye",
    "Print stylesheet likhein jo page print karte waqt clean output de"
  ],
  exercise: {
    instruction: "Create a responsive card layout using media queries. Mobile pe 1 column, tablet pe 2 columns, desktop pe 3 columns dikhne chahiye. Cards mein image, title, description aur button hona chahiye.",
    hint: "Mobile styles default likho, phir (min-width: 768px) pe 2 columns, (min-width: 1024px) pe 3 columns ke liye grid-template-columns change karo",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }\n    .card-container {\n      display: grid;\n      gap: 20px;\n      grid-template-columns: 1fr;\n    }\n    .card {\n      background: white;\n      border-radius: 10px;\n      overflow: hidden;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n    .card img {\n      width: 100%;\n      height: 200px;\n      object-fit: cover;\n    }\n    .card-content {\n      padding: 20px;\n    }\n    .card h2 { margin-bottom: 10px; color: #333; }\n    .card p { color: #666; margin-bottom: 15px; }\n    .card button {\n      background: #007bff;\n      color: white;\n      border: none;\n      padding: 10px 20px;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n\n    /* Tablet: 2 columns */\n    @media (min-width: 768px) {\n      .card-container {\n        grid-template-columns: repeat(2, 1fr);\n      }\n    }\n\n    /* Desktop: 3 columns */\n    @media (min-width: 1024px) {\n      .card-container {\n        grid-template-columns: repeat(3, 1fr);\n      }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"card-container\">\n    <div class=\"card\">\n      <img src=\"https://placehold.co/400x200\" alt=\"Card image\">\n      <div class=\"card-content\">\n        <h2>Card Title 1</h2>\n        <p>This is a description for the first card. It explains what this card is about.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n    <div class=\"card\">\n      <img src=\"https://placehold.co/400x200\" alt=\"Card image\">\n      <div class=\"card-content\">\n        <h2>Card Title 2</h2>\n        <p>This is a description for the second card. It has different content.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n    <div class=\"card\">\n      <img src=\"https://placehold.co/400x200\" alt=\"Card image\">\n      <div class=\"card-content\">\n        <h2>Card Title 3</h2>\n        <p>This is a description for the third card with some more text.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "Mobile-first approach mein kaunsa media query condition use hota hai?", options: ["max-width", "min-width", "max-device-width", "min-device-width"], answer: 1 },
    { question: "Agar viewport 768px se chota ho toh styles apply karne ke liye kaunsa syntax sahi hai?", options: ["@media (min-width: 768px)", "@media (max-width: 767px)", "@media (width: 768px)", "@media (max-width: 768px)"], answer: 1 },
    { question: "Print styles ke liye kaunsa media type use karte hain?", options: ["@media screen", "@media print", "@media paper", "@media document"], answer: 1 },
    { question: "Orientation check karne ke liye kaunsa keyword use hota hai?", options: ["screen", "direction", "orientation", "view-mode"], answer: 2 },
    { question: "Multiple conditions (AND) ko media query mein kaise join karte hain?", options: ["Aur keyword se", "Comma se", "and keyword se", "or keyword se"], answer: 2 }
  ],
  interview: [
    { question: "Mobile-first aur desktop-first approach mein kya antar hai?", answer: "Mobile-first mein pehle mobile styles (default) likhte hain phir min-width se bigger screens ke liye override. Desktop-first mein pehle desktop styles likhte hain phir max-width se smaller screens ke liye override. Mobile-first recommended hai kyunki better performance, progressive enhancement, aur naturally responsive design milta hai." },
    { question: "Breakpoints kaise choose karte hain?", answer: "Content ke hisaab se breakpoints choose karo, device sizes ke hisaab se nahi. Jab layout tootne lage (content overflow, awkward gaps) tab naya breakpoint add karo. Common breakpoints: 480px (mobile), 768px (tablet), 1024px (laptop), 1280px (desktop)." },
    { question: "Responsive images ke liye best practices kya hain?", answer: "max-width: 100% aur height: auto use karo taake images responsive rahein. <picture> element aur srcset attribute use karo different screen sizes ke liye alag images serve karne ke liye. WebP format use karo better compression ke liye. Lazy loading implement karo performance ke liye." }
  ],
  assignment: [
    "Apni portfolio website ko responsive banayein - mobile, tablet, aur desktop breakpoints ke saath",
    "Ek navigation menu banayein jo mobile pe hamburger menu ho aur desktop pe horizontal navbar"
  ],
  resources: [
    { title: "MDN - Using Media Queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries" },
    { title: "CSS Tricks - Media Queries Guide", url: "https://css-tricks.com/a-complete-guide-to-css-media-queries/" },
    { title: "Responsive Breakpoints Generator", url: "https://responsivedesign.is/breakpoints/" }
  ],
  summary: "Media queries CSS ka powerful feature hai jo different screen sizes, orientations, aur devices ke hisaab se alag styles apply karne deta hai. Mobile-first approach (min-width) best practice hai jisme pehle mobile styles likhte hain phir bigger screens ke liye override karte hain. Main breakpoints: 480px mobile, 768px tablet, 1024px laptop, 1280px desktop. Orientation, print, aur resolution queries bhi use kar sakte hain. Responsive images ke liye max-width: 100% aur responsive typography ke liye clamp() use karo. Media queries ko CSS file ke end mein group karna best practice hai."
};

export default lesson;
