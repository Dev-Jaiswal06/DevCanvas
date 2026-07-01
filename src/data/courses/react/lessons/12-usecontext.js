const lesson = {
  "id": 12,
  "slug": "usecontext",
  "title": "useContext Hook",
  "description": "useContext Hook ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "Context provides way to pass data through component tree without props.",
    "React.createContext() - create context object.",
    "<Context.Provider value={data}> - wrap tree.",
    "useContext(Context) - access context value.",
    "Avoids prop drilling - passing through many levels.",
    "When context value changes - all consumers re-render.",
    "Multiple contexts: nest providers.",
    "Context for: theme, auth, locale, user preferences.",
    "Performance: context value reference change trigger re-render.",
    "useContext + useReducer = simple state management."
  ],
  "examples": [
    {
      "title": "useContext Hook Example",
      "description": "Practical useContext Hook example",
      "code": "// useContext Hook ka practical example\nfunction Example(){return<div><h1>useContext Hook</h1></div>}\nexport default Example;",
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
      "title": "useContext Hook Example",
      "language": "jsx",
      "code": "// useContext Hook ka practical example\nfunction Example(){return<div><h1>useContext Hook</h1></div>}\nexport default Example;"
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
    "instruction": "useContext Hook ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// useContext Hook ka practical example\nfunction Example(){return<div><h1>useContext Hook</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "useContext Hook ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "useContext Hook React ka fundamental concept hai."
    },
    {
      "question": "useContext Hook ka best practice kya hai?",
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
      "question": "useContext Hook ko interview mein kaise explain karenge?",
      "answer": "useContext Hook ek beginner concept hai jo React mein use hota hai. Context provides way to pass data through component tree without props. React.createContext() - create context object."
    }
  ],
  "assignment": {
    "title": "useContext Hook Assignment",
    "description": "useContext Hook ka practical assignment.",
    "tasks": [
      "useContext Hook ka example likho",
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
      "title": "useContext Hook - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne useContext Hook ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
