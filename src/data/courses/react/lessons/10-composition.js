const lesson = {
  "id": 10,
  "slug": "composition",
  "title": "Component Composition",
  "description": "Component Composition ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "Composition combine smaller components to build UI.",
    "props.children - content between component tags.",
    "children can be any JSX - strings, elements, components.",
    "Multiple slots: named props for different sections.",
    "Specialization: base component + props for variation.",
    "Containment: wrapper components (Card, Layout).",
    "Extraction: complex component -> smaller sub-components.",
    "Composition vs Inheritance - React prefers composition.",
    "Render props pattern - function as children (legacy).",
    "Hooks have mostly replaced higher-order components."
  ],
  "examples": [
    {
      "title": "Component Composition Example",
      "description": "Practical Component Composition example",
      "code": "// Component Composition ka practical example\nfunction Example(){return<div><h1>Component Composition</h1></div>}\nexport default Example;",
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
      "title": "Component Composition Example",
      "language": "jsx",
      "code": "// Component Composition ka practical example\nfunction Example(){return<div><h1>Component Composition</h1></div>}\nexport default Example;"
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
    "instruction": "Component Composition ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Component Composition ka practical example\nfunction Example(){return<div><h1>Component Composition</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "Component Composition ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Component Composition React ka fundamental concept hai."
    },
    {
      "question": "Component Composition ka best practice kya hai?",
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
      "question": "Component Composition ko interview mein kaise explain karenge?",
      "answer": "Component Composition ek beginner concept hai jo React mein use hota hai. Composition combine smaller components to build UI. props.children - content between component tags."
    }
  ],
  "assignment": {
    "title": "Component Composition Assignment",
    "description": "Component Composition ka practical assignment.",
    "tasks": [
      "Component Composition ka example likho",
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
      "title": "Component Composition - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Component Composition ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
