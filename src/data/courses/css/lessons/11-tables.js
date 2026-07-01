const lesson = {
  id: 11,
  slug: "tables",
  title: "Styling CSS Tables",
  description: "Tables ko professional aur responsive banayein with pure CSS",
  difficulty: "Beginner",
  duration: "35 min",
  heroImage:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  tags: ["CSS", "Tables", "Data", "Responsive"],
  theory: [
    "CSS table properties se aap data tables ko clean, readable aur attractive bana sakte ho.",
    "border-collapse decide karta hai ki adjacent table cells ke borders ek ho (collapse) ya alag rahein (separate). Collapse modern design ke liye standard hai.",
    "border-spacing sirf tab kaam karta hai jab border-collapse: separate ho. Yeh cells ke beech ka gap set karta hai.",
    "table-layout: auto se browser content ke hisaab se column width decide karta hai. fixed se aap manually width define kar sakte ho jo fast render hota hai.",
    "Striped rows (zebra striping) ke liye tr:nth-child(even) ya nth-child(odd) use karte ho. Isse readability improve hoti hai.",
    "Hover effects ke liye tr:hover use karo. Row hover karne pe highlight ho jati hai — useful for data tables.",
    "Responsive tables ke liye overflow-x: auto use karte ho. Chhoti screens pe table scroll ho jati hai instead of breaking layout.",
    "th (table header) cells ko bold aur centered rakho. Scope attribute se accessibility improve hoti hai.",
    ":nth-child selector advanced pattern bhi support karta hai — nth-child(2n+1), nth-child(3n), nth-child(even), etc.",
    "Cell padding thead mein th aur tbody mein td dono ke liye set karo taki content cluttered na lage.",
  ],
  examples: [
    {
      title: "Basic Striped Table",
      description: "Alternating row colors ke saath simple clean table.",
      code: `table {
  width: 100%;
  border-collapse: collapse;
}
th {
  background: #2c3e50;
  color: white;
  padding: 12px;
}
td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
tr:nth-child(even) {
  background: #f2f2f2;
}`,
      result: "Dark header, white rows, even rows light grey",
    },
    {
      title: "Hoverable Rows",
      description: "Mouse hover karne pe row highlight.",
      code: `tr:hover {
  background: #e0f7fa;
  cursor: pointer;
}
td {
  transition: background 0.3s ease;
}`,
      result: "Row hover → light cyan background with smooth transition",
    },
  ],
  syntax: [
    "border-collapse: collapse | separate;",
    "table-layout: auto | fixed;",
    ":nth-child(even) | :nth-child(odd) | :nth-child(2n+1);",
  ],
  diagram: [
    "┌──────────── Table Structure ─────────────┐",
    "│  ┌──────┬──────┬──────┬──────┐           │",
    "│  │ TH   │ TH   │ TH   │ TH   │ ← thead  │",
    "│  ├──────┼──────┼──────┼──────┤           │",
    "│  │ TD   │ TD   │ TD   │ TD   │           │",
    "│  ├──────┼──────┼──────┼──────┤ ← tbody  │",
    "│  │ TD   │ TD   │ TD   │ TD   │           │",
    "│  └──────┴──────┴──────┴──────┘           │",
    "└────────────────────────────────────────────┘",
  ],
  code: [
    {
      title: "Professional Data Table",
      language: "css",
      code: `table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: 0.95rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

thead th {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 14px 16px;
  text-align: left;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85rem;
}

tbody td {
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
}

tbody tr:last-child td {
  border-bottom: none;
}

tbody tr:nth-child(even) {
  background: #f8f9fa;
}

tbody tr:hover {
  background: #e8f0fe;
  transition: background 0.25s ease;
}`,
    },
    {
      title: "Responsive Table Wrapper",
      language: "css",
      code: `/* HTML mein table ko wrap karo */
.table-container {
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; /* mobile pe scroll trigger */
}

/* Mobile alternative: card layout */
@media (max-width: 600px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  
  thead { display: none; }
  
  td {
    padding-left: 50%;
    position: relative;
    border: none;
  }
  
  td::before {
    content: attr(data-label);
    position: absolute;
    left: 16px;
    font-weight: bold;
    color: #666;
  }
}`,
    },
  ],
  output: [
    "Clean table with gradient header, zebra stripes, hover highlight",
    "Responsive table — desktop pe normal, mobile pe card layout",
    "Rounded corners with box-shadow for modern look",
  ],
  commonMistakes: [
    "border-collapse: collapse na lagana — double borders ugly lagte hain",
    "table-layout: fixed use karna bina column width define kiye — content overflow ho sakta hai",
    "th aur td ke liye padding set na karna — text cramped lagta hai",
    "Responsive table ka overflow-x: auto na dena — mobile pe table break kar deti hai layout",
    "Zebra striping ke liye sirf even rows ko color dena aur hover effect na dena — dono combine best hai",
  ],
  bestPractices: [
    "Hamesha border-collapse: collapse use karo — modern clean look ke liye",
    "<th> ko scope='col' ya scope='row' do — screen readers ke liye accessible",
    "Striped tables ke liye nth-child(even) use karo, aur hover effect combine karo",
    "Responsive tables ke liye overflow-x: auto wrapper use karo",
    "Numeric data ko right-align karo (text-align: right) — comparison easy hota hai",
  ],
  tips: [
    "Gradient backgrounds in thead table ko modern aur premium look dete hain",
    "Border-radius table pe kaam nahi karta jab overflow hidden na ho — table ko div mein wrap karo",
    "Column alignment consistent rakho — text left, numbers right, booleans center",
  ],
  practice: [
    "Ek table banao with gradient header, 5 columns, zebra striping, aur hover effect",
    "Same table ko responsive banao jahan mobile pe horizontally scroll ho",
  ],
  exercise: {
    instruction:
      "CSS likho jo ek table ko style kare: border-collapse collapse ho, thead dark background (#1a1a2e) aur white text ho, rows mein zebra striping (nth-child) ho, aur hover pe light purple highlight ho.",
    hint: "border-collapse, padding, nth-child(even), tr:hover properties use karo.",
    starterCode: `table {
  width: 100%;
  border-collapse: ;
}

th {
  background: ;
  color: ;
  padding: ;
}

td {
  padding: ;
  border-bottom: ;
}

tr:nth-child(even) {
  background: ;
}

tr:hover {
  background: ;
}`,
  },
  quiz: [
    {
      question: "border-collapse: collapse kya karta hai?",
      options: [
        "Borders ko remove karta hai",
        "Adjacent cell borders ko ek kar deta hai",
        "Borders ko double kar deta hai",
        "Table ki border hata deta hai",
      ],
      answer: 1,
    },
    {
      question: "Zebra striping ke liye kaunsa selector use karte hain?",
      options: ["tr:even", "tr:nth-child(even)", "tr:alternate", "tr:zebra"],
      answer: 1,
    },
    {
      question: "Chhoti screens pe table ko responsive karne ka sabse simple tarika?",
      options: [
        "Table ko hide karna",
        "overflow-x: auto wrapper mein dalna",
        "Font size chhota karna",
        "Columns remove karna",
      ],
      answer: 1,
    },
    {
      question: "table-layout: fixed ka kya fayda hai?",
      options: [
        "Auto height adjust",
        "Faster rendering, manual width control",
        "Responsive banata hai",
        "Borders hatata hai",
      ],
      answer: 1,
    },
    {
      question: "Numeric data ko kaunsa text-align dena chahiye?",
      options: ["left", "center", "right", "justify"],
      answer: 2,
    },
  ],
  interview: [
    {
      question: "border-collapse: collapse aur separate mein kya difference hai?",
      answer:
        "Collapse mein adjacent cells ke borders combine ho jate hain, jisse single border dikhti hai. Separate mein har cell ki apni border hoti hai aur border-spacing property se gap set kar sakte ho.",
    },
    {
      question: "Responsive table mobile pe kaise banayein?",
      answer:
        "Do options hain: simple approach — table ko overflow-x: auto wrapper mein daal do. Advanced approach — mobile pe thead hide karo aur td::before se data-label attribute show karo, har row card jaisi dikhe.",
    },
    {
      question: ":nth-child(odd) aur :nth-child(2n+1) mein kya antar hai?",
      answer:
        "Kuch nahi — dono same hain. odd even ke liye shortcut hai, 2n+1 mathematical expression hai. Aap nth-child(3n) se har third element select kar sakte ho jo sirf odd/even se possible nahi.",
    },
  ],
  assignment: [
    "Ek employee data table banao jisme name, department, salary, join date columns ho — striped, hoverable, responsive",
    "Ek price comparison table banao jisme gradient header ho, feature comparison ho, aur current plan highlighted ho",
    "Ek HTML table banao jisme colspan aur rowspan ka use ho aur CSS se proper styling do",
  ],
  resources: [
    {
      title: "MDN - Styling Tables",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables",
    },
    {
      title: "CSS nth-child Generator",
      url: "https://css-tricks.com/examples/nth-child-tester/",
    },
  ],
  summary:
    "CSS tables ko professional aur readable banana easy hai. border-collapse: collapse se double borders hat jate hain. nth-child(even) se zebra striping hoti hai jo readability improve karti hai. Hover effect se user ko pata chalta hai ki kaunsa row select hai. Responsive tables ke liye overflow-x: auto wrapper kaafi hai simple use cases ke liye. Yaad rakho: thead aur tbody ka semantic structure maintain karo, scope attributes accessibility ke liye use karo, aur numerical data right-align karo. Modern tables ke saath box-shadow aur rounded corners premium feel dete hain.",
};

export default lesson;
