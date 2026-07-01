const lesson = {
  "id": 30,
  "slug": "protected-routes",
  "title": "Protected Routes",
  "description": "Protected Routes ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Intermediate",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Intermediate",
    "Frontend"
  ],
  "theory": [
    "Protected routes require authentication.",
    "Create ProtectedRoute component wrapping children.",
    "Navigate: if(!user) return <Navigate to='/login'/>",
    "useAuth hook - check authentication status.",
    "Role-based: admin routes distinct from user routes.",
    "Redirect after login: location.state.from.",
    "Using useNavigate for redirects.",
    "Nested protected routes - whole section behind auth.",
    "Check auth at route level, not component level.",
    "Loading state while checking auth status."
  ],
  "examples": [
    {
      "title": "Protected Routes Example",
      "description": "Practical Protected Routes example",
      "code": "// Protected Routes ka practical example\nfunction Example(){return<div><h1>Protected Routes</h1></div>}\nexport default Example;",
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
      "title": "Protected Routes Example",
      "language": "jsx",
      "code": "// Protected Routes ka practical example\nfunction Example(){return<div><h1>Protected Routes</h1></div>}\nexport default Example;"
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
    "instruction": "Protected Routes ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Protected Routes ka practical example\nfunction Example(){return<div><h1>Protected Routes</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "Protected Routes ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Protected Routes React ka important concept hai."
    },
    {
      "question": "Protected Routes ka best practice kya hai?",
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
      "question": "Protected Routes ko interview mein kaise explain karenge?",
      "answer": "Protected Routes ek intermediate concept hai jo React mein use hota hai. Protected routes require authentication. Create ProtectedRoute component wrapping children."
    }
  ],
  "assignment": {
    "title": "Protected Routes Assignment",
    "description": "Protected Routes ka practical assignment.",
    "tasks": [
      "Protected Routes ka example likho",
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
      "title": "Protected Routes - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Protected Routes ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
