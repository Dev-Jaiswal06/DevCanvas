const lesson = {
  "id": 8,
  "slug": "truthy-falsy",
  "title": "Truthy & Falsy Values",
  "description": "Truthy & Falsy Values ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "12 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Beginner"
  ],
  "theory": [
    "Har value ka inherent boolean nature hota hai - truthy ya falsy.",
    "Boolean context mein (if, &&, ||) automatically evaluate hoti hain.",
    "Sirf 6 falsy values: false, 0, '' (empty string), null, undefined, NaN.",
    "Baaki sab truthy: non-zero numbers, non-empty strings, objects, arrays.",
    "Empty array [] aur empty object {} truthy hain - surprising!",
    "'false', '0', ' ' (space) sab truthy - non-empty strings.",
    "!! operator se boolean version: !!value.",
    "Truthy/falsy shortcuts mein use hota hai.",
    "&& aur || short-circuit evaluation karte hain.",
    "Bug avoid karne ke liye truthy/falsy samajhna important hai."
  ],
  "examples": [
    {
      "title": "Falsy Values",
      "description": "6 falsy values",
      "code": "console.log(!!false,!!0,!!'',!!null,!!undefined,!!NaN);",
      "result": "false false false false false false"
    },
    {
      "title": "Truthy Surprises",
      "description": "Surprising truthy",
      "code": "console.log(!!'false',!!'0',!!' ',!![],!!{},!!Infinity);",
      "result": "true true true true true true"
    },
    {
      "title": "Real Usage",
      "description": "Default value pattern",
      "code": "let username='';\nlet display=username||'Guest';\nconsole.log(display);",
      "result": "Guest"
    }
  ],
  "syntax": [
    "if(value){...} // truthy check",
    "value||defaultValue",
    "!value // falsy check",
    "!!value // boolean conversion"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Falsy Values",
      "language": "javascript",
      "code": "console.log(!!false,!!0,!!'',!!null,!!undefined,!!NaN);"
    },
    {
      "title": "Truthy Surprises",
      "language": "javascript",
      "code": "console.log(!!'false',!!'0',!!' ',!![],!!{},!!Infinity);"
    },
    {
      "title": "Real Usage",
      "language": "javascript",
      "code": "let username='';\nlet display=username||'Guest';\nconsole.log(display);"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "[] ko falsy samajhna - truthy hai",
    "'false' string falsy samajhna - truthy hai",
    "0 aur '0' ka difference - 0 falsy, '0' truthy"
  ],
  "bestPractices": [
    "Explicit comparison when ambiguity",
    "|| for defaults but ?? (nullish) better",
    "Guard clause pattern"
  ],
  "tips": [
    "?? sirf null/undefined check",
    "&& for conditional rendering",
    "Truthy/falsy ka advantage lo - cleaner code"
  ],
  "practice": [
    "10 values truthy/falsy check with !!",
    "Function to filter only truthy values",
    "Default value pattern with ||"
  ],
  "exercise": {
    "instruction": "Function jo username/email validate kare - ek hona chahiye.",
    "hint": "if(!username&&!email) pattern.",
    "starterCode": "function validate(u,e){\n  if(!u&&!e) return 'Required';\n  return `User: ${u||e}`;\n}\nconsole.log(validate('',''));\nconsole.log(validate('rahul',''));"
  },
  "quiz": [
    {
      "question": "[] truthy ya falsy?",
      "options": [
        "Truthy",
        "Falsy",
        "Dono",
        "Neither"
      ],
      "answer": 0,
      "explanation": "Arrays hamesha truthy hain."
    },
    {
      "question": "Kitni falsy values?",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "answer": 2,
      "explanation": "6: false,0,'',null,undefined,NaN."
    }
  ],
  "interview": [
    {
      "question": "Truthy/falsy kya hain?",
      "answer": "6 falsy: false,0,'',null,undefined,NaN. Baaki sab truthy. [] aur {} truthy. Practice: value||default, !value guard, && conditional rendering."
    }
  ],
  "assignment": {
    "title": "Truthy & Falsy Values Assignment",
    "description": "Truthy & Falsy Values ka practical assignment.",
    "tasks": [
      "Truthy & Falsy Values ka example likho",
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
      "title": "Truthy & Falsy Values - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Sirf 6 falsy values - baaki sab truthy",
    "Conditional checks aur defaults mein use hota hai",
    "Arrays aur objects truthy - common misconception"
  ]
};

export default lesson;
