const lesson = {
  "id": 35,
  "slug": "event-propagation",
  "title": "Event Propagation",
  "description": "Event Propagation ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Intermediate",
  "duration": "20 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Intermediate"
  ],
  "theory": [
    "Event propagation 3 phases: capturing, target, bubbling.",
    "Capturing: root se target tak (niche).",
    "Bubbling: target se root tak (upar) - default behavior.",
    "e.stopPropagation() - further propagation stop.",
    "e.stopImmediatePropagation() - same element ke other listeners bhi stop.",
    "e.preventDefault() - default behavior cancel (form submit, link).",
    "Event delegation: parent pe listener, child events handle.",
    "Delegation useful for dynamic elements.",
    "Capturing phase use: addEventListener('click',fn,true).",
    "Most cases bubbling use karte hain - natural behavior."
  ],
  "examples": [
    {
      "title": "Event Propagation Example",
      "description": "Practical Event Propagation example",
      "code": "// Event Propagation ka practical example\nconsole.log(\"Learning Event Propagation\");\n\n// Code yahan likho\n// Basic Event Propagation example\nconsole.log(\"Learning Event Propagation\");",
      "result": "Expected output in console"
    }
  ],
  "syntax": [
    "// Event Propagation basic syntax",
    "// Example pattern",
    "// Is pattern ko follow karein"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Event Propagation Example",
      "language": "javascript",
      "code": "// Event Propagation ka practical example\nconsole.log(\"Learning Event Propagation\");\n\n// Code yahan likho\n// Basic Event Propagation example\nconsole.log(\"Learning Event Propagation\");"
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
    "instruction": "Event Propagation ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Event Propagation ka practical example\nconsole.log(\"Learning Event Propagation\");\n\n// Code yahan likho\n// Basic Event Propagation example\nconsole.log(\"Learning Event Propagation\");"
  },
  "quiz": [
    {
      "question": "Event Propagation ke baare mein kaunsa statement sahi hai?",
      "options": [
        "Option A - Yeh concept fundamental hai",
        "Option B - Yeh advanced concept hai",
        "Option C - Yeh rarely use hota hai",
        "Option D - Yeh deprecated hai"
      ],
      "answer": 0,
      "explanation": "Event Propagation JavaScript ka ek important concept hai."
    },
    {
      "question": "Event Propagation ka practical use kya hai?",
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
      "question": "Event Propagation ko interview mein kaise explain karenge?",
      "answer": "Event Propagation ek intermediate concept hai jo JavaScript mein use hota hai. Event propagation 3 phases: capturing, target, bubbling. Capturing: root se target tak (niche)."
    }
  ],
  "assignment": {
    "title": "Event Propagation Assignment",
    "description": "Event Propagation ka practical assignment.",
    "tasks": [
      "Event Propagation ka example likho",
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
      "title": "Event Propagation - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Event Propagation ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
