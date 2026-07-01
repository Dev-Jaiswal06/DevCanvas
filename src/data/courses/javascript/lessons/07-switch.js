const lesson = {
  "id": 7,
  "slug": "switch",
  "title": "Switch Statement",
  "description": "Switch Statement ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "12 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Beginner"
  ],
  "theory": [
    "Switch multiple conditions ke liye jab ek variable ki values compare karni ho.",
    "Switch expression evaluate karta hai, har case se === compare.",
    "Break lagana zaroori nahi to fall-through.",
    "Default case jab koi match nahi.",
    "Fall-through intentional bhi ho sakta hai - shared code.",
    "If-else se readable for 3+ values.",
    "Case mein expressions bhi chalte hain.",
    "Switch string, number, boolean sab ke saath kaam karta hai.",
    "Object literal pattern switch ka modern alternative.",
    "Break bhoolna common mistake hai."
  ],
  "examples": [
    {
      "title": "Basic Switch",
      "description": "Day of week",
      "code": "let day=3;\nswitch(day){\n  case 1:console.log('Mon');break;\n  case 2:console.log('Tue');break;\n  case 3:console.log('Wed');break;\n  default:console.log('Weekend');\n}",
      "result": "Wed"
    },
    {
      "title": "Fall-through",
      "description": "Shared code multiple cases",
      "code": "let role='editor';\nswitch(role){\n  case'admin':console.log('Full');break;\n  case'editor':case'author':console.log('Write/Edit');break;\n  case'viewer':console.log('Read only');break;\n  default:console.log('No access');\n}",
      "result": "Write/Edit"
    },
    {
      "title": "Object Pattern",
      "description": "Switch alternative",
      "code": "const colors={red:'#FF0000',green:'#00FF00'};\nconsole.log(colors['red']||'Unknown');",
      "result": "#FF0000"
    }
  ],
  "syntax": [
    "switch(expr){case val:...break;}",
    "switch(x){case 1:...break;default:...}",
    "case 'a':case 'b':...break;"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Basic Switch",
      "language": "javascript",
      "code": "let day=3;\nswitch(day){\n  case 1:console.log('Mon');break;\n  case 2:console.log('Tue');break;\n  case 3:console.log('Wed');break;\n  default:console.log('Weekend');\n}"
    },
    {
      "title": "Fall-through",
      "language": "javascript",
      "code": "let role='editor';\nswitch(role){\n  case'admin':console.log('Full');break;\n  case'editor':case'author':console.log('Write/Edit');break;\n  case'viewer':console.log('Read only');break;\n  default:console.log('No access');\n}"
    },
    {
      "title": "Object Pattern",
      "language": "javascript",
      "code": "const colors={red:'#FF0000',green:'#00FF00'};\nconsole.log(colors['red']||'Unknown');"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "break bhoolna - fall-through hota hai",
    "=== comparison hota hai, == nahi",
    "Default case na dena"
  ],
  "bestPractices": [
    "Har case mein break (unless intentional fall-through)",
    "Default case hamesha rakho",
    "Object literal pattern for simple lookups"
  ],
  "tips": [
    "Fall-through ko comment se mark karo",
    "Switch mein block scope ke liye {}",
    "Object lookup switch se fast hai"
  ],
  "practice": [
    "Month number se month name return karo",
    "Calculator operator ke saath switch",
    "Role-based access control with switch"
  ],
  "exercise": {
    "instruction": "Traffic light function - color se action.",
    "hint": "Switch + default case.",
    "starterCode": "function trafficLight(color){\n  switch(color.toLowerCase()){\n    case'red':return'Stop';\n    case'yellow':return'Ready';\n    case'green':return'Go';\n    default:return'Invalid';\n  }\n}\nconsole.log(trafficLight('Red'));"
  },
  "quiz": [
    {
      "question": "Break na lagane se kya?",
      "options": [
        "Error",
        "Fall-through",
        "Skip",
        "Default execute"
      ],
      "answer": 1,
      "explanation": "Fall-through - next case bhi execute."
    },
    {
      "question": "Koi match na ho to?",
      "options": [
        "Pehla case",
        "Default case",
        "Last case",
        "Kuch nahi"
      ],
      "answer": 1
    }
  ],
  "interview": [
    {
      "question": "Switch advantages/disadvantages?",
      "answer": "Readable for fixed values, === comparison, fall-through control. Disadvantage: only ===, complex conditions nahi. Alternative: object literal pattern."
    }
  ],
  "assignment": {
    "title": "Switch Statement Assignment",
    "description": "Switch Statement ka practical assignment.",
    "tasks": [
      "Switch Statement ka example likho",
      "Error handling add karo",
      "Code optimize karo",
      "Documentation add karo"
    ],
    "submission": "Code GitHub pe push karo",
    "deadline": "1 week"
  },
  "resources": [
    {
      "title": "MDN JavaScript",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      "title": "Switch Statement - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Switch if-else alternative for multiple value comparison",
    "Break fall-through rokta hai, default unmatched handle karta hai",
    "Object literal modern alternative"
  ]
};

export default lesson;
