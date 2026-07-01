const lesson = {
  "id": 9,
  "slug": "lifting-state",
  "title": "Lifting State Up",
  "description": "Lifting State Up ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "Common state shared among sibling components.",
    "State moved to closest common ancestor.",
    "Data flows down (props), actions flow up (callbacks).",
    "Lifting state up = single source of truth.",
    "Example: two components need same data.",
    "Without lifting: inconsistent state between siblings.",
    "With lifting: parent manages, children receive via props.",
    "Avoid unnecessary state lifting - keep local when possible.",
    "Prop drilling issue - state management solutions (Context, Redux).",
    "Lifting state up makes components more predictable."
  ],
  "examples": [
    {
      "title": "Lifting State Up Example",
      "description": "Practical Lifting State Up example",
      "code": "// Lifting State Up ka practical example\nfunction Example(){return<div><h1>Lifting State Up</h1></div>}\nexport default Example;",
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
      "title": "Lifting State Up Example",
      "language": "jsx",
      "code": "// Lifting State Up ka practical example\nfunction Example(){return<div><h1>Lifting State Up</h1></div>}\nexport default Example;"
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
    "instruction": "Lifting State Up ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Lifting State Up ka practical example\nfunction Example(){return<div><h1>Lifting State Up</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "Lifting State Up ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Lifting State Up React ka fundamental concept hai."
    },
    {
      "question": "Lifting State Up ka best practice kya hai?",
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
      "question": "Lifting State Up ko interview mein kaise explain karenge?",
      "answer": "Lifting State Up ek beginner concept hai jo React mein use hota hai. Common state shared among sibling components. State moved to closest common ancestor."
    }
  ],
  "assignment": {
    "title": "Lifting State Up Assignment",
    "description": "Lifting State Up ka practical assignment.",
    "tasks": [
      "Lifting State Up ka example likho",
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
      "title": "Lifting State Up - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Lifting State Up ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
