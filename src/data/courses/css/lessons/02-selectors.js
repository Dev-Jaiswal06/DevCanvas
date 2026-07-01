const lesson = {
  id: 2,
  slug: "selectors",
  title: "CSS Selectors",
  description: "Learn about different CSS selectors - element, class, id, universal, grouping, and combinators",
  difficulty: "Beginner",
  duration: "45 min",
  heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
  tags: ["CSS", "Selectors", "Classes", "IDs"],
  theory: [
    "CSS selectors batate hain ki kaun se HTML elements ko style karna hai",
    "Element selector: directly HTML element ka naam likh do - p {}, h1 {}, div {}",
    "Class selector: dot (.) se shuru hota hai - .className {} - ek class multiple elements pe lag sakti hai",
    "ID selector: hash (#) se shuru hota hai - #idName {} - ek ID sirf ek element pe honi chahiye",
    "Universal selector: star (*) se sabhi elements ko select karta hai - * { margin: 0; }",
    "Grouping selector: comma (,) se multiple selectors ko ek saath group kar sakte hain - h1, h2, p { }",
    "Descendant selector: space ( ) se parent ke andar child ko select karta hai - div p { }",
    "Child selector: greater than (>) se direct child ko select karta hai - div > p { }",
    "Adjacent sibling selector: plus (+) se immediately next sibling ko select karta hai - h1 + p { }",
    "General sibling selector: tilde (~) se saare next siblings ko select karta hai - h1 ~ p { }",
    "Attribute selector: brackets [] se specific attribute wale elements select karte hain - input[type='text'] {}",
    "Pseudo-classes jaise :hover, :first-child, :nth-child() special states select karte hain"
  ],
  examples: [
    { title: "Element & Class Selector", description: "Using element and class selectors together", code: "p { color: blue; }\n.highlight { background-color: yellow; }", result: "All paragraphs blue, elements with highlight class get yellow background" },
    { title: "ID vs Class", description: "Difference between ID and class selectors", code: "#header { font-size: 24px; }\n.menu-item { color: green; }", result: "Only element with id='header' gets 24px, all menu-item class elements get green color" },
    { title: "Combinator Selectors", description: "Using descendant and child selectors", code: "div p { color: red; }\ndiv > p { font-weight: bold; }", result: "All p inside div are red, only direct children of div are bold" }
  ],
  syntax: [
    "element { property: value; }",
    ".className { property: value; }",
    "#idName { property: value; }",
    "selector1, selector2 { property: value; }",
    "parent > child { property: value; }",
    "element:pseudo-class { property: value; }"
  ],
  diagram: [
    "┌─────────────────────────────────────────────────────────────┐",
    "│                    CSS SELECTORS TREE                       │",
    "│                                                             │",
    "│  ┌──────────┐                                               │",
    "│  │  div     │  ← Element Selector                           │",
    "│  │  .box    │  ← Class Selector                             │",
    "│  │  #main   │  ← ID Selector                                │",
    "│  │  *       │  ← Universal Selector                         │",
    "│  │  h1, h2  │  ← Grouping Selector                          │",
    "│  │  div p   │  ← Descendant (space)                         │",
    "│  │  div > p │  ← Child (>)                                  │",
    "│  │  h1 + p  │  ← Adjacent Sibling (+)                      │",
    "│  │  h1 ~ p  │  ← General Sibling (~)                       │",
    "│  └──────────┘                                               │",
    "└─────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "CSS Selectors Example", language: "css", code: "/* Element Selector */\np {\n  font-size: 16px;\n  line-height: 1.6;\n}\n\n/* Class Selector */\n.card {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 8px;\n}\n\n/* ID Selector */\n#navbar {\n  background-color: #333;\n  color: white;\n}\n\n/* Universal Selector */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Grouping Selector */\nh1, h2, h3 {\n  font-family: 'Arial', sans-serif;\n  margin-bottom: 10px;\n}\n\n/* Descendant Selector */\narticle p {\n  color: #555;\n}\n\n/* Child Selector */\nul > li {\n  list-style: square;\n}" },
    { title: "HTML with Various Selectors", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; }\n    #header {\n      background-color: #2c3e50;\n      color: white;\n      padding: 20px;\n    }\n    .nav-item {\n      display: inline-block;\n      margin-right: 15px;\n      color: #ecf0f1;\n    }\n    .content p {\n      line-height: 1.8;\n      margin: 10px 0;\n    }\n    .content > .highlight {\n      background-color: #f1c40f;\n      padding: 5px;\n    }\n    button:hover {\n      background-color: #e74c3c;\n      color: white;\n    }\n  </style>\n</head>\n<body>\n  <div id=\"header\">\n    <span class=\"nav-item\">Home</span>\n    <span class=\"nav-item\">About</span>\n    <span class=\"nav-item\">Contact</span>\n  </div>\n  <div class=\"content\">\n    <p>This is a paragraph inside content.</p>\n    <div class=\"highlight\">This is highlighted text.</div>\n  </div>\n  <button>Hover over me</button>\n</body>\n</html>" },
    { title: "Pseudo-class Examples", language: "css", code: "/* Link states */\na:link { color: blue; }\na:visited { color: purple; }\na:hover { text-decoration: underline; }\na:active { color: red; }\n\n/* First and last child */\nli:first-child { font-weight: bold; }\nli:last-child { border-bottom: none; }\n\n/* nth-child patterns */\ntr:nth-child(even) { background-color: #f2f2f2; }\ntr:nth-child(odd) { background-color: #fff; }\n\n/* Not selector */\ninput:not([type=\"submit\"]) {\n  border: 1px solid #ccc;\n  padding: 8px;\n}" }
  ],
  output: [
    "All paragraphs get 16px font size with line-height 1.6",
    "Elements with class 'card' get border, padding and rounded corners",
    "Only the element with id 'navbar' gets dark background and white text",
    "All elements have margin and padding reset to 0 via universal selector",
    "Direct children of ul get square list-style instead of default bullets"
  ],
  commonMistakes: [
    "Class selector mein dot (.) bhool jana aur sirf naam likh dena - .classname likhna zaroori hai, classname nahi",
    "ID selector mein # bhool jana - #uniqueID likhna hai, uniqueID nahi",
    "Same ID do elements pe use karna - ID unique honi chahiye, class use karo agar repeat karna hai",
    "Combinators ke beech space ka galat use - div p (descendant) aur div>p (child) mein farak hai",
    "Comma ka use karte time space bhoolna - h1, h2 sahi hai, h1,h2 bhi chalega lekin readability ke liye space rakho"
  ],
  bestPractices: [
    "Classes ka zyada use karo, IDs ka limited use - classes reusable hain, IDs unique",
    "Specificity ko dhyan mein rakho - zyada specific selectors ko avoid karo jab simple selector kaam kar jaye",
    "Selectors ko short aur readable rakho - div.container ul li ki jagah .container li likh sakte ho",
    "Pseudo-classes :hover, :focus accessibility ke liye bhi use karo, sirf style ke liye nahi",
    "Attribute selectors ka use karo jab form elements ya specific attributes target karne ho"
  ],
  tips: [
    "Browser DevTools mein Elements tab pe jaake kisi element pe right-click → Inspect karo to uske selectors dekh sakte ho",
    "Specificity calculator online hai - isse samjho ki kaun sa selector jyada powerful hai",
    ":nth-child(odd/even) table rows ko alternate color dene ke liye perfect hai"
  ],
  practice: [
    "10 different selectors ka use karke ek HTML page banao jisme sabhi types ke selectors ho",
    "Ek navigation menu banao jisme descendant, child, aur pseudo-class selectors ka use ho"
  ],
  exercise: {
    instruction: "Create a styled navigation menu with dropdown items using various CSS selectors",
    hint: "Use descendant selectors for submenus, child selectors for direct items, hover pseudo-class for interactivity",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    nav {\n      background-color: #34495e;\n      padding: 10px;\n    }\n    nav ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n    }\n    nav > ul > li {\n      display: inline-block;\n      position: relative;\n      padding: 10px 20px;\n      color: white;\n    }\n    nav ul li:hover {\n      background-color: #2c3e50;\n    }\n    nav ul li ul {\n      display: none;\n      position: absolute;\n      background-color: #2c3e50;\n      top: 100%;\n      left: 0;\n    }\n    nav ul li:hover > ul {\n      display: block;\n    }\n    nav ul li ul li {\n      display: block;\n      padding: 8px 20px;\n      white-space: nowrap;\n    }\n    nav ul li ul li:hover {\n      background-color: #1a252f;\n    }\n  </style>\n</head>\n<body>\n  <nav>\n    <ul>\n      <li>Home</li>\n      <li>About\n        <ul>\n          <li>Team</li>\n          <li>Mission</li>\n          <li>Contact</li>\n        </ul>\n      </li>\n      <li>Services\n        <ul>\n          <li>Web Design</li>\n          <li>Development</li>\n        </ul>\n      </li>\n      <li>Blog</li>\n    </ul>\n  </nav>\n</body>\n</html>"
  },
  quiz: [
    { question: "Class selector CSS mein kaise likha jaata hai?", options: ["#className", ".className", "*className", "%className"], answer: 1 },
    { question: "ID selector CSS mein kaise likha jaata hai?", options: [".idName", "#idName", "*idName", "idName"], answer: 1 },
    { question: "Kaunsa selector saare HTML elements ko target karta hai?", options: ["#all", ".all", "*", "div"], answer: 2 },
    { question: "Multiple selectors ko group karne ke liye kaun sa symbol use hota hai?", options: ["Space", ">", "+", "Comma"], answer: 3 },
    { question: "Direct child selector ke liye kaun sa symbol use hota hai?", options: ["Space", ">", "+", "~"], answer: 1 }
  ],
  interview: [
    { question: "CSS selectors kya hain aur kitne types ke hote hain?", answer: "CSS selectors HTML elements ko target karne ke patterns hain. Main types hain: element selectors (p, div), class selectors (.class), ID selectors (#id), universal selector (*), grouping selectors (comma separated), combinator selectors (space, >, +, ~), attribute selectors ([type='text']), aur pseudo-class selectors (:hover, :first-child)." },
    { question: "Class aur ID selector mein kya farak hai?", answer: "Class selector (.) reusable hai - ek class multiple elements ko de sakte hain. ID selector (#) unique hai - ek page mein ek ID sirf ek element pe honi chahiye. Specificity mein ID ki priority class se zyada hoti hai. Performance mein koi khaas farak nahi hai lekin classes ko prefer karna chahiye." },
    { question: "Combinator selectors kaun se hain aur unka kya use hai?", answer: "Chaar combinator hain: descendant selector (space) - parent ke andar koi bhi child target kare; child selector (>) - sirf direct children; adjacent sibling selector (+) - immediately next sibling; general sibling selector (~) - saare next siblings. Ye specific elements ko target karne mein madad karte hain." }
  ],
  assignment: [
    "Build a product card grid using class selectors and :nth-child pseudo-class for styling alternating cards",
    "Create a styled form using attribute selectors for different input types and pseudo-classes for validation states"
  ],
  resources: [
    { title: "MDN CSS Selectors Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" },
    { title: "CSS Specificity Calculator", url: "https://specificity.keegan.st/" },
    { title: "CSS Diner - Practice Selectors Game", url: "https://flukeout.github.io/" }
  ],
  summary: "CSS selectors HTML elements ko target karne ka tareeka hai. Element selector (`p`), class selector (`.class`), ID selector (`#id`), universal selector (`*`), grouping (`,`), descendant (space), child (`>`), adjacent sibling (`+`), aur general sibling (`~`) ye sab main selectors hain. Specificity decide karti hai ki kaun sa selector zyada powerful hai - ID > Class > Element. Sahi selector choose karna clean aur maintainable CSS ke liye important hai."
};

export default lesson;
