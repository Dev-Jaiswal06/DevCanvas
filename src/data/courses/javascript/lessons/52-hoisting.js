const lesson = {
  "id": 52,
  "slug": "hoisting",
  "title": "Hoisting in JavaScript",
  "description": "Hoisting in JavaScript ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Advanced"
  ],
  "theory": [
    "Hoisting - declarations code execution se pehle scope top move ho jati hain.",
    "Function declarations completely hoisted - call before definition.",
    "var hoisted but initialized as undefined.",
    "let/const hoisted but in TDZ - access before declaration error.",
    "Function expressions hoisted nahi hain (as variable hoisting).",
    "Class declarations hoisted but not initialized (TDZ).",
    "Hoisting behavior: declaration move up, initialization remains.",
    "var hoisting bugs cause kar sakta hai - undefined access.",
    "Good practice: declarations top pe rakho.",
    "React/JS mein bhi hoisting same rules follow karti hai."
  ],
  "examples": [
    {
      "title": "Hoisting in JavaScript Example",
      "description": "Practical Hoisting in JavaScript example",
      "code": "// Hoisting in JavaScript ka practical example\nconsole.log(\"Learning Hoisting in JavaScript\");\n\n// Code yahan likho\n// Basic Hoisting in JavaScript example\nconsole.log(\"Learning Hoisting in JavaScript\");",
      "result": "Expected output in console"
    }
  ],
  "syntax": [
    "// Hoisting in JavaScript basic syntax",
    "// Example pattern",
    "// Is pattern ko follow karein"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Hoisting in JavaScript Example",
      "language": "javascript",
      "code": "// Hoisting in JavaScript ka practical example\nconsole.log(\"Learning Hoisting in JavaScript\");\n\n// Code yahan likho\n// Basic Hoisting in JavaScript example\nconsole.log(\"Learning Hoisting in JavaScript\");"
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
    "instruction": "Hoisting in JavaScript ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Hoisting in JavaScript ka practical example\nconsole.log(\"Learning Hoisting in JavaScript\");\n\n// Code yahan likho\n// Basic Hoisting in JavaScript example\nconsole.log(\"Learning Hoisting in JavaScript\");"
  },
  "quiz": [
    {
      "question": "Hoisting in JavaScript ke baare mein kaunsa statement sahi hai?",
      "options": [
        "Option A - Yeh concept fundamental hai",
        "Option B - Yeh advanced concept hai",
        "Option C - Yeh rarely use hota hai",
        "Option D - Yeh deprecated hai"
      ],
      "answer": 0,
      "explanation": "Hoisting in JavaScript JavaScript ka ek important concept hai."
    },
    {
      "question": "Hoisting in JavaScript ka practical use kya hai?",
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
      "question": "Hoisting in JavaScript ko interview mein kaise explain karenge?",
      "answer": "Hoisting in JavaScript ek advanced concept hai jo JavaScript mein use hota hai. Hoisting - declarations code execution se pehle scope top move ho jati hain. Function declarations completely hoisted - call before definition."
    }
  ],
  "assignment": {
    "title": "Hoisting in JavaScript Assignment",
    "description": "Hoisting in JavaScript ka practical assignment.",
    "tasks": [
      "Hoisting in JavaScript ka example likho",
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
      "title": "Hoisting in JavaScript - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Hoisting in JavaScript ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
