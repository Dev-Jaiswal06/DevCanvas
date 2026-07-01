const lesson = {
  id: 18,
  slug: "flexbox",
  title: "CSS Flexbox",
  description: "One-dimensional layout system: flex container, flex items, alignment, and distribution",
  difficulty: "Intermediate",
  duration: "50 min",
  heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910auj7?w=800",
  tags: ["CSS", "Flexbox", "Layout", "Responsive"],
  theory: [
    "Flexbox (Flexible Box Layout) ek one-dimensional layout system hai jo items ko row ya column me distribute karne ke liye hai. Parent (flex container) aur children (flex items) par kaam karta hai.",
    "Display:flex se flex container banta hai. Iske saare direct children automatically flex items ban jaate hain. Ye block aur inline dono tarah ke elements ko flex item bana deta hai.",
    "Flex-direction main axis decide karta hai: row (default, left-to-right), row-reverse, column (top-to-bottom), column-reverse. Isse main axis aur cross axis change ho jaate hain.",
    "Justify-content — main axis par alignment. Values: flex-start (default), flex-end, center, space-between, space-around, space-evenly. Items ko distribute karne ke liye.",
    "Align-items — cross axis par alignment. Values: stretch (default), flex-start, flex-end, center, baseline. Stretch se items container ki poori height le lete hain.",
    "Flex-wrap — items ko next line wrap karne ke liye. Default nowrap hai (sab ek line me). Wrap aur wrap-reverse se responsive layout banta hai.",
    "Flex-grow — item kitni extra space le sakta hai. 0 matlab nahi lega, 1 matlab equally share karega. Ratio-based distribution ke liye different values.",
    "Flex-shrink — jab space kam ho to item kitna shrink ho sakta hai. Default 1 (shrink allowed). 0 matlab shrink nahi hoga.",
    "Flex-basis — item ki initial size (main axis par) define karta hai. Auto ya specific value (200px). Grow/shrink ka starting point.",
    "Order — items ka visual order change karne ke liye. Default 0, lower value pehle aata hai. HTML order change kiye bina layout change kar sakte ho.",
    "Align-self — individual flex item ka cross-axis alignment override. Flex container ke align-items ko override karta hai.",
    "Gap — flex items ke beech spacing. Row-gap, column-gap, ya shorthand gap. Padding aur margin ke alternative se clean code."
  ],
  examples: [
    {
      title: "Basic Flex Container",
      description: "Display:flex ka simple example — items automatically row me aa jaate hain.",
      code: ".container { display: flex; gap: 10px; }\n.item { background: blue; color: white; padding: 20px; }",
      result: "Teeno items ek row mein aa gaye with 10px gap."
    },
    {
      title: "Center Everything",
      description: "Flexbox se perfect centering — both axes par center.",
      code: ".container { display: flex; justify-content: center; align-items: center; height: 200px; }",
      result: "Item bilkul center mein hai — horizontal aur vertical dono."
    },
    {
      title: "Space Between Navigation",
      description: "Justify-content: space-between se navbar items spread.",
      code: "nav { display: flex; justify-content: space-between; }\n.left { display: flex; gap: 20px; }",
      result: "Logo left par, links left par, right items right par, beech mein equal space."
    }
  ],
  syntax: [
    { property: "display", values: "flex | inline-flex", example: "display: flex;" },
    { property: "flex-direction", values: "row | row-reverse | column | column-reverse", example: "flex-direction: column;" },
    { property: "justify-content", values: "flex-start | flex-end | center | space-between | space-around | space-evenly", example: "justify-content: center;" },
    { property: "align-items", values: "stretch | flex-start | flex-end | center | baseline", example: "align-items: center;" },
    { property: "flex-wrap", values: "nowrap | wrap | wrap-reverse", example: "flex-wrap: wrap;" },
    { property: "flex", values: "<grow> <shrink> <basis>", example: "flex: 1 0 200px;" },
    { property: "gap", values: "<row-gap> <column-gap>", example: "gap: 16px;" }
  ],
  diagram: [
    "FLEXBOX AXES:",
    "",
    "         Main Axis (flex-direction: row →)        ",
    "  ┌──────┬──────┬──────┬──────┬──────┬──────┐  ",
    "  │      │      │      │      │      │      │  ",
    "  │      │      │      │      │      │      │  ",
    "  └──────┴──────┴──────┴──────┴──────┴──────┘  ",
    "  ↑                                        ↑  ",
    "  └───────── Cross Axis ───────────────────┘  ",
    "",
    "JUSTIFY-CONTENT:",
    "  flex-start:   [A][B][C]                   ",
    "  center:         [A][B][C]                 ",
    "  flex-end:                 [A][B][C]        ",
    "  space-between: [A]    [B]    [C]         ",
    "  space-evenly:   [A]  [B]  [C]           ",
    "",
    "FLEX ITEMS (grow/shrink):",
    "  flex: 1; → [ === A === ][ === B === ][ === C === ]"
  ],
  code: [
    {
      title: "Flexbox Navigation Bar",
      language: "html",
      code: "<nav class=\"navbar\">\n  <div class=\"logo\">MyLogo</div>\n  <ul class=\"nav-links\">\n    <li><a href=\"#\">Home</a></li>\n    <li><a href=\"#\">About</a></li>\n    <li><a href=\"#\">Services</a></li>\n    <li><a href=\"#\">Contact</a></li>\n  </ul>\n  <button class=\"btn\">Sign Up</button>\n</nav>\n\n<style>\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: #2c3e50;\n  color: white;\n  font-family: system-ui, sans-serif;\n}\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.nav-links {\n  display: flex;\n  gap: 2rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-links a {\n  color: white;\n  text-decoration: none;\n}\n.btn {\n  background: #e74c3c;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\n</style>"
    },
    {
      title: "Flexbox Card Layout with Wrap",
      language: "html",
      code: "<div class=\"card-grid\">\n  <div class=\"card\">\n    <h3>Card 1</h3>\n    <p>Flexbox makes layout easy</p>\n  </div>\n  <div class=\"card\">\n    <h3>Card 2</h3>\n    <p>Responsive by default</p>\n  </div>\n  <div class=\"card\">\n    <h3>Card 3</h3>\n    <p>No more float hacks</p>\n  </div>\n  <div class=\"card\">\n    <h3>Card 4</h3>\n    <p>Works with any content</p>\n  </div>\n</div>\n\n<style>\n.card-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 20px;\n  font-family: system-ui, sans-serif;\n}\n.card {\n  flex: 1 1 250px;\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n.card h3 {\n  margin: 0 0 10px;\n  color: #2c3e50;\n}\n.card p {\n  margin: 0;\n  color: #666;\n}\n</style>"
    }
  ],
  output: [
    "Navbar: logo left, links center, button right — flex justify-content:space-between",
    "Card grid: responsive layout with flex-wrap — 4 cards adjust according to screen size",
    "Flex: 1 1 250px — har card minimum 250px, extra space equally divide"
  ],
  commonMistakes: [
    "Flex-direction:column me justify-content aur align-items ka axis confuse ho jaata hai — yaad rakho main axis direction ke saath badalta hai",
    "Flex container ki height define na karna — align-items:center kaam nahi karega",
    "Flex:1 ko shorthand samajhna lekin flex-basis ka effect na jaanna",
    "Gap ki jagah margin use karna — gap flex me zyada clean aur predictable hai",
    "Flex-wrap:wrap na laga kar responsive na banana — items screen par overflow ho jayenge"
  ],
  bestPractices: [
    "One-dimensional layouts ke liye Flexbox use karo, two-dimensional ke liye Grid",
    "Responsive navigation ke liye justify-content:space-between aur gap use karo",
    "Flex items ki min-width set karo (flex-basis ya min-width) se wrap properly hoga",
    "Center karne ke liye justify-content:center + align-items:center — classic combo",
    "Gap property use karo margin ki jagah — clean aur maintainable code"
  ],
  tips: [
    "Flexbox me margin:auto bhi kaam karta hai — last item ko right push karne ke liye margin-left:auto use karo",
    "Inline-flex se flex container inline element ki tarah behave karta hai",
    "Align-self: stretch se flex items cross axis ki full length le sakte hain"
  ],
  practice: [
    "Ek profile card banaiye jisme image, name, bio vertically stacked ho (flex-direction:column)",
    "Ek responsive gallery banaiye jisme images flex-wrap se adjust ho"
  ],
  exercise: {
    instruction: "Ek responsive pricing card section banaiye. 3 cards horizontally, har card mein plan name, price, features list, aur CTA button ho. Cards ek jaisi height ki honi chahiye aur screen chhoti ho to wrap ho jaaye.",
    hint: "Container par display:flex, flex-wrap:wrap, justify-content:center. Har card par flex:1 1 300px aur align-self:stretch (default) se equal height. Features list flex-direction:column se stack karo.",
    starterCode: "<div class=\"pricing\">\n  <div class=\"plan\">\n    <h2>Basic</h2>\n    <p class=\"price\">$9/mo</p>\n    <ul>\n      <li>10GB Storage</li>\n      <li>1 User</li>\n      <li>Basic Support</li>\n    </ul>\n    <button>Choose Plan</button>\n  </div>\n  <div class=\"plan popular\">\n    <h2>Pro</h2>\n    <p class=\"price\">$29/mo</p>\n    <ul>\n      <li>100GB Storage</li>\n      <li>5 Users</li>\n      <li>Priority Support</li>\n      <li>Analytics</li>\n    </ul>\n    <button>Choose Plan</button>\n  </div>\n  <div class=\"plan\">\n    <h2>Enterprise</h2>\n    <p class=\"price\">$99/mo</p>\n    <ul>\n      <li>Unlimited Storage</li>\n      <li>Unlimited Users</li>\n      <li>24/7 Support</li>\n    </ul>\n    <button>Choose Plan</button>\n  </div>\n</div>\n\n<style>\n.pricing {\n  /* Add flexbox styles */\n}\n</style>"
  },
  quiz: [
    {
      question: "Flex-direction:column hone par justify-content kaunsa axis control karta hai?",
      options: ["Horizontal (x-axis)", "Vertical (y-axis)", "Cross axis", "Z-axis"],
      answer: 1
    },
    {
      question: "Space-between aur space-evenly me kya antar hai?",
      options: ["Kuch nahi", "Space-between edges par gap nahi rakhta, space-evenly rakhta hai", "Space-evenly sirf column me kaam karta hai", "Space-between zyada gap deta hai"],
      answer: 1
    },
    {
      question: "Flex: 1 0 200px ka kya matlab hai?",
      options: ["Grow:1, Shrink:0, Basis:200px", "Grow:0, Shrink:1, Basis:200px", "Grow:1, Shrink:1, Basis:200px", "Grow:200, Shrink:1, Basis:0"],
      answer: 0
    },
    {
      question: "Kya property flex items ka visual order change karti hai?",
      options: ["z-index", "flex-grow", "order", "align-self"],
      answer: 2
    },
    {
      question: "Align-self kaunsa property override karta hai?",
      options: ["justify-content", "align-items", "flex-direction", "flex-wrap"],
      answer: 1
    }
  ],
  interview: [
    {
      question: "Flexbox kaise kaam karta hai? Main axis aur cross axis explain karo.",
      answer: "Flexbox one-dimensional layout system hai. Flex-container (display:flex) ke andar flex-items hote hain. Flex-direction main axis decide karta hai (default row). Justify-content main axis par alignment karta hai, align-items cross axis par. Flex-wrap se items wrap ho sakte hain."
    },
    {
      question: "Flex-grow, flex-shrink, flex-basis ka kya use hai?",
      answer: "Flex-grow item ko extra space allocate karta hai (ratio-based). Flex-shrink space kam hone par item ka shrink behavior control karta hai. Flex-basis item ki starting size define karta hai. Shorthand 'flex: grow shrink basis' use karte hain."
    },
    {
      question: "Flexbox aur CSS Grid me kya difference hai?",
      answer: "Flexbox one-dimensional (row ya column) layout ke liye hai. Grid two-dimensional (rows aur columns simultaneously) layout ke liye hai. Flexbox content-first approach hai, Grid layout-first approach hai."
    }
  ],
  assignment: [
    "Ek complete responsive navbar banaiye with logo, links, aur CTA button using flexbox",
    "Ek flexbox-based card grid banaiye jo 1, 2, 3, ya 4 columns me adjust ho",
    "Ek chat message component banaiye jisme avatar left, message content right, aur timestamp bottom-right ho"
  ],
  resources: [
    { title: "CSS-Tricks Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
    { title: "MDN - Flexbox", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox" },
    { title: "Flexbox Froggy Game", url: "https://flexboxfroggy.com/" }
  ],
  summary: "Flexbox ek powerful one-dimensional layout system hai. Parent (flex container) ko display:flex se banate hain. Flex-direction main axis set karta hai. Justify-content main axis alignment, align-items cross axis alignment ke liye. Flex-wrap se responsive wrap hota hai. Flex items par flex-grow (space lena), flex-shrink (space chhodna), flex-basis (starting size) lagate hain. Order se visual order change hota hai, align-sefl individual alignment override karta hai. Gap flex items ke beech spacing ke liye clean solution hai. Flexbox complex layouts ko simple aur predictable banata hai."
};

export default lesson;
