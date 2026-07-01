const lesson = {
  "id": 17,
  "slug": "usecallback",
  "title": "useCallback Hook",
  "description": "useCallback Hook ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Intermediate",
  "duration": "20 min",
  "heroImage": "",
  "tags": [
    "React",
    "Intermediate",
    "Frontend"
  ],
  "theory": [
    "useCallback memoizes function reference.",
    "const fn=useCallback(()=>{...},[deps]).",
    "Returns same function reference if deps unchanged.",
    "Prevents unnecessary child re-renders (with React.memo).",
    "Used when passing callbacks to optimized child components.",
    "Without useCallback: new function on every render.",
    "Dependency array same as useEffect.",
    "useCallback(fn,deps) = useMemo(()=>fn,deps).",
    "Not needed for simple callbacks - overhead matters.",
    "Common: event handlers passed to child components."
  ],
  "examples": [
    {
      "title": "useCallback Hook Example",
      "description": "Practical useCallback Hook example",
      "code": "// useCallback Hook ka practical example\nfunction Example(){return<div><h1>useCallback Hook</h1></div>}\nexport default Example;",
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
      "title": "useCallback Hook Example",
      "language": "jsx",
      "code": "// useCallback Hook ka practical example\nfunction Example(){return<div><h1>useCallback Hook</h1></div>}\nexport default Example;"
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
    "instruction": "useCallback Hook ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// useCallback Hook ka practical example\nfunction Example(){return<div><h1>useCallback Hook</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "useCallback Hook ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "useCallback Hook React ka important concept hai."
    },
    {
      "question": "useCallback Hook ka best practice kya hai?",
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
      "question": "useCallback Hook ko interview mein kaise explain karenge?",
      "answer": "useCallback Hook ek intermediate concept hai jo React mein use hota hai. useCallback memoizes function reference. const fn=useCallback(()=>{...},[deps])."
    }
  ],
  "assignment": {
    "title": "useCallback Hook Assignment",
    "description": "useCallback Hook ka practical assignment.",
    "tasks": [
      "useCallback Hook ka example likho",
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
      "title": "useCallback Hook - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne useCallback Hook ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
