const lesson = {
  id: 11,
  slug: "tables",
  title: "HTML Tables",
  description: "Tables ka use data ko rows aur columns me dikhane ke liye. Hinglish mein seekhein.",
  difficulty: "Intermediate",
  duration: "20 Minutes",
  heroImage: "",
  tags: ["HTML", "Tables", "Intermediate"],
  theory: [
    "HTML tables ka use data ko rows aur columns mein organize karke dikhane ke liye hota hai.",
    "<table> tag se table create hota hai, <tr> se row, <th> se header aur <td> se data cell banate hain.",
    "border attribute se border add kar sakte hain, aur CSS se aur bhi customize kar sakte hain.",
    "colspan aur rowspan attributes se cells ko merge kar sakte hain.",
    "<thead>, <tbody>, <tfoot> se table ka structure clear hota hai aur accessibility improve hoti hai."
  ],
  examples: [
    {
      title: "Simple Table",
      description: "Ek simple table jisme name aur age dikhaye gaye hain.",
      code: "<table border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Rahul</td>\n    <td>22</td>\n  </tr>\n  <tr>\n    <td>Priya</td>\n    <td>21</td>\n  </tr>\n</table>",
      result: "Name | Age\nRahul | 22\nPriya | 21"
    }
  ],
  syntax: [
    "<table>",
    "  <tr>",
    "    <th>Header 1</th>",
    "    <th>Header 2</th>",
    "  </tr>",
    "  <tr>",
    "    <td>Data 1</td>",
    "    <td>Data 2</td>",
    "  </tr>",
    "</table>"
  ],
  diagram: [
    "<table> → Table container",
    "  <thead> → Header section",
    "    <tr> → Row",
    "      <th> → Header cell",
    "  <tbody> → Body section",
    "    <tr> → Row",
    "      <td> → Data cell"
  ],
  code: [
    {
      title: "Table with Rowspan",
      language: "html",
      code: "<!DOCTYPE html>\n<html>\n<body>\n  <table border=\"1\">\n    <tr>\n      <th>Name</th>\n      <th>Subject</th>\n      <th>Grade</th>\n    </tr>\n    <tr>\n      <td rowspan=\"2\">Rahul</td>\n      <td>Math</td>\n      <td>A</td>\n    </tr>\n    <tr>\n      <td>Science</td>\n      <td>B+</td>\n    </tr>\n  </table>\n</body>\n</html>"
    }
  ],
  output: [
    "Name  | Subject | Grade",
    "Rahul | Math    | A",
    "      | Science | B+"
  ],
  commonMistakes: [
    "Table structure ka sahi order na rakhna — pehle <table>, phir <tr>, phir <td>/<th>",
    "colspan aur rowspan galat use karna jisse layout bigad jata hai",
    "Border attribute bhool jana, jisse table data alag dikhta hai",
    "Caption aur summary na dena jo accessibility ke liye important hai"
  ],
  bestPractices: [
    "Complex tables ke liye thead, tbody, tfoot ka use karo",
    "Data tables mein scope attribute ka use karo accessibility ke liye",
    "CSS styling prefer karo border attribute ke jagah",
    "Responsive tables ke liye overflow-x: auto ka use karo"
  ],
  tips: [
    "rowspan vertical merging ke liye, colspan horizontal merging ke liye",
    "Screen readers ke liye <caption> tag add karo",
    "Alternate row colors se readability badhti hai"
  ],
  practice: [
    "Apna weekly timetable table mein banao",
    "Ek result sheet banao jisme 5 students ke 3 subjects ke marks ho",
    "colspan aur rowspan use karke ek complex table banao"
  ],
  exercise: {
    instruction: "Ek table banao jisme 3 columns (Product, Price, Quantity) aur 4 rows hon. Total price ke liye ek row add karo.",
    hint: "<td> mein colspan=\"3\" use karke last row mein \"Total\" likho.",
    starterCode: "<table border=\"1\">\n  <tr>\n    <th>Product</th>\n    <th>Price</th>\n    <th>Qty</th>\n  </tr>\n</table>"
  },
  quiz: [
    {
      question: "Table header ke liye kaunsa tag use hota hai?",
      options: ["<td>", "<tr>", "<th>", "<thead>"],
      answer: 2,
      explanation: "<th> (Table Header) header cells ke liye use hota hai jo bold aur center align hote hain."
    },
    {
      question: "colspan attribute kya karta hai?",
      options: ["Columns ko merge karta hai", "Rows ko merge karta hai", "Border add karta hai", "Color change karta hai"],
      answer: 0,
      explanation: "colspan multiple columns ko ek cell mein merge kar deta hai."
    }
  ],
  interview: [
    {
      question: "HTML table ke basic tags kaun se hain?",
      answer: "Basic tags hain: <table> (container), <tr> (row), <th> (header), <td> (data). Optional: <thead>, <tbody>, <tfoot>, <caption>, <colgroup>."
    },
    {
      question: "colspan aur rowspan kya karte hain?",
      answer: "colspan multiple columns ko horizontally merge karta hai, rowspan multiple rows ko vertically merge karta hai. Yeh complex layouts banane mein madad karte hain."
    }
  ],
  assignment: {
    title: "Table Design Assignment",
    description: "Ek detailed timetable table banayein jo weekly schedule dikhaye.",
    tasks: [
      "7 columns (Mon-Sun) aur 8 rows (time slots) ka table banao",
      "colspan se lunch break ko merge karo",
      "Rowspan se activities ko merge karo",
      "CSS se table ko stylish banao",
      "Caption aur scope attributes add karo"
    ],
    submission: "Code ko GitHub pe push karein aur link submit karein",
    deadline: "1 week"
  },
  resources: [
    { title: "MDN - HTML Tables", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" },
    { title: "W3Schools - Tables", url: "https://www.w3schools.com/html/html_tables.asp" },
    { title: "CSS Table Styling", url: "https://css-tricks.com/complete-guide-table-element/" }
  ],
  summary: [
    "HTML tables data ko rows aur columns mein display karne ke liye use hote hain.",
    "<table>, <tr>, <th>, <td> basic elements hain.",
    "colspan aur rowspan se cells merge kar sakte hain.",
    "<thead>, <tbody>, <tfoot> se semantic structure milta hai."
  ]
};

export default lesson;
