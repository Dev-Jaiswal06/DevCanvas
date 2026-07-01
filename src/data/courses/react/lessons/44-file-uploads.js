const lesson = {
  "id": 44,
  "slug": "file-uploads",
  "title": "File Uploads in React",
  "description": "File Uploads in React ka comprehensive guide. Hinglish mein seekhein.",
  "difficulty": "Advanced",
  "duration": "25 min",
  "heroImage": "",
  "tags": [
    "React",
    "Advanced",
    "Frontend"
  ],
  "theory": [
    "File input: <input type='file' onChange={...}/>",
    "File object: e.target.files[0] - name, size, type.",
    "FileReader API: read file as dataURL, text, arrayBuffer.",
    "Preview: createObjectURL(file) for image preview.",
    "Upload: FormData + fetch/axios POST.",
    "Multiple files: <input multiple/>",
    "Drag & drop: onDragOver, onDrop handlers.",
    "Progress: XMLHttpRequest.upload.onprogress.",
    "Chunk upload: split large files into chunks.",
    "Validation: file type, size, count limits."
  ],
  "examples": [
    {
      "title": "File Uploads in React Example",
      "description": "Practical File Uploads in React example",
      "code": "// File Uploads in React ka practical example\nfunction Example(){return<div><h1>File Uploads in React</h1></div>}\nexport default Example;",
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
      "title": "File Uploads in React Example",
      "language": "jsx",
      "code": "// File Uploads in React ka practical example\nfunction Example(){return<div><h1>File Uploads in React</h1></div>}\nexport default Example;"
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
    "instruction": "File Uploads in React ka practical exercise complete karein.",
    "hint": "Pehle basic example likho, phir gradually complexity badhao.",
    "starterCode": "// File Uploads in React ka practical example\nfunction Example(){return<div><h1>File Uploads in React</h1></div>}\nexport default Example;"
  },
  "quiz": [
    {
      "question": "File Uploads in React ke baare mein kaunsa sahi hai?",
      "options": [
        "Yeh React core concept hai",
        "Yeh rarely use hota hai",
        "Yeh deprecated hai",
        "Yeh third-party library hai"
      ],
      "answer": 0,
      "explanation": "File Uploads in React React ka important concept hai."
    },
    {
      "question": "File Uploads in React ka best practice kya hai?",
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
      "question": "File Uploads in React ko interview mein kaise explain karenge?",
      "answer": "File Uploads in React ek advanced concept hai jo React mein use hota hai. File input: <input type='file' onChange={...}/> File object: e.target.files[0] - name, size, type."
    }
  ],
  "assignment": {
    "title": "File Uploads in React Assignment",
    "description": "File Uploads in React ka practical assignment.",
    "tasks": [
      "File Uploads in React ka example likho",
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
      "title": "File Uploads in React - W3Schools",
      "url": "https://www.w3schools.com/react/"
    },
    {
      "title": "FreeCodeCamp",
      "url": "https://www.freecodecamp.org/learn/"
    }
  ],
  "summary": [
    "Is lesson mein humne File Uploads in React ke baare mein seekha",
    "Yeh real-world projects mein useful hai",
    "Practice karte rahein aur concepts deeply samjhein"
  ]
};

export default lesson;
