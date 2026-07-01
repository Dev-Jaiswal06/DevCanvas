const lesson = {
  "id": 1,
  "slug": "introduction",
  "title": "Introduction to React",
  "description": "Introduction to React ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Beginner",
  "duration": "12 min",
  "heroImage": "",
  "tags": [
    "React",
    "Beginner"
  ],
  "theory": [
    "React ek JavaScript library hai UI banane ke liye by Facebook.",
    "Component-Based Architecture - chhote components se UI build.",
    "Virtual DOM speed ka secret - lightweight copy of actual DOM.",
    "JSX HTML-like code JS mein - Babel compile karta hai.",
    "Declarative approach - batate ho UI kaisa dikhna chahiye.",
    "Unidirectional data flow - parent to child via props.",
    "React sirf View layer handle karta hai.",
    "Hooks (useState, useEffect) functional components mein state add.",
    "React Native se mobile apps bhi bana sakte ho.",
    "React most popular frontend library - FB, IG, Netflix use."
  ],
  "examples": [
    {
      "title": "Simple Component",
      "description": "Basic React component",
      "code": "function Welcome(){return<h1>Hello, React!</h1>;}\nexport default Welcome;",
      "result": "Renders 'Hello, React!' heading"
    },
    {
      "title": "JSX Expression",
      "description": "JS with curly braces",
      "code": "function Greeting(){const name='Rahul';return<h1>Namaste, {name}!</h1>;}",
      "result": "Renders 'Namaste, Rahul!'"
    },
    {
      "title": "Props",
      "description": "Props se data pass karna",
      "code": "function User(props){return<div>Hello, {props.name}!</div>;}",
      "result": "Renders 'Hello, Rahul!'"
    }
  ],
  "syntax": [
    "function Component(){return<div>...</div>;}",
    "const Component=()=><div>...</div>;",
    "export default Component;"
  ],
  "diagram": [
    "Concept → Understanding → Implementation",
    "Theory → Examples → Practice → Mastery"
  ],
  "code": [
    {
      "title": "Simple Component",
      "language": "jsx",
      "code": "function Welcome(){return<h1>Hello, React!</h1>;}\nexport default Welcome;"
    },
    {
      "title": "JSX Expression",
      "language": "jsx",
      "code": "function Greeting(){const name='Rahul';return<h1>Namaste, {name}!</h1>;}"
    },
    {
      "title": "Props",
      "language": "jsx",
      "code": "function User(props){return<div>Hello, {props.name}!</div>;}"
    }
  ],
  "output": [
    "Expected output in console",
    "Browser mein result dekhein"
  ],
  "commonMistakes": [
    "className bhoolna - class ki jagah className",
    "Key prop bhoolna in lists",
    "Return bhoolna - component undefined return"
  ],
  "bestPractices": [
    "Components small aur focused rakho",
    "File name component name jaisa (PascalCase)",
    "Default exports for main components"
  ],
  "tips": [
    "ES7+ React snippets extension install karo",
    "React DevTools browser extension useful",
    "Hamesha functional components + hooks use karo"
  ],
  "practice": [
    "Simple functional component banao 'Hello World'",
    "Component banao jo props mein name le",
    "Parent aur Child component - props pass"
  ],
  "exercise": {
    "instruction": "Profile component banao jo name, age, city props le aur card render kare.",
    "hint": "Destructuring props. Fragment use karo.",
    "starterCode": "function Profile({name,age,city}){\n  return(\n    <div className='profile-card'>\n      <h2>{name}</h2>\n      <p>Age: {age}</p>\n      <p>City: {city}</p>\n    </div>\n  );\n}\nexport default Profile;"
  },
  "quiz": [
    {
      "question": "React kya hai?",
      "options": [
        "Programming language",
        "CSS framework",
        "JS library for UI",
        "Database"
      ],
      "answer": 2
    },
    {
      "question": "JSX mein class ke liye kya?",
      "options": [
        "class",
        "className",
        "cssClass",
        "styleClass"
      ],
      "answer": 1,
      "explanation": "className kyunki class JS keyword hai."
    }
  ],
  "interview": [
    {
      "question": "React kya hai?",
      "answer": "JS library for UI by Meta. Features: Virtual DOM, Component-based, JSX, Unidirectional data flow, Hooks. Declarative - aap batate ho UI kya chahiye, React nikalta hai kaise karna hai."
    }
  ],
  "assignment": {
    "title": "Introduction to React Assignment",
    "description": "Introduction to React ka practical assignment.",
    "tasks": [
      "Introduction to React ka example likho",
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
      "title": "Introduction to React - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne Introduction to React ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
