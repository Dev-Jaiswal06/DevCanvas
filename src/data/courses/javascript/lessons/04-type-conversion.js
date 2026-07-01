const lesson = {
  "id": 4,
  "slug": "type-conversion",
  "title": "Type Conversion & Coercion",
  "description": "Type Conversion & Coercion ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Beginner"
  ],
  "theory": [
    "Type conversion: manually ek type se doosre mein badalte ho.",
    "Type coercion: JavaScript automatically type change karta hai operations ke time.",
    "Implicit coercion: '5' - 3 = 2 (string number mein convert).",
    "Explicit conversion: Number(), String(), Boolean() functions se.",
    "parseInt() aur parseFloat() strings se numbers nikalne ke liye.",
    "String conversion: String(value) ya value.toString().",
    "Number conversion: Number(), string non-numeric ho to NaN.",
    "Boolean conversion: Falsy values - 0, '', null, undefined, NaN, false.",
    "== (loose) coercion karta hai, === (strict) nahi karta.",
    "Coercion unexpected bugs cause kar sakta hai - === use karo."
  ],
  "examples": [
    {
      "title": "Explicit Conversion",
      "description": "Manual type conversion",
      "code": "const str=\"123\";\nconst num=Number(str);\nconsole.log(num,typeof num);\nconst bool=Boolean(1);\nconsole.log(bool);\nconst strAgain=String(456);\nconsole.log(strAgain,typeof strAgain);",
      "result": "123 number\ntrue\n456 string"
    },
    {
      "title": "Implicit Coercion",
      "description": "Automatic conversion",
      "code": "console.log(\"5\"-3);\nconsole.log(\"5\"+3);\nconsole.log(\"5\"*\"2\");\nconsole.log(5==\"5\");\nconsole.log(5===\"5\");",
      "result": "2\n53\n10\ntrue\nfalse"
    },
    {
      "title": "parseInt/parseFloat",
      "description": "Strings se numbers",
      "code": "console.log(parseInt(\"100px\"));\nconsole.log(parseFloat(\"3.14em\"));\nconsole.log(Number(\"  99  \"));",
      "result": "100\n3.14\n99"
    }
  ],
  "syntax": [
    "Number(value); String(value); Boolean(value);",
    "parseInt(string); parseFloat(string);"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Explicit Conversion",
      "language": "javascript",
      "code": "const str=\"123\";\nconst num=Number(str);\nconsole.log(num,typeof num);\nconst bool=Boolean(1);\nconsole.log(bool);\nconst strAgain=String(456);\nconsole.log(strAgain,typeof strAgain);"
    },
    {
      "title": "Implicit Coercion",
      "language": "javascript",
      "code": "console.log(\"5\"-3);\nconsole.log(\"5\"+3);\nconsole.log(\"5\"*\"2\");\nconsole.log(5==\"5\");\nconsole.log(5===\"5\");"
    },
    {
      "title": "parseInt/parseFloat",
      "language": "javascript",
      "code": "console.log(parseInt(\"100px\"));\nconsole.log(parseFloat(\"3.14em\"));\nconsole.log(Number(\"  99  \"));"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "== use karna jo coercion karta hai - === use karo",
    "parseInt() bhoolkar Number() use karna '100px' pe",
    "Falsy values galat samajhna - 0 falsy, '0' truthy"
  ],
  "bestPractices": [
    "=== use karo == ki jagah",
    "Explicit conversion prefer karo",
    "Number() instead of + unary for clarity"
  ],
  "tips": [
    "parseInt() mein radix specify karo: parseInt('1010', 2)",
    "NaN check with isNaN(), but isFinite() better",
    "valueOf() aur toString() object to primitive conversion"
  ],
  "practice": [
    "String number mein convert karo, fir Boolean, fir string mein",
    "5 values parse karo parseInt se",
    "Truthy/falsy list banao with Boolean()"
  ],
  "exercise": {
    "instruction": "Function likho jo input string se number nikaale aur valid check kare.",
    "hint": "parseInt + isNaN use karo.",
    "starterCode": "function toNumber(input){\n  const num=parseInt(input,10);\n  if(isNaN(num)) return `\"${input}\" valid number nahi hai`;\n  return num;\n}\nconsole.log(toNumber('123'));\nconsole.log(toNumber('abc'));"
  },
  "quiz": [
    {
      "question": "'5' - 3 ka output?",
      "options": [
        "'53'",
        "2",
        "'5-3'",
        "Error"
      ],
      "answer": 1,
      "explanation": "- operator string ko number mein convert karta hai."
    },
    {
      "question": "Kaunsa operator type coercion nahi karta?",
      "options": [
        "==",
        "===",
        ">",
        "<"
      ],
      "answer": 1,
      "explanation": "=== strict equality, type coercion nahi karta."
    }
  ],
  "interview": [
    {
      "question": "Type coercion kya hai?",
      "answer": "JavaScript automatically data type change karta hai operations ke time. Avoid with ===, explicit conversion with Number()/String()."
    }
  ],
  "assignment": {
    "title": "Type Conversion & Coercion Assignment",
    "description": "Type Conversion & Coercion ka practical assignment.",
    "tasks": [
      "Type Conversion & Coercion ka example likho",
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
      "title": "Type Conversion & Coercion - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Type conversion manual, coercion automatic",
    "parseInt(), Number(), String() explicit conversion ke liye",
    "=== use karo == ki jagah"
  ]
};

export default lesson;
