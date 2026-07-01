const lesson = {
  id: 13,
  slug: "display",
  title: "CSS Display Property",
  description: "Block, inline, inline-block, none, flex, grid — display property ka complete guide",
  difficulty: "Beginner",
  duration: "40 min",
  heroImage:
    "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800",
  tags: ["CSS", "Display", "Layout", "Block", "Inline", "Flexbox", "Grid"],
  theory: [
    "CSS display property sabse important layout property hai — ye decide karta hai ki element page pe kaise behave karega aur kaise dikhega.",
    "display: block — element puri width le leta hai aur apni line banata hai. <div>, <p>, <h1>-<h6>, <section> block elements hain. Width/height, margin/padding sab set kar sakte ho.",
    "display: inline — element sirf utni width leta hai jitna content hai. <span>, <a>, <strong>, <em> inline elements hain. Width/height set nahi kar sakte, sirf horizontal margin/padding.",
    "display: inline-block — inline aur block ka combo. Element inline ki tarah line mein rehta hai par block ki tarah width/height, margin/padding sab set kar sakte ho.",
    "display: none — element ko complete hide kar deta hai. Element ki jagah bhi nahi bachti. DOM mein rehta hai par visually aur layout dono se removed.",
    "display: flex — flexbox layout. Children flex items ban jate hain. justify-content se horizontal alignment, align-items se vertical alignment control karo.",
    "display: grid — CSS grid layout. Rows aur columns define karke complex 2D layouts bana sakte ho. grid-template-columns aur grid-template-rows use karo.",
    "display: table / table-row / table-cell — CSS se table-like layout bina HTML table tag ke. Useful for backward compatibility ya specific layouts.",
    "Visibility: hidden — display: none se different hai. Yeh element ko hide karta hai par uski jagah (space) bachi rehti hai. Screen readers bhi read karte hain.",
    "Display property inheritance nahi karti — har element pe explicitly set karna padta hai, ya user-agent stylesheet ka default apply hota hai.",
    "Accessibility mein display: none aur visibility: hidden ka difference important hai — screen readers display: none ko ignore karte hain, visibility: hidden ko nahi.",
    "Inline elements ke beech browser default space add karta hai (white-space) — isliye inline-block items ke beech unexpected gap dikhta hai.",
  ],
  examples: [
    {
      title: "Block vs Inline vs Inline-Block",
      description: "Teeno display values ka visual comparison.",
      code: `<div class="box block">Block</div>
<span class="box inline">Inline</span>
<span class="box inline">Inline</span>
<div class="box inline-block">Inline-Block</div>
<div class="box inline-block">Inline-Block</div>

<style>
.box {
  background: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}
.block {
  display: block;
  /* Puri width lega */
}
.inline {
  display: inline;
  /* Width/height ignore */
  width: 200px; /* kaam nahi karega */
  height: 100px; /* kaam nahi karega */
}
.inline-block {
  display: inline-block;
  width: 200px;
  height: 100px;
}
</style>`,
      result: "Block → line break, full width. Inline → ek line mein, width/height ignore. Inline-block → ek line mein, width/height apply.",
    },
    {
      title: "Flex vs Grid",
      description: "Flexbox 1D layout, Grid 2D layout ka difference.",
      code: `/* Flex: 1D layout */
.flex-container {
  display: flex;
  gap: 10px;
  justify-content: center;
}
/* Grid: 2D layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`,
      result: "Flex → items ek row mein center aligned. Grid → 3 columns ka structured layout.",
    },
  ],
  syntax: [
    "display: block | inline | inline-block | none | flex | grid | table;",
    "visibility: visible | hidden | collapse;",
    "display: flex; justify-content: center; align-items: center;",
    "display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;",
  ],
  diagram: [
    "┌─────────── Display Values ───────────┐",
    "│                                       │",
    "│  block → ┌────────────────────────┐  │",
    "│          │ Takes full width       │  │",
    "│          └────────────────────────┘  │",
    "│                                       │",
    "│  inline → [text] [text] [text]      │",
    "│           Width = content only       │",
    "│                                       │",
    "│  inline-block → [───] [───] [───]   │",
    "│                Width set kar sakte   │",
    "└───────────────────────────────────────┘",
    "┌── display:none ──┐  ┌── visibility:hidden ──┐",
    "│ Element hidden   │  │ Element hidden        │",
    "│ Space removed    │  │ Space preserved       │",
    "│ Screen reader no  │  │ Screen reader yes     │",
    "└──────────────────┘  └───────────────────────┘",
  ],
  code: [
    {
      title: "Flexbox Centering",
      language: "css",
      code: `.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: #f0f0f0;
}

.child {
  background: #3498db;
  color: white;
  padding: 20px 40px;
  border-radius: 8px;
}`,
    },
    {
      title: "CSS Grid Layout",
      language: "css",
      code: `.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
  padding: 16px;
}

.header {
  grid-column: 1 / -1;
  background: #2c3e50;
  color: white;
  padding: 20px;
}

.sidebar {
  background: #ecf0f1;
  padding: 20px;
}

.main {
  grid-column: 2 / -1;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
    },
    {
      title: "Display None Toggle",
      language: "html",
      code: `<div class="card">
  <h3>Click to reveal</h3>
  <div class="hidden-content">
    Yeh content hidden hai! Display none use kiya.
  </div>
  <button>Show/Hide</button>
</div>

<style>
.hidden-content {
  display: none; 
  /* Visible karne ke liye JS se class toggle karo */
}

.hidden-content.show {
  display: block;
}
</style>

<script>
document.querySelector('button').onclick = () => {
  document.querySelector('.hidden-content')
    .classList.toggle('show');
};
</script>`,
    },
  ],
  output: [
    "Flex centering — child element perfectly center in parent",
    "Grid layout — header full width, sidebar left, main content right",
    "Toggle content — click button se content show/hide using display none/block",
  ],
  commonMistakes: [
    "Inline elements (span, a) pe width/height set karna — ye property inline pe kaam nahi karta, inline-block use karo",
    "display: none se element hide karna par accessibility bhool jana — screen readers ise nahi padhenge",
    "Inline-block items ke beech unexpected gap dekhna — yeh HTML mein whitespace ki wajah se hota hai, font-size: 0 parent pe lagao",
    "Flex container ke child pe width set karna aur flex-grow bhi dena — conflict ho sakta hai",
    "Grid mein items overlap kar jana jab grid-row ya grid-column galat set ho",
  ],
  bestPractices: [
    "Inline-block ke beech gap avoid karne ke liye parent pe font-size: 0 set karo aur children pe actual font-size do",
    "display: none content hide karne ke liye use karo jo DOM mein na rahe, visibility: hidden use karo jab space preserve karna ho",
    "Responsive layouts ke liye prefer flex (1D) and grid (2D) over floats and table-based layouts",
    "Display property ko media queries ke saath change karo — mobile pe flex, desktop pe grid ya vice versa",
    "Accessibility ke liye display: none sensory content (like tooltips) ke saath use na karo — screen reader ignore kar dega",
  ],
  tips: [
    "display: inline-flex se flex container inline behave karega — useful for button groups or inline nav items",
    "Grid mein grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) se fully responsive grid bana sakte ho bina media queries ke",
    "visibility: collapse table elements ke liye specific hai — table row/column hide karta hai par layout preserve karta hai",
  ],
  practice: [
    "3 cards banao inline-block se, har card ko width 200px do aur parent mein text-align: center karo",
    "Ek flex container banao jisme 5 items ho, justify-content: space-between aur align-items: center ke saath",
  ],
  exercise: {
    instruction:
      "CSS likho jo ek container ko display: grid de, jisme 3 columns equally divided hain (1fr each), gap 20px hai, aur har grid item ka background light grey, padding 20px, aur text center aligned ho.",
    hint: "display: grid, grid-template-columns, gap properties use karo. Items ke liye background, padding, text-align.",
    starterCode: `.container {
  display: ;
  grid-template-columns: ;
  gap: ;
}

.item {
  background: ;
  padding: ;
  text-align: ;
}`,
  },
  quiz: [
    {
      question: "display: inline-block aur inline mein kya difference hai?",
      options: [
        "Koi difference nahi",
        "Inline-block width/height set kar sakta hai",
        "Inline-block line break karta hai",
        "Inline-block hidden ho jata hai",
      ],
      answer: 1,
    },
    {
      question: "display: none aur visibility: hidden mein kya difference hai?",
      options: [
        "Dono same hain",
        "display: none space remove karta hai, visibility: hidden nahi",
        "visibility: hidden space remove karta hai",
        "display: none screen readers se accessible hai",
      ],
      answer: 1,
    },
    {
      question: "Element ko center karne ke liye flex mein kaunsa property use karte hain?",
      options: [
        "justify-content aur align-items",
        "text-align: center",
        "margin: center",
        "align: center",
      ],
      answer: 0,
    },
    {
      question: "display: grid kaunsa layout ke liye best hai?",
      options: ["1D layout (row)", "2D layout (rows + columns)", "Single element", "Inline text"],
      answer: 1,
    },
    {
      question: "Span element ka default display kya hai?",
      options: ["block", "inline-block", "inline", "flex"],
      answer: 2,
    },
  ],
  interview: [
    {
      question: "display: none aur visibility: hidden ka accessibility impact kya hai?",
      answer:
        "display: none element ko accessibility tree se bhi remove kar deta hai — screen readers ise ignore karenge. visibility: hidden sirf visually hide karta hai par accessibility tree mein rehta hai — screen readers padhenge. Agar content truly irrelevant hai to display: none use karo, warna visibility: hidden.",
    },
    {
      question: "Inline-block items ke beech gap kyu aata hai aur kaise hatayein?",
      answer:
        "Yeh gap HTML mein whitespace (spaces, newlines) ki wajah se aata hai. Isse hatane ke 3 tarike hain: 1) HTML mein whitespace hata do, 2) Parent pe font-size: 0, 3) Parent pe display: flex use karo.",
    },
    {
      question: "Flex vs Grid — kab kaunsa use karein?",
      answer:
        "Flexbox 1D layouts ke liye — ya to rows ya columns. Jab content ka size unknown ho to flex auto-adjust hota hai. Grid 2D layouts ke liye — rows aur columns dono control karna ho to. Grid explicit placement ke liye best hai, flex implicit sizing ke liye.",
    },
  ],
  assignment: [
    "Ek page layout banao using grid — header, nav, sidebar, main content, footer. Mobile pe sab stack ho jayein.",
    "Ek card grid banao with display: grid aur grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) — responsive without media queries",
    "Ek navigation bar banao using display: flex jisme logo left ho aur menu items right ho (space-between)",
  ],
  resources: [
    {
      title: "MDN - Display Property",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
    },
    {
      title: "CSS Flexbox Guide",
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    },
    {
      title: "CSS Grid Guide",
      url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    },
  ],
  summary:
    "CSS display property layout ka foundation hai. Block elements puri width lete hain aur line break karte hain. Inline elements content ke size ke hisaab se hote hain aur ek line mein rehte hain. Inline-block dono ka best combination hai — line mein rehta hai par width/height set kar sakte ho. Display: none se element complete hide hota hai (space bhi remove), jabki visibility: hidden sirf visually hide karta hai. Modern layouts ke liye flex (1D) aur grid (2D) standard hain. Yaad rakho: inline pe width/height kaam nahi karta, inline-block ke beech whitespace gap hota hai, aur display: none accessibility tree se remove hota hai.",
};

export default lesson;
