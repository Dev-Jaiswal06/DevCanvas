const lesson = {
  id: 6,
  slug: "comments",
  title: "HTML Comments",
  description: "Comments kya hote hain, kaise likhein aur kab use karein.",
  difficulty: "Beginner",
  duration: "5 Minutes",
  heroImage: "",
  tags: ["HTML", "Comments", "Code"],
  theory: [
    "HTML comments code mein notes add karne ke liye hote hain jo browser display nahi karta.",
    "Syntax: <!-- comment text -->",
    "Comments se hum code explain kar sakte hain, code temporarily disable kar sakte hain, todo reminders add kar sakte hain.",
    "Comments debugging ke time bahut useful hote hain.",
    "Nested comments kaam nahi karte — <!-- <!-- --> --> invalid hai."
  ],
  examples: [
    {
      title: "Comment Usage",
      code: "<!-- This is a comment -->\n<p>This is visible.</p>\n<!-- <p>This is hidden</p> -->",
      result: "This is visible."
    }
  ],
  syntax: ["<!-- Single line comment -->\n<!--\n  Multi-line\n  comment\n-->\n<!-- TODO: Add content here -->"],
  diagram: [
    "<!-- Comment Start",
    "  Ye text browser nahi dikhayega",
    "  Iska use documentation ke liye hota hai",
    "Comment End -->"
  ],
  code: [
    {
      title: "Comments Example",
      language: "html",
      code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Comments</title>\n</head>\n<body>\n  <!-- Main header -->\n  <h1>Welcome!</h1>\n\n  <!-- TODO: Add navigation -->\n  <nav>\n    <a href=\"#\">Home</a>\n  </nav>\n\n  <!-- <p>Temporarily hidden</p> -->\n  <p>This is visible.</p>\n</body>\n</html>"
    }
  ],
  output: ["Welcome!\nHome\nThis is visible."],
  commonMistakes: [
    "Comments ke andar sensitive information na daalein (passwords, API keys)",
    "Nested comments — <!-- <!-- --> --> — kaam nahi karte",
    "Zyda comments likhna unnecessary hai, code self-explanatory hona chahiye"
  ],
  bestPractices: [
    "Complex code ke liye comments likho",
    "TODO comments use karo pending work ke liye",
    "Production code mein unnecessary comments hata do"
  ],
  tips: [
    "Debugging ke time sections ko comment out karo",
    "Team projects mein comments collaboration ke liye useful hain",
    "Comments responsive nahi hote — sab browsers mein same dikhte hain"
  ],
  practice: [
    "Ek HTML file mein 5 different comments add karo",
    "Ek section ko comment out karke dekho",
    "TODO comment add karo future feature ke liye"
  ],
  exercise: {
    instruction: "Ek HTML file banao jisme 3 comments ho: ek explanation, ek TODO, aur ek disabled section.",
    hint: "<!-- comment --> syntax use karo.",
    starterCode: "<!-- This page shows my profile -->\n<h1>My Profile</h1>"
  },
  quiz: [
    {
      question: "HTML comment ka syntax kya hai?",
      options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
      answer: 2
    },
    {
      question: "Comments browser mein dikhte hain?",
      options: ["Haan", "Nahi", "Sirf source view mein", "Kuch conditions mein"],
      answer: 2
    },
    {
      question: "Nested comments allowed hain?",
      options: ["Haan", "Nahi", "Kuch browsers mein", "HTML5 mein"],
      answer: 1
    },
    {
      question: "Comments ka kya use nahi hai?",
      options: ["Documentation", "Debugging", "Run time logic", "TODO reminders"],
      answer: 2
    },
    {
      question: "Kya comments JavaScript block kar sakte hain?",
      options: ["Haan", "Nahi", "Sirf inline JS", "Conditional"],
      answer: 1
    }
  ],
  interview: [
    {
      question: "HTML comments kyu use karte hain?",
      answer: "Code documentation ke liye, debugging ke time sections disable karne ke liye, aur team collaboration ke liye."
    },
    {
      question: "Kya aap comments mein sensitive data rakh sakte hain?",
      answer: "Nahi, kyunki comments source view mein dikhte hain. Passwords, API keys ya personal info comments mein nahi rakhni chahiye."
    },
    {
      question: "Conditional comments kya hote hain?",
      answer: "Ye Internet Explorer ke liye specific comments the jo ab outdated hain. IE ke purane versions target karne ke liye use hote the."
    }
  ],
  assignment: [
    "Ek HTML file banao jisme comments explain kare ki har section kya karta hai",
    "3 different sections ko comment out karo",
    "Production ready code mein kab comments hatane chahiye — ispe 5 points likho"
  ],
  resources: [
    { title: "MDN Comments Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Comments" }
  ],
  summary: "HTML comments <!-- --> se likhe jaate hain. Ye browser display nahi karta. Comments code documentation, debugging, aur collaboration ke liye use hote hain."
};

export default lesson;
