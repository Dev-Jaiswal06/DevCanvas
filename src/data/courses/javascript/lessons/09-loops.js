const lesson = {
  "id": 9,
  "slug": "loops",
  "title": "Loops - for, while, do-while",
  "description": "Loops - for, while, do-while ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Beginner"
  ],
  "theory": [
    "Loops repetitive tasks ke liye - code block baar-baar execute.",
    "for loop: jab pata ho kitni baar. 3 parts: init, condition, increment.",
    "while loop: condition-based, iterations count pata na ho.",
    "do-while: while jaisa but ek baar execute zaroor.",
    "for(let i=0;i<n;i++){...}",
    "Infinite loops - condition kabhi false nahi.",
    "break - loop terminate.",
    "continue - current iteration skip.",
    "Nested loops - complexity O(n*m).",
    "Performance optimize karo - unnecessary iterations avoid."
  ],
  "examples": [
    {
      "title": "For Loop",
      "description": "Basic for loop",
      "code": "for(let i=1;i<=5;i++){\n  console.log('Count:',i);\n}",
      "result": "Count:1..5"
    },
    {
      "title": "While Loop",
      "description": "Condition-based",
      "code": "let i=0;\nwhile(i<5){\n  console.log('i is',i);\n  i++;\n}",
      "result": "i is 0..4"
    },
    {
      "title": "do-while",
      "description": "At least ek baar",
      "code": "let j=10;\ndo{\n  console.log('Runs once:',j);\n  j++;\n}while(j<5);",
      "result": "Runs once: 10"
    }
  ],
  "syntax": [
    "for(init;condition;increment){...}",
    "while(condition){...}",
    "do{...}while(condition);",
    "for(let key in obj){...}",
    "for(let val of arr){...}"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "For Loop",
      "language": "javascript",
      "code": "for(let i=1;i<=5;i++){\n  console.log('Count:',i);\n}"
    },
    {
      "title": "While Loop",
      "language": "javascript",
      "code": "let i=0;\nwhile(i<5){\n  console.log('i is',i);\n  i++;\n}"
    },
    {
      "title": "do-while",
      "language": "javascript",
      "code": "let j=10;\ndo{\n  console.log('Runs once:',j);\n  j++;\n}while(j<5);"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "Infinite loop - condition kabhi false na ho",
    "var vs let loop variable scope",
    "Off-by-one error <= vs <"
  ],
  "bestPractices": [
    "Meaningful loop variable names",
    "Break/continue sparingly use karo",
    "Array methods prefer karo over for loops"
  ],
  "tips": [
    "Arrays: for...of, Objects: for...in",
    "Array.forEach() functional approach",
    "Performance: length cache karo"
  ],
  "practice": [
    "For loop se 1-10 print karo",
    "While loop se array elements print karo",
    "Number factorial find karo using loop"
  ],
  "exercise": {
    "instruction": "Function jo 1 se n tak even numbers ka sum return kare.",
    "hint": "i+=2 step 2 mein iterate.",
    "starterCode": "function sumEven(n){\n  let sum=0;\n  for(let i=2;i<=n;i+=2) sum+=i;\n  return sum;\n}\nconsole.log(sumEven(10));"
  },
  "quiz": [
    {
      "question": "do-while ka difference?",
      "options": [
        "Kam iterations",
        "Ek baar execute zaroor",
        "Fast",
        "Koi nahi"
      ],
      "answer": 1,
      "explanation": "Ek baar execute zaroor chahe condition false ho."
    },
    {
      "question": "For loop ke teen parts?",
      "options": [
        "Init,Condition,Increment",
        "Start,End,Step",
        "Begin,Check,Update",
        "Setup,Test,Change"
      ],
      "answer": 0
    }
  ],
  "interview": [
    {
      "question": "for, for...of, for...in difference?",
      "answer": "for(i=0;i<n;i++) traditional, index access. for...of iterates values (arrays). for...in iterates object keys. for...of for arrays, for...in for objects."
    }
  ],
  "assignment": {
    "title": "Loops - for, while, do-while Assignment",
    "description": "Loops - for, while, do-while ka practical assignment.",
    "tasks": [
      "Loops - for, while, do-while ka example likho",
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
      "title": "Loops - for, while, do-while - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Loops repetitive tasks ke liye",
    "for (known count), while (condition-based)",
    "break terminate, continue skip"
  ]
};

export default lesson;
