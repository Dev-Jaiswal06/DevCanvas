const lesson = {
  "id": 66,
  "slug": "optional-chaining",
  "title": "Optional Chaining (?.)",
  "description": "Optional Chaining (?.) ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Advanced"
  ],
  "theory": [
    "?. safe property access - if null/undefined, returns undefined.",
    "obj?.prop - prop access only if obj not null/undefined.",
    "obj?.method?.() - method call only if exists.",
    "arr?.[index] - array access only if arr exists.",
    "Short-circuit: obj?.nested?.prop - stops on first null/undefined.",
    "Prevents Cannot read property of undefined TypeError.",
    "Optional chaining in assignment: obj?.prop = val (no).",
    "Nullish coalescing ?? with ?.: obj?.prop ?? 'default'.",
    "Browser support: ES2020, modern browsers all support.",
    "React: user?.name ?? 'Guest' - clean data rendering."
  ],
  "examples": [
    {
      "title": "Optional Chaining (?.) Example",
      "description": "Practical Optional Chaining (?.) example",
      "code": "// Optional Chaining (?.) ka practical example\nconsole.log(\"Learning Optional Chaining (?.)\");\n\n// Code yahan likho\n// Basic Optional Chaining (?.) example\nconsole.log(\"Learning Optional Chaining (?.)\");",
      "result": "Expected output in console"
    }
  ],
  "syntax": [
    "// Optional Chaining (?.) basic syntax",
    "// Example pattern",
    "// Is pattern ko follow karein"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Optional Chaining (?.) Example",
      "language": "javascript",
      "code": "// Optional Chaining (?.) ka practical example\nconsole.log(\"Learning Optional Chaining (?.)\");\n\n// Code yahan likho\n// Basic Optional Chaining (?.) example\nconsole.log(\"Learning Optional Chaining (?.)\");"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "Syntax errors ko ignore karna",
    "Case sensitivity ka dhyan na rakhna",
    "Edge cases handle na karna"
  ],
  "bestPractices": [
    "Clean aur readable code likho",
    "Modular approach follow karo",
    "Consistent naming conventions use karo"
  ],
  "tips": [
    "Browser DevTools ka use karo debugging ke liye",
    "Documentation regularly padho",
    "Practical projects mein practice karo"
  ],
  "practice": [
    "Is topic ke 3 practical examples khud likho",
    "Real-world scenario mein apply karo",
    "Kisi existing project mein use karo"
  ],
  "exercise": {
    "instruction": "Optional Chaining (?.) ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Optional Chaining (?.) ka practical example\nconsole.log(\"Learning Optional Chaining (?.)\");\n\n// Code yahan likho\n// Basic Optional Chaining (?.) example\nconsole.log(\"Learning Optional Chaining (?.)\");"
  },
  "quiz": [
    {
      "question": "Optional Chaining (?.) ke baare mein kaunsa statement sahi hai?",
      "options": [
        "Option A - Yeh concept fundamental hai",
        "Option B - Yeh advanced concept hai",
        "Option C - Yeh rarely use hota hai",
        "Option D - Yeh deprecated hai"
      ],
      "answer": 0,
      "explanation": "Optional Chaining (?.) JavaScript ka ek important concept hai."
    },
    {
      "question": "Optional Chaining (?.) ka practical use kya hai?",
      "options": [
        "Web development mein",
        "Mobile apps mein",
        "Both A and B",
        "None of the above"
      ],
      "answer": 2,
      "explanation": "Is concept ka use multiple domains mein hota hai."
    }
  ],
  "interview": [
    {
      "question": "Optional Chaining (?.) ko interview mein kaise explain karenge?",
      "answer": "Optional Chaining (?.) ek advanced concept hai jo JavaScript mein use hota hai. ?. safe property access - if null/undefined, returns undefined. obj?.prop - prop access only if obj not null/undefined."
    }
  ],
  "assignment": {
    "title": "Optional Chaining (?.) Assignment",
    "description": "Optional Chaining (?.) ka practical assignment.",
    "tasks": [
      "Optional Chaining (?.) ka example likho",
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
      "title": "Optional Chaining (?.) - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Optional Chaining (?.) ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
