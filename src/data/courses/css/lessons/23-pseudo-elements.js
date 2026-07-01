const lesson = {
  id: 23,
  slug: "pseudo-elements",
  title: "CSS Pseudo-elements",
  description: "Master pseudo-elements to create decorative content and advanced effects",
  difficulty: "Intermediate",
  duration: "35 min",
  heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
  tags: ["CSS", "Pseudo-elements", "Styling"],
  theory: [
    "Pseudo-elements CSS ke special selectors hain jo element ke specific part ko target karte hain — yeh double colon (::) se likhe jaate hain",
    "Pseudo-elements aur pseudo-classes mein fark: pseudo-classes (:hover) element ki state target karti hain, pseudo-elements (::before) element ke part ya naya content create karte hain",
    "::before element ke content se pehle ek virtual child create karta hai, ::after content ke baad — yeh dono content property ke saath use hote hain",
    "content property pseudo-elements ke liye mandatory hai — agar content nahi doge toh pseudo-element dikhega hi nahi, chahe other properties kuch bi do",
    "::first-letter kisi block element ke first character ko target karta hai — drop caps (bada initial letter) banane ke liye perfect",
    "::first-line kisi paragraph ya block element ki first line ko target karta hai — font-size, color, background sab apply kar sakte hain",
    "::selection tab apply hota hai jab user text select kare (highlight kare) — background-color aur color change kar sakte hain",
    "::placeholder input fields ke placeholder text ko style karta hai — usually gray hota hai, ise color, font-style, opacity sab change kar sakte hain",
    "::marker list items (<li>) ke bullet ya number marker ko style karta hai — color, font-size, content sab change kar sakte hain",
    "Pseudo-elements CSS mein decorative elements jaise icons, tooltips, quotes, gradients, aur custom bullets banane mein extensively use hote hain"
  ],
  examples: [
    { title: "Decorative Quotes with ::before and ::after", description: "Quote text ke pehle aur baad decorative quotation marks", code: "blockquote::before {\n  content: '\\201C';\n  font-size: 4em;\n  color: #3498db;\n  position: absolute;\n  left: 10px;\n  top: -10px;\n}\nblockquote::after {\n  content: '\\201D';\n  font-size: 4em;\n  color: #3498db;\n  position: absolute;\n  right: 10px;\n  bottom: -30px;\n}", result: "Quote ke dono taraf bade blue quotation marks appear honge" },
    { title: "Custom List Bullets with ::marker", description: "List items ke default bullet ko custom emoji se replace karna", code: "li::marker {\n  content: '⚡';\n  color: #f39c12;\n  font-size: 1.2em;\n}", result: "Har list item ke aage ⚡ emoji dikhega default bullet ki jagah" },
    { title: "Fancy Selection Style", description: "Text select karne pe custom highlight color", code: "::selection {\n  background-color: #ff7675;\n  color: white;\n}\n::-moz-selection {\n  background-color: #ff7675;\n  color: white;\n}", result: "Page pe koi bhi text select karega toh pink background ke saath white text hoga" }
  ],
  syntax: [
    "selector::pseudo-element { property: value; }",
    "p::first-letter { font-size: 2em; font-weight: bold; }",
    ".card::before { content: ''; display: block; width: 100%; height: 4px; background: blue; }"
  ],
  diagram: [
    "┌─────────────────────────────────────────────────────────────┐",
    "│                   CSS PSEUDO-ELEMENTS                       │",
    "│                                                             │",
    "│  ┌─────────────────────────────────────────────────────┐    │",
    "│  │  <div class='box'>                                  │    │",
    "│  │    ::before  →  [CONTENT]  ←  Actual Content  →  ::after│",
    "│  └─────────────────────────────────────────────────────┘    │",
    "│                                                             │",
    "│  ::first-letter  →  P (aragraph)                           │",
    "│  ::first-line    →  First line of text                     │",
    "│  ::selection     →  Highlighted text                      │",
    "│  ::placeholder   →  Input hint text                       │",
    "│  ::marker        →  List bullet/number                     │",
    "└─────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Tooltip with ::before and ::after", language: "css", code: ".tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  color: #3498db;\n  border-bottom: 1px dashed #3498db;\n}\n\n.tooltip:hover::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  background: #2c3e50;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 14px;\n  white-space: nowrap;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n}\n\n.tooltip:hover::before {\n  content: '';\n  position: absolute;\n  border: 6px solid transparent;\n  border-top-color: #2c3e50;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: -12px;\n  z-index: 10;\n}" },
    { title: "Animated Gradient Border with Pseudo-elements", language: "css", code: ".gradient-card {\n  position: relative;\n  width: 300px;\n  padding: 30px;\n  background: white;\n  border-radius: 12px;\n  z-index: 1;\n}\n\n.gradient-card::before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  right: -3px;\n  bottom: -3px;\n  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b);\n  background-size: 400%;\n  border-radius: 14px;\n  z-index: -1;\n  animation: gradientBorder 3s ease infinite;\n}\n\n@keyframes gradientBorder {\n  0%, 100% { background-position: 0% 50%; }\n  50% { background-position: 100% 50%; }\n}" },
    { title: "Drop Cap and First Line Styling", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .story {\n      font-family: 'Georgia', serif;\n      line-height: 1.8;\n      color: #333;\n    }\n    .story::first-letter {\n      font-size: 4em;\n      float: left;\n      margin-right: 10px;\n      color: #8e44ad;\n      font-weight: bold;\n      line-height: 1;\n    }\n    .story::first-line {\n      font-weight: bold;\n      color: #2c3e50;\n      font-variant: small-caps;\n    }\n  </style>\n</head>\n<body>\n  <p class=\"story\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n  </p>\n</body>\n</html>" }
  ],
  output: [
    "Tooltip hover karne par text ke upar dark tooltip box aur arrow dikhega",
    "Card ke around animated gradient border dikhega jo rotate hota rahega",
    "Paragraph mein first letter bada purple drop cap hoga aur first line bold small-caps mein"
  ],
  commonMistakes: [
    "content property bhoolna — ::before aur ::after ke liye content property zaroori hai, agar content: '' bhi nahi doge toh kuch nahi dikhega",
    "Single colon (:) use karna pseudo-elements ke liye — CSS3 mein pseudo-elements double colon (::) se likhe jaate hain taaki pseudo-classes se differentiate ho",
    "::before aur ::after ka position aur z-index sahi se na dena — yeh stacking context mein issues create karte hain aur elements overlap ho sakte hain",
    "::first-letter ko inline elements pe lagane ki koshish — ::first-letter sirf block-level elements pe kaam karta hai",
    "::placeholder ko complex styling dena — ::placeholder limited properties support karta hai (mostly text-related properties)"
  ],
  bestPractices: [
    "content property mein hamesha quotes ka dhyan rakho — agar image ya empty string hai toh '' use karo, text ho toh \"text\"",
    "::before aur ::after ko decorative purposes ke liye use karo, important content ke liye nahi — yeh screen readers ignore kar sakte hain",
    "Multiple pseudo-elements stacking ke liye z-index ka sahi use karo — ::before z-index -1, content 0, ::after 1 rakho",
    "Accessibility ka khayal rakho — tooltips aur informative content ke liye aria-label ya screen reader alternatives do",
    "Pseudo-elements pe transitions aur animations bhi laga sakte ho — isse interactive effects create ho sakte hain bina extra HTML ke"
  ],
  tips: [
    "content: attr(data-attribute) se kisi bhi HTML attribute ki value pseudo-element mein dikha sakte ho",
    "Pseudo-elements pe background-image, gradients, aur icons (font-awesome, unicode) sab use kar sakte ho",
    "::selection ko document level pe define karo (bina selector ke) taaki poore page ka selection style ho"
  ],
  practice: [
    "Ek article page banaye jisme ::first-letter se drop cap ho aur ::first-line styled ho",
    "Custom styled list banaye jisme ::marker se emoji bullets ho aur ::before se extra decorative elements ho"
  ],
  exercise: {
    instruction: "Create an article preview card with a gradient top border using ::before, a custom tooltip on the read more link using ::after, and styled selection color",
    hint: "Use ::before for the top gradient border, ::after with attr(data-tooltip) for tooltip, and ::selection for highlighted text color",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: 'Segoe UI', sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-height: 100vh;\n      background: #f5f6fa;\n    }\n    .card {\n      position: relative;\n      width: 380px;\n      background: white;\n      border-radius: 12px;\n      padding: 30px;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n    }\n    /* Add ::before for gradient top border here */\n    .card h2 {\n      color: #2c3e50;\n      margin-bottom: 15px;\n    }\n    .card p {\n      color: #666;\n      line-height: 1.6;\n      margin-bottom: 20px;\n    }\n    .read-more {\n      position: relative;\n      color: #3498db;\n      text-decoration: none;\n      font-weight: 500;\n      cursor: pointer;\n    }\n    /* Add ::after tooltip on .read-more hover here */\n    /* Add ::selection styles here */\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Exploring the Cosmos</h2>\n    <p>\n      The universe is vast and mysterious, filled with billions of galaxies\n      each containing millions of stars waiting to be discovered.\n    </p>\n    <a href=\"#\" class=\"read-more\" data-tooltip=\"Read full article\">Read More →</a>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "Pseudo-elements CSS mein kaise likhe jaate hain?", options: ["Single colon se (:before)", "Double colon se (::before)", "Dot se (.before)", "Hash se (#before)"], answer: 1 },
    { question: "::before aur ::after ke liye kaun si property mandatory hai?", options: ["display", "position", "content", "width"], answer: 2 },
    { question: "::first-letter kis type ke element pe kaam karta hai?", options: ["Inline elements", "Block-level elements", "Both inline and block", "Sirf images"], answer: 1 },
    { question: "::selection pseudo-element kya karta hai?", options: ["Element ko select karta hai", "User ke selected text ko style karta hai", "List items select karta hai", "First element select karta hai"], answer: 1 },
    { question: "::marker pseudo-element kis element ke liye use hota hai?", options: ["<div> elements", "<p> elements", "<li> elements", "<span> elements"], answer: 2 }
  ],
  interview: [
    { question: "Pseudo-classes aur pseudo-elements mein kya antar hai?", answer: "Pseudo-classes (:) element ki state ko represent karti hain jaise :hover ya :focus - yeh element ki hi baat karti hain. Pseudo-elements (::) element ke specific part ko target karti hain jaise ::first-letter ya ::before - yeh completely naya virtual element create kar sakti hain jo DOM mein nahi hota." },
    { question: "::before aur ::after pseudo-elements ke practical use cases kya hain?", answer: "Multiple use cases hain: decorative elements (icons, quotes, borders, gradients), tooltips, custom bullets aur numbering, clearfix hack, overlay effects, ribbons aur badges, animated underlines, aur custom shapes jo pure CSS se bane hain." },
    { question: "content property mein kaun kaun si values de sakte hain?", answer: "content property mein yeh values de sakte hain: string (\"text\"), attribute value (attr(href)), image (url(image.jpg)), counter (counter(myCounter)), open-quote/close-quote, aur empty string ('') for decorative elements." }
  ],
  assignment: [
    "Ek blog post layout banaye jisme ::first-letter drop cap, ::first-line styling, aur blockquote mein ::before/::after quotes ho",
    "Custom tooltip component banaye jisme data attribute se tooltip text aaye aur arrow ::before se render ho",
    "Ek pricing card banaye jisme ::before se popular badge ya ribbon effect ho aur ::after se gradient overlay ho"
  ],
  resources: [
    { title: "MDN Pseudo-elements Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" },
    { title: "CSS-Tricks - A Whole Bunch of Pseudo-element Examples", url: "https://css-tricks.com/pseudo-element-roundup/" },
    { title: "W3Schools CSS Pseudo-elements", url: "https://www.w3schools.com/css/css_pseudo_elements.asp" }
  ],
  summary: "CSS pseudo-elements double colon (::) se likhe jaate hain aur element ke specific part ko target karte hain. ::before aur ::after sabse zyada use hote hain - yeh content property ke saath naya virtual content create karte hain jo DOM mein nahi dikhta. ::first-letter aur ::first-line typography effects ke liye use hote hain jaise drop caps. ::selection selected text ka color/style change karta hai, ::placeholder input fields ke placeholder text ko style karta hai, aur ::marker list items ke bullets ko custom banata hai. Pseudo-elements pure CSS se decorative effects banane mein madad karte hain bina extra HTML likhe."
};

export default lesson;
