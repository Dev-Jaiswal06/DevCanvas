const lesson = {
  "id": 1,
  "slug": "introduction",
  "title": "Introduction to JavaScript",
  "description": "Introduction to JavaScript ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "10 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Beginner"
  ],
  "theory": [
    "JavaScript ek high-level, interpreted programming language hai jo web pages ko interactive banata hai.",
    "HTML aur CSS se sirf structure aur styling aati hai, JavaScript se actual functionality aati hai - clicks, animations, form validation, sab kuch.",
    "JavaScript browser mein client-side run hota hai, but Node.js ke saath server-side bhi use kar sakte ho.",
    "JavaScript ka official standard ECMAScript hai. ES6 mein bahut saare new features aaye jaise let/const, arrow functions, classes.",
    "Aaj JavaScript duniya ki sabse popular programming language hai - web, mobile, desktop, AI har jagah use hoti hai.",
    "JavaScript weakly typed hai - variables ka type automatically decide hota hai.",
    "JavaScript single-threaded hai but asynchronous programming support karti hai.",
    "Har modern browser mein JavaScript engine built-in hota hai - Chrome mein V8, Firefox mein SpiderMonkey.",
    "JavaScript developer tools (F12) mein console tab mein directly test kar sakte ho.",
    "npm pe millions of packages available hain, har cheez ki library mil jayegi."
  ],
  "examples": [
    {
      "title": "Hello World",
      "description": "Basic JavaScript program",
      "code": "console.log(\"Hello, JavaScript!\");",
      "result": "Console mein \"Hello, JavaScript!\" print hoga"
    },
    {
      "title": "Variable Declaration",
      "description": "JS mein variables declare karna",
      "code": "let name=\"Rahul\";\nconst age=25;\nconsole.log(name,age);",
      "result": "Rahul 25"
    },
    {
      "title": "Simple Calculation",
      "description": "Arithmetic operations",
      "code": "let a=10,b=5;\nconsole.log('Sum:',a+b);\nconsole.log('Product:',a*b);",
      "result": "Sum: 15\nProduct: 50"
    }
  ],
  "syntax": [
    "console.log(\"Hello World!\");",
    "let variableName = value;",
    "// Single-line comment"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Hello World",
      "language": "javascript",
      "code": "console.log(\"Hello, JavaScript!\");"
    },
    {
      "title": "Variable Declaration",
      "language": "javascript",
      "code": "let name=\"Rahul\";\nconst age=25;\nconsole.log(name,age);"
    },
    {
      "title": "Simple Calculation",
      "language": "javascript",
      "code": "let a=10,b=5;\nconsole.log('Sum:',a+b);\nconsole.log('Product:',a*b);"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "Semicolons bhoolna - optional hai but lagana best practice",
    "Case sensitivity ka dhyan na rakhna",
    "console.log() ko miss karke directly browser console mein JS likh dena"
  ],
  "bestPractices": [
    "Hamesha meaningful variable names use karo",
    "Code consistent formatting mein likho",
    "JS file HTML ke end mein include karo"
  ],
  "tips": [
    "Browser console (F12) mein directly JS test kar sakte ho",
    "VS Code Live Server extension install karo",
    "JS error dhyan se padho - browser error line number bata deta hai"
  ],
  "practice": [
    "Browser console mein apna naam print karo",
    "Do variables banao - string aur number",
    "Ek simple calculation karo using JS"
  ],
  "exercise": {
    "instruction": "Browser console mein ek program likho jo aapka naam, age aur city print kare.",
    "hint": "let aur const use karo.",
    "starterCode": "let myName=\"\";\nlet myAge= ;\nconst myCity=\"\";\nconsole.log();"
  },
  "quiz": [
    {
      "question": "JavaScript sabse zyada kahan use hota hai?",
      "options": [
        "Web development",
        "Mobile apps",
        "Desktop software",
        "Game development"
      ],
      "answer": 0,
      "explanation": "JS primarily web development mein use hota hai."
    },
    {
      "question": "JS ka official standard kya kehlata hai?",
      "options": [
        "TypeScript",
        "ECMAScript",
        "CoffeeScript",
        "Dart"
      ],
      "answer": 1,
      "explanation": "JS ka official standard ECMAScript hai."
    }
  ],
  "interview": [
    {
      "question": "JavaScript kya hai?",
      "answer": "High-level, interpreted language for web. Features: weakly typed, first-class functions, prototype inheritance, async support, cross-platform."
    }
  ],
  "assignment": {
    "title": "Introduction to JavaScript Assignment",
    "description": "Introduction to JavaScript ka practical assignment.",
    "tasks": [
      "Introduction to JavaScript ka example likho",
      "Error handling add karo",
      "Code optimize karo",
      "Documentation add karo"
    ],
    "submission": "Code GitHub pe push karo",
    "deadline": "1 week"
  },
  "resources": [
    {
      "title": "MDN JS Guide",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
    },
    {
      "title": "JavaScript Info",
      "url": "https://javascript.info/"
    },
    {
      "title": "FreeCodeCamp JS",
      "url": "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
    }
  ],
  "summary": [
    "JS web pages mein interactivity add karta hai",
    "High-level, interpreted, weakly typed, multi-paradigm",
    "Browser console mein code test karna sabse important hai"
  ]
};

export default lesson;
