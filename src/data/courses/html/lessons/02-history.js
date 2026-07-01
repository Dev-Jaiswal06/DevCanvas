const lesson = {
  id: 2,
  slug: "history",
  title: "History of HTML",
  description: "HTML ka safar 1991 se lekar aaj tak — versions aur evolution.",
  difficulty: "Beginner",
  duration: "8 Minutes",
  heroImage: "",
  tags: ["HTML", "History", "Beginner"],
  theory: [
    "HTML ko 1991 mein Tim Berners-Lee ne banaya tha.",
    "1993 mein HTML 1.0 aaya — bahut basic tha, sirf text aur links the.",
    "1995 mein HTML 2.0 aaya — forms aur tables add hue.",
    "1997 mein HTML 3.2 aaya — CSS support, images, tables.",
    "1999 mein HTML 4.01 aaya — ye stable version tha bahut saalon tak.",
    "2000 mein XHTML aaya — strict rules wala HTML.",
    "2014 mein HTML5 aaya — modern web ka standard. Isme audio, video, canvas, semantic tags aaye."
  ],
  examples: [
    {
      title: "HTML Version Timeline",
      description: "HTML versions ka evolution.",
      code: "<h1>HTML History</h1>\n<ul>\n  <li>1993 - HTML 1.0</li>\n  <li>1995 - HTML 2.0</li>\n  <li>1999 - HTML 4.01</li>\n  <li>2014 - HTML5</li>\n</ul>",
      result: "HTML History\n- 1993 - HTML 1.0\n- 1995 - HTML 2.0\n- 1999 - HTML 4.01\n- 2014 - HTML5"
    }
  ],
  syntax: ["<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>HTML5 Document</title>\n</head>\n<body>\n</body>\n</html>"],
  diagram: [
    "HTML 1.0(1993) → HTML 2.0(1995) → HTML 3.2(1997) → HTML 4.01(1999) → XHTML(2000) → HTML5(2014)"
  ],
  code: [
    {
      title: "HTML5 Boilerplate",
      language: "html",
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML5 Page</title>\n</head>\n<body>\n  <h1>Welcome to HTML5</h1>\n</body>\n</html>"
    }
  ],
  output: ["Welcome to HTML5"],
  commonMistakes: [
    "HTML5 aur older versions me confusion rakhna",
    "<!DOCTYPE html> na lagana jo HTML5 batata hai",
    "Self-closing tags ka galat syntax (<br/> vs <br>)"
  ],
  bestPractices: [
    "Hamesha HTML5 doctype use karo",
    "Modern browsers HTML5 ko support karte hain",
    "Semantic tags use karo jo HTML5 me aaye"
  ],
  tips: [
    "HTML5 backward compatible hai — purana code bhi chalega",
    "CanIUse.com check karo browser support ke liye",
    "HTML5 me naye form input types aaye hain"
  ],
  practice: [
    "Ek timeline banao HTML versions ka",
    "Har version ke saath uski release year likho",
    "HTML5 ke 5 naye features list karo"
  ],
  exercise: {
    instruction: "HTML versions ki timeline banakar ek webpage create karo.",
    hint: "Unordered list <ul> ka use karo.",
    starterCode: "<h1>HTML Timeline</h1>\n<ul>\n  <li>1993 - HTML 1.0</li>\n</ul>"
  },
  quiz: [
    {
      question: "HTML kisne banaya?",
      options: ["Bill Gates", "Tim Berners-Lee", "Larry Page", "Mark Zuckerberg"],
      answer: 1
    },
    {
      question: "HTML5 kab aaya?",
      options: ["1999", "2005", "2014", "2020"],
      answer: 2
    },
    {
      question: "HTML 2.0 me kya add hua?",
      options: ["Video", "Forms aur Tables", "Canvas", "Audio"],
      answer: 1
    },
    {
      question: "XHTML kya hai?",
      options: ["CSS framework", "Strict HTML rules", "JavaScript library", "Database"],
      answer: 1
    },
    {
      question: "HTML5 se pehle kaun sa version tha?",
      options: ["HTML 3.2", "HTML 4.01", "XHTML", "HTML 2.0"],
      answer: 1
    }
  ],
  interview: [
    {
      question: "HTML5 ke naye features kya hain?",
      answer: "Audio, Video, Canvas, Semantic tags (header, footer, nav), Local Storage, Web Workers."
    },
    {
      question: "XHTML aur HTML5 me kya antar hai?",
      answer: "XHTML strict rules follow karta tha (all tags must close), HTML5 flexible hai aur backward compatible hai."
    },
    {
      question: "HTML5 backward compatible kyu hai?",
      answer: "Browser purane HTML versions ko bhi support karte hain, isliye old code bhi kaam karta hai."
    }
  ],
  assignment: [
    "HTML versions ki timeline banakar ek webpage create karo",
    "HTML5 ke 5 major features explain karo",
    "Purani websites (2000s) aur nayi websites me 5 differences likho"
  ],
  resources: [
    { title: "HTML History by MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/History" },
    { title: "HTML Living Standard", url: "https://html.spec.whatwg.org/" }
  ],
  summary: "HTML ka safar 1991 mein Tim Berners-Lee se shuru hua aur aaj HTML5 modern web ka standard hai. Har version ke saath naye features aur improvements aaye."
};

export default lesson;
