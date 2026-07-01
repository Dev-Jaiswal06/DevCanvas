const lesson = {
  id: 3,
  slug: "boilerplate",
  title: "HTML Boilerplate",
  description: "Har HTML document ka basic structure — boilerplate code.",
  difficulty: "Beginner",
  duration: "10 Minutes",
  heroImage: "",
  tags: ["HTML", "Boilerplate", "Structure"],
  theory: [
    "Boilerplate matlab ek standard template jo har HTML document mein hota hai.",
    "<!DOCTYPE html> — Browser ko batata hai ki ye HTML5 document hai.",
    "<html> — Root element, poora document iske andar aata hai.",
    "<head> — Meta information, title, CSS links, scripts.",
    "<body> — Actual content jo user ko dikhta hai.",
    "Charset UTF-8 set karna important hai taake special characters sahi dikhe.",
    "Viewport meta tag responsive design ke liye zaroori hai."
  ],
  examples: [
    {
      title: "Complete Boilerplate",
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Website</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>",
      result: "Hello World"
    }
  ],
  syntax: ["<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n<body>\n\n</body>\n</html>"],
  diagram: [
    "<!DOCTYPE html>  → Version Info",
    "<html>          → Root Element",
    "  <head>        → Meta Data",
    "    <meta>      → Settings",
    "    <title>     → Page Title",
    "  </head>",
    "  <body>        → Visible Content",
    "    <h1>Hello</h1>",
    "  </body>",
    "</html>"
  ],
  code: [
    {
      title: "Standard Boilerplate",
      language: "html",
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Boilerplate</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>My Website</h1>\n  <p>This is a boilerplate template.</p>\n  <script src=\"script.js\"></script>\n</body>\n</html>"
    }
  ],
  output: ["My Website\nThis is a boilerplate template."],
  commonMistakes: [
    "DOCTYPE declaration bhoolna",
    "meta charset na lagana jisse special characters bigadte hain",
    "Viewport meta tag na lagana — mobile responsive nahi hoga"
  ],
  bestPractices: [
    "lang='en' attribute html tag mein zaroor do",
    "CSS link head mein rakho, JS script body ke end mein",
    "Meta description SEO ke liye add karo"
  ],
  tips: [
    "VS Code mein '!' press karo aur Enter — boilerplate auto generate",
    "Favicon link bhi boilerplate mein add karo",
    "Social media meta tags (OG tags) bhi add karo"
  ],
  practice: [
    "Boilerplate code manually type karo",
    "Title change karke 'My First Website' rakho",
    "Viewport meta tag ki importance samjho"
  ],
  exercise: {
    instruction: "Ek boilerplate banao jisme favicon aur external CSS link ho.",
    hint: "<link> tag ka use karo favicon aur CSS dono ke liye.",
    starterCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My Site</title>\n</head>\n<body>\n</body>\n</html>"
  },
  quiz: [
    {
      question: "<!DOCTYPE> ka kya kaam hai?",
      options: ["CSS link karna", "HTML version batana", "JavaScript load karna", "Page style dena"],
      answer: 1
    },
    {
      question: "Viewport meta tag kyu use karte hain?",
      options: ["Speed ke liye", "Responsive design ke liye", "SEO ke liye", "Animation ke liye"],
      answer: 1
    },
    {
      question: "Charset UTF-8 kyu set karte hain?",
      options: ["Font ke liye", "Special characters ke liye", "Speed ke liye", "Color ke liye"],
      answer: 1
    },
    {
      question: "Head section mein kya nahi aata?",
      options: ["Title", "Meta tags", "Heading", "CSS links"],
      answer: 2
    },
    {
      question: "Body section mein kya aata hai?",
      options: ["Meta tags", "Title", "Visible content", "CSS"],
      answer: 2
    }
  ],
  interview: [
    {
      question: "HTML boilerplate me kya-kya hota hai?",
      answer: "DOCTYPE, html, head (meta charset, viewport, title), body — ye main parts hain."
    },
    {
      question: "meta charset='UTF-8' kyu important hai?",
      answer: "Isse browser ko pata chalta hai ki special characters, emojis, non-English text kaise display karna hai."
    },
    {
      question: "Script tag body ke end mein kyu lagate hain?",
      answer: "Page content pehle load ho, phir JavaScript — isse page loading speed better hoti hai."
    }
  ],
  assignment: [
    "Poore boilerplate code ko 5 baar manually type karo",
    "Usme ek heading, paragraph, aur image add karo",
    "Viewport meta tag hatao aur dekho mobile pe kya hota hai"
  ],
  resources: [
    { title: "HTML Boilerplate Guide", url: "https://htmlboilerplates.com/" },
    { title: "Metadata Guide", url: "https://metatags.io/" }
  ],
  summary: "Boilerplate HTML document ka standard template hai. Isme DOCTYPE, html, head (meta, title) aur body shamil hote hain. Ye har webpage ki foundation hai."
};

export default lesson;
