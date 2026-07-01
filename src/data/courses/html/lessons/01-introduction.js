const lesson = {
  id: 1,
  slug: "introduction",
  title: "Introduction to HTML",
  description: "HTML kya hai aur website banane me iska kya role hai.",
  difficulty: "Beginner",
  duration: "10 Minutes",
  heroImage: "",
  tags: ["HTML", "Beginner", "Web"],
  theory: [
    "HTML ka full form HyperText Markup Language hai.",
    "HTML ek Markup Language hai jo webpage ki structure banati hai.",
    "Iska use karke hum headings, paragraphs, images, links aur bahut kuch bana sakte hain.",
    "Ye programming language nahi hai, isme logic nahi likha jaata.",
    "HTML tags ka use karke content ko structure diya jata hai. Har tag ka apna specific meaning hota hai."
  ],
  examples: [
    {
      title: "First HTML Page",
      description: "Ek simple HTML page jo browser mein display hoga.",
      code: "<h1>Hello World!</h1>\n<p>Yeh mera pehla HTML page hai.</p>",
      result: "Hello World!\nYeh mera pehla HTML page hai."
    }
  ],
  syntax: [
    "<!DOCTYPE html>",
    "<html>",
    "<head>",
    "  <title>Page Title</title>",
    "</head>",
    "<body>",
    "  <h1>Heading</h1>",
    "  <p>Paragraph</p>",
    "</body>",
    "</html>"
  ],
  diagram: [
    "Browser → HTML File → DOM Tree → Display",
    "HTML Tags → Structure → Content → Webpage"
  ],
  code: [
    {
      title: "Complete HTML Page",
      language: "html",
      code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>Welcome to HTML.</p>\n</body>\n</html>"
    }
  ],
  output: [
    "Hello World!\nWelcome to HTML."
  ],
  commonMistakes: [
    "HTML ko programming language samajh lena — ye markup language hai",
    "DOCTYPE declaration likhna bhool jana",
    "Closing tags na lagana — jaise <p> without </p>",
    "File ko .html extension mein save na karna"
  ],
  bestPractices: [
    "Hamesha DOCTYPE declare karo",
    "Proper indentation use karo",
    "Tags ko lowercase mein likho",
    "File name meaningful rakho jaise about.html"
  ],
  tips: [
    "VS Code mein '!' type karke boilerplate generate karo",
    "Browser DevTools (F12) se HTML inspect karo",
    "MDN documentation sabse reliable source hai"
  ],
  practice: [
    "Ek HTML file banao jisme aapka naam heading mein ho",
    "Usme ek paragraph add karo apne baare me",
    "File ko first-page.html naam se save karo"
  ],
  exercise: {
    instruction: "Ek HTML page banao jisme aapke 3 favorite subjects ki list ho.",
    hint: "Ordered list <ol> ka use karo.",
    starterCode: "<h1>My Favorite Subjects</h1>\n<ol>\n  <li>Subject 1</li>\n</ol>"
  },
  quiz: [
    {
      question: "HTML ka full form kya hai?",
      options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "None"],
      answer: 0
    },
    {
      question: "HTML ek programming language hai?",
      options: ["Haan", "Nahi", "Dono", "Pata nahi"],
      answer: 1
    },
    {
      question: "HTML file ka extension kya hota hai?",
      options: [".txt", ".html", ".js", ".css"],
      answer: 1
    },
    {
      question: "HTML tag closing ke liye kya use hota hai?",
      options: ["/", "\\", "|", ":"],
      answer: 0
    },
    {
      question: "HTML web page ki kya banata hai?",
      options: ["Logic", "Structure", "Style", "Database"],
      answer: 1
    }
  ],
  interview: [
    {
      question: "HTML kya hai?",
      answer: "HTML ek markup language hai jo web pages ki structure banata hai."
    },
    {
      question: "HTML vs programming language me kya difference hai?",
      answer: "HTML me logic nahi hota, sirf content structure hota hai. Programming languages me logic hota hai."
    },
    {
      question: "Tag aur element me kya antar hai?",
      answer: "Tag opening ya closing hota hai (<p>), element complete structure hota hai (<p>text</p>)."
    }
  ],
  assignment: [
    "Ek HTML file banao jisme heading aur paragraph ho",
    "Usme 3 alag headings (<h1> to <h3>) use karo",
    "Har heading ke neeche uske baare me paragraph likho"
  ],
  resources: [
    { title: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "W3Schools HTML", url: "https://www.w3schools.com/html/" }
  ],
  summary: "HTML web development ki foundation hai. Ye markup language hai jo webpage ki structure banata hai. Isme tags ka use hota hai jo content ko define karte hain."
};

export default lesson;
