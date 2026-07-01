const lesson = {
  "id": 54,
  "slug": "call-apply-bind",
  "title": "call, apply, bind",
  "description": "call, apply, bind ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Advanced"
  ],
  "theory": [
    "call(thisArg, arg1, arg2) - invoke with specific this.",
    "apply(thisArg, [args]) - array of arguments with this.",
    "bind(thisArg) - new function with bound this.",
    "call vs apply: call takes list, apply takes array.",
    "bind returns new function (not invoked).",
    "Partial application: bind() + preset arguments.",
    "Method borrowing: obj1.method.call(obj2).",
    "Arrow functions can't be bound (this already lexical).",
    "Performance: call/apply similar, bind slower (new function).",
    "Real use: context fix, function borrowing, currying."
  ],
  "examples": [
    {
      "title": "call, apply, bind Example",
      "description": "Practical call, apply, bind example",
      "code": "// call, apply, bind ka practical example\nconsole.log(\"Learning call, apply, bind\");\n\n// Code yahan likho\nfunction greet(){console.log(`Hello ${this.name}`);}\nconst user={name:\"Rahul\"};\ngreet.call(user);",
      "result": "Expected output in console"
    }
  ],
  "syntax": [
    "// call, apply, bind basic syntax",
    "// Example pattern",
    "// Is pattern ko follow karein"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "call, apply, bind Example",
      "language": "javascript",
      "code": "// call, apply, bind ka practical example\nconsole.log(\"Learning call, apply, bind\");\n\n// Code yahan likho\nfunction greet(){console.log(`Hello ${this.name}`);}\nconst user={name:\"Rahul\"};\ngreet.call(user);"
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
    "instruction": "call, apply, bind ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// call, apply, bind ka practical example\nconsole.log(\"Learning call, apply, bind\");\n\n// Code yahan likho\nfunction greet(){console.log(`Hello ${this.name}`);}\nconst user={name:\"Rahul\"};\ngreet.call(user);"
  },
  "quiz": [
    {
      "question": "call, apply, bind ke baare mein kaunsa statement sahi hai?",
      "options": [
        "Option A - Yeh concept fundamental hai",
        "Option B - Yeh advanced concept hai",
        "Option C - Yeh rarely use hota hai",
        "Option D - Yeh deprecated hai"
      ],
      "answer": 0,
      "explanation": "call, apply, bind JavaScript ka ek important concept hai."
    },
    {
      "question": "call, apply, bind ka practical use kya hai?",
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
      "question": "call, apply, bind ko interview mein kaise explain karenge?",
      "answer": "call, apply, bind ek advanced concept hai jo JavaScript mein use hota hai. call(thisArg, arg1, arg2) - invoke with specific this. apply(thisArg, [args]) - array of arguments with this."
    }
  ],
  "assignment": {
    "title": "call, apply, bind Assignment",
    "description": "call, apply, bind ka practical assignment.",
    "tasks": [
      "call, apply, bind ka example likho",
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
      "title": "call, apply, bind - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne call, apply, bind ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
