const lesson = {
  "id": 54,
  "slug": "mocking-apis",
  "title": "Mocking API Calls",
  "description": "Mocking API Calls ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Advanced",
    "Frontend"
  ],
  "theory": [
    "MSW (Mock Service Worker) - intercept network requests.",
    "rest.get('/api/users',(req,res,ctx)=>res(ctx.json([...])))",
    "Vitest: vi.fn() for function mocking.",
    "vi.mock('../api') - mock module.",
    "Mock fetch: global.fetch = vi.fn().mockResolvedValue({...}).",
    "Mock axios: vi.mock('axios') or msw + axios.",
    "Test loading/error/success states.",
    "Reset mocks between tests: afterEach(vi.clearAllMocks).",
    "Mock responses based on request data.",
    "Don't mock fetch/axios directly - prefer MSW."
  ],
  "examples": [
    {
      "title": "Mocking API Calls Example",
      "description": "Practical Mocking API Calls example",
      "code": "// Mocking API Calls ka practical example\nfunction Example(){return<div><h1>Mocking API Calls</h1></div>}\nexport default Example;",
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
      "title": "Mocking API Calls Example",
      "language": "jsx",
      "code": "// Mocking API Calls ka practical example\nfunction Example(){return<div><h1>Mocking API Calls</h1></div>}\nexport default Example;"
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
    "instruction": "Mocking API Calls ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Mocking API Calls ka practical example\nfunction Example(){return<div><h1>Mocking API Calls</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "Mocking API Calls ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Mocking API Calls React ka important concept hai."
    },
    {
      "question": "Mocking API Calls ka best practice kya hai?",
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
      "question": "Mocking API Calls ko interview mein kaise explain karenge?",
      "answer": "Mocking API Calls ek advanced concept hai jo React mein use hota hai. MSW (Mock Service Worker) - intercept network requests. rest.get('/api/users',(req,res,ctx)=>res(ctx.json([...])))"
    }
  ],
  "assignment": {
    "title": "Mocking API Calls Assignment",
    "description": "Mocking API Calls ka practical assignment.",
    "tasks": [
      "Mocking API Calls ka example likho",
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
      "title": "Mocking API Calls - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Mocking API Calls ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
