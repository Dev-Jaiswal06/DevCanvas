const lesson = {
  "id": 21,
  "slug": "css-modules",
  "title": "CSS Modules",
  "description": "CSS Modules ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Intermediate",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Intermediate",
    "Frontend"
  ],
  "theory": [
    "CSS Modules locally scoped CSS classes.",
    "Component-specific CSS - no global conflicts.",
    "import styles from './Comp.module.css'",
    "className={styles.className} - unique class name.",
    "File naming: Component.module.css",
    "Automatic class hashing - unique random class names.",
    "Composition: composes property from other classes.",
    "Global exceptions: :global(.class-name)",
    "CSS Modules + React perfect for component isolation.",
    "No runtime - CSS generated at build time."
  ],
  "examples": [
    {
      "title": "CSS Modules Example",
      "description": "Practical CSS Modules example",
      "code": "// CSS Modules ka practical example\nfunction Example(){return<div><h1>CSS Modules</h1></div>}\nexport default Example;",
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
      "title": "CSS Modules Example",
      "language": "jsx",
      "code": "// CSS Modules ka practical example\nfunction Example(){return<div><h1>CSS Modules</h1></div>}\nexport default Example;"
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
    "instruction": "CSS Modules ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// CSS Modules ka practical example\nfunction Example(){return<div><h1>CSS Modules</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "CSS Modules ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "CSS Modules React ka important concept hai."
    },
    {
      "question": "CSS Modules ka best practice kya hai?",
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
      "question": "CSS Modules ko interview mein kaise explain karenge?",
      "answer": "CSS Modules ek intermediate concept hai jo React mein use hota hai. CSS Modules locally scoped CSS classes. Component-specific CSS - no global conflicts."
    }
  ],
  "assignment": {
    "title": "CSS Modules Assignment",
    "description": "CSS Modules ka practical assignment.",
    "tasks": [
      "CSS Modules ka example likho",
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
      "title": "CSS Modules - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne CSS Modules ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
