const lesson = {
  "id": 29,
  "slug": "navigation-links",
  "title": "Navigation & Links",
  "description": "Navigation & Links ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Intermediate",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Intermediate",
    "Frontend"
  ],
  "theory": [
    "<Link to='/path'> - navigates without page reload.",
    "<NavLink> - applies active class to current link.",
    "className=({isActive})=>isActive?'active':''",
    "useLocation: const {pathname}=useLocation()",
    "useNavigate: navigate('/path',{replace:true})",
    "Programmatic navigation: after form submit.",
    "History stack: navigate(-1) for back button.",
    "State: navigate('/user',{state:{id:1}})",
    "useLocation state: const {state}=useLocation().",
    "Link vs a tag - Link no reload, a tag reloads."
  ],
  "examples": [
    {
      "title": "Navigation & Links Example",
      "description": "Practical Navigation & Links example",
      "code": "// Navigation & Links ka practical example\nfunction Example(){return<div><h1>Navigation & Links</h1></div>}\nexport default Example;",
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
      "title": "Navigation & Links Example",
      "language": "jsx",
      "code": "// Navigation & Links ka practical example\nfunction Example(){return<div><h1>Navigation & Links</h1></div>}\nexport default Example;"
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
    "instruction": "Navigation & Links ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// Navigation & Links ka practical example\nfunction Example(){return<div><h1>Navigation & Links</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "Navigation & Links ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Navigation & Links React ka important concept hai."
    },
    {
      "question": "Navigation & Links ka best practice kya hai?",
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
      "question": "Navigation & Links ko interview mein kaise explain karenge?",
      "answer": "Navigation & Links ek intermediate concept hai jo React mein use hota hai. <Link to='/path'> - navigates without page reload. <NavLink> - applies active class to current link."
    }
  ],
  "assignment": {
    "title": "Navigation & Links Assignment",
    "description": "Navigation & Links ka practical assignment.",
    "tasks": [
      "Navigation & Links ka example likho",
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
      "title": "Navigation & Links - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Navigation & Links ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
