const lesson = {
  id: 15,
  slug: "positions",
  title: "CSS Positioning",
  description: "Master element positioning: static, relative, absolute, fixed, and sticky",
  difficulty: "Intermediate",
  duration: "40 min",
  heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  tags: ["CSS", "Positioning", "Layout"],
  theory: [
    "Position property kisi bhi element ko document me exact jagah par set karne ke liye use hoti hai. Iske 5 main values hain: static, relative, absolute, fixed, aur sticky.",
    "Static — ye default value hai. Element normal document flow mein rehta hai. Top, right, bottom, left ka koi effect nahi hota.",
    "Relative — element apni original position se shift hota hai lekin uski original jagah reserve rehti hai. Top/left/right/bottom se offset kar sakte ho.",
    "Absolute — element document flow se nikal jaata hai aur apne nearest positioned ancestor (jiska position static na ho) ke relative position hota hai. Agar koi positioned ancestor nahi hai to viewport ke relative.",
    "Fixed — element viewport ke relative position hota hai. Scroll karne par bhi apni jagah nahi badalta. Popups, navbars, chat buttons ke liye perfect.",
    "Sticky — relative aur fixed ka combination hai. Jab tak scroll threshold nahi hota, relative ki tarah behave karta hai. Uske baad fixed ho jaata hai.",
    "Z-index — overlapping elements me decide karta hai ki kaun upar aayega. Higher z-index waala element upar dikhega. Sirf positioned (non-static) elements par kaam karta hai.",
    "Stacking context — ek 3D concept hai jahan elements z-index ke according stack hote hain. Har positioned element, opacity < 1, transform, filter naya stacking context create karta hai.",
    "Parent container ka position relative rakhna best practice hai jab aap child ko absolute position karna chahte ho. Isse child parent ke relative position hoga.",
    "Fixed positioning accessibility issues create kar sakti hai — mobile browsers me address bar hide/show hone par overlapping ho sakti hai.",
    "Sticky kaam tabhi karega jab uske parent container me scroll ho aur parent ki height sticky element se zyada ho.",
    "Z-index values me systematic approach use karo — jaise: dropdowns: 100, modals: 1000, tooltips: 10000. Isse conflicts avoid hote hain."
  ],
  examples: [
    {
      title: "Static vs Relative vs Absolute",
      description: "Dekho kaise teeno position types alag behave karti hain.",
      code: ".box-static { position: static; background: lightblue; }\n.box-relative { position: relative; top: 20px; left: 20px; background: lightgreen; }\n.box-absolute { position: absolute; top: 0; right: 0; background: lightcoral; }",
      result: "Static: normal flow. Relative: 20px neeche-right shift. Absolute: parent ke top-right corner par."
    },
    {
      title: "Fixed Navbar",
      description: "Fixed position navbar jo scroll karne par bhi upar rahega.",
      code: "nav { position: fixed; top: 0; width: 100%; background: #333; color: white; padding: 1rem; z-index: 100; }\nmain { margin-top: 60px; }",
      result: "Navbar hamesha top par visible hai, content neeche scroll ho raha hai."
    },
    {
      title: "Sticky Header",
      description: "Sticky position ka practical example.",
      code: "h2 { position: sticky; top: 0; background: yellow; padding: 10px; }",
      result: "Heading jab tak scroll nahi hoti, normal flow me hai. Uske baad top par chipak jaati hai."
    }
  ],
  syntax: [
    { property: "position", values: "static | relative | absolute | fixed | sticky", example: "position: relative;" },
    { property: "top / right / bottom / left", description: "Offset values for positioned elements", example: "top: 20px; left: 10%;" },
    { property: "z-index", values: "auto | <number>", example: "z-index: 999;" }
  ],
  diagram: [
    "STATIC:   [Normal Flow - Default]",
    "RELATIVE: [Original Position] → [Shifted by offset]",
    "ABSOLUTE: [Parent Container]",
    "          ┌─────────────────────┐",
    "          │  [Child Absolute]   │ → positioned relative to parent",
    "          └─────────────────────┘",
    "FIXED:    [Viewport] → element fixed on screen",
    "STICKY:   [Scroll] → normal → then fixed at threshold",
    "",
    "Stacking Context (z-index):",
    "  z-index: 3    → Top (on top of all)",
    "  z-index: 2    → Middle",
    "  z-index: 1    → Bottom"
  ],
  code: [
    {
      title: "Positioning Playground",
      language: "html",
      code: "<div class=\"parent\">\n  <div class=\"static-box\">Static (default)</div>\n  <div class=\"relative-box\">Relative</div>\n  <div class=\"absolute-box\">Absolute</div>\n  <div class=\"fixed-box\">Fixed</div>\n</div>\n\n<style>\n.parent {\n  position: relative;\n  height: 300px;\n  border: 2px solid #333;\n  margin: 20px;\n}\n.static-box {\n  position: static;\n  background: #3498db;\n  padding: 10px;\n  color: white;\n}\n.relative-box {\n  position: relative;\n  top: 20px;\n  left: 30px;\n  background: #2ecc71;\n  padding: 10px;\n  color: white;\n}\n.absolute-box {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  background: #e74c3c;\n  padding: 10px;\n  color: white;\n}\n.fixed-box {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  background: #f39c12;\n  padding: 10px;\n  color: white;\n  z-index: 999;\n}\n</style>"
    },
    {
      title: "Card Stack with z-index",
      language: "html",
      code: "<div class=\"cards\">\n  <div class=\"card\" style=\"z-index:1;\">Card 1</div>\n  <div class=\"card\" style=\"z-index:2; top:30px; left:30px;\">Card 2</div>\n  <div class=\"card\" style=\"z-index:3; top:60px; left:60px;\">Card 3</div>\n</div>\n\n<style>\n.cards { position: relative; height: 200px; }\n.card {\n  position: absolute;\n  width: 150px;\n  height: 100px;\n  background: #9b59b6;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n</style>"
    }
  ],
  output: [
    "Static box → normal document flow mein dikhega",
    "Relative box → 20px neeche, 30px right shift hoga",
    "Absolute box → parent ke bottom-right corner par hoga",
    "Fixed box → viewport ke top-right par scroll se affected nahi hoga"
  ],
  commonMistakes: [
    "Absolute position ka parent relative nahi rakhte — tab element viewport ke relative ho jaata hai jo unexpected hota hai",
    "Z-index without position lagana — z-index sirf positioned elements par kaam karta hai",
    "Fixed position ko mobile pe properly test nahi karte — keyboard open hone par overlap ho sakta hai",
    "Sticky element ka parent overflow:hidden — sticky tab kaam nahi karega",
    "Har jagah absolute position use karna — layout responsive nahi rahega"
  ],
  bestPractices: [
    "Hamesha absolute element ka parent relative rakho, nahi to unpredictable behavior hoga",
    "Z-index values ko systematic rakho — jaise modal: 1000, dropdown: 100, tooltip: 10000",
    "Fixed positioning ko judiciously use karo — zyada fixed elements UX kharab karte hain",
    "Sticky ke liye parent container ki height enough rakho",
    "Mobile-first approach lo — fixed positioning mobile pe problems create karti hai"
  ],
  tips: [
    "Z-index ka maximum value 2147483647 hota hai (max 32-bit integer)",
    "Opacity, transform, filter bina z-index ke bhi naya stacking context create karte hain",
    "Inspect element → Computed tab mein stacking context ka visualization dekho"
  ],
  practice: [
    "Ek card banaiye jisme ek badge absolute positioned ho top-right corner par",
    "Ek sticky navbar banaiye jo scroll karne par top par chipak jaaye"
  ],
  exercise: {
    instruction: "Ek hero section banaiye jisme background image ho, uske upar centered text ho (absolute positioning use karein), aur ek fixed back-to-top button ho.",
    hint: "Hero container ko position:relative do, text ko position:absolute with top:50%, transform:translateY(-50%) center karne ke liye.",
    starterCode: "<div class=\"hero\">\n  <div class=\"hero-text\">\n    <h1>Welcome!</h1>\n    <p>Your journey begins here</p>\n  </div>\n  <button class=\"back-to-top\">↑ Top</button>\n</div>\n\n<style>\n.hero {\n  height: 100vh;\n  background: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200') center/cover;\n  /* Add positioning here */\n}\n</style>"
  },
  quiz: [
    {
      question: "Position property ki default value kya hoti hai?",
      options: ["relative", "static", "absolute", "fixed"],
      answer: 1
    },
    {
      question: "Kis position value se element document flow se nikal jaata hai?",
      options: ["static", "relative", "sticky", "absolute"],
      answer: 3
    },
    {
      question: "Z-index kis type ke elements par kaam karta hai?",
      options: ["All elements", "Inline elements", "Positioned elements (non-static)", "Block elements"],
      answer: 2
    },
    {
      question: "Sticky position kaunsa combination hota hai?",
      options: ["static + fixed", "relative + fixed", "absolute + relative", "static + absolute"],
      answer: 1
    },
    {
      question: "Positioned ancestor nahi milne par absolute element kis ke relative position hota hai?",
      options: ["Body", "HTML", "Viewport", "Parent element"],
      answer: 2
    }
  ],
  interview: [
    {
      question: "Position absolute aur relative me kya difference hai?",
      answer: "Relative se element apni original position se offset hota hai aur uski jagah reserve rehti hai. Absolute se element flow se nikal jaata hai aur nearest positioned ancestor ke relative position hota hai."
    },
    {
      question: "Stacking context kya hota hai aur kaise banta hai?",
      answer: "Stacking context ek 3D concept hai jo elements ke z-index order ko control karta hai. Ye banta hai jab element positioned ho, opacity < 1 ho, transform, filter, ya will-change property use ho."
    },
    {
      question: "Sticky aur fixed positioning me kya antar hai?",
      answer: "Fixed hamesha viewport ke relative hota hai aur scroll karne par move nahi karta. Sticky tab tak relative behave karta hai jab tak scroll threshold na aaye, phir fixed ho jaata hai."
    }
  ],
  assignment: [
    "Ek complete webpage banaiye jisme fixed navbar, sticky section headers, aur ek absolute positioned tooltip ho",
    "Ek image gallery banaiye jisme hover par absolute positioned overlay aaye with z-index stacking",
    "Ek modal popup banaiye jo fixed position se center me aaye aur background dim ho"
  ],
  resources: [
    { title: "MDN - Position", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position" },
    { title: "CSS-Tricks - Z-index", url: "https://css-tricks.com/almanac/properties/z/z-index/" },
    { title: "Stacking Context Explained", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context" }
  ],
  summary: "CSS positioning elements ko document me exact jagah par set karne ka powerful tool hai. Static default hai. Relative se element apni original position se offset hota hai. Absolute se element flow se nikalta hai aur positioned ancestor ke relative position hota hai. Fixed viewport ke relative rehta hai aur scroll par nahi hilta. Sticky dono ka combination hai — pehle relative, phir fixed. Z-index overlapping elements ka order decide karta hai aur stacking context control karta hai. Sahi positioning se complex layouts bana sakte hain lekin responsive design ka dhyan rakhna important hai."
};

export default lesson;
