const lesson = {
  "id": 15,
  "slug": "custom-hooks",
  "title": "Custom Hooks",
  "description": "Custom Hooks ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "Custom hooks extract reusable logic from components.",
    "Function name starts with 'use' - convention.",
    "Can use other hooks inside (rules of hooks apply).",
    "Returns values, functions, or JSX.",
    "Example: useWindowSize(), useLocalStorage(), useFetch().",
    "Custom hooks share logic, not state - each call isolated.",
    "Replaces mixins and higher-order components.",
    "Build from multiple built-in hooks.",
    "Custom hooks make components cleaner and focused.",
    "React community has many custom hooks libraries."
  ],
  "examples": [
    {
      "title": "Custom Hooks Example",
      "description": "Practical Custom Hooks example",
      "code": "function useWindowSize(){const[size,setSize]=useState({w:window.innerWidth,h:window.innerHeight});useEffect(()=>{const handler=()=>setSize({w:window.innerWidth,h:window.innerHeight});window.addEventListener('resize',handler);return()=>window.removeEventListener('resize',handler)},[]);return size}",
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
      "title": "Custom Hooks Example",
      "language": "jsx",
      "code": "function useWindowSize(){const[size,setSize]=useState({w:window.innerWidth,h:window.innerHeight});useEffect(()=>{const handler=()=>setSize({w:window.innerWidth,h:window.innerHeight});window.addEventListener('resize',handler);return()=>window.removeEventListener('resize',handler)},[]);return size}"
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
    "instruction": "Custom Hooks ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "function useWindowSize(){const[size,setSize]=useState({w:window.innerWidth,h:window.innerHeight});useEffect(()=>{const handler=()=>setSize({w:window.innerWidth,h:window.innerHeight});window.addEventListener('resize',handler);return()=>window.removeEventListener('resize',handler)},[]);return size}"
  },
  "quiz": [
    {
      "question": "Custom Hooks ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Custom Hooks React ka fundamental concept hai."
    },
    {
      "question": "Custom Hooks ka best practice kya hai?",
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
      "question": "Custom Hooks ko interview mein kaise explain karenge?",
      "answer": "Custom Hooks ek beginner concept hai jo React mein use hota hai. Custom hooks extract reusable logic from components. Function name starts with 'use' - convention."
    }
  ],
  "assignment": {
    "title": "Custom Hooks Assignment",
    "description": "Custom Hooks ka practical assignment.",
    "tasks": [
      "Custom Hooks ka example likho",
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
      "title": "Custom Hooks - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Custom Hooks ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
