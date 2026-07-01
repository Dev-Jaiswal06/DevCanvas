const lesson = {
  "id": 7,
  "slug": "lists-keys",
  "title": "Lists & Keys",
  "description": "Lists & Keys ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "Array.map() - transform array to JSX elements.",
    "Key prop required for list items - unique identifier.",
    "Key helps React identify which items changed/added/removed.",
    "Key should be stable - don't use index if order changes.",
    "Index as key - okay for static list, bad for dynamic.",
    "Key must be unique among siblings.",
    "Array.filter() + map() - conditionally render items.",
    "Spread operator for adding to lists: [...arr,newItem].",
    "Empty state handling: if list empty show fallback.",
    "Virtualization for large lists (react-window)."
  ],
  "examples": [
    {
      "title": "Lists & Keys Example",
      "description": "Practical Lists & Keys example",
      "code": "// Lists & Keys ka practical example\nfunction Example(){return<div><h1>Lists & Keys</h1></div>}\nexport default Example;",
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
      "title": "Lists & Keys Example",
      "language": "jsx",
      "code": "// Lists & Keys ka practical example\nfunction Example(){return<div><h1>Lists & Keys</h1></div>}\nexport default Example;"
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
    "instruction": "Lists & Keys ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Lists & Keys ka practical example\nfunction Example(){return<div><h1>Lists & Keys</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "Lists & Keys ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Lists & Keys React ka fundamental concept hai."
    },
    {
      "question": "Lists & Keys ka best practice kya hai?",
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
      "question": "Lists & Keys ko interview mein kaise explain karenge?",
      "answer": "Lists & Keys ek beginner concept hai jo React mein use hota hai. Array.map() - transform array to JSX elements. Key prop required for list items - unique identifier."
    }
  ],
  "assignment": {
    "title": "Lists & Keys Assignment",
    "description": "Lists & Keys ka practical assignment.",
    "tasks": [
      "Lists & Keys ka example likho",
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
      "title": "Lists & Keys - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Lists & Keys ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
