const lesson = {
  "id": 40,
  "slug": "custom-events",
  "title": "Custom Events",
  "description": "Custom Events ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Advanced"
  ],
  "theory": [
    "Custom events developer-defined events hain.",
    "new CustomEvent('eventName',{detail:{...}}).",
    "dispatchEvent(event) - event trigger karo.",
    "addEventListener('eventName',handler) - listen karo.",
    "Bubbling: {bubbles:true} option.",
    "Cancelable: {cancelable:true} option.",
    "Composed: shadow DOM traversal ke liye.",
    "Custom events decoupled communication ke liye.",
    "Event bus pattern - component communication without props.",
    "Web components mein custom events common pattern."
  ],
  "examples": [
    {
      "title": "Custom Events Example",
      "description": "Practical Custom Events example",
      "code": "// Custom Events ka practical example\nconsole.log(\"Learning Custom Events\");\n\n// Code yahan likho\n// Basic Custom Events example\nconsole.log(\"Learning Custom Events\");",
      "result": "Expected output in console"
    }
  ],
  "syntax": [
    "// Custom Events basic syntax",
    "// Example pattern",
    "// Is pattern ko follow karein"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Custom Events Example",
      "language": "javascript",
      "code": "// Custom Events ka practical example\nconsole.log(\"Learning Custom Events\");\n\n// Code yahan likho\n// Basic Custom Events example\nconsole.log(\"Learning Custom Events\");"
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
    "instruction": "Custom Events ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Custom Events ka practical example\nconsole.log(\"Learning Custom Events\");\n\n// Code yahan likho\n// Basic Custom Events example\nconsole.log(\"Learning Custom Events\");"
  },
  "quiz": [
    {
      "question": "Custom Events ke baare mein kaunsa statement sahi hai?",
      "options": [
        "Option A - Yeh concept fundamental hai",
        "Option B - Yeh advanced concept hai",
        "Option C - Yeh rarely use hota hai",
        "Option D - Yeh deprecated hai"
      ],
      "answer": 0,
      "explanation": "Custom Events JavaScript ka ek important concept hai."
    },
    {
      "question": "Custom Events ka practical use kya hai?",
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
      "question": "Custom Events ko interview mein kaise explain karenge?",
      "answer": "Custom Events ek advanced concept hai jo JavaScript mein use hota hai. Custom events developer-defined events hain. new CustomEvent('eventName',{detail:{...}})."
    }
  ],
  "assignment": {
    "title": "Custom Events Assignment",
    "description": "Custom Events ka practical assignment.",
    "tasks": [
      "Custom Events ka example likho",
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
      "title": "Custom Events - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Custom Events ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
