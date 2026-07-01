const lesson = {
  "id": 4,
  "slug": "state-usestate",
  "title": "State & useState Hook",
  "description": "State & useState Hook ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "15 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner",
    "Frontend"
  ],
  "theory": [
    "State component ka data jo time ke saath change hota hai.",
    "useState hook: const [state,setState]=useState(initial).",
    "State update re-render trigger karta hai.",
    "setState(newValue) - direct set.",
    "setState(prev=>prev+1) - functional update (for previous state).",
    "State immutable update karni chahiye (copy first).",
    "Multiple state variables: multiple useState calls.",
    "State in arrays: [...arr,newItem] (spread).",
    "State in objects: {...obj,key:newVal} (spread).",
    "State batching - multiple setState in one render cycle."
  ],
  "examples": [
    {
      "title": "State & useState Hook Example",
      "description": "Practical State & useState Hook example",
      "code": "function Counter(){const[count,setCount]=useState(0);return(<div><p>Count:{count}</p><button onClick={()=>setCount(c=>c+1)}>+</button></div>)}",
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
      "title": "State & useState Hook Example",
      "language": "jsx",
      "code": "function Counter(){const[count,setCount]=useState(0);return(<div><p>Count:{count}</p><button onClick={()=>setCount(c=>c+1)}>+</button></div>)}"
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
    "instruction": "State & useState Hook ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "function Counter(){const[count,setCount]=useState(0);return(<div><p>Count:{count}</p><button onClick={()=>setCount(c=>c+1)}>+</button></div>)}"
  },
  "quiz": [
    {
      "question": "State & useState Hook ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "State & useState Hook React ka fundamental concept hai."
    },
    {
      "question": "State & useState Hook ka best practice kya hai?",
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
      "question": "State & useState Hook ko interview mein kaise explain karenge?",
      "answer": "State & useState Hook ek beginner concept hai jo React mein use hota hai. State component ka data jo time ke saath change hota hai. useState hook: const [state,setState]=useState(initial)."
    }
  ],
  "assignment": {
    "title": "State & useState Hook Assignment",
    "description": "State & useState Hook ka practical assignment.",
    "tasks": [
      "State & useState Hook ka example likho",
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
      "title": "State & useState Hook - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne State & useState Hook ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
