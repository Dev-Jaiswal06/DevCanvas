const lesson = {
  id: 1,
  slug: "introduction",
  title: "CSS Introduction",
  description: "Learn what CSS is, why we use it, and how it works with HTML",
  difficulty: "Beginner",
  duration: "30 min",
  heroImage: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800",
  tags: ["CSS", "Introduction", "Styling"],
  theory: [
    "CSS ka full form hai Cascading Style Sheets",
    "CSS se hum HTML elements ko style karte hain - colors, fonts, layout, animations, sab kuch",
    "CSS ke bina websites boring lagti hain, sirf black text white background pe",
    "CSS ka kaam hai alag karna content (HTML) aur presentation (styling) ko",
    "CSS teen tarah se likh sakte hain: inline (same line mein), internal (head mein style tag mein), external (alag .css file mein)",
    "External CSS sabse best practice hai kyunki isse code clean rehta hai aur ek file se poori website ka style change kar sakte hain",
    "CSS rules teen cheezon se milke bante hain: selector, property, aur value",
    "Selector batata hai kis element ko style karna hai, property batati hai kya change karna hai, value batati hai kaise change karna hai",
    "CSS cascading nature ka matlab hai ki multiple rules ek element pe apply ho sakte hain aur specificity decide karti hai kaun sa rule maane ga",
    "Browser DevTools mein CSS ko live edit kar sakte hain - F12 press karo aur Elements tab mein styles dekho",
    "CSS3 latest version hai jisme flexbox, grid, animations, transitions jaise powerful features aaye hain",
    "Aaj ki modern websites CSS ke bina possible nahi hai - responsive design, beautiful UI sab CSS se hi possible hai"
  ],
  examples: [
    { title: "Basic CSS Example", description: "Simple color and font-size example", code: "p { color: red; font-size: 20px; }", result: "Red colored paragraph text with 20px font size" },
    { title: "Multiple Properties", description: "Applying multiple styles to same element", code: "h1 { color: blue; text-align: center; font-family: Arial; }", result: "Blue centered heading in Arial font" },
    { title: "Inline CSS", description: "CSS directly in HTML element", code: "<p style=\"color: green; font-weight: bold;\">Hello World</p>", result: "Bold green text on the webpage" }
  ],
  syntax: [
    "selector { property: value; }",
    "p { color: blue; }",
    "h1 { font-size: 32px; text-align: center; }"
  ],
  diagram: [
    "┌─────────────────────────────────────────────────────────┐",
    "│                  CSS RULE STRUCTURE                     │",
    "│                                                         │",
    "│  ┌──────────┐    ┌────────────┐    ┌──────────┐        │",
    "│  │ Selector │ →  │  Property  │ →  │  Value   │        │",
    "│  │    p      │    │   color    │    │   blue   │        │",
    "│  └──────────┘    └────────────┘    └──────────┘        │",
    "│                                                         │",
    "│  p { color: blue; }  ← Complete Declaration             │",
    "└─────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "CSS Syntax Example", language: "css", code: "p {\n  color: #333;\n  font-size: 16px;\n  line-height: 1.5;\n}" },
    { title: "HTML with Internal CSS", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body {\n      background-color: #f0f0f0;\n      font-family: Arial, sans-serif;\n    }\n    h1 {\n      color: navy;\n      text-align: center;\n    }\n    p {\n      color: #333;\n      font-size: 16px;\n    }\n  </style>\n</head>\n<body>\n  <h1>Welcome to CSS</h1>\n  <p>This page is styled with CSS!</p>\n</body>\n</html>" },
    { title: "Adding External CSS", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>External CSS Example</h1>\n  <p>Styles coming from styles.css file</p>\n</body>\n</html>" }
  ],
  output: [
    "Paragraph text will be dark gray (#333) color with 16px font size",
    "Heading will be navy colored and centered on the page",
    "Body will have light gray background with Arial font family"
  ],
  commonMistakes: [
    "Bhoolna semicolon (;) property ke baad - agar semicolon nahi lagaya toh next property kaam nahi karegi",
    "ID selector (#) aur class selector (.) mein confuse hona - # unique ke liye, . group ke liye",
    "CSS file ko link karna bhool jana - external CSS file banane ke baad HTML mein link tag lagana zaroori hai",
    "Property name galat likh dena jaise 'color' ki jagah 'colour' - CSS American English use karta hai",
    "Curly braces { } ki jagah parentheses ( ) ya brackets [ ] use karna - sirf curly braces hi sahi hain"
  ],
  bestPractices: [
    "CSS ko alag file mein rakho (.css file), HTML mein inline mat likho",
    "Classes ka use karo IDs ke jagah, kyunki classes reusable hain",
    "CSS rules ko alphabetical order mein likho ya logical groups mein organize karo",
    "Comments use karo /* */ se taaki code readable rahe",
    "Consistent naming convention follow karo jaise kebab-case (background-color) ya BEM methodology"
  ],
  tips: [
    "Browser DevTools (F12) use karo CSS debug karne ke liye",
    "CSS comments /* */ se likhte hain, double slash // kaam nahi karta CSS mein",
    "Shorthand properties seekho jaise background, font, margin - isse code short aur clean rehta hai"
  ],
  practice: [
    "Apna introduction page banaye jisme colors, fonts, background ho",
    "CSS syntax practice karein 10 different rules likhkar alag-alag selectors ke saath"
  ],
  exercise: {
    instruction: "Create a styled HTML page with a heading, paragraph, and button",
    hint: "Use color, background-color, padding, and border-radius properties",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    h1 {\n      color: #2c3e50;\n      text-align: center;\n    }\n    p {\n      font-size: 18px;\n      color: #555;\n    }\n    button {\n      background-color: #3498db;\n      color: white;\n      padding: 10px 20px;\n      border: none;\n      border-radius: 5px;\n    }\n  </style>\n</head>\n<body>\n  <h1>My Styled Page</h1>\n  <p>This is a paragraph with custom styling.</p>\n  <button>Click Me</button>\n</body>\n</html>"
  },
  quiz: [
    { question: "CSS ka full form kya hai?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style System"], answer: 0 },
    { question: "CSS file ka extension kya hota hai?", options: [".cs", ".css", ".style", ".ss"], answer: 1 },
    { question: "CSS mein property aur value ke beech mein kya aata hai?", options: ["Colon (:)", "Semicolon (;)", "Equal (=)", "Arrow (->)"], answer: 0 },
    { question: "CSS rule ko kaise close karte hain?", options: ["Dot se", "Semicolon se", "Comma se", "Hash se"], answer: 1 },
    { question: "External CSS file ko HTML mein kaise link karte hain?", options: ["<link> tag se", "<script> tag se", "<style> tag se", "<css> tag se"], answer: 0 }
  ],
  interview: [
    { question: "CSS kya hai aur kyun use karte hain?", answer: "CSS (Cascading Style Sheets) ek styling language hai jo HTML elements ko visually appealing banane ke liye use hoti hai. Isse hum colors, fonts, layout, animations, responsiveness sab kuch control kar sakte hain." },
    { question: "CSS ko HTML mein include karne ke kitne tarike hain?", answer: "Teen tarike hain: 1) Inline CSS - style attribute ke saath HTML element mein hi, 2) Internal CSS - head section mein <style> tag ke andar, 3) External CSS - alag .css file ko <link> tag se connect karna." },
    { question: "CSS cascade ka kya matlab hai?", answer: "Cascade ka matlab hai ki multiple CSS rules ek hi element ko target kar sakte hain. Browser specific rules follow karta hai jaise importance (!important), specificity, aur source order decide karte hain kaunsa rule apply hoga." }
  ],
  assignment: [
    "Create a personal portfolio page with 5 different CSS properties including colors, fonts, and background",
    "Style a blog post page with proper typography, colors, and layout using external CSS file"
  ],
  resources: [
    { title: "MDN CSS Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "CSS Tricks - Complete Guide", url: "https://css-tricks.com/almanac/" },
    { title: "W3Schools CSS Tutorial", url: "https://www.w3schools.com/css/" }
  ],
  summary: "CSS websites ki styling aur layout ke liye use hoti hai. Isme selectors, properties, aur values ka combination hota hai. CSS ko internal, external, ya inline style ke roop mein use kar sakte hain. External CSS sabse best practice hai jisme alag .css file hoti hai jo HTML se link hoti hai. CSS ka cascading nature multiple rules ko manage karne mein help karta hai."
};

export default lesson;
