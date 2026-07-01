const lesson = {
  "id": 3,
  "slug": "components-props",
  "title": "Components & Props",
  "description": "Components & Props ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "Components UI ke reusable building blocks.",
    "Functional components: function Comp(){return JSX}",
    "Props - data passed from parent to child.",
    "Props are read-only (immutable) - don't modify.",
    "Destructuring props: function Comp({name,age}){...}",
    "Default props: function Comp({name='Guest'}){...}",
    "Props children - components can contain other components.",
    "Composition - combine small components into larger ones.",
    "Component naming: PascalCase.",
    "Props drilling - passing props through multiple levels."
  ],
  "examples": [
    {
      "title": "Components & Props Example",
      "description": "Practical Components & Props example",
      "code": "function Card({title,children}){return(<div className='card'><h2>{title}</h2>{children}</div>)}",
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
      "title": "Components & Props Example",
      "language": "jsx",
      "code": "function Card({title,children}){return(<div className='card'><h2>{title}</h2>{children}</div>)}"
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
    "instruction": "Components & Props ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "function Card({title,children}){return(<div className='card'><h2>{title}</h2>{children}</div>)}"
  },
  "quiz": [
    {
      "question": "Components & Props ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Components & Props React ka fundamental concept hai."
    },
    {
      "question": "Components & Props ka best practice kya hai?",
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
      "question": "Components & Props ko interview mein kaise explain karenge?",
      "answer": "Components & Props ek beginner concept hai jo React mein use hota hai. Components UI ke reusable building blocks. Functional components: function Comp(){return JSX}"
    }
  ],
  "assignment": {
    "title": "Components & Props Assignment",
    "description": "Components & Props ka practical assignment.",
    "tasks": [
      "Components & Props ka example likho",
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
      "title": "Components & Props - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Components & Props ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
