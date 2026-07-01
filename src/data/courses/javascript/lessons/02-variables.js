const lesson = {
  "id": 2,
  "slug": "variables",
  "title": "Variables - var, let, const",
  "description": "Variables - var, let, const ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Beginner"
  ],
  "theory": [
    "Variable ek container hai jisme data store karte hain.",
    "3 tarike: var (old), let (ES6), const (ES6).",
    "var function-scoped - poore function mein accessible.",
    "let block-scoped - sirf us {} block mein.",
    "const bhi block-scoped, value reassign nahi kar sakte.",
    "var ko redeclare kar sakte ho, let/const ko nahi.",
    "const use karo jab value change nahi karni, let jab karni ho.",
    "Variable names camelCase mein likho, case-sensitive hain.",
    "Var avoid karo modern JS mein - scope issues create karta hai.",
    "Default value undefined hoti hai agar assign nahi karte."
  ],
  "examples": [
    {
      "title": "var vs let vs const",
      "description": "Comparison",
      "code": "var name='Rahul';\nlet age=25;\nconst PI=3.14;\nconsole.log(name,age,PI);",
      "result": "Rahul 25 3.14"
    },
    {
      "title": "Block Scope",
      "description": "let/const block scope",
      "code": "{\n  var x=10;\n  let y=20;\n}\nconsole.log(x);\n// console.log(y); // Error",
      "result": "10, fir Error"
    },
    {
      "title": "const Objects",
      "description": "Const object properties mutate",
      "code": "const user={name:'Rahul'};\nuser.name='Amit';\nconsole.log(user.name);",
      "result": "Amit"
    }
  ],
  "syntax": [
    "var name = value;",
    "let name = value;",
    "const name = value;"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "var vs let vs const",
      "language": "javascript",
      "code": "var name='Rahul';\nlet age=25;\nconst PI=3.14;\nconsole.log(name,age,PI);"
    },
    {
      "title": "Block Scope",
      "language": "javascript",
      "code": "{\n  var x=10;\n  let y=20;\n}\nconsole.log(x);\n// console.log(y); // Error"
    },
    {
      "title": "const Objects",
      "language": "javascript",
      "code": "const user={name:'Rahul'};\nuser.name='Amit';\nconsole.log(user.name);"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "const declare karte time value assign bhoolna",
    "let/const redeclare same scope mein",
    "Var use karna jab let/const better ho"
  ],
  "bestPractices": [
    "Default const use karo, let jab value change karni ho",
    "Var avoid karo",
    "Meaningful variable names use karo"
  ],
  "tips": [
    "const sirf reassignment rokta hai, object properties mutate ho sakti hain",
    "Variable name meaningful rakho",
    "Multiple variables ek line mein: let a,b,c;"
  ],
  "practice": [
    "Teen variables banao - const, let, var teeno ka use karke",
    "Ek object const se banao aur uski property change karo",
    "Block scope test karo"
  ],
  "exercise": {
    "instruction": "Program likho jisme const, let, var teeno ka use ho.",
    "hint": "Const object ki properties change ho sakti hain.",
    "starterCode": "const person={name:'',age:0};\nlet favoriteColor='';\nvar counter=0;\nconsole.log(person,favoriteColor,counter);"
  },
  "quiz": [
    {
      "question": "const variable ki value ko?",
      "options": [
        "Reassign kar sakte hain",
        "Reassign nahi kar sakte",
        "Sirf number mein reassign",
        "Sirf same type mein reassign"
      ],
      "answer": 1,
      "explanation": "Const ki value reassign nahi kar sakte."
    },
    {
      "question": "Kaunsa block scope follow karta hai?",
      "options": [
        "var",
        "let",
        "const aur let dono",
        "Sirf const"
      ],
      "answer": 2,
      "explanation": "Let aur const block-scoped hain."
    }
  ],
  "interview": [
    {
      "question": "var, let, const difference?",
      "answer": "Var function-scoped, hoisting pe undefined. Let/const block-scoped ES6, Temporal Dead Zone. Const reassign nahi ho sakta. Best: const default, let when needed, var avoid."
    }
  ],
  "assignment": {
    "title": "Variables - var, let, const Assignment",
    "description": "Variables - var, let, const ka practical assignment.",
    "tasks": [
      "Variables - var, let, const ka example likho",
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
      "title": "Variables - var, let, const - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "3 tarike: var (legacy), let (mutable), const (immutable reference)",
    "Let aur const block-scoped, var function-scoped",
    "Modern JS mein const/let use karo, var avoid karo"
  ]
};

export default lesson;
