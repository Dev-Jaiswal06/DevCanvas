const lesson = {
  id: 8,
  slug: "text-styling",
  title: "CSS Text Styling",
  description: "Master text formatting, fonts, and typography in CSS",
  difficulty: "Beginner",
  duration: "35 min",
  heroImage:
    "https://images.unsplash.com/photo-1568702846914-796b6053be12?w=800",
  tags: ["CSS", "Text", "Typography", "Fonts"],
  theory: [
    "CSS text properties se aap text ka look aur feel control kar sakte ho — jaise color, alignment, spacing, aur decoration.",
    "color property text ka font color set karta hai. Hex (#ff0000), rgb (rgb(255,0,0)), hsl, ya named colors (red) use kar sakte ho.",
    "text-align property text ko left, right, center, ya justify align karti hai. Yeh block-level elements pe apply hoti hai.",
    "text-decoration add karta hai underline, overline, line-through, ya none (links se default underline hataane ke liye).",
    "text-transform case badalta hai: uppercase (SAB KAPITAL), lowercase (sab chhota), capitalize (Har Word Ka Pehla Akshar Bada).",
    "text-shadow se text ke neeche shadow add karte ho. Syntax: text-shadow: offset-x offset-y blur-radius color;",
    "letter-spacing (tracking) characters ke beech ka gap control karta hai. Positive value gap badhata hai, negative ghatata hai.",
    "word-spacing words ke beech ka gap set karta hai.",
    "line-height paragraph ki har line ke beech vertical space set karta hai. Normal 1.2 hota hai, readability ke liye 1.5-1.6 best hai.",
    "text-indent paragraph ki first line ko left se kitna andar shuru karna hai define karta hai.",
    "white-space control karta hai ki browser space aur line breaks ko kaise handle kare. Values: normal, nowrap, pre, pre-wrap.",
    "direction (ltr ya rtl) text flow ki direction set karta hai. Urdu/Arabic ke liye rtl use hota hai.",
    "vertical-align inline ya table-cell elements ko vertically align karta hai. Values: top, middle, bottom, baseline, sub, super.",
  ],
  examples: [
    {
      title: "Text Shadow Effect",
      description: "Heading pe shadow daal ke 3D effect kaise banayein.",
      code: '<h1 style="text-shadow: 3px 3px 5px rgba(0,0,0,0.3);">3D Effect Text</h1>',
      result: "3D Effect Text (shadow visible)",
    },
    {
      title: "Decorative Text",
      description: "Link se default underline hatana aur hover pe underline lagana.",
      code: '<a href="#" style="text-decoration: none; color: #333;">Hover karo mujhe</a>\n/* Hover pe underline dikhega */',
      result: "Hover karo mujhe (underline on hover)",
    },
  ],
  syntax: [
    "color: #ff6600 | rgb(255, 102, 0) | red;",
    "text-align: left | center | right | justify;",
    "text-decoration: underline | overline | line-through | none;",
    "text-shadow: 2px 2px 4px rgba(0,0,0,0.5);",
    "text-indent: 50px; letter-spacing: 2px; word-spacing: 5px; line-height: 1.6;",
  ],
  diagram: [
    "┌──────────────────────────────────────────┐",
    "│          Text Properties                 │",
    "│  ┌──────┐ ┌──────┐ ┌──────┐ ┌────────┐ │",
    "│  │Color │ │Align │ │Deco  │ │Shadow  │ │",
    "│  └──────┘ └──────┘ └──────┘ └────────┘ │",
    "│  ┌──────┐ ┌──────┐ ┌──────┐ ┌────────┐ │",
    "│  │Spacing│ │Indent│ │Case  │ │Direction│ │",
    "│  └──────┘ └──────┘ └──────┘ └────────┘ │",
    "└──────────────────────────────────────────┘",
  ],
  code: [
    {
      title: "Text Styling Demo",
      language: "css",
      code: `h1 {
  color: #2c3e50;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

p {
  color: #444;
  line-height: 1.6;
  text-indent: 30px;
  word-spacing: 2px;
}

a {
  text-decoration: none;
  color: #3498db;
}

.highlight {
  text-decoration: underline wavy #e74c3c;
}`,
    },
    {
      title: "Multiple Shadows",
      language: "css",
      code: `.neon-text {
  color: #fff;
  text-shadow:
    0 0 7px #0ff,
    0 0 10px #0ff,
    0 0 21px #0ff,
    0 0 42px #0ff;
}`,
    },
  ],
  output: [
    "h1 → BADA AUR CENTERED HEADING (with shadow)",
    "p → Indented paragraph with good line spacing",
    "a → Link without underline (clean look)",
  ],
  commonMistakes: [
    "text-align ko inline elements pe lagana — ye sirf block/inline-block pe kaam karta hai",
    "text-shadow ka blur radius bhool jana — syntax yaad rakho: x y blur color",
    "letter-spacing negative rakhna readability kharab kar deta hai",
    "line-height normal (1.2) rakhna readability ke liye kaafi nahi hota",
    "white-space: nowrap use karke text ko overflow kar dena bina overflow handle kiye",
  ],
  bestPractices: [
    "Body ke liye line-height 1.5 ya 1.6 rakho — readability improve hoti hai",
    "Colors ke liye hex ya rgba use karo, sirf 140+ named colors mein se",
    "text-transform uppercase sirf display text ke liye use karo, content ke liye nahi",
    "Heading ke liye text-shadow light use karo, heavy shadow sirf decorative text pe",
    "Letter-spacing uppercase headings ke liye 1-3px increase karo — professional lagta hai",
  ],
  tips: [
    "text-shadow: 0 0 10px rgba(0,255,0,0.5) se glow effect bana sakte ho",
    "text-decoration: none links ke default underline hatane ke liye sabse common use hai",
    "text-align: justify newspaper jaise columns ke liye achha hai, par last line chhoti ho to weird lagta hai",
  ],
  practice: [
    "Ek heading banayein jisme 3 alag text-shadow ek saath lage (comma seperate karke)",
    "Ek paragraph banayein jisme first line indent ho aur letter-spacing negative ho",
  ],
  exercise: {
    instruction:
      "Ek CSS rule likho jo paragraph ko justify align kare, line-height 1.8 rakhe, first line ko 40px indent kare, aur word-spacing 3px rakhe.",
    hint: "text-align, line-height, text-indent, word-spacing properties ka istemal karo.",
    starterCode: `p {
  text-align: ;
  line-height: ;
  text-indent: ;
  word-spacing: ;
}`,
  },
  quiz: [
    {
      question: "text-align property kis type ke elements pe kaam karti hai?",
      options: ["Inline", "Block", "Both", "None"],
      answer: 1,
    },
    {
      question: "text-shadow ka sahi syntax kya hai?",
      options: [
        "shadow: x y blur color",
        "text-shadow: x y blur color",
        "text-shadow: color x y blur",
        "shadow-color: x y blur",
      ],
      answer: 1,
    },
    {
      question: "Kya property link ka default underline hatati hai?",
      options: [
        "text-style: none",
        "text-underline: none",
        "text-decoration: none",
        "underline: none",
      ],
      answer: 2,
    },
    {
      question: "text-transform: capitalize se kya hoga?",
      options: [
        "Poora text uppercase ho jayega",
        "Har word ka first letter capital hoga",
        "Sirf first word capital hoga",
        "Kuch nahi badlega",
      ],
      answer: 1,
    },
    {
      question: "line-height ki best value readability ke liye kya hai?",
      options: ["1.0", "1.2", "1.6", "2.5"],
      answer: 2,
    },
  ],
  interview: [
    {
      question: "text-align: justify aur text-align: left mein kya antar hai?",
      answer:
        "Left mein text left side se align hota hai aur right ragged hota hai. Justify mein dono sides straight hoti hain, browser words ke beech space adjust karta hai.",
    },
    {
      question: "text-shadow ka use batao agar blur 0 rakhein to?",
      answer:
        "Agar blur 0 hai to shadow sharp hoti hai, jisse text ka duplicate jaise effect milta hai. Outline effect ke liye bhi use kar sakte ho.",
    },
    {
      question: "white-space: nowrap aur normal mein kya farak hai?",
      answer:
        "Normal mein text container ki width se zyada ho to wrap ho jata hai. Nowrap mein text ek hi line mein rehta hai aur container se overflow ho sakta hai.",
    },
  ],
  assignment: [
    "Ek article page banao jisme proper typography ho — heading centered shadow ke saath, paragraph justified with line-height 1.6",
    "Ek navigation bar banao jisme links pe default underline na ho, hover pe underline aaye",
    "letter-spacing aur word-spacing ka use karke ek stylish quote card design karo",
  ],
  resources: [
    {
      title: "MDN - Text Styling",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals",
    },
    {
      title: "CSS Text Shadow Generator",
      url: "https://cssgenerator.org/text-shadow-css-generator.html",
    },
  ],
  summary:
    "CSS text properties se aap typography ko complete control kar sakte ho. Color, alignment, decoration, shadow, spacing — har property ka specific use case hai. Text-shadow se depth create karo, line-height se readability improve karo, letter-spacing se headings ko stylish banao. Yaad rakhein: text-align sirf block elements pe kaam karta hai, text-decoration:none links ke underline hatane ka standard tarika hai, aur proper spacing ke saath typography professional lagti hai.",
};

export default lesson;
