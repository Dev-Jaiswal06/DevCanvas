const lesson = {
  id: 12,
  slug: "links",
  title: "Styling CSS Links",
  description: "Link pseudo-classes, button styling, navigation menus ka complete guide",
  difficulty: "Beginner",
  duration: "35 min",
  heroImage:
    "https://images.unsplash.com/photo-1504711434969-e33886168d8c?w=800",
  tags: ["CSS", "Links", ":hover", "Navigation", "Pseudo"],
  theory: [
    "CSS links ko 4 pseudo-classes ke saath style kiya jata hai: :link (unvisited), :visited (visited), :hover (mouse over), :active (click moment).",
    "LoVe/HAte rule yaad rakho — :link, :visited, :hover, :active isi order mein define karo. VIBE bhi kehte hain: Visited, Idle, Hover, Engaged (active).",
    ":link unvisited link ko target karta hai. Default blue underline hota hai jo custom CSS se override kar sakte ho.",
    ":visited visited link ke liye style set karta hai. Security reasons se sirf color property change kar sakte ho, kuch properties block hain.",
    ":hover tab activate hota hai jab user mouse link ke upar le jata hai. Color, background, underline add/remove karein.",
    ":active tab apply hota hai jab user link pe click kar raha ho (mouse button pressed). Transitions ke saath best lagta hai.",
    "Links ko buttons ki tarah style kar sakte ho — background, padding, border-radius, box-shadow dekar. Yeh modern websites ka common pattern hai.",
    "Navigation menus ke liye ul > li > a structure use karo. CSS flex se horizontal layout, hover effects, aur active state style karo.",
    "Link states ka order important hai: agar :hover :visited ke baad likha to work nahi karega. Hamesha LVHA rule follow karo.",
    "Transition property hover effects ko smooth banata hai. transition: all 0.3s ease se color, background sab smoothly change hote hain.",
    "Current page ko highlight karne ke liye active class ('.active') use karo — pseudo-class :active sirf click ke time pe apply hoti hai.",
  ],
  examples: [
    {
      title: "Fancy Link Styling",
      description: "Smooth transitions ke saath animated link.",
      code: `a {
  color: #3498db;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}
a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: #3498db;
  bottom: -2px;
  left: 0;
  transition: width 0.3s ease;
}
a:hover {
  color: #2c3e50;
}
a:hover::after {
  width: 100%;
}`,
      result: "Hover pe underline left se right animate hoti hai",
    },
    {
      title: "Link as Button",
      description: "Link ko button jaisa look dena.",
      code: `<a href="#" class="btn">Click Me</a>
<style>
.btn {
  display: inline-block;
  background: #e74c3c;
  color: white;
  padding: 12px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}
.btn:hover {
  background: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
</style>`,
      result: "Red button, hover pe uth jata hai (translate) with shadow",
    },
  ],
  syntax: [
    "a:link { color: blue; }   /* Unvisited link */",
    "a:visited { color: purple; } /* Visited link */",
    "a:hover { color: red; }   /* Mouse over */",
    "a:active { color: green; } /* Click moment */",
    "a { transition: all 0.3s ease; } /* Smooth hover */",
  ],
  diagram: [
    "┌──── Link States Order (LVHA) ────┐",
    "│ 1. :link    → Normal unvisited   │",
    "│ 2. :visited → Already visited    │",
    "│ 3. :hover   → Mouse over         │",
    "│ 4. :active  → Click happening    │",
    "└────────────────────────────────────┘",
    "┌──── Nav Menu Structure ────┐",
    "│  nav > ul > li > a        │",
    "│  ul { display: flex }     │",
    "│  a { hover effects }      │",
    "│  a.active { current page } │",
    "└─────────────────────────────┘",
  ],
  code: [
    {
      title: "Full Link States Styling",
      language: "css",
      code: `/* LVHA order — yaad rakho */
a:link {
  color: #2980b9;
  text-decoration: none;
  font-weight: 500;
}

a:visited {
  color: #8e44ad;
}

a:hover {
  color: #e74c3c;
  text-decoration: underline;
}

a:active {
  color: #c0392b;
  background: #fce4ec;
  padding: 2px 4px;
}`,
    },
    {
      title: "Horizontal Navigation Menu",
      language: "css",
      code: `nav {
  background: #2c3e50;
  border-radius: 8px;
}

nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0;
}

nav a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 14px 24px;
  font-size: 1rem;
  transition: background 0.3s ease;
}

nav a:hover {
  background: #34495e;
}

nav a.active {
  background: #3498db;
}`,
    },
    {
      title: "Ghost Button",
      language: "css",
      code: `.ghost-btn {
  display: inline-block;
  padding: 12px 30px;
  border: 2px solid #3498db;
  color: #3498db;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  background: transparent;
}

.ghost-btn:hover {
  background: #3498db;
  color: white;
}`,
    },
  ],
  output: [
    "Link with animated underline on hover",
    "Nav bar with dark background, light text, blue active state",
    "Ghost button — outline on normal, filled on hover",
  ],
  commonMistakes: [
    "LVHA order na follow karna — :hover ya :active kaam nahi karega agar sahi order mein na ho",
    "a:hover likhna na bhoolna — link ke parent element pe hover lagana jo kaam nahi karega",
    "a element mein display: block na dena jab custom padding/background de rahe ho — click area sirf text tak limited rahega",
    "Transition property hover pe nahi, element pe dena — transition paraent pe hota hai, hover pe nahi",
    "Visited links ka sirf color change karna bhool jana — users ko pata hona chahiye ki wo pehle gaye hain ya nahi",
  ],
  bestPractices: [
    "LVHA order hamesha follow karo — Link, Visited, Hover, Active",
    "Text links ke liye underline ya koi indicator rakho taki users identify kar sakein",
    "Buttons ke liye min-width aur padding use karo taki touch targets accessible ho (48px recommended)",
    "Transition property a element pe do, a:hover pe nahi — smooth animation ke liye",
    "Navigation mein current page ke liye .active class use karo, pseudo-class :active nahi",
  ],
  tips: [
    "transition: background 0.3s ease, color 0.3s ease se multiple properties animate kar sakte ho ek saath",
    "outline property focus state ke liye use karo — keyboard navigation users ke liye accessible hai",
    "Button links ke liye cursor: pointer set karo (links mein by default hota hai), lekin disabled state ke liye cursor: not-allowed use karo",
  ],
  practice: [
    "Ek link banao jisme 4 pseudo-classes (LVHA order) properly styled ho with colors and decorations",
    "Ek navigation menu banao with flex layout, hover effects, active page highlight, aur smooth transitions",
  ],
  exercise: {
    instruction:
      "CSS likho jo ek navigation bar style kare: horizontal flex layout, background dark (#333), links white with padding, hover pe background lighter (#555), aur active page class .active ka background blue (#2196F3) ho.",
    hint: "ul pe display: flex, list-style: none. li a pe display: block, padding. a:hover aur a.active use karo.",
    starterCode: `nav ul {
  list-style: ;
  display: ;
  background: ;
  margin: 0;
  padding: 0;
}

nav a {
  display: ;
  color: ;
  padding: ;
  text-decoration: ;
  transition: ;
}

nav a:hover {
  background: ;
}

nav a.active {
  background: ;
}`,
  },
  quiz: [
    {
      question: "CSS link states ka sahi order kya hai?",
      options: [
        ":hover, :link, :active, :visited",
        ":link, :visited, :hover, :active",
        ":active, :hover, :link, :visited",
        ":link, :hover, :visited, :active",
      ],
      answer: 1,
    },
    {
      question: ":visited pseudo-class mein kaunsi property change nahi kar sakte?",
      options: ["Color", "background-color", "border-color", "All of these"],
      answer: 3,
    },
    {
      question: ":active state kab apply hota hai?",
      options: [
        "Jab mouse link ke upar ho",
        "Jab link click ho raha ho (mouse down)",
        "Jab link visited ho",
        "Jab page load ho",
      ],
      answer: 1,
    },
    {
      question: "Smooth hover transition ke liye transition property kahan deni chahiye?",
      options: [
        "a:hover mein",
        "a (element) mein",
        ":link mein",
        "Any pseudo-class mein",
      ],
      answer: 1,
    },
    {
      question: "Navigation mein current page highlight karne ke liye kya use karte hain?",
      options: [
        ":link",
        ":active",
        ".active class",
        ":visited",
      ],
      answer: 2,
    },
  ],
  interview: [
    {
      question: "LVHA rule kya hai aur kyun important hai?",
      answer:
        "LVHA = Link, Visited, Hover, Active. CSS specificity sab equal hai (single pseudo-class), to jo baad mein likha hoga wo override karega. Agar :hover :link se pehle likha to :link :hover ko override kar dega aur hover effect kabhi dikhega nahi.",
    },
    {
      question: ":visited pe sirf color property kyu change kar sakte hain?",
      answer:
        "Privacy reasons — agar :visited pe koi bhi property change kar sakte to JavaScript se computed styles check karke pata lagaya ja sakta tha ki user kahan gaya hai. Isliye browsers ne restrict kar diya.",
    },
    {
      question: "Transition property element pe vs pseudo-class pe dene mein kya antar hai?",
      answer:
        "Transition a element pe do to hover enter aur exit dono smooth hoga. Sirf a:hover pe do to sirf enter smooth hoga, exit abruptly hoga. Isliye transition hamesha element pe do.",
    },
  ],
  assignment: [
    "Ek navigation menu banao jisme 5 links ho — home, about, services, blog, contact — with hover effects aur active page highlight",
    "Ek set of social media link buttons banao (icon + text) jisme hover pe flip ya color animation ho",
    "Ek breadcrumb navigation banao jisme > separator ho aur last item (current page) bold aur different color ho",
  ],
  resources: [
    {
      title: "MDN - Styling Links",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links",
    },
    {
      title: "CSS Link Hover Effects Collection",
      url: "https://css-tricks.com/css-link-hover-effects/",
    },
  ],
  summary:
    "CSS links ke 4 states hote hain jinhe proper order mein define karna zaroori hai: :link, :visited, :hover, :active (LVHA rule). Links ko buttons mein convert karna, navigation menus banana, aur animated hover effects dena — ye sab CSS se possible hai. Transition property element pe do smooth effects ke liye. Navigation mein .active class se current page highlight karo. Yaad rakho: hover effects informative hone chahiye na ki sirf decorative — users ko pata hona chahiye ki kya clickable hai aur kahan wo currently hain.",
};

export default lesson;
