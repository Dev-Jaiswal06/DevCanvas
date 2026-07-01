const lesson = {
  "id": 8,
  "slug": "forms-controlled",
  "title": "Controlled Forms",
  "description": "Controlled Forms ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "Controlled component: input value controlled by React state.",
    "value={state} + onChange handler - two-way binding.",
    "Uncontrolled component: DOM handles state (ref).",
    "Proper form: handleSubmit with e.preventDefault().",
    "Multiple inputs: name attribute + computed handler.",
    "Textarea: value={state} not children.",
    "Select: value={state} on select element.",
    "Checkbox: checked={state} instead of value.",
    "File input: uncontrolled only (ref).",
    "Form validation: onSubmit + field-level checks."
  ],
  "examples": [
    {
      "title": "Controlled Forms Example",
      "description": "Practical Controlled Forms example",
      "code": "// Controlled Forms ka practical example\nfunction Example(){return<div><h1>Controlled Forms</h1></div>}\nexport default Example;",
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
      "title": "Controlled Forms Example",
      "language": "jsx",
      "code": "// Controlled Forms ka practical example\nfunction Example(){return<div><h1>Controlled Forms</h1></div>}\nexport default Example;"
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
    "instruction": "Controlled Forms ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Controlled Forms ka practical example\nfunction Example(){return<div><h1>Controlled Forms</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "Controlled Forms ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Controlled Forms React ka fundamental concept hai."
    },
    {
      "question": "Controlled Forms ka best practice kya hai?",
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
      "question": "Controlled Forms ko interview mein kaise explain karenge?",
      "answer": "Controlled Forms ek beginner concept hai jo React mein use hota hai. Controlled component: input value controlled by React state. value={state} + onChange handler - two-way binding."
    }
  ],
  "assignment": {
    "title": "Controlled Forms Assignment",
    "description": "Controlled Forms ka practical assignment.",
    "tasks": [
      "Controlled Forms ka example likho",
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
      "title": "Controlled Forms - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Controlled Forms ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
