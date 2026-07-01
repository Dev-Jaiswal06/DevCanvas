const lesson = {
  "id": 6,
  "slug": "conditionals",
  "title": "Conditional Statements - if/else",
  "description": "Conditional Statements - if/else ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Beginner"
  ],
  "theory": [
    "if: condition true hai to code execute.",
    "else: condition false to else block.",
    "else if: multiple conditions check.",
    "Condition boolean context mein evaluate hoti hai.",
    "Nested conditions possible but avoid.",
    "Truthy: true, non-zero, non-empty, objects, arrays.",
    "Falsy: false, 0, '', null, undefined, NaN.",
    "Early return pattern: nesting kam hoti hai.",
    "Guard clause: pehle invalid cases handle karo.",
    "Multiple conditions && aur || se combine karo."
  ],
  "examples": [
    {
      "title": "Basic if/else",
      "description": "Simple condition",
      "code": "let age=18;\nif(age>=18) console.log('Can vote');\nelse console.log('Too young');",
      "result": "Can vote"
    },
    {
      "title": "else if ladder",
      "description": "Multiple conditions",
      "code": "let score=85;\nif(score>=90) console.log('A');\nelse if(score>=75) console.log('B');\nelse if(score>=60) console.log('C');\nelse console.log('F');",
      "result": "B"
    },
    {
      "title": "Truthy Check",
      "description": "Truthy/falsy behavior",
      "code": "let name='';\nif(name) console.log('Has name');\nelse console.log('No name');",
      "result": "No name"
    }
  ],
  "syntax": [
    "if(condition){...}",
    "if(c){...}else{...}",
    "if(c1){...}else if(c2){...}else{...}"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Basic if/else",
      "language": "javascript",
      "code": "let age=18;\nif(age>=18) console.log('Can vote');\nelse console.log('Too young');"
    },
    {
      "title": "else if ladder",
      "language": "javascript",
      "code": "let score=85;\nif(score>=90) console.log('A');\nelse if(score>=75) console.log('B');\nelse if(score>=60) console.log('C');\nelse console.log('F');"
    },
    {
      "title": "Truthy Check",
      "language": "javascript",
      "code": "let name='';\nif(name) console.log('Has name');\nelse console.log('No name');"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "= aur ==/=== confuse karna",
    "else if space bhoolna (elseif)",
    "Curly braces {} bhoolna"
  ],
  "bestPractices": [
    "Complex conditions variables mein assign karo",
    "Deep nesting avoid - early return use karo",
    "Switch consider karo for multiple fixed values"
  ],
  "tips": [
    "Guard clause pattern",
    "Ternary for simple if-else",
    "Object literal lookup fast hai"
  ],
  "practice": [
    "Number positive/negative/zero check",
    "Age input -> vote eligibility",
    "Simple login system"
  ],
  "exercise": {
    "instruction": "Function jo score le aur grade return kare (A:90+, B:75+, C:60+, D:45+, F:<45).",
    "hint": "else if ladder use karo.",
    "starterCode": "function getGrade(score){\n  if(typeof score!=='number'||score<0||score>100) return 'Invalid';\n  if(score>=90) return 'A';\n  if(score>=75) return 'B';\n  if(score>=60) return 'C';\n  if(score>=45) return 'D';\n  return 'F';\n}\nconsole.log(getGrade(85));"
  },
  "quiz": [
    {
      "question": "if(0) console.log('truthy') else console.log('falsy')?",
      "options": [
        "truthy",
        "falsy",
        "Error",
        "undefined"
      ],
      "answer": 1,
      "explanation": "0 falsy hai."
    },
    {
      "question": "Multiple conditions ke liye kaunsa?",
      "options": [
        "if-else if-else",
        "for loop",
        "while loop",
        "do-while"
      ],
      "answer": 0,
      "explanation": "else if ladder use hota hai."
    }
  ],
  "interview": [
    {
      "question": "if-else vs switch?",
      "answer": "If-else conditions evaluate, switch specific value match (===). Switch readable for 3+ fixed values. Fall-through support. Object literal modern alternative."
    }
  ],
  "assignment": {
    "title": "Conditional Statements - if/else Assignment",
    "description": "Conditional Statements - if/else ka practical assignment.",
    "tasks": [
      "Conditional Statements - if/else ka example likho",
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
      "title": "Conditional Statements - if/else - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "if-else decision making ke liye",
    "Falsy: false,0,'',null,undefined,NaN",
    "Deep nesting avoid - early return use karo"
  ]
};

export default lesson;
