const lesson = {
  id: 4,
  slug: "headings",
  title: "HTML Headings",
  description: "<h1> se <h6> tak headings ka sahi istemal.",
  difficulty: "Beginner",
  duration: "8 Minutes",
  heroImage: "",
  tags: ["HTML", "Headings", "SEO"],
  theory: [
    "HTML mein 6 levels ke headings hote hain: <h1> se <h6> tak.",
    "<h1> sabse important aur bada hota hai.",
    "<h6> sabse kam important aur chhota hota hai.",
    "Headings sirf font size ke liye nahi hain — ye structure aur SEO ke liye bhi important hain.",
    "Search engines headings ko dekhte hain ye samajhne ke liye ki page mein kya hai.",
    "Aap ek page mein ideally ek hi <h1> use karein."
  ],
  examples: [
    {
      title: "Heading Hierarchy",
      description: "Sahi hierarchy ka example.",
      code: "<h1>Main Title</h1>\n<h2>Chapter 1</h2>\n<h3>Section 1.1</h3>\n<h4>Sub-section 1.1.1</h4>",
      result: "Main Title\nChapter 1\nSection 1.1\nSub-section 1.1.1"
    }
  ],
  syntax: ["<h1>Main Heading</h1>\n<h2>Section Heading</h2>\n<h3>Sub-section</h3>\n<h4>Sub-sub-section</h4>\n<h5>Minor</h5>\n<h6>Smallest</h6>"],
  diagram: [
    "<h1> → Main Heading (Most Important)",
    "  <h2> → Section",
    "    <h3> → Sub-section",
    "      <h4> → Detail",
    "        <h5> → Minor",
    "          <h6> → Smallest"
  ],
  code: [
    {
      title: "Heading Example",
      language: "html",
      code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Headings</title>\n</head>\n<body>\n  <h1>My Blog</h1>\n  <h2>About Me</h2>\n  <p>I am a developer.</p>\n  <h3>Skills</h3>\n  <p>HTML, CSS, JavaScript</p>\n</body>\n</html>"
    }
  ],
  output: ["My Blog\nAbout Me\nI am a developer.\nSkills\nHTML, CSS, JavaScript"],
  commonMistakes: [
    "Sirf font size badhane ke liye heading ka use karna",
    "Ek page mein multiple <h1> use karna",
    "Headings ko skip karna (h1 ke baad direct h3)"
  ],
  bestPractices: [
    "Ek page mein ideally ek hi <h1> rakho",
    "Proper hierarchy follow karo: h1 → h2 → h3",
    "Headings descriptive rakho, sirf 'Introduction' nahi"
  ],
  tips: [
    "SEO ke liye keywords headings mein use karo",
    "Screen readers headings ka use navigation ke liye karte hain",
    "CSS font-size property se heading ka size customize karo"
  ],
  practice: [
    "Ek article banao with proper heading hierarchy",
    "5 different headings ka use karo",
    "Check karo screen reader se headings kaise sunayi dete hain"
  ],
  exercise: {
    instruction: "Ek recipe page banao jisme main heading, ingredients heading, aur steps heading ho.",
    hint: "<h1> recipe name, <h2> ingredients/steps.",
    starterCode: "<h1>Pasta Recipe</h1>\n<h2>Ingredients</h2>\n<ul>\n  <li>Pasta</li>\n</ul>"
  },
  quiz: [
    {
      question: "Sabse important heading kaunsa hai?",
      options: ["<h6>", "<h1>", "<h3>", "Sab equal hain"],
      answer: 1
    },
    {
      question: "Ek page mein kitne <h1> hone chahiye?",
      options: ["Jitne chahe", "Ek ideally", "Sirf do", "Koi limit nahi"],
      answer: 1
    },
    {
      question: "<h3> kaunsa level hai?",
      options: ["First", "Second", "Third", "Fourth"],
      answer: 2
    },
    {
      question: "Headings SEO ke liye kyu important hain?",
      options: ["Color ke liye", "Keywords ke liye", "Speed ke liye", "Animation ke liye"],
      answer: 1
    },
    {
      question: "CSS se heading ka kya badalte hain?",
      options: ["Importance", "Size", "Hierarchy", "Meaning"],
      answer: 1
    }
  ],
  interview: [
    {
      question: "Headings SEO ke liye kyu important hain?",
      answer: "Search engines headings ko page structure samajhne ke liye use karte hain. Keywords in headings ko higher weight milta hai."
    },
    {
      question: "Font size badhane ke liye heading use karna sahi hai?",
      answer: "Nahi, iske liye CSS font-size property use karni chahiye. Headings semantic importance batate hain."
    },
    {
      question: "Accessibility mein headings ka kya role hai?",
      answer: "Screen readers headings ka use page navigation ke liye karte hain. User ek heading se doosre heading jump kar sakta hai."
    }
  ],
  assignment: [
    "Ek webpage banao jisme 6 levels of headings ho",
    "Har heading ke neeche relevant paragraph likho",
    "H1, h2, h3 ka proper hierarchy maintain karo"
  ],
  resources: [
    { title: "MDN Headings Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements" },
    { title: "HTML Headings Accessibility", url: "https://www.w3.org/WAI/tutorials/page-structure/headings/" }
  ],
  summary: "HTML mein 6 heading levels hote hain (h1-h6). Headings sirf styling nahi, balki page structure aur SEO ke liye important hain. Proper hierarchy follow karna chahiye."
};

export default lesson;
