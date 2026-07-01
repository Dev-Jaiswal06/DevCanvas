const lesson = {
  id: 6,
  slug: "margins-padding",
  title: "CSS Margins & Padding",
  description: "Learn about CSS margins and padding - individual properties, shorthand, margin collapse, and box model intro",
  difficulty: "Beginner",
  duration: "40 min",
  heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
  tags: ["CSS", "Margins", "Padding", "Spacing", "Box Model"],
  theory: [
    "Margin aur padding CSS box model ke do important parts hain jo spacing control karte hain",
    "Margin: element ke BAHAR ka space - element aur doosre elements ke beech distance create karta hai",
    "Padding: element ke ANDAR ka space - content aur border ke beech gap create karta hai",
    "Margin transparent hota hai - background color/image uske peeche se dikhta nahi",
    "Padding element ke background color/image ko include karta hai - background padding tak hota hai",
    "Dono ke liye 4 directions hain: top, right, bottom, left",
    "Shorthand 4 values: top right bottom left (clockwise) - margin: 10px 20px 30px 40px;",
    "Shorthand 3 values: top (left+right) bottom - margin: 10px 20px 30px;",
    "Shorthand 2 values: (top+bottom) (left+right) - margin: 10px 20px;",
    "Shorthand 1 value: sabhi sides same - margin: 10px;",
    "Margin collapse: vertically adjacent margins collapse (merge) ho jate hain - do margins mein se jo bada hota hai woh use hota hai",
    "Auto margin: margin: 0 auto se block element ko horizontally center kar sakte hain"
  ],
  examples: [
    { title: "Margin vs Padding", description: "Visual difference between margin and padding", code: "div {\n  margin: 20px;  /* element ke bahar gap */\n  padding: 15px; /* element ke andar gap */\n  background: #ddd;\n}", result: "20px space outside div (margin), 15px inside div between content and border (padding)" },
    { title: "Margin Shorthand", description: "Using shorthand for different margin values", code: "h1 { margin: 10px 20px; } /* top-bottom 10px, left-right 20px */\np { margin: 5px 10px 15px; } /* top 5px, left-right 10px, bottom 15px */", result: "h1 gets 10px vertical and 20px horizontal margins, p gets different margins on each side" },
    { title: "Centering with Margin Auto", description: "Centering a block element horizontally", code: ".container {\n  width: 80%;\n  margin: 0 auto;\n  background: #f0f0f0;\n}", result: "Container is 80% wide and centered horizontally on the page" }
  ],
  syntax: [
    "margin: 10px;",
    "margin: 10px 20px;",
    "margin: 10px 20px 30px 40px;",
    "margin: 0 auto;",
    "padding: 15px;",
    "padding: 10px 20px 30px 40px;",
    "margin-top: 10px;",
    "padding-left: 20px;"
  ],
  diagram: [
    "┌─────────────────────────────────────────────────────────────┐",
    "│                MARGIN vs PADDING VISUAL                     │",
    "│                                                             │",
    "│  ← Margin (outside) →                                       │",
    "│  ┌─────────────────────────────────────────────────────┐    │",
    "│  │  ← Padding (inside) →                               │    │",
    "│  │  ┌──────────────────────────────────────────────┐   │    │",
    "│  │  │                                              │   │    │",
    "│  │  │             CONTENT AREA                     │   │    │",
    "│  │  │                                              │   │    │",
    "│  │  └──────────────────────────────────────────────┘   │    │",
    "│  │                                                     │    │",
    "│  └─────────────────────────────────────────────────────┘    │",
    "│                                                             │",
    "│  Margin:  transparent space outside border                  │",
    "│  Padding: space inside border, has background color         │",
    "└─────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Margin Properties", language: "css", code: "/* Individual margin properties */\n.element {\n  margin-top: 10px;\n  margin-right: 15px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n}\n\n/* Margin shorthand - 4 values (clockwork: top right bottom left) */\n.shorthand-4 {\n  margin: 10px 20px 30px 40px;\n  /* top: 10px, right: 20px, bottom: 30px, left: 40px */\n}\n\n/* Margin shorthand - 3 values */\n.shorthand-3 {\n  margin: 10px 20px 30px;\n  /* top: 10px, left+right: 20px, bottom: 30px */\n}\n\n/* Margin shorthand - 2 values */\n.shorthand-2 {\n  margin: 10px 20px;\n  /* top+bottom: 10px, left+right: 20px */\n}\n\n/* Margin shorthand - 1 value */\n.shorthand-1 {\n  margin: 20px;\n  /* all sides: 20px */\n}\n\n/* Center block element horizontally */\n.centered {\n  width: 80%;\n  margin: 0 auto;\n}\n\n/* Negative margin - pulls element in opposite direction */\n.negative-margin {\n  margin-top: -20px;\n}" },
    { title: "Padding Properties", language: "css", code: "/* Individual padding properties */\n.element {\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  padding-left: 20px;\n}\n\n/* Padding shorthand - 4 values */\n.shorthand-4 {\n  padding: 10px 20px 30px 40px;\n}\n\n/* Padding shorthand - 3 values */\n.shorthand-3 {\n  padding: 10px 20px 30px;\n}\n\n/* Padding shorthand - 2 values */\n.shorthand-2 {\n  padding: 20px 40px;\n}\n\n/* Padding shorthand - 1 value */\n.shorthand-1 {\n  padding: 15px;\n}\n\n/* Practical card example */\n.card {\n  background: white;\n  border: 1px solid #ddd;\n  padding: 30px;  /* space inside card */\n  margin: 20px;   /* space outside card */\n  border-radius: 8px;\n}\n\n.card h2 {\n  margin-bottom: 15px;  /* space below heading */\n}\n\n.card p {\n  line-height: 1.6;\n  margin: 0;  /* remove default paragraph margins */\n}" },
    { title: "HTML Spacing Demo", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: Arial;\n      background: #f5f5f5;\n      padding: 30px;\n    }\n    .container {\n      max-width: 600px;\n      margin: 0 auto;\n    }\n    .card {\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n      margin-bottom: 20px;\n      padding: 25px;\n    }\n    .card h3 {\n      color: #2c3e50;\n      margin-bottom: 10px;\n      padding-bottom: 8px;\n      border-bottom: 2px solid #3498db;\n    }\n    .card p {\n      color: #555;\n      line-height: 1.6;\n    }\n    .card p + p {\n      margin-top: 10px;\n    }\n    .btn-group {\n      margin-top: 20px;\n      padding-top: 15px;\n      border-top: 1px solid #eee;\n    }\n    .btn {\n      display: inline-block;\n      padding: 10px 25px;\n      margin-right: 10px;\n      background: #3498db;\n      color: white;\n      text-decoration: none;\n      border-radius: 5px;\n    }\n    .btn:last-child {\n      margin-right: 0;\n    }\n    .btn-outline {\n      background: white;\n      color: #3498db;\n      border: 2px solid #3498db;\n      padding: 8px 23px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <div class=\"card\">\n      <h3>Understanding Spacing</h3>\n      <p>This card has 25px padding inside, giving the content breathing room.</p>\n      <p>The card also has 20px margin-bottom, creating space between cards.</p>\n      <div class=\"btn-group\">\n        <a href=\"#\" class=\"btn\">Primary</a>\n        <a href=\"#\" class=\"btn btn-outline\">Secondary</a>\n      </div>\n    </div>\n    <div class=\"card\">\n      <h3>Another Card</h3>\n      <p>Notice the consistent spacing between these two cards.</p>\n      <p>That's the margin-bottom of the first card creating the gap.</p>\n    </div>\n  </div>\n</body>\n</html>" }
  ],
  output: [
    "First card has 25px padding inside - text is away from card edges",
    "20px margin-bottom creates gap between first and second card",
    "Button group has 20px margin-top from paragraph above",
    "Buttons have 10px 25px padding making them nicely sized with space inside",
    "Buttons have margin-right: 10px creating horizontal gap between them",
    "Container uses margin: 0 auto to center itself horizontally"
  ],
  commonMistakes: [
    "Margin aur padding mein confuse hona - margin bahar ka space, padding andar ka space",
    "Margin collapse ke baare mein na jaanna - vertically adjacent margins collapse hote hain, do margins add nahi hote",
    "Padding sirf left-right dekar top-bottom bhool jana - jaise padding: 0 20px (top-bottom zero ho jayega)",
    "Margin: auto sirf horizontally kaam karta hai, vertically nahi - vertical centering ke liye flexbox ya grid chahiye",
    "Inline elements pe margin-top/margin-bottom kaam nahi karta - sirf block ya inline-block elements pe kaam karta hai"
  ],
  bestPractices: [
    "Spacing ke liye consistent values use karo - jaise 4px, 8px, 12px, 16px, 24px, 32px ka scale banao",
    "Vertical margin collapse ka advantage lo - extra spacing avoid karne ke liye",
    "Padding instead of margin use karo jab background color chahi ho element ke andar space tak",
    "Margin: 0 se default browser margins hatao aur khud spacing define karo",
    "Shorthand properties seekho - 1-2-4 values wali shorthand se code clean rehta hai"
  ],
  tips: [
    "Margin: 0 auto; sirf block elements ko center karta hai jinki width defined ho",
    "Negative margin use karke interesting overlapping effects bana sakte ho",
    "Browser DevTools mein element inspect karke margin aur padding ko visually dekh sakte ho - highlighted areas dikhte hain"
  ],
  practice: [
    "3 cards ka ek row banao jisme proper margin (between cards) aur padding (andhar ka space) ho",
    "Ek page layout banao jisme header, content, sidebar, aur footer ho - har element ke beech margin use karo"
  ],
  exercise: {
    instruction: "Create a blog post page with proper spacing - article content with padding, section margins, button spacing, and a centered container",
    hint: "Use margin: 0 auto for container centering, padding for content breathing room, margin-bottom for vertical rhythm, and margin collapse understanding",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    body {\n      font-family: 'Georgia', serif;\n      background: #fafafa;\n      color: #333;\n      line-height: 1.8;\n    }\n    .container {\n      max-width: 800px;\n      margin: 0 auto;\n      padding: 40px 20px;\n    }\n    .post-header {\n      margin-bottom: 40px;\n      padding-bottom: 20px;\n      border-bottom: 3px solid #2c3e50;\n    }\n    .post-header h1 {\n      font-size: 36px;\n      color: #2c3e50;\n      margin-bottom: 10px;\n    }\n    .post-meta {\n      color: #888;\n      font-size: 14px;\n    }\n    .post-meta span {\n      margin-right: 20px;\n    }\n    .post-content p {\n      margin-bottom: 20px;\n      font-size: 18px;\n    }\n    .post-content h2 {\n      font-size: 28px;\n      color: #2c3e50;\n      margin-top: 40px;\n      margin-bottom: 15px;\n      padding-bottom: 8px;\n      border-bottom: 1px solid #eee;\n    }\n    .post-content h3 {\n      font-size: 22px;\n      color: #34495e;\n      margin-top: 30px;\n      margin-bottom: 10px;\n    }\n    .post-content blockquote {\n      margin: 30px 0;\n      padding: 20px 30px;\n      background: #f0f0f0;\n      border-left: 4px solid #3498db;\n      font-style: italic;\n      color: #555;\n    }\n    .post-content ul, .post-content ol {\n      margin: 15px 0;\n      padding-left: 40px;\n    }\n    .post-content li {\n      margin-bottom: 8px;\n    }\n    .post-footer {\n      margin-top: 50px;\n      padding-top: 30px;\n      border-top: 1px solid #ddd;\n    }\n    .tags {\n      margin-bottom: 20px;\n    }\n    .tag {\n      display: inline-block;\n      padding: 5px 15px;\n      margin-right: 8px;\n      margin-bottom: 8px;\n      background: #ecf0f1;\n      border-radius: 20px;\n      font-size: 13px;\n      color: #555;\n    }\n    .share-btn {\n      display: inline-block;\n      padding: 10px 25px;\n      margin-right: 10px;\n      background: #3498db;\n      color: white;\n      text-decoration: none;\n      border-radius: 5px;\n      font-size: 14px;\n    }\n    .share-btn.twitter {\n      background: #1da1f2;\n    }\n    .share-btn.facebook {\n      background: #4267b2;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <article>\n      <div class=\"post-header\">\n        <h1>The Art of CSS Spacing</h1>\n        <div class=\"post-meta\">\n          <span>By John Doe</span>\n          <span>June 15, 2026</span>\n          <span>5 min read</span>\n        </div>\n      </div>\n      <div class=\"post-content\">\n        <p>Spacing is one of the most important aspects of web design. Good spacing makes content readable and visually appealing. In CSS, we control spacing primarily through margins and padding.</p>\n\n        <h2>Understanding Margins</h2>\n        <p>Margins create space outside elements. They push other elements away and create breathing room between different components on the page.</p>\n\n        <blockquote>\"White space is to be regarded as an active element, not a passive background.\" — Jan Tschichold</blockquote>\n\n        <h3>Margin Collapse</h3>\n        <p>When two vertical margins meet, they collapse into one. The larger margin wins. This is only for vertical (top/bottom) margins, not horizontal.</p>\n\n        <h2>Understanding Padding</h2>\n        <p>Padding creates space inside elements. It pushes the content away from the border and gives text room to breathe within its container.</p>\n\n        <ul>\n          <li>Padding has background color, margin is transparent</li>\n          <li>Padding adds to element size (unless box-sizing: border-box)</li>\n          <li>Both accept shorthand values for multiple sides</li>\n        </ul>\n      </div>\n      <div class=\"post-footer\">\n        <div class=\"tags\">\n          <span class=\"tag\">CSS</span>\n          <span class=\"tag\">Spacing</span>\n          <span class=\"tag\">Web Design</span>\n          <span class=\"tag\">Typography</span>\n        </div>\n        <div>\n          <a href=\"#\" class=\"share-btn twitter\">Share on Twitter</a>\n          <a href=\"#\" class=\"share-btn facebook\">Share on Facebook</a>\n        </div>\n      </div>\n    </article>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "Margin element ke kis side ka space hota hai?", options: ["Andar ka space", "Bahar ka space", "Border ka space", "Content ka space"], answer: 1 },
    { question: "Padding element ke kis side ka space hota hai?", options: ["Bahar ka space", "Content aur border ke beech ka space", "Element ke bahar ka space", "Sirf left side ka space"], answer: 1 },
    { question: "Margin: 10px 20px; ka matlab kya hai?", options: ["top=10px, bottom=20px", "top+bottom=10px, left+right=20px", "top=10px, right=20px, bottom=10px, left=20px", "sabhi sides 10px aur 20px"], answer: 1 },
    { question: "Element ko horizontally center karne ke liye kaun sa margin value use karte hain?", options: ["margin: center", "margin: 0 auto", "margin: auto 0", "margin: middle"], answer: 1 },
    { question: "Margin collapse kya hota hai?", options: ["Margin gayab ho jata hai", "Vertical margins merge ho jate hain", "Margin double ho jata hai", "Margin color change ho jata hai"], answer: 1 }
  ],
  interview: [
    { question: "CSS mein margin aur padding mein kya antar hai?", answer: "Margin element ke bahar ka space hai - ye transparent hota hai aur doosre elements ke saath gap create karta hai. Padding element ke andar ka space hai - ye background color/image ko include karta hai aur content ko border se door rakhta hai. Margin collapse ho sakta hai (vertical), padding nahi. Margin negative values le sakta hai, padding nahi." },
    { question: "Margin shorthand ka order kya hai?", answer: "Margin shorthand 4 values clockwise hoti hai: top, right, bottom, left. 3 values: top, left+right, bottom. 2 values: top+bottom, left+right. 1 value: sabhi sides same. Example: margin: 10px 20px 30px 40px means top=10px, right=20px, bottom=30px, left=40px." },
    { question: "Margin collapse kab aur kyun hota hai?", answer: "Margin collapse sirf vertical margins (top aur bottom) ke saath hota hai, horizontal margins nahi. Jab do block elements vertically adjacent hote hain, unke margins collapse ho kar ek single margin ban jaate hain jiska value dono mein se maximum hota hai. Yeh CSS specification ka intentional part hai taaki headings aur paragraphs ke beech consistent spacing bani rahe." }
  ],
  assignment: [
    "Create a pricing table with 3 pricing cards that have proper spacing using margin and padding to create visual hierarchy",
    "Build a dashboard layout with sidebar and main content area using margins for spacing between sections"
  ],
  resources: [
    { title: "MDN Margin Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin" },
    { title: "MDN Padding Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding" },
    { title: "CSS Margin Collapse Explained", url: "https://www.joshwcomeau.com/css/rules-of-margin-collapse/" }
  ],
  summary: "Margin aur padding CSS spacing ke do main properties hain. Margin element ke bahar space create karta hai - ye transparent hota hai aur doosre elements se gap banata hai. Padding element ke andar space create karta hai - ye background include karta hai aur content ko border se dur rakhta hai. Dono ke shorthand 1-4 values leti hain. Vertically adjacent margins collapse (merge) ho sakte hain. Margin: 0 auto se element horizontally center hota hai."
};

export default lesson;
