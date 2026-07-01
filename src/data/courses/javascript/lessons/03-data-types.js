const lesson = {
  "id": 3,
  "slug": "data-types",
  "title": "Data Types in JavaScript",
  "description": "Data Types in JavaScript ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Beginner"
  ],
  "theory": [
    "2 categories: Primitive (7 types) aur Reference (Objects).",
    "Primitive: string, number, boolean, null, undefined, symbol, bigint. By value store hote hain.",
    "Reference: Object, Array, Function, Date, etc. By reference store hote hain.",
    "typeof operator se type pata kar sakte ho.",
    "String text ke liye - quotes ya backticks.",
    "Number integers aur floats - special values NaN, Infinity.",
    "Boolean sirf true/false.",
    "null intentional absence, undefined declared but not assigned.",
    "Object complex data - {key: value} pairs.",
    "JS dynamically typed - same variable different types hold kar sakta hai."
  ],
  "examples": [
    {
      "title": "Primitive Types",
      "description": "All primitive types",
      "code": "let str=\"Hello\";\nlet num=42;\nlet bool=true;\nlet empty=null;\nlet notDefined;\nconsole.log(typeof str,typeof num,typeof bool);\nconsole.log(typeof empty,typeof notDefined);",
      "result": "string number boolean\nobject undefined"
    },
    {
      "title": "Reference Types",
      "description": "Objects and Arrays",
      "code": "let person={name:\"Rahul\",age:25};\nlet fruits=[\"apple\",\"banana\"];\nconsole.log(typeof person);\nconsole.log(Array.isArray(fruits));",
      "result": "object\ntrue"
    },
    {
      "title": "Type Coercion",
      "description": "Automatic type conversion",
      "code": "console.log(5+\"5\");\nconsole.log(5-\"3\");\nconsole.log(!!\"hello\");",
      "result": "55\n2\ntrue"
    }
  ],
  "syntax": [
    "typeof variableName;",
    "'string' or \"string\" or `string`",
    "42, 3.14, NaN, Infinity"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Primitive Types",
      "language": "javascript",
      "code": "let str=\"Hello\";\nlet num=42;\nlet bool=true;\nlet empty=null;\nlet notDefined;\nconsole.log(typeof str,typeof num,typeof bool);\nconsole.log(typeof empty,typeof notDefined);"
    },
    {
      "title": "Reference Types",
      "language": "javascript",
      "code": "let person={name:\"Rahul\",age:25};\nlet fruits=[\"apple\",\"banana\"];\nconsole.log(typeof person);\nconsole.log(Array.isArray(fruits));"
    },
    {
      "title": "Type Coercion",
      "language": "javascript",
      "code": "console.log(5+\"5\");\nconsole.log(5-\"3\");\nconsole.log(!!\"hello\");"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "typeof null 'object' - JS historical bug",
    "NaN typeof 'number' but NaN===NaN false",
    "Array typeof 'object' - Array.isArray() use karo"
  ],
  "bestPractices": [
    "Explicit type conversion use karo (Number(), String())",
    "=== use karo instead of ==",
    "null/undefined difference samjho"
  ],
  "tips": [
    "Template literals backticks use karo",
    "BigInt for large numbers > 2^53",
    "Symbol for unique identifiers"
  ],
  "practice": [
    "5 alag data types ke variables banao aur typeof check karo",
    "String number mein convert karo, fir number string mein",
    "Object banao jisme string, number, boolean, array ho"
  ],
  "exercise": {
    "instruction": "Program likho jo alag data types declare kare aur typeof print kare.",
    "hint": "typeof operator, Array.isArray() bhi use karo.",
    "starterCode": "const myString='DevCanvas';\nconst myNumber=2024;\nlet myUndefined;\nconst myNull=null;\nconsole.log(typeof myString);"
  },
  "quiz": [
    {
      "question": "null ka typeof kya hai?",
      "options": [
        "null",
        "undefined",
        "object",
        "boolean"
      ],
      "answer": 2,
      "explanation": "typeof null 'object' - known JS bug."
    },
    {
      "question": "Unique identifiers ke liye kaunsa type?",
      "options": [
        "string",
        "symbol",
        "number",
        "bigint"
      ],
      "answer": 1,
      "explanation": "Symbol unique identifiers banane ke liye."
    }
  ],
  "interview": [
    {
      "question": "JS mein data types kaise categorize hote hain?",
      "answer": "2 categories: Primitive (string, number, boolean, null, undefined, symbol, bigint) - by value. Reference (Object, Array, Function) - by reference. typeof null 'object' is a known bug. Array check with Array.isArray()."
    }
  ],
  "assignment": {
    "title": "Data Types in JavaScript Assignment",
    "description": "Data Types in JavaScript ka practical assignment.",
    "tasks": [
      "Data Types in JavaScript ka example likho",
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
      "title": "Data Types in JavaScript - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "7 primitive + multiple reference types",
    "typeof operator type check ke liye",
    "Primitive by value, Objects by reference"
  ]
};

export default lesson;
