const lesson = {
  "id": 26,
  "slug": "react-router-setup",
  "title": "React Router Setup",
  "description": "React Router Setup ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Intermediate",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Intermediate",
    "Frontend"
  ],
  "theory": [
    "React Router SPA navigation library.",
    "npm install react-router-dom",
    "<BrowserRouter> - wraps app for routing.",
    "<Routes><Route path='/' element={<Home/>}></Routes>",
    "Route exact matching: path='/' doesn't match '/about'.",
    "Link component: <Link to='/about'>About</Link>",
    "NavLink: active class for navigation (styling).",
    "Navigate component: <Navigate to='/login' replace/>",
    "useNavigate hook: const navigate=useNavigate()",
    "Error routing: path='*' for 404 handling."
  ],
  "examples": [
    {
      "title": "React Router Setup Example",
      "description": "Practical React Router Setup example",
      "code": "import{BrowserRouter,Routes,Route,Link}from'react-router-dom';\nfunction App(){return(<BrowserRouter><nav><Link to='/'>Home</Link></nav><Routes><Route path='/'element={<Home/>}/><Route path='*'element={<NotFound/>}/></Routes></BrowserRouter>)}",
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
      "title": "React Router Setup Example",
      "language": "jsx",
      "code": "import{BrowserRouter,Routes,Route,Link}from'react-router-dom';\nfunction App(){return(<BrowserRouter><nav><Link to='/'>Home</Link></nav><Routes><Route path='/'element={<Home/>}/><Route path='*'element={<NotFound/>}/></Routes></BrowserRouter>)}"
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
    "instruction": "React Router Setup ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "import{BrowserRouter,Routes,Route,Link}from'react-router-dom';\nfunction App(){return(<BrowserRouter><nav><Link to='/'>Home</Link></nav><Routes><Route path='/'element={<Home/>}/><Route path='*'element={<NotFound/>}/></Routes></BrowserRouter>)}"
  },
  "quiz": [
    {
      "question": "React Router Setup ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "React Router Setup React ka important concept hai."
    },
    {
      "question": "React Router Setup ka best practice kya hai?",
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
      "question": "React Router Setup ko interview mein kaise explain karenge?",
      "answer": "React Router Setup ek intermediate concept hai jo React mein use hota hai. React Router SPA navigation library. npm install react-router-dom"
    }
  ],
  "assignment": {
    "title": "React Router Setup Assignment",
    "description": "React Router Setup ka practical assignment.",
    "tasks": [
      "React Router Setup ka example likho",
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
      "title": "React Router Setup - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne React Router Setup ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
