const lesson = {
  "id": 32,
  "slug": "reducer-context",
  "title": "Reducer + Context Pattern",
  "description": "Reducer + Context Pattern ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Intermediate",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Intermediate",
    "Frontend"
  ],
  "theory": [
    "useReducer + useContext = simple Redux alternative.",
    "Reducer manages state logic (reducer function).",
    "Context provides state + dispatch to all components.",
    "No prop drilling - any component can dispatch.",
    "File organization: context + reducer + provider.",
    "Actions: {type:'ADD_TODO', payload:todo}.",
    "Dispatch: const {state,dispatch}=useContext(AppContext).",
    "Scalability: better than useState for complex state.",
    "Testing: reducer is pure function - easy to test.",
    "Redux vs this pattern: Redux has devtools, middleware."
  ],
  "examples": [
    {
      "title": "Reducer + Context Pattern Example",
      "description": "Practical Reducer + Context Pattern example",
      "code": "// Reducer + Context Pattern ka practical example\nfunction Example(){return<div><h1>Reducer + Context Pattern</h1></div>}\nexport default Example;",
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
      "title": "Reducer + Context Pattern Example",
      "language": "jsx",
      "code": "// Reducer + Context Pattern ka practical example\nfunction Example(){return<div><h1>Reducer + Context Pattern</h1></div>}\nexport default Example;"
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
    "instruction": "Reducer + Context Pattern ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Reducer + Context Pattern ka practical example\nfunction Example(){return<div><h1>Reducer + Context Pattern</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "Reducer + Context Pattern ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Reducer + Context Pattern React ka important concept hai."
    },
    {
      "question": "Reducer + Context Pattern ka best practice kya hai?",
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
      "question": "Reducer + Context Pattern ko interview mein kaise explain karenge?",
      "answer": "Reducer + Context Pattern ek intermediate concept hai jo React mein use hota hai. useReducer + useContext = simple Redux alternative. Reducer manages state logic (reducer function)."
    }
  ],
  "assignment": {
    "title": "Reducer + Context Pattern Assignment",
    "description": "Reducer + Context Pattern ka practical assignment.",
    "tasks": [
      "Reducer + Context Pattern ka example likho",
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
      "title": "Reducer + Context Pattern - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Reducer + Context Pattern ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
