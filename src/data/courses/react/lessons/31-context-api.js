const lesson = {
  "id": 31,
  "slug": "context-api",
  "title": "Context API Deep Dive",
  "description": "Context API Deep Dive ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Intermediate",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Intermediate",
    "Frontend"
  ],
  "theory": [
    "Context API React's built-in state management.",
    "createContext - returns {Provider, Consumer}.",
    "Provider wraps subtree that needs context.",
    "useContext hook - access context value.",
    "Context value update triggers consumer re-render.",
    "Provider nesting - multiple contexts for different concerns.",
    "Performance: memoize context value to prevent extra renders.",
    "Default value: createContext(default) - when no Provider.",
    "Context vs props: context for global data, props for local.",
    "Don't overuse context - component composition first."
  ],
  "examples": [
    {
      "title": "Context API Deep Dive Example",
      "description": "Practical Context API Deep Dive example",
      "code": "const ThemeContext=createContext('light');\nfunction App(){return(<ThemeContext.Provider value='dark'><ThemedComponent/></ThemeContext.Provider>)}\nfunction ThemedComponent(){const theme=useContext(ThemeContext);return<div>Current theme:{theme}</div>}",
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
      "title": "Context API Deep Dive Example",
      "language": "jsx",
      "code": "const ThemeContext=createContext('light');\nfunction App(){return(<ThemeContext.Provider value='dark'><ThemedComponent/></ThemeContext.Provider>)}\nfunction ThemedComponent(){const theme=useContext(ThemeContext);return<div>Current theme:{theme}</div>}"
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
    "instruction": "Context API Deep Dive ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "const ThemeContext=createContext('light');\nfunction App(){return(<ThemeContext.Provider value='dark'><ThemedComponent/></ThemeContext.Provider>)}\nfunction ThemedComponent(){const theme=useContext(ThemeContext);return<div>Current theme:{theme}</div>}"
  },
  "quiz": [
    {
      "question": "Context API Deep Dive ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Context API Deep Dive React ka important concept hai."
    },
    {
      "question": "Context API Deep Dive ka best practice kya hai?",
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
      "question": "Context API Deep Dive ko interview mein kaise explain karenge?",
      "answer": "Context API Deep Dive ek intermediate concept hai jo React mein use hota hai. Context API React's built-in state management. createContext - returns {Provider, Consumer}."
    }
  ],
  "assignment": {
    "title": "Context API Deep Dive Assignment",
    "description": "Context API Deep Dive ka practical assignment.",
    "tasks": [
      "Context API Deep Dive ka example likho",
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
      "title": "Context API Deep Dive - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Context API Deep Dive ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
