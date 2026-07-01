const lesson = {
  id: 5,
  slug: "paragraphs",
  title: "HTML Paragraphs & Text",
  description: "Paragraphs, line breaks, horizontal rules aur text formatting.",
  difficulty: "Beginner",
  duration: "8 Minutes",
  heroImage: "",
  tags: ["HTML", "Paragraph", "Text"],
  theory: [
    "<p> tag paragraph ke liye use hota hai. Browser automatically paragraphs ke beech space add karta hai.",
    "<br> tag line break ke liye hai. Ye self-closing tag hai — iska closing tag nahi hota.",
    "<hr> tag horizontal rule (line) draw karta hai. Ye bhi self-closing hai.",
    "<pre> tag preformatted text ke liye — jaisa likho waisa dikhta hai.",
    "HTML mein extra spaces aur newlines ignore hote hain — ise whitespace collapsing kehte hain.",
    "Multiple <br> laga kar spacing na dein — iske liye CSS margin use karein."
  ],
  examples: [
    {
      title: "Paragraph with Formatting",
      code: "<p>This is a <b>bold</b> word.</p>\n<p>This is<br>a line break.</p>\n<hr>\n<pre>  Indented text</pre>",
      result: "This is a bold word.\nThis is\na line break.\n_______\n  Indented text"
    }
  ],
  syntax: ["<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>\n<br>\n<hr>\n<pre>Preformatted text</pre>"],
  diagram: [
    "<p>Paragraph 1</p>  → Block with spacing",
    "<p>Paragraph 2</p>  → Block with spacing",
    "<br>               → Inline break",
    "<hr>               → Horizontal line",
    "<pre>text</pre>     → Preserved format"
  ],
  code: [
    {
      title: "Paragraphs in Action",
      language: "html",
      code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Paragraphs</title>\n</head>\n<body>\n  <h1>About Me</h1>\n  <p>Hi! I am a web developer.</p>\n  <p>I love building websites<br>and learning new things.</p>\n  <hr>\n  <h2>My Skills</h2>\n  <pre>\nHTML    CSS    JavaScript\nReact   Node   MongoDB\n  </pre>\n</body>\n</html>"
    }
  ],
  output: ["About Me\nHi! I am a web developer.\n\nI love building websites\nand learning new things.\n\nMy Skills\nHTML    CSS    JavaScript\nReact   Node   MongoDB"],
  commonMistakes: [
    "Paragraph ke liye <br> ka use karna instead of <p>",
    "Multiple <br> laga kar spacing dena — CSS margin use karo",
    "Extra spaces ke liye &nbsp; ka excessive use"
  ],
  bestPractices: [
    "Har logical block ke liye <p> tag use karo",
    "Line break ke liye sirf <br> use karo jab paragraph break na chahiye",
    "<pre> tag code examples dikhane ke liye perfect hai"
  ],
  tips: [
    "Paragraphs ke beech spacing CSS margin se control karo",
    "White-space property CSS se pre tag jaisa effect la sakte ho",
    "Long paragraphs ko chhote paragraphs mein tod do — readability improve hoti hai"
  ],
  practice: [
    "Apne baare mein 3 paragraphs likho",
    "<br> aur <hr> ka use karo",
    "<pre> tag mein code snippet likho"
  ],
  exercise: {
    instruction: "Ek introduction page banao jisme 3 paragraphs, ek line break, aur ek horizontal rule ho.",
    hint: "Har paragraph <p> tag mein likho, <br> line break ke liye use karo.",
    starterCode: "<h1>My Introduction</h1>\n<p>Hello! My name is...</p>"
  },
  quiz: [
    {
      question: "Line break ke liye kaunsa tag?",
      options: ["<lb>", "<br>", "<break>", "<line>"],
      answer: 1
    },
    {
      question: "<pre> tag kya karta hai?",
      options: ["Paragraph banata hai", "Text ko preformatted dikhata hai", "Link banata hai", "Image dikhata hai"],
      answer: 1
    },
    {
      question: "Whitespace collapsing kya hai?",
      options: ["Text compress karna", "Spaces ignore karna", "Line break add karna", "Color change karna"],
      answer: 1
    },
    {
      question: "<hr> tag kya dikhata hai?",
      options: ["Image", "Video", "Horizontal line", "Link"],
      answer: 2
    },
    {
      question: "Self-closing tag kaun sa hai?",
      options: ["<p>", "<h1>", "<br>", "<div>"],
      answer: 2
    }
  ],
  interview: [
    {
      question: "<p> aur <br> me kya antar hai?",
      answer: "<p> ek block-level element hai jo paragraph banata hai. <br> inline element hai jo sirf line break karta hai without any spacing."
    },
    {
      question: "Whitespace collapsing kya hoti hai?",
      answer: "HTML automatically multiple spaces ko ek space me convert kar deta hai. Isi ko whitespace collapsing kehte hain."
    },
    {
      question: "<pre> tag kab use karein?",
      answer: "Jab text ka exact formatting preserve karna ho, jaise code snippets, ASCII art, poetry."
    }
  ],
  assignment: [
    "Ek article page banao jisme 5 paragraphs ho",
    "Headings, line breaks, aur horizontal rules use karo",
    "<pre> tag mein code example dikhao"
  ],
  resources: [
    { title: "MDN Paragraph Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p" },
    { title: "HTML br Tag", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br" }
  ],
  summary: "Paragraphs (<p>), line breaks (<br>), horizontal rules (<hr>) aur preformatted text (<pre>) HTML ke basic text elements hain. Ye content ko structured aur readable banate hain."
};

export default lesson;
