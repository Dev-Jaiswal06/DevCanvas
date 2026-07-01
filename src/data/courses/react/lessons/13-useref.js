const lesson = {
  "id": 13,
  "slug": "useref",
  "title": "useRef Hook",
  "description": "useRef Hook ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "useRef mutable object with .current property.",
    "Persists across renders without causing re-render.",
    "DOM ref: <div ref={myRef}> - access DOM element.",
    "Avoid ref for rendering - use state instead.",
    "Previous value: ref to store previous state.",
    "Timer IDs: store interval/timeout IDs in ref.",
    "Forward ref: pass ref through custom component.",
    "Imperative methods: expose methods via useImperativeHandle.",
    "Ref vs state: ref changes don't re-render.",
    "Common: focus input, measure element, media playback."
  ],
  "examples": [
    {
      "title": "useRef Hook Example",
      "description": "Practical useRef Hook example",
      "code": "// useRef Hook ka practical example\nfunction Example(){return<div><h1>useRef Hook</h1></div>}\nexport default Example;",
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
      "title": "useRef Hook Example",
      "language": "jsx",
      "code": "// useRef Hook ka practical example\nfunction Example(){return<div><h1>useRef Hook</h1></div>}\nexport default Example;"
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
    "instruction": "useRef Hook ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// useRef Hook ka practical example\nfunction Example(){return<div><h1>useRef Hook</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "useRef Hook ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "useRef Hook React ka fundamental concept hai."
    },
    {
      "question": "useRef Hook ka best practice kya hai?",
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
      "question": "useRef Hook ko interview mein kaise explain karenge?",
      "answer": "useRef Hook ek beginner concept hai jo React mein use hota hai. useRef mutable object with .current property. Persists across renders without causing re-render."
    }
  ],
  "assignment": {
    "title": "useRef Hook Assignment",
    "description": "useRef Hook ka practical assignment.",
    "tasks": [
      "useRef Hook ka example likho",
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
      "title": "useRef Hook - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne useRef Hook ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
