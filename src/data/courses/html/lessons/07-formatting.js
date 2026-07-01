const lesson = {
  id: 7,
  slug: "formatting",
  title: "HTML Text Formatting",
  description: "Text ko bold, italic, underline aur other formatting.",
  difficulty: "Beginner",
  duration: "10 Minutes",
  heroImage: "",
  tags: ["HTML", "Formatting", "Text"],
  theory: [
    "HTML mein text formatting ke bahut saare tags hain.",
    "<b> — Bold text (just styling), <strong> — Important text (semantic)",
    "<i> — Italic text (just styling), <em> — Emphasized text (semantic)",
    "<mark> — Highlighted text, <small> — Smaller text",
    "<del> — Deleted text (strikethrough), <ins> — Inserted text",
    "<sub> — Subscript (H₂O), <sup> — Superscript (10²)",
    "<b> aur <strong> dono bold karte hain, lekin <strong> semantic importance batata hai."
  ],
  examples: [
    {
      title: "All Formatting Tags",
      code: "<p><b>Bold</b> <strong>Strong</strong></p>\n<p><i>Italic</i> <em>Emphasis</em></p>\n<p><mark>Highlight</mark> <small>Small</small></p>\n<p><del>Deleted</del> <ins>Inserted</ins></p>\n<p>H<sub>2</sub>O and 10<sup>2</sup></p>",
      result: "Bold Strong\nItalic Emphasis\nHighlight Small\nDeleted Inserted\nH2O and 102"
    }
  ],
  syntax: ["<b>Bold</b>\n<strong>Important</strong>\n<i>Italic</i>\n<em>Emphasized</em>\n<mark>Highlighted</mark>\n<small>Small</small>\n<del>Deleted</del>\n<ins>Inserted</ins>\n<sub>Subscript</sub>\n<sup>Superscript</sup>"],
  diagram: [
    "<b> vs <strong> → Dono bold | <strong> semantic hai",
    "<i> vs <em> → Dono italic | <em> semantic hai",
    "<mark> → Yellow highlight",
    "<del> → Strike through",
    "<sub> → Neeche (H₂O)",
    "<sup> → Upar (x²)"
  ],
  code: [
    {
      title: "Formatting Demo",
      language: "html",
      code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Formatting</title>\n</head>\n<body>\n  <h1>Text Formatting</h1>\n  <p><b>Bold</b> and <strong>Important</strong></p>\n  <p><i>Italic</i> and <em>Emphasis</em></p>\n  <p><mark>Highlight this</mark></p>\n  <p><del>Wrong</del> <ins>Correct</ins></p>\n  <p>Water: H<sub>2</sub>O</p>\n  <p>10<sup>2</sup> = 100</p>\n</body>\n</html>"
    }
  ],
  output: ["Text Formatting\nBold and Important\nItalic and Emphasis\nHighlight this\nWrong Correct\nWater: H2O\n102 = 100"],
  commonMistakes: [
    "<b> aur <i> ka overuse — CSS se styling karo",
    "<strong> aur <em> ka semantic meaning ignore karna",
    "Nested formatting tags ka improper closing"
  ],
  bestPractices: [
    "Semantic tags (strong, em) ko prefer karo over (b, i)",
    "CSS font-weight aur font-style ka use karo styling ke liye",
    "Accessibility ke liye semantic tags important hain"
  ],
  tips: [
    "Screen readers <strong> aur <em> ko different tone mein padhte hain",
    "<mark> tag recently highlighted content ke liye hai",
    "Formatting tags inline hote hain — ek line mein aate hain"
  ],
  practice: [
    "Chemical formulas (H2O, CO2) subscript ke saath likho",
    "Mathematical expressions (10², x³) superscript ke saath likho",
    "Ek paragraph mein saare formatting tags use karo"
  ],
  exercise: {
    instruction: "Ek paragraph banao jisme bold, italic, highlighted aur deleted text ho.",
    hint: "<b>, <i>, <mark>, <del> tags ka use karo.",
    starterCode: "<p>This is <b>important</b> and this is <i>emphasized</i>.</p>"
  },
  quiz: [
    {
      question: "<strong> aur <b> me kya antar hai?",
      options: ["Kuch nahi", "<strong> semantic hai", "<b> semantic hai", "Dono same hain"],
      answer: 1
    },
    {
      question: "Subscript ke liye kaunsa tag?",
      options: ["<sup>", "<sub>", "<small>", "<down>"],
      answer: 1
    },
    {
      question: "Highlighted text ke liye kaunsa tag?",
      options: ["<highlight>", "<em>", "<mark>", "<strong>"],
      answer: 2
    },
    {
      question: "Superscript ka example kya hai?",
      options: ["H2O", "CO2", "x²", "NaCl"],
      answer: 2
    },
    {
      question: "Semantic tag kaun sa hai?",
      options: ["<b>", "<i>", "<u>", "<em>"],
      answer: 3
    }
  ],
  interview: [
    {
      question: "Semantic formatting tags kyu use karein?",
      answer: "Screen readers, search engines, aur accessibility tools semantic tags ko samajhte hain aur properly interpret karte hain."
    },
    {
      question: "<b> vs <strong> me difference explain karo?",
      answer: "<b> sirf visual bold styling hota hai, jabki <strong> additional semantic importance batata hai ki ye text important hai."
    },
    {
      question: "HTML formatting vs CSS styling me kya antar hai?",
      answer: "HTML formatting content ka structure define karta hai (semantic), CSS visual presentation control karta hai."
    }
  ],
  assignment: [
    "Ek webpage banao jisme saare formatting tags use hue ho",
    "Chemistry formulas (H2O, CO2, NaCl) subscript ke saath likho",
    "Math equations (x² + y², 2³) superscript ke saath likho"
  ],
  resources: [
    { title: "MDN Text Formatting", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics" }
  ],
  summary: "HTML text formatting tags text ko visually aur semantically style karte hain. Semantic tags (strong, em) accessibility aur SEO ke liye important hain."
};

export default lesson;
