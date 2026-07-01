const lesson = {
  "id": 28,
  "slug": "nested-routes",
  "title": "Nested Routes",
  "description": "Nested Routes ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Intermediate",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Intermediate",
    "Frontend"
  ],
  "theory": [
    "Layout routes - wrap child routes.",
    "<Route element={<Layout/>}> -> <Route index...>",
    "Outlet: <Outlet/> renders matched child route.",
    "Parent route element persists across child changes.",
    "Relative paths: children don't need full path.",
    "Layout pattern: header/sidebar shared across pages.",
    "Index routes: default child for parent path.",
    "useOutletContext - pass data to children.",
    "Nested routes reduce code duplication.",
    "Complex layouts with multiple levels of nesting."
  ],
  "examples": [
    {
      "title": "Nested Routes Example",
      "description": "Practical Nested Routes example",
      "code": "// Nested Routes ka practical example\nfunction Example(){return<div><h1>Nested Routes</h1></div>}\nexport default Example;",
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
      "title": "Nested Routes Example",
      "language": "jsx",
      "code": "// Nested Routes ka practical example\nfunction Example(){return<div><h1>Nested Routes</h1></div>}\nexport default Example;"
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
    "instruction": "Nested Routes ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Nested Routes ka practical example\nfunction Example(){return<div><h1>Nested Routes</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "Nested Routes ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Nested Routes React ka important concept hai."
    },
    {
      "question": "Nested Routes ka best practice kya hai?",
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
      "question": "Nested Routes ko interview mein kaise explain karenge?",
      "answer": "Nested Routes ek intermediate concept hai jo React mein use hota hai. Layout routes - wrap child routes. <Route element={<Layout/>}> -> <Route index...>"
    }
  ],
  "assignment": {
    "title": "Nested Routes Assignment",
    "description": "Nested Routes ka practical assignment.",
    "tasks": [
      "Nested Routes ka example likho",
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
      "title": "Nested Routes - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Nested Routes ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
