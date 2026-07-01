const lesson = {
  "id": 67,
  "slug": "bigint",
  "title": "BigInt",
  "description": "BigInt ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Advanced"
  ],
  "theory": [
    "BigInt arbitrary precision integers ke liye (>2^53-1).",
    "Syntax: const big = 12345678901234567890n or BigInt('123').",
    "Operations: +, -, *, /, %, ** all work.",
    "Cannot mix with regular numbers - TypeError.",
    "Comparisons: == works, === doesn't (different types).",
    "toString() - convert to string.",
    "typeof bigint -> 'bigint'.",
    "BigInt Math object methods support nahi karta.",
    "Serialization: JSON.stringify doesn't support BigInt.",
    "Use: cryptography, large numbers, scientific computing."
  ],
  "examples": [
    {
      "title": "BigInt Example",
      "description": "Practical BigInt example",
      "code": "// BigInt ka practical example\nconsole.log(\"Learning BigInt\");\n\n// Code yahan likho\n// Basic BigInt example\nconsole.log(\"Learning BigInt\");",
      "result": "Expected output in console"
    }
  ],
  "syntax": [
    "// BigInt basic syntax",
    "// Example pattern",
    "// Is pattern ko follow karein"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "BigInt Example",
      "language": "javascript",
      "code": "// BigInt ka practical example\nconsole.log(\"Learning BigInt\");\n\n// Code yahan likho\n// Basic BigInt example\nconsole.log(\"Learning BigInt\");"
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
    "instruction": "BigInt ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// BigInt ka practical example\nconsole.log(\"Learning BigInt\");\n\n// Code yahan likho\n// Basic BigInt example\nconsole.log(\"Learning BigInt\");"
  },
  "quiz": [
    {
      "question": "BigInt ke baare mein kaunsa statement sahi hai?",
      "options": [
        "Option A - Yeh concept fundamental hai",
        "Option B - Yeh advanced concept hai",
        "Option C - Yeh rarely use hota hai",
        "Option D - Yeh deprecated hai"
      ],
      "answer": 0,
      "explanation": "BigInt JavaScript ka ek important concept hai."
    },
    {
      "question": "BigInt ka practical use kya hai?",
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
      "question": "BigInt ko interview mein kaise explain karenge?",
      "answer": "BigInt ek advanced concept hai jo JavaScript mein use hota hai. BigInt arbitrary precision integers ke liye (>2^53-1). Syntax: const big = 12345678901234567890n or BigInt('123')."
    }
  ],
  "assignment": {
    "title": "BigInt Assignment",
    "description": "BigInt ka practical assignment.",
    "tasks": [
      "BigInt ka example likho",
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
      "title": "BigInt - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne BigInt ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
