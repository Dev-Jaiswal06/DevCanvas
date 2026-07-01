const lesson = {
  "id": 51,
  "slug": "closures",
  "title": "Closures",
  "description": "Closures ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Advanced"
  ],
  "theory": [
    "Closure function + its lexical environment ka combination.",
    "Inner function outer function ke variables access kar sakti hai.",
    "Closure variables outer function return ke baad bhi accessible.",
    "Practical use: data privacy, factory functions, modules.",
    "Data privacy via closure - private variables simulation.",
    "Module pattern: IIFE + closure for encapsulated state.",
    "Memory implications - closure variables garbage collected nahi hote.",
    "Loop closure issue: var function hoisting creates problem.",
    "Fix: let block scope ya IIFE for each iteration.",
    "React hooks (useState, useEffect) closure concept use karte hain."
  ],
  "examples": [
    {
      "title": "Closures Example",
      "description": "Practical Closures example",
      "code": "// Closures ka practical example\nconsole.log(\"Learning Closures\");\n\n// Code yahan likho\nfunction outer(){\n  let x=10;\n  return function inner(){return x};\n}\nconst fn=outer();\nconsole.log(fn()); // 10",
      "result": "Expected output in console"
    }
  ],
  "syntax": [
    "// Closures basic syntax",
    "// Example pattern",
    "// Is pattern ko follow karein"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Closures Example",
      "language": "javascript",
      "code": "// Closures ka practical example\nconsole.log(\"Learning Closures\");\n\n// Code yahan likho\nfunction outer(){\n  let x=10;\n  return function inner(){return x};\n}\nconst fn=outer();\nconsole.log(fn()); // 10"
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
    "instruction": "Closures ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Closures ka practical example\nconsole.log(\"Learning Closures\");\n\n// Code yahan likho\nfunction outer(){\n  let x=10;\n  return function inner(){return x};\n}\nconst fn=outer();\nconsole.log(fn()); // 10"
  },
  "quiz": [
    {
      "question": "Closures ke baare mein kaunsa statement sahi hai?",
      "options": [
        "Option A - Yeh concept fundamental hai",
        "Option B - Yeh advanced concept hai",
        "Option C - Yeh rarely use hota hai",
        "Option D - Yeh deprecated hai"
      ],
      "answer": 0,
      "explanation": "Closures JavaScript ka ek important concept hai."
    },
    {
      "question": "Closures ka practical use kya hai?",
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
      "question": "Closures ko interview mein kaise explain karenge?",
      "answer": "Closures ek advanced concept hai jo JavaScript mein use hota hai. Closure function + its lexical environment ka combination. Inner function outer function ke variables access kar sakti hai."
    }
  ],
  "assignment": {
    "title": "Closures Assignment",
    "description": "Closures ka practical assignment.",
    "tasks": [
      "Closures ka example likho",
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
      "title": "Closures - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Closures ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
