const lesson = {
  "id": 10,
  "slug": "break-continue",
  "title": "Break & Continue",
  "description": "Break & Continue ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "10 min",
  "heroImage": "",
  "tags": [
    "JavaScript",
    "Beginner"
  ],
  "theory": [
    "Break - loop immediately terminate.",
    "Continue - current iteration skip, next pe jao.",
    "Break jab condition milte hi bahar nikalna ho.",
    "Continue jab specific iterations skip karni ho.",
    "Nested loops mein break nearest loop break karta hai.",
    "Switch mein break fall-through rokta hai.",
    "Labeled statements: break outerLabel.",
    "Break/continue labels with nested loop control.",
    "Break/continue for, while, do-while, switch sab mein kaam.",
    "Overuse code hard to read bana sakta hai."
  ],
  "examples": [
    {
      "title": "Break",
      "description": "Loop break at 5",
      "code": "for(let i=1;i<=10;i++){\n  if(i===5){console.log('Breaking');break;}\n  console.log(i);\n}",
      "result": "1\n2\n3\n4\nBreaking"
    },
    {
      "title": "Continue",
      "description": "Skip iteration 3",
      "code": "for(let i=1;i<=5;i++){\n  if(i===3){console.log('Skip 3');continue;}\n  console.log(i);\n}",
      "result": "1\n2\nSkip 3\n4\n5"
    },
    {
      "title": "Labeled Break",
      "description": "Outer loop break",
      "code": "outer:for(let i=0;i<3;i++){\n  for(let j=0;j<3;j++){\n    if(i===1&&j===1){break outer;}\n    console.log(`i=${i},j=${j}`);\n  }\n}",
      "result": "i=0,j=0..i=1,j=0"
    }
  ],
  "syntax": [
    "if(cond)break;",
    "if(cond)continue;",
    "outer:for(...){...break outer;}"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Break",
      "language": "javascript",
      "code": "for(let i=1;i<=10;i++){\n  if(i===5){console.log('Breaking');break;}\n  console.log(i);\n}"
    },
    {
      "title": "Continue",
      "language": "javascript",
      "code": "for(let i=1;i<=5;i++){\n  if(i===3){console.log('Skip 3');continue;}\n  console.log(i);\n}"
    },
    {
      "title": "Labeled Break",
      "language": "javascript",
      "code": "outer:for(let i=0;i<3;i++){\n  for(let j=0;j<3;j++){\n    if(i===1&&j===1){break outer;}\n    console.log(`i=${i},j=${j}`);\n  }\n}"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "Nested loops mein nearest loop break hota hai",
    "while loop mein continue infinite loop cause kare",
    "Break if ke bahar rakhna"
  ],
  "bestPractices": [
    "Sparingly use karo",
    "Labeled break rare cases mein",
    "Continue ko filter se replace karo"
  ],
  "tips": [
    "Label break prefix outer:",
    "Break for array search - milte hi stop",
    "Continue functional mein filter se replace"
  ],
  "practice": [
    "1-20 print karo but 7 pe break",
    "1-10 even numbers using continue",
    "Nested loop label break"
  ],
  "exercise": {
    "instruction": "Function jo array mein pehla prime number return kare.",
    "hint": "Prime check + break loop.",
    "starterCode": "function isPrime(n){\n  if(n<2)return false;\n  for(let i=2;i<=Math.sqrt(n);i++) if(n%i===0)return false;\n  return true;\n}\nfunction firstPrime(arr){\n  for(let n of arr) if(isPrime(n)) return n;\n  return null;\n}\nconsole.log(firstPrime([4,6,8,7,10]));"
  },
  "quiz": [
    {
      "question": "Break kya karta hai?",
      "options": [
        "Continue loop",
        "Terminate loop",
        "Skip iteration",
        "Throw error"
      ],
      "answer": 1
    },
    {
      "question": "Continue kya karta hai?",
      "options": [
        "Terminate",
        "Skip iteration",
        "Restart",
        "Error"
      ],
      "answer": 1
    }
  ],
  "interview": [
    {
      "question": "Break vs continue? Labels?",
      "answer": "Break poora loop terminate. Continue sirf current iteration skip. Labels (outer:) nested loops mein specific loop target kar sakte ho. Generally label avoid karo - refactoring sign."
    }
  ],
  "assignment": {
    "title": "Break & Continue Assignment",
    "description": "Break & Continue ka practical assignment.",
    "tasks": [
      "Break & Continue ka example likho",
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
      "title": "Break & Continue - W3Schools",
      "url": "https://www.w3schools.com/js/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Break terminate, continue skip iteration",
    "Labels nested loop control",
    "Sparingly use karo"
  ]
};

export default lesson;
