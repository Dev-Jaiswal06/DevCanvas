const lesson = {
  "id": 36,
  "slug": "react-memo",
  "title": "React.memo",
  "description": "React.memo ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Advanced",
    "Frontend"
  ],
  "theory": [
    "React.memo(Component) - prevents unnecessary re-renders.",
    "Shallow comparison of props - if same, skip render.",
    "Combine with useCallback for function props.",
    "Custom comparison: React.memo(Comp,(prev,next)=>...)",
    "PureComponent equivalent for functional components.",
    "Use when: component renders often with same props.",
    "Don't use: component always re-renders anyway.",
    "Cost: comparison itself has overhead.",
    "Children prop always new reference - causes re-render.",
    "React.memo + useMemo + useCallback = performance triangle."
  ],
  "examples": [
    {
      "title": "React.memo Example",
      "description": "Practical React.memo example",
      "code": "const Expensive=React.memo(function Expensive({data}){return<div>{data.map(d=><p key={d.id}>{d.text}</p>)}</div>})",
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
      "title": "React.memo Example",
      "language": "jsx",
      "code": "const Expensive=React.memo(function Expensive({data}){return<div>{data.map(d=><p key={d.id}>{d.text}</p>)}</div>})"
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
    "instruction": "React.memo ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "const Expensive=React.memo(function Expensive({data}){return<div>{data.map(d=><p key={d.id}>{d.text}</p>)}</div>})"
  },
  "quiz": [
    {
      "question": "React.memo ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "React.memo React ka important concept hai."
    },
    {
      "question": "React.memo ka best practice kya hai?",
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
      "question": "React.memo ko interview mein kaise explain karenge?",
      "answer": "React.memo ek advanced concept hai jo React mein use hota hai. React.memo(Component) - prevents unnecessary re-renders. Shallow comparison of props - if same, skip render."
    }
  ],
  "assignment": {
    "title": "React.memo Assignment",
    "description": "React.memo ka practical assignment.",
    "tasks": [
      "React.memo ka example likho",
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
      "title": "React.memo - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne React.memo ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
