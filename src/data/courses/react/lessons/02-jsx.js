const lesson = {
  "id": 2,
  "slug": "jsx",
  "title": "JSX in React",
  "description": "JSX in React ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "JSX JavaScript XML - HTML-like syntax in JS.",
    "JSX Babel compile karta hai React.createElement() calls mein.",
    "Curly braces {} JS expressions embed karne ke liye.",
    "JSX must have single root element (or Fragment <>).",
    "self-closing tags: <img />, <input /> required.",
    "className instead of class, htmlFor instead of for.",
    "Inline styles as object: style={{color:'red'}}",
    "Comments in JSX: {/* comment */}",
    "JSX prevents XSS by default - escapes values.",
    "Conditional rendering in JSX: {condition && <Component/>}"
  ],
  "examples": [
    {
      "title": "JSX in React Example",
      "description": "Practical JSX in React example",
      "code": "function App(){return(<div className='app'><h1>Hello {user.name}!</h1><p>Sum: {2+2}</p></div>)}",
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
      "title": "JSX in React Example",
      "language": "jsx",
      "code": "function App(){return(<div className='app'><h1>Hello {user.name}!</h1><p>Sum: {2+2}</p></div>)}"
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
    "instruction": "JSX in React ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "function App(){return(<div className='app'><h1>Hello {user.name}!</h1><p>Sum: {2+2}</p></div>)}"
  },
  "quiz": [
    {
      "question": "JSX in React ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "JSX in React React ka fundamental concept hai."
    },
    {
      "question": "JSX in React ka best practice kya hai?",
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
      "question": "JSX in React ko interview mein kaise explain karenge?",
      "answer": "JSX in React ek beginner concept hai jo React mein use hota hai. JSX JavaScript XML - HTML-like syntax in JS. JSX Babel compile karta hai React.createElement() calls mein."
    }
  ],
  "assignment": {
    "title": "JSX in React Assignment",
    "description": "JSX in React ka practical assignment.",
    "tasks": [
      "JSX in React ka example likho",
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
      "title": "JSX in React - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne JSX in React ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
