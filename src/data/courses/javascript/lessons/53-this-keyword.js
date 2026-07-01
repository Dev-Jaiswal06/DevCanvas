const lesson = {
  "id": 53,
  "slug": "this-keyword",
  "title": "this Keyword",
  "description": "this Keyword ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Advanced"
  ],
  "theory": [
    "this current execution context ko refer karta hai.",
    "Global context: this -> window (browser), global (Node).",
    "Function context: this depends on how function called.",
    "Method call: obj.fn() -> this = obj.",
    "Regular function: fn() -> this = window (strict: undefined).",
    "Arrow functions: this = parent scope (lexical this).",
    "Constructor: new Fn() -> this = new object.",
    "Event handler: this = element (unless arrow).",
    "Bind/call/apply: explicit this set karo.",
    "this is not author-time - runtime decide hota hai."
  ],
  "examples": [
    {
      "title": "this Keyword Example",
      "description": "Practical this Keyword example",
      "code": "// this Keyword ka practical example\nconsole.log(\"Learning this Keyword\");\n\n// Code yahan likho\nconst obj={name:\"Test\",greet(){console.log(this.name)}};\nobj.greet();",
      "result": "Expected output in console"
    }
  ],
  "syntax": [
    "// this Keyword basic syntax",
    "// Example pattern",
    "// Is pattern ko follow karein"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "this Keyword Example",
      "language": "javascript",
      "code": "// this Keyword ka practical example\nconsole.log(\"Learning this Keyword\");\n\n// Code yahan likho\nconst obj={name:\"Test\",greet(){console.log(this.name)}};\nobj.greet();"
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
    "instruction": "this Keyword ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// this Keyword ka practical example\nconsole.log(\"Learning this Keyword\");\n\n// Code yahan likho\nconst obj={name:\"Test\",greet(){console.log(this.name)}};\nobj.greet();"
  },
  "quiz": [
    {
      "question": "this Keyword ke baare mein kaunsa statement sahi hai?",
      "options": [
        "Option A - Yeh concept fundamental hai",
        "Option B - Yeh advanced concept hai",
        "Option C - Yeh rarely use hota hai",
        "Option D - Yeh deprecated hai"
      ],
      "answer": 0,
      "explanation": "this Keyword JavaScript ka ek important concept hai."
    },
    {
      "question": "this Keyword ka practical use kya hai?",
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
      "question": "this Keyword ko interview mein kaise explain karenge?",
      "answer": "this Keyword ek advanced concept hai jo JavaScript mein use hota hai. this current execution context ko refer karta hai. Global context: this -> window (browser), global (Node)."
    }
  ],
  "assignment": {
    "title": "this Keyword Assignment",
    "description": "this Keyword ka practical assignment.",
    "tasks": [
      "this Keyword ka example likho",
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
      "title": "this Keyword - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne this Keyword ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
