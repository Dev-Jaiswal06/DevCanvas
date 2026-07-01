const lesson = {
  id: 18, slug: "seo", title: "HTML SEO Basics",
  description: "SEO kya hai aur HTML ko SEO ke liye kaise optimize karein. Hinglish mein seekhein.",
  difficulty: "Advanced", duration: "20 Minutes", heroImage: "",
  tags: ["HTML", "SEO", "Advanced"],
  theory: [
    "SEO = Search Engine Optimization. Goal hai website ko Google search mein top par laana.",
    "Title tag — unique aur descriptive title do. Har page ka alag title hona chahiye.",
    "Meta description — Google search result mein snippet dikhta hai. Click-through rate increase karta hai.",
    "Heading structure — Proper h1 (sirf ek), h2, h3 hierarchy follow karo.",
    "Alt text — Images ke liye descriptive alt text do. Search engines images ko nahi dekh sakte.",
    "Semantic HTML — <header>, <nav>, <main>, <article> use karo. Google inhe better rank karta hai.",
    "Internal links — Apne related pages ko aapas mein link karo.",
    "Page speed — Fast loading website rank karti hai better."
  ],
  examples: [{
    title: "SEO Optimized Page",
    description: "SEO best practices ke saath page.",
    code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Course - Learn Free | DevCanvas</title>\n  <meta name=\"description\" content=\"Free HTML course for beginners. Learn HTML tags, forms, tables and more.\">\n</head>\n<body>\n  <header>\n    <h1>Free HTML Course</h1>\n    <nav><a href=\"/\">Home</a></nav>\n  </header>\n  <main>\n    <article>\n      <h2>HTML Basics</h2>\n      <img src=\"html-basics.jpg\" alt=\"HTML code example showing basic tags\">\n      <p>Learn HTML from scratch...</p>\n    </article>\n  </main>\n</body>\n</html>",
    result: "[SEO optimized page with proper title, description, heading hierarchy and alt text]"
  }],
  syntax: [
    "<title>Primary Keyword - Brand Name</title>",
    "<meta name=\"description\" content=\"Include target keyword naturally.\">",
    "<h1>Main heading (sirf ek)</h1>",
    "<img src=\"photo.jpg\" alt=\"Descriptive text about image\">",
    "<a href=\"/related-page\">Internal link with keyword-rich text</a>"
  ],
  diagram: [
    "On-Page SEO Factors:",
    "  Title Tag → Primary keyword",
    "  Meta Description → Clickable snippet",
    "  H1 Tag → Main heading",
    "  Alt Text → Image description",
    "  Semantic HTML → Page structure",
    "  Internal Links → Related content",
    "  Page Speed → Loading time"
  ],
  code: [{
    title: "SEO Checklist Implementation",
    language: "html",
    code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>JavaScript Tutorial - Learn JS | DevCanvas</title>\n  <meta name=\"description\" content=\"Complete JavaScript tutorial for beginners. Learn variables, functions, DOM and more with examples.\">\n  <meta name=\"robots\" content=\"index, follow\">\n  <link rel=\"canonical\" href=\"https://devcanvas.com/javascript\">\n</head>\n<body>\n  <header>\n    <h1>JavaScript Tutorial</h1>\n    <nav>\n      <a href=\"/html\">HTML</a> |\n      <a href=\"/css\">CSS</a>\n    </nav>\n  </header>\n  <main>\n    <article>\n      <h2>Variables in JavaScript</h2>\n      <img src=\"js-variables.png\" alt=\"JavaScript variable declaration with let, const, var\">\n      <p>Learn how to declare variables...</p>\n      <a href=\"/javascript/functions\">Next: JavaScript Functions</a>\n    </article>\n  </main>\n  <footer><p>© 2026 DevCanvas</p></footer>\n</body>\n</html>"
  }],
  output: ["[SEO optimized page structure with proper semantics]"],
  commonMistakes: [
    "Keyword stuffing — ek word baar baar repeat karna (Google penalize karta hai)",
    "Duplicate content — same content multiple pages pe (Google rank nahi karega)",
    "Missing alt text — images accessible nahi hoti aur SEO miss hota hai",
    "Slow page speed — 3 seconds se zyada load time to users leave kar dete hain",
    "Thin content — kam content wale pages rank nahi karte"
  ],
  bestPractices: [
    "Quality content sabse important hai — helpful aur unique content likho",
    "Mobile-friendly website banao — Google mobile-first indexing use karta hai",
    "Page speed optimize karo — images compress karo, minify CSS/JS",
    "Internal linking karo — related pages aapas mein link karo",
    "Canonical URL use karo duplicate content se bachne ke liye"
  ],
  tips: [
    "Long-tail keywords target karo (3-4 word phrases)",
    "URL structure clean rakho — /html/course, /html/tables",
    "Sitemap.xml aur robots.txt create karo",
    "Google Search Console mein website submit karo"
  ],
  practice: [
    "Kisi bhi page ka SEO audit karo and improve karo",
    "5 SEO optimized pages ka sitemap banao",
    "Google PageSpeed Insights pe website test karo"
  ],
  exercise: {
    instruction: "Ek HTML page banao jo SEO ke liye fully optimized ho — proper title, meta description, heading hierarchy, alt text with images, aur internal links.",
    hint: "Title 55-60 characters mein rakho, meta description 150-160 characters mein.",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Learn HTML - Free Course | DevCanvas</title>\n  <meta name=\"description\" content=\"\">\n</head>\n<body>\n  <h1>Learn HTML</h1>\n</body>\n</html>"
  },
  quiz: [
    { question: "SEO ka full form kya hai?", options: ["Search Engine Operation", "Search Engine Optimization", "Site Engine Optimization", "Search Easy Option"], answer: 1, explanation: "SEO = Search Engine Optimization. Ye website ko search results mein rank karane ki process hai." },
    { question: "Page ke liye kitne H1 tags hone chahiye?", options: ["1", "2-3", "Jitne chahein", "0"], answer: 0, explanation: "Sirf ek H1 tag hona chahiye jo page ka main heading represent kare." }
  ],
  interview: [
    { question: "SEO kya hai aur kyun important hai?", answer: "SEO (Search Engine Optimization) website ko Google search results mein top par lane ki process hai. Organic traffic, brand awareness aur conversions ke liye important hai." },
    { question: "On-page SEO factors kaun se hain?", answer: "Title tag, meta description, heading structure (h1-h6), image alt text, semantic HTML, URL structure, internal links, page speed, mobile-friendliness, aur content quality." }
  ],
  assignment: {
    title: "SEO Optimization Assignment",
    description: "Ek complete website page SEO optimize karein.",
    tasks: ["SEO optimized title aur meta description likho", "Proper heading hierarchy set karo", "Images mein descriptive alt text do", "Internal links add karo", "Page ko Google PageSpeed Insights pe test karo aur score improve karo", "Sitemap.xml generate karo"],
    submission: "Code aur PageSpeed score submit karein", deadline: "2 weeks"
  },
  resources: [
    { title: "Google SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    { title: "Moz - SEO Guide", url: "https://moz.com/beginners-guide-to-seo" },
    { title: "Google PageSpeed Insights", url: "https://pagespeed.web.dev/" }
  ],
  summary: [
    "SEO website ko search engines mein rank karane mein help karta hai.",
    "Title, meta description, headings aur alt text important hain.",
    "Semantic HTML aur internal linking SEO improve karte hain.",
    "Page speed aur mobile-friendliness rank ke liye important hai."
  ]
};

export default lesson;
