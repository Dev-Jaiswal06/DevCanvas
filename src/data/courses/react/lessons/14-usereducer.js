const lesson = {
  "id": 14,
  "slug": "usereducer",
  "title": "useReducer Hook",
  "description": "useReducer Hook ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "useReducer complex state logic ke liye (vs useState).",
    "const [state,dispatch]=useReducer(reducer,initial).",
    "Reducer: (state,action)=>newState - pure function.",
    "Action: {type:'INCREMENT',payload:data}.",
    "Dispatch: dispatch({type:'ACTION'}) - trigger state change.",
    "Switch inside reducer to handle different action types.",
    "Better than useState for multiple sub-values.",
    "useReducer + useContext = mini Redux.",
    "Reducer predictable hai - same input, same output.",
    "Complex forms, shopping cart, todo list ke liye perfect."
  ],
  "examples": [
    {
      "title": "useReducer Hook Example",
      "description": "Practical useReducer Hook example",
      "code": "// useReducer Hook ka practical example\nfunction Example(){return<div><h1>useReducer Hook</h1></div>}\nexport default Example;",
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
      "title": "useReducer Hook Example",
      "language": "jsx",
      "code": "// useReducer Hook ka practical example\nfunction Example(){return<div><h1>useReducer Hook</h1></div>}\nexport default Example;"
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
    "instruction": "useReducer Hook ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// useReducer Hook ka practical example\nfunction Example(){return<div><h1>useReducer Hook</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "useReducer Hook ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "useReducer Hook React ka fundamental concept hai."
    },
    {
      "question": "useReducer Hook ka best practice kya hai?",
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
      "question": "useReducer Hook ko interview mein kaise explain karenge?",
      "answer": "useReducer Hook ek beginner concept hai jo React mein use hota hai. useReducer complex state logic ke liye (vs useState). const [state,dispatch]=useReducer(reducer,initial)."
    }
  ],
  "assignment": {
    "title": "useReducer Hook Assignment",
    "description": "useReducer Hook ka practical assignment.",
    "tasks": [
      "useReducer Hook ka example likho",
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
      "title": "useReducer Hook - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne useReducer Hook ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
