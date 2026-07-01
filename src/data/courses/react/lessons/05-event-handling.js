const lesson = {
  "id": 5,
  "slug": "event-handling",
  "title": "Event Handling in React",
  "description": "Event Handling in React ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "React events camelCase: onClick, onChange, onSubmit.",
    "Event handler function pass karte hain (not string).",
    "<button onClick={handleClick}> - reference pass.",
    "Event object e: synthetic event (cross-browser wrapper).",
    "Pass parameter: onClick={()=>fn(param)}",
    "Form events: onChange for input change.",
    "Prevent default: e.preventDefault().",
    "Event pooling: synthetic events nullified after callback (old React).",
    "Custom events via props: parent passes handler to child.",
    "Event handlers as arrow functions in component."
  ],
  "examples": [
    {
      "title": "Event Handling in React Example",
      "description": "Practical Event Handling in React example",
      "code": "// Event Handling in React ka practical example\nfunction Example(){return<div><h1>Event Handling in React</h1></div>}\nexport default Example;",
      "result": "Renders component in browser"
    }
  ],
  "syntax": [
    "// React component syntax",
    "export default function Component(){...}",
    "import React from 'react'"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Event Handling in React Example",
      "language": "jsx",
      "code": "// Event Handling in React ka practical example\nfunction Example(){return<div><h1>Event Handling in React</h1></div>}\nexport default Example;"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "Hooks rules violate karna",
    "Key prop bhoolna in lists",
    "State directly mutate karna"
  ],
  "bestPractices": [
    "Components small rakho - single responsibility",
    "Custom hooks mein logic extract karo",
    "Prop types ya TypeScript use karo"
  ],
  "tips": [
    "React DevTools se debug karo",
    "useMemo/useCallback performance ke liye",
    "Error boundaries har section mein"
  ],
  "practice": [
    "Is concept ka practical project banao",
    "Existing project mein implement karo",
    "Tests likho for the component"
  ],
  "exercise": {
    "instruction": "Event Handling in React ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Event Handling in React ka practical example\nfunction Example(){return<div><h1>Event Handling in React</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "Event Handling in React ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Event Handling in React React ka fundamental concept hai."
    },
    {
      "question": "Event Handling in React ka best practice kya hai?",
      "options": [
        "Hamesha use karo",
        "Zaroorat ke hisaab se use karo",
        "Kabhi use mat karo",
        "Sirf class components mein"
      ],
      "answer": 1,
      "explanation": "React concepts ko zaroorat ke hisaab se use karna chahiye."
    }
  ],
  "interview": [
    {
      "question": "Event Handling in React ko interview mein kaise explain karenge?",
      "answer": "Event Handling in React ek beginner concept hai jo React mein use hota hai. React events camelCase: onClick, onChange, onSubmit. Event handler function pass karte hain (not string)."
    }
  ],
  "assignment": {
    "title": "Event Handling in React Assignment",
    "description": "Event Handling in React ka practical assignment.",
    "tasks": [
      "Event Handling in React ka example likho",
      "Error handling add karo",
      "Code optimize karo",
      "Documentation add karo"
    ],
    "submission": "Code GitHub pe push karo",
    "deadline": "1 week"
  },
  "resources": [
    {
      "title": "React Official Docs",
      "url": "https://react.dev/"
    },
    {
      "title": "Event Handling in React - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Event Handling in React ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
