const lesson = {
  id: 10,
  slug: "lists",
  title: "Styling CSS Lists",
  description: "Ordered, unordered lists ko stylish banayein, custom markers banayein",
  difficulty: "Beginner",
  duration: "30 min",
  heroImage:
    "https://images.unsplash.com/photo-1456401264171-201b30d4a7d0?w=800",
  tags: ["CSS", "Lists", "Navigation", "Bullets"],
  theory: [
    "CSS lists properties se aap ordered (ol) aur unordered (ul) lists ko customize kar sakte ho.",
    "list-style-type list marker (bullet ya number) ka type set karta hai. Disc, circle, square (ul ke liye); decimal, lower-alpha, upper-roman (ol ke liye). None se marker hide hota hai.",
    "list-style-image se aap bullet ki jagah custom image laga sakte ho. Syntax: list-style-image: url('bullet.png');",
    "list-style-position decide karta hai ki marker list item ke andar (inside) ya bahar (outside) ho. Outside default hai.",
    "Horizontal menu banane ke liye list ka display: inline-block ya flex set karte ho aur list-style-type: none karte ho.",
    "Custom markers ke liye ::before pseudo-element ka use karo. list-style: none karo, phir li::before mein content property se custom icon/emoji lagao.",
    "list-style shorthand se sab ek line mein likh sakte ho: list-style: square inside url('bullet.png');",
    "Ordered lists ke liye counter ka use karke nested numbering control kar sakte ho — CSS counters ka advanced feature hai yeh.",
    "Accessibility ke liye list items ko <li> ke andar hi rakho — screen readers lists ko properly tabhi announce karte hain jab semantic HTML sahi ho.",
    "Nested lists (list ke andar list) ko indentation aur different marker types dekar hierarchical look de sakte ho.",
  ],
  examples: [
    {
      title: "Custom Emoji Markers",
      description: "Bullet ki jagah emoji kaise lagayein ::before se.",
      code: `ul {
  list-style: none;
  padding: 0;
}
li::before {
  content: "🚀 ";
  font-size: 1.2em;
}`,
      result: "🚀 Item 1\n🚀 Item 2\n🚀 Item 3",
    },
    {
      title: "Horizontal Nav Menu",
      description: "Ul list ko horizontal navigation menu mein kaise badle.",
      code: `ul {
  list-style: none;
  display: flex;
  gap: 20px;
  background: #333;
  padding: 15px;
}
li a {
  color: white;
  text-decoration: none;
}`,
      result: "[Home]  [About]  [Services]  [Contact] — horizontal menu",
    },
  ],
  syntax: [
    "list-style-type: disc | circle | square | decimal | lower-alpha | upper-roman | none;",
    "list-style-position: inside | outside;",
    "list-style: square inside url('bullet.png');",
  ],
  diagram: [
    "  ┌─────────────────── List Types ───────────────────┐",
    "  │  ul: ● disc   ○ circle   ■ square               │",
    "  │  ol: 1. decimal   a. lower-alpha   I. upper-roman│",
    "  └──────────────────────────────────────────────────┘",
    "  ┌────────── list-style-position ─────────┐",
    "  │  outside → ●  Text starts here         │",
    "  │  inside  → ● Text starts...            │",
    "  └─────────────────────────────────────────┘",
  ],
  code: [
    {
      title: "Styled Ordered List",
      language: "css",
      code: `ol {
  list-style-type: upper-roman;
  background: #f9f9f9;
  padding: 20px 40px;
  border-radius: 8px;
}

li {
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  font-family: 'Georgia', serif;
}

li:last-child {
  border-bottom: none;
}`,
    },
    {
      title: "Custom Marker with Icons",
      language: "css",
      code: `ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 12px 0 12px 30px;
  position: relative;
  font-size: 1.1rem;
}

li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #27ae60;
  font-weight: bold;
  font-size: 1.3rem;
}`,
    },
    {
      title: "Nested List Styling",
      language: "css",
      code: `ul {
  list-style-type: disc;
}

ul ul {
  list-style-type: circle;
  margin-left: 30px;
}

ul ul ul {
  list-style-type: square;
  margin-left: 60px;
}`,
    },
  ],
  output: [
    "Roman numeral ordered list with borders",
    "Checkmark icon bullets with green color",
    "Nested lists showing disc → circle → square hierarchy",
  ],
  commonMistakes: [
    "list-style: none ke baad bhi marker space reh jata hai — isliye padding: 0 aur margin: 0 bhi set karo",
    "list-style-image ka image na mile to kuch display nahi hota — hamesha fallback list-style-type do",
    "Horizontal list banane ke liye float use karna flex ya inline-block se better hai",
    "Nested list mein different marker types set na karna — sab same marker se confuse lagta hai",
  ],
  bestPractices: [
    "Horizontal navigation ke liye ul > li > a structure use karo — semantic aur accessible",
    "Custom markers ke liye ::before pseudo-element use karo — list-style-image se zyada control milta hai",
    "Lists ko style karte waqt padding-left preserve rakho taki indentation sahi dikhe",
    "Removing markers ke liye list-style: none aur padding: 0 dono lagao",
    "Ordered lists mein start attribute se numbering ka starting point set kar sakte ho",
  ],
  tips: [
    "Custom counters bana sakte ho — body { counter-reset: section; } h2::before { counter-increment: section; content: counter(section) '. '; }",
    "list-style: none ke saath ::before emoji ya Unicode icon use karna sabse common pattern hai modern sites mein",
    "ordered list ke liye type attribute (A, a, I, i, 1) bhi CSS se zyada reliable hai kuch browsers mein",
  ],
  practice: [
    "Ek ul banao jisme list-style: none ho aur har li mein arrow → emoji marker ho ::before se",
    "Ek ol banao jisme upper-roman numbering ho, grey background ho, aur har item ke beech border ho",
  ],
  exercise: {
    instruction:
      "CSS likho jo ek ul ko horizontal navigation mein convert kare. List style none karo, flex display karo, gap 25px rakho, background dark (#222) rakho, aur links white aur text-decoration none rakho.",
    hint: "ul pe display: flex, list-style: none, gap use karo. Li ke andar a tag ko style karo.",
    starterCode: `ul {
  list-style: ;
  display: ;
  gap: ;
  background: ;
  padding: 15px 25px;
}

li a {
  color: ;
  text-decoration: ;
}`,
  },
  quiz: [
    {
      question: "list-style-position: inside se marker kahan aayega?",
      options: [
        "List item ke bahar",
        "List item ke andar",
        "Browser ke hisaab se",
        "Left side pe",
      ],
      answer: 1,
    },
    {
      question: "Ul ke liye default list-style-type kya hai?",
      options: ["Circle", "Square", "Disc", "None"],
      answer: 2,
    },
    {
      question: "Custom bullet ke liye sabse flexible method kya hai?",
      options: [
        "list-style-image",
        "::before pseudo-element",
        "list-style-type",
        "background-image",
      ],
      answer: 1,
    },
    {
      question: "List se marker hatane ke liye kya karna chahiye?",
      options: [
        "Sirf list-style: none",
        "Sirf padding: 0",
        "list-style: none aur padding: 0",
        "display: none",
      ],
      answer: 2,
    },
    {
      question: "Horizontal navigation ke liye list pe kaunsa property use karte hain?",
      options: [
        "display: block",
        "display: inline (ya flex)",
        "float: left",
        "list-style: horizontal",
      ],
      answer: 1,
    },
  ],
  interview: [
    {
      question: "list-style: none ke baad bhi marker ki space kyu rehti hai?",
      answer:
        "Kyunki browser default padding/margin list pe set hoti hai. list-style marker ko sirf visually hide karta hai par uski space nahi hatata. Isliye padding: 0 aur margin: 0 bhi set karna padta hai.",
    },
    {
      question: "Horizontal navigation list mein flex vs inline-block kaunsa better hai?",
      answer:
        "Flex better hai kyunki gap, align-items, justify-content jaise properties easily use kar sakte ho. But older browsers ke liye inline-block ka fallback dena safe hai.",
    },
    {
      question: "Counter-based custom numbering kaise implement karenge?",
      answer:
        "Container pe counter-reset, element pe counter-increment, aur ::before mein content: counter(name) use karte hain. Isse nested numbering bhi easily manage ho jati hai.",
    },
  ],
  assignment: [
    "Ek nested list banao jisme 3 levels ho — har level ka different marker type ho (disc, circle, square)",
    "Ek custom ordered list banao jisme numbering ho 'Step 1:', 'Step 2:' style mein aur styling border ke saath ho",
    "Ek horizontal navigation menu banao jisme hover pe background color change ho aur active page different color dikhe",
  ],
  resources: [
    {
      title: "MDN - Styling Lists",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists",
    },
    {
      title: "CSS List Style Generator",
      url: "https://css-tricks.com/almanac/properties/l/list-style/",
    },
  ],
  summary:
    "CSS lists ko style karna simple hai jab basic properties samajh lo. list-style-type se marker type select karo, list-style-position se marker ki placement, aur list-style-image se custom images. Horizontal navigation banane ke liye display: flex ke saath list-style: none use karo. Custom markers ke liye ::before pseudo-element aur emoji sabse flexible approach hai. Yaad rakho: list-style: none ke saath padding: 0 bhi set karo, aur nested lists ko different marker types dekar hierarchical banao.",
};

export default lesson;
