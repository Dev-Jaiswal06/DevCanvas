const lesson = {
  "id": 55,
  "slug": "prototypes",
  "title": "Prototypes & Inheritance",
  "description": "Prototypes & Inheritance ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Advanced"
  ],
  "theory": [
    "JavaScript inheritance prototype-based hai (not class-based).",
    "Every object has [[Prototype]] (__proto__) reference.",
    "Property lookup: object -> prototype -> ... -> null.",
    "prototype property exists on functions (not on instances).",
    "Constructor.prototype - instance ka prototype.",
    "Object.create(proto) - object with specified prototype.",
    "Method inheritance: child object parent methods access kar sakta hai.",
    "Prototype chain - property search up the chain.",
    "hasOwnProperty() - own vs inherited property check.",
    "ES6 classes are syntactic sugar over prototypes."
  ],
  "examples": [
    {
      "title": "Prototypes & Inheritance Example",
      "description": "Practical Prototypes & Inheritance example",
      "code": "// Prototypes & Inheritance ka practical example\nconsole.log(\"Learning Prototypes & Inheritance\");\n\n// Code yahan likho\nfunction Person(name){this.name=name;}\nPerson.prototype.greet=function(){return \"Hi \"+this.name};\nconst p=new Person(\"Rahul\");\nconsole.log(p.greet());",
      "result": "Expected output in console"
    }
  ],
  "syntax": [
    "// Prototypes & Inheritance basic syntax",
    "// Example pattern",
    "// Is pattern ko follow karein"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Prototypes & Inheritance Example",
      "language": "javascript",
      "code": "// Prototypes & Inheritance ka practical example\nconsole.log(\"Learning Prototypes & Inheritance\");\n\n// Code yahan likho\nfunction Person(name){this.name=name;}\nPerson.prototype.greet=function(){return \"Hi \"+this.name};\nconst p=new Person(\"Rahul\");\nconsole.log(p.greet());"
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
    "instruction": "Prototypes & Inheritance ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Prototypes & Inheritance ka practical example\nconsole.log(\"Learning Prototypes & Inheritance\");\n\n// Code yahan likho\nfunction Person(name){this.name=name;}\nPerson.prototype.greet=function(){return \"Hi \"+this.name};\nconst p=new Person(\"Rahul\");\nconsole.log(p.greet());"
  },
  "quiz": [
    {
      "question": "Prototypes & Inheritance ke baare mein kaunsa statement sahi hai?",
      "options": [
        "Option A - Yeh concept fundamental hai",
        "Option B - Yeh advanced concept hai",
        "Option C - Yeh rarely use hota hai",
        "Option D - Yeh deprecated hai"
      ],
      "answer": 0,
      "explanation": "Prototypes & Inheritance JavaScript ka ek important concept hai."
    },
    {
      "question": "Prototypes & Inheritance ka practical use kya hai?",
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
      "question": "Prototypes & Inheritance ko interview mein kaise explain karenge?",
      "answer": "Prototypes & Inheritance ek advanced concept hai jo JavaScript mein use hota hai. JavaScript inheritance prototype-based hai (not class-based). Every object has [[Prototype]] (__proto__) reference."
    }
  ],
  "assignment": {
    "title": "Prototypes & Inheritance Assignment",
    "description": "Prototypes & Inheritance ka practical assignment.",
    "tasks": [
      "Prototypes & Inheritance ka example likho",
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
      "title": "Prototypes & Inheritance - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Prototypes & Inheritance ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
