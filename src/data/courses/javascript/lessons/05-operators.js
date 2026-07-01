const lesson = {
  "id": 5,
  "slug": "operators",
  "title": "Operators in JavaScript",
  "description": "Operators in JavaScript ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Beginner"
  ],
  "theory": [
    "Arithmetic: +, -, *, /, %, ** (exponentiation).",
    "Assignment: =, +=, -=, *=, /=, %=.",
    "Comparison: ==, ===, !=, !==, >, <, >=, <=.",
    "Logical: && (AND), || (OR), ! (NOT).",
    "Increment/Decrement: ++, -- (prefix/postfix).",
    "Ternary: condition ? valueIfTrue : valueIfFalse.",
    "typeof operator: variable ka type batata hai.",
    "Operator precedence decide karta hai kaunsa pehle evaluate hoga.",
    "Short-circuit evaluation: && aur || shortcut lete hain.",
    "?? (nullish coalescing) null/undefined handle karta hai."
  ],
  "examples": [
    {
      "title": "Arithmetic",
      "description": "Basic math",
      "code": "let a=10,b=3;\nconsole.log(a+b,a-b,a*b,a/b,a%b,a**b);",
      "result": "13 7 30 3.33 1 1000"
    },
    {
      "title": "Logical & Comparison",
      "description": "Comparison operators",
      "code": "let x=5,y=10;\nconsole.log(x>3&&y<20);\nconsole.log(x>10||y>5);\nconsole.log(x==='5');",
      "result": "true\ntrue\nfalse"
    },
    {
      "title": "Ternary",
      "description": "Short if-else",
      "code": "let age=20;\nlet access=age>=18?'Allowed':'Denied';\nconsole.log(access);",
      "result": "Allowed"
    }
  ],
  "syntax": [
    "a+b, a-b, a*b, a/b, a%b, a**b",
    "a>b, a===b, a!==b",
    "condition ? val1 : val2",
    "a&&b, a||b, !a"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Arithmetic",
      "language": "javascript",
      "code": "let a=10,b=3;\nconsole.log(a+b,a-b,a*b,a/b,a%b,a**b);"
    },
    {
      "title": "Logical & Comparison",
      "language": "javascript",
      "code": "let x=5,y=10;\nconsole.log(x>3&&y<20);\nconsole.log(x>10||y>5);\nconsole.log(x==='5');"
    },
    {
      "title": "Ternary",
      "language": "javascript",
      "code": "let age=20;\nlet access=age>=18?'Allowed':'Denied';\nconsole.log(access);"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "= aur ==/=== confuse karna",
    "++ prefix/postfix difference na samajhna",
    "&& aur || short-circuit behavior galat samajhna"
  ],
  "bestPractices": [
    "Hamesha === use karo",
    "Complex conditions ko variables mein break karo",
    "Ternary simple conditions ke liye use karo"
  ],
  "tips": [
    "?? nullish coalescing: a ?? 'default'",
    "?. optional chaining: obj?.prop",
    "Short-circuit assignment: a ||= b"
  ],
  "practice": [
    "Celsius to Fahrenheit converter using formula",
    "Odd/even check using % operator",
    "Ternary se max of two numbers"
  ],
  "exercise": {
    "instruction": "Calculator function do numbers + operator ke saath.",
    "hint": "Switch ya if-else. Zero division check.",
    "starterCode": "function calc(a,op,b){\n  switch(op){\n    case'+':return a+b;\n    case'-':return a-b;\n    case'*':return a*b;\n    case'/':return b===0?'Zero se divide nahi kar sakte':a/b;\n    default:return 'Invalid';\n  }\n}\nconsole.log(calc(10,'+',5));\nconsole.log(calc(10,'/',0));"
  },
  "quiz": [
    {
      "question": "'5' == 5 output?",
      "options": [
        "true",
        "false",
        "Error",
        "undefined"
      ],
      "answer": 0,
      "explanation": "== loose equality coercion karta hai."
    },
    {
      "question": "!!'false' ki value?",
      "options": [
        "false",
        "true",
        "Error",
        "undefined"
      ],
      "answer": 1,
      "explanation": "'false' non-empty string, truthy hai."
    }
  ],
  "interview": [
    {
      "question": "== vs ===?",
      "answer": "== loose equality type coercion karta hai. === strict equality, type coercion nahi. Hamesha === use karo."
    }
  ],
  "assignment": {
    "title": "Operators in JavaScript Assignment",
    "description": "Operators in JavaScript ka practical assignment.",
    "tasks": [
      "Operators in JavaScript ka example likho",
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
      "title": "Operators in JavaScript - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Arithmetic, comparison, logical, assignment operators",
    "=== strict equality use karo",
    "Ternary (?:) short if-else ke liye"
  ]
};

export default lesson;
