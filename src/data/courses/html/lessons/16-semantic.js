const lesson = {
  id: 16, slug: "semantic", title: "Semantic HTML",
  description: "Semantic tags jo code ko meaningful banate hain. Hinglish mein seekhein.",
  difficulty: "Intermediate", duration: "20 Minutes", heroImage: "",
  tags: ["HTML", "Semantic", "Accessibility"],
  theory: [
    "Semantic HTML ka matlab hai aise tags use karna jo code ka meaning bataye.",
    "<header> — page ya section ka header. Logo, navigation, heading contain karta hai.",
    "<nav> — navigation links ke liye. Main menu yahan aata hai.",
    "<main> — page ka main content. Har page mein sirf ek <main> hona chahiye.",
    "<section> — related content ko group karne ke liye.",
    "<article> — self-contained content jaise blog post, news article.",
    "<aside> — sidebar content jo main content se indirectly related ho.",
    "<footer> — page ya section ka footer. Copyright, contact info yahan aata hai."
  ],
  examples: [{
    title: "Semantic Page Structure",
    description: "Semantic tags ka use karke ek page structure.",
    code: "<header>\n  <h1>My Website</h1>\n  <nav>Home | About | Contact</nav>\n</header>\n<main>\n  <article>\n    <h2>Blog Post</h2>\n    <p>Article content here.</p>\n  </article>\n  <aside>\n    <h3>Related Links</h3>\n    <ul><li>Link 1</li></ul>\n  </aside>\n</main>\n<footer>© 2026</footer>",
    result: "My Website\nHome | About | Contact\nBlog Post\nArticle content here.\nRelated Links\n© 2026"
  }],
  syntax: [
    "<header>",
    "  <nav>Navigation links</nav>",
    "</header>",
    "<main>",
    "  <section>",
    "    <article>Self-contained content</article>",
    "  </section>",
    "  <aside>Sidebar content</aside>",
    "</main>",
    "<footer>Copyright info</footer>"
  ],
  diagram: [
    "<header> → Logo + Navigation",
    "<main> → Main content area",
    "  <section> → Themed group",
    "    <article> → Independent content",
    "  <aside> → Sidebar content",
    "<footer> → Copyright info"
  ],
  code: [{
    title: "Full Semantic Page",
    language: "html",
    code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Semantic Page</title>\n</head>\n<body>\n  <header>\n    <h1>DevCanvas</h1>\n    <nav>\n      <a href=\"/\">Home</a> |\n      <a href=\"/courses\">Courses</a> |\n      <a href=\"/about\">About</a>\n    </nav>\n  </header>\n  <main>\n    <article>\n      <h2>HTML Basics</h2>\n      <p>Learn HTML from scratch.</p>\n    </article>\n    <aside>\n      <h3>Popular Courses</h3>\n      <ul>\n        <li>HTML</li>\n        <li>CSS</li>\n      </ul>\n    </aside>\n  </main>\n  <footer>\n    <p>© 2026 DevCanvas</p>\n  </footer>\n</body>\n</html>"
  }],
  output: ["[Semantic page with header, nav, main, article, aside, footer]"],
  commonMistakes: [
    "Sirf <div> use karna aur semantic tags ignore karna",
    "Header aur footer galat jagah use karna — har section ka apna header/ footer ho sakta hai",
    "<main> ko multiple baar use karna — sirf ek <main> hona chahiye",
    "<article> aur <section> mein confuse hona — article independent hota hai, section grouping ke liye"
  ],
  bestPractices: [
    "Semantic tags SEO improve karte hain — Google inhe rank karta hai",
    "Screen readers ke liye better accessibility provide karte hain",
    "Cleaner code structure — developers easily samajh sakte hain",
    "<main> sirf ek baar use karo, <nav> mein list items nahi direct links do"
  ],
  tips: [
    "<section> mein hamesha heading (h1-h6) do",
    "<figure> aur <figcaption> images aur diagrams ke liye use karo",
    "<time> tag dates aur times ke liye use karo"
  ],
  practice: [
    "Apni website ka structure semantic tags se banao",
    "Ek news article page banao jisme article, aside, section ho",
    "<figure> aur <figcaption> ke saath ek image gallery banao"
  ],
  exercise: {
    instruction: "Ek blog page banao jisme semantic tags — header, nav, main, article (2), aside, footer — sab use ho.",
    hint: "Har article mein <time> tag se date add karo.",
    starterCode: "<header>\n  <h1>My Blog</h1>\n  <nav>\n    <a href=\"#\">Home</a>\n  </nav>\n</header>"
  },
  quiz: [
    { question: "Navigation ke liye kaunsa semantic tag use hota hai?", options: ["<nav>", "<menu>", "<links>", "<header>"], answer: 0, explanation: "<nav> navigation links ke liye semantic tag hai." },
    { question: "Semantic HTML ka sabse bada fayda kya hai?", options: ["Fast loading", "SEO aur Accessibility", "More colors", "Less code"], answer: 1, explanation: "Semantic tags se search engines better rank karte hain aur screen readers accurately read karte hain." }
  ],
  interview: [
    { question: "Semantic tags kya hote hain?", answer: "Semantic tags wo HTML5 tags hain jo content ka meaning batate hain. Jaise <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>. Ye SEO aur accessibility improve karte hain." },
    { question: "<div> aur semantic tag mein kya antar hai?", answer: "<div> ek generic container hai jiska koi meaning nahi hai. Semantic tags (jaise <article>, <nav>) ka specific meaning hota hai jo browser, search engines aur screen readers samajh sakte hain." }
  ],
  assignment: {
    title: "Semantic Layout Assignment",
    description: "Ek complete website layout semantic tags ke saath banayein.",
    tasks: ["Header with logo + navigation", "Main content with 3 sections", "Aside with sidebar links", "Article with blog post", "Footer with copyright", "CSS se styling karo"],
    submission: "Code GitHub pe push karein", deadline: "1 week"
  },
  resources: [
    { title: "MDN - Semantic HTML", url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics" },
    { title: "W3Schools - Semantic Elements", url: "https://www.w3schools.com/html/html5_semantic_elements.asp" },
    { title: "Accessibility Guide", url: "https://www.w3.org/WAI/tutorials/page-structure/" }
  ],
  summary: [
    "Semantic tags code ka meaning batate hain.",
    "<header>, <nav>, <main>, <article>, <section>, <aside>, <footer> important hain.",
    "SEO aur accessibility improve hoti hai semantic HTML se.",
    "<div> se better hai semantic tags use karna."
  ]
};

export default lesson;
