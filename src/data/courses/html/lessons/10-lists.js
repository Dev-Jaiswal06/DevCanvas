const lesson = {
  id: 10,
  slug: "lists",
  title: "HTML Lists",
  description: "Ordered, unordered aur description lists ka istemal.",
  difficulty: "Beginner",
  duration: "10 Minutes",
  heroImage: "",
  tags: ["HTML", "Lists", "Structure"],
  theory: [
    "HTML mein 3 types ke lists hote hain.",
    "Unordered List (<ul>) — Bullet points ke saath.",
    "Ordered List (<ol>) — Numbering ke saath.",
    "Description List (<dl>) — Term (<dt>) + description (<dd>).",
    "Lists nested ho sakti hain — ek list ke andar doosri list.",
    "Ordered list ke liye type attribute: '1', 'A', 'a', 'I', 'i'.",
    "CSS se lists ko style kiya ja sakta hai (list-style-type property)."
  ],
  examples: [
    {
      title: "Different List Types",
      code: "<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>\n\n<ol type=\"A\">\n  <li>First</li>\n  <li>Second</li>\n</ol>\n\n<dl>\n  <dt>HTML</dt>\n  <dd>Markup Language</dd>\n</dl>",
      result: "- Apple\n- Banana\nA. First\nB. Second\nHTML\n  Markup Language"
    }
  ],
  syntax: ["<ul>\n  <li>Item</li>\n</ul>\n\n<ol>\n  <li>Step 1</li>\n  <li>Step 2</li>\n</ol>\n\n<dl>\n  <dt>Term</dt>\n  <dd>Description</dd>\n</dl>"],
  diagram: [
    "<ul> → Unordered (bullets)",
    "  <li>Item A</li>",
    "  <li>Item B</li>",
    "</ul>",
    "",
    "<ol> → Ordered (numbers/letters)",
    "  <li>First</li>",
    "  <li>Second</li>",
    "</ol>"
  ],
  code: [
    {
      title: "Lists Demo",
      language: "html",
      code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Lists</title>\n</head>\n<body>\n  <h1>Shopping List</h1>\n  <ul>\n    <li>Milk</li>\n    <li>Bread</li>\n    <li>Eggs</li>\n  </ul>\n\n  <h1>Recipe Steps</h1>\n  <ol>\n    <li>Boil water</li>\n    <li>Add pasta</li>\n    <li>Cook 10 minutes</li>\n  </ol>\n</body>\n</html>"
    }
  ],
  output: ["Shopping List\n- Milk\n- Bread\n- Eggs\n\nRecipe Steps\n1. Boil water\n2. Add pasta\n3. Cook 10 minutes"],
  commonMistakes: [
    "Ordered list mein ul ka use karna jab numbering chahiye",
    "List ke andar non-li elements direct daalna",
    "Nested lists ka improper indentation"
  ],
  bestPractices: [
    "Navigation menus ke liye <ul> use karo",
    "Steps ke liye <ol> use karo (sequence important hai)",
    "Lists ko CSS se style karo (list-style-type)",
    "Nested lists ke liye proper hierarchy maintain karo"
  ],
  tips: [
    "CSS list-style: none se bullets hata sakte ho",
    "Navigation bar mostly <ul> se banta hai",
    "Description list glossaries ke liye perfect hai"
  ],
  practice: [
    "Apni daily routine ki ordered list banao",
    "Favorite movies ki unordered list banao",
    "Ek nested list banao (categories ke saath sub-items)"
  ],
  exercise: {
    instruction: "Ek nested list banao jisme courses ho aur unke topics sub-items mein ho.",
    hint: "List ke andar doosri list (<ul> ke andar <ul>) daalni hogi.",
    starterCode: "<ul>\n  <li>HTML\n    <ul>\n      <li>Tags</li>\n    </ul>\n  </li>\n</ul>"
  },
  quiz: [
    {
      question: "Numbered list ke liye kaunsa tag?",
      options: ["<ul>", "<ol>", "<li>", "<dl>"],
      answer: 1
    },
    {
      question: "Description list mein term ke liye kaunsa tag?",
      options: ["<li>", "<dt>", "<dd>", "<term>"],
      answer: 1
    },
    {
      question: "Ordered list ka default type kya hai?",
      options: ["A, B, C", "1, 2, 3", "I, II, III", "a, b, c"],
      answer: 1
    },
    {
      question: "List item ke liye kaunsa tag?",
      options: ["<lt>", "<li>", "<item>", "<it>"],
      answer: 1
    },
    {
      question: "Kya lists nested ho sakti hain?",
      options: ["Nahi", "Sirf ul", "Sirf ol", "Haan"],
      answer: 3
    }
  ],
  interview: [
    {
      question: "Ordered aur unordered list me kya antar hai?",
      answer: "Ordered list (<ol>) numbered hoti hai jahan sequence important hai. Unordered list (<ul>) bullet points hoti hai jahan sequence不重要 hai."
    },
    {
      question: "Navigation menu ke liye list kyu use karte hain?",
      answer: "Semantically, navigation links ek list hoti hain. Screen readers aur SEO ise better understand karte hain. Plus flexible styling ke liye."
    },
    {
      question: "Description list kab use karein?",
      answer: "Jab aapko terms aur unki definitions display karni ho, jaise glossary, dictionary, FAQ questions/answers."
    }
  ],
  assignment: [
    "Ek recipe page banao jisme ingredients (unordered) aur steps (ordered) ho",
    "Ek nested list banao — courses ke andar topics",
    "Description list banao jo 5 technical terms explain kare"
  ],
  resources: [
    { title: "MDN Lists Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul" },
    { title: "CSS List Styling", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style" }
  ],
  summary: "HTML mein 3 types: unordered (<ul>), ordered (<ol>), aur description (<dl>) lists. Lists navigation, steps aur grouped content ke liye use hoti hain."
};

export default lesson;
