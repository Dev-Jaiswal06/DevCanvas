const lesson = {
  "id": 39,
  "slug": "error-boundaries",
  "title": "Error Boundaries",
  "description": "Error Boundaries ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Advanced",
    "Frontend"
  ],
  "theory": [
    "Error boundary catches JS errors in child component tree.",
    "class component with getDerivedStateFromError + componentDidCatch.",
    "No hook equivalent - must use class component.",
    "Wrap risky components: <ErrorBoundary><Expensive/></ErrorBoundary>.",
    "Fallback UI: getDerivedStateFromError sets error state.",
    "Doesn't catch: event handlers, async code, SSR errors.",
    "Error boundaries in event handlers - wrap in try/catch.",
    "Log errors: componentDidCatch(error,info) send to service.",
    "React 18: error boundaries catch more cases.",
    "Production: graceful degradation with fallback."
  ],
  "examples": [
    {
      "title": "Error Boundaries Example",
      "description": "Practical Error Boundaries example",
      "code": "class ErrorBoundary extends React.Component{state={hasError:false};static getDerivedStateFromError(){return{hasError:true}};componentDidCatch(e,i){console.error(e,i)};render(){return this.state.hasError?<h1>Something went wrong</h1>:this.props.children}}",
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
      "title": "Error Boundaries Example",
      "language": "jsx",
      "code": "class ErrorBoundary extends React.Component{state={hasError:false};static getDerivedStateFromError(){return{hasError:true}};componentDidCatch(e,i){console.error(e,i)};render(){return this.state.hasError?<h1>Something went wrong</h1>:this.props.children}}"
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
    "instruction": "Error Boundaries ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "class ErrorBoundary extends React.Component{state={hasError:false};static getDerivedStateFromError(){return{hasError:true}};componentDidCatch(e,i){console.error(e,i)};render(){return this.state.hasError?<h1>Something went wrong</h1>:this.props.children}}"
  },
  "quiz": [
    {
      "question": "Error Boundaries ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "Error Boundaries React ka important concept hai."
    },
    {
      "question": "Error Boundaries ka best practice kya hai?",
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
      "question": "Error Boundaries ko interview mein kaise explain karenge?",
      "answer": "Error Boundaries ek advanced concept hai jo React mein use hota hai. Error boundary catches JS errors in child component tree. class component with getDerivedStateFromError + componentDidCatch."
    }
  ],
  "assignment": {
    "title": "Error Boundaries Assignment",
    "description": "Error Boundaries ka practical assignment.",
    "tasks": [
      "Error Boundaries ka example likho",
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
      "title": "Error Boundaries - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Error Boundaries ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
