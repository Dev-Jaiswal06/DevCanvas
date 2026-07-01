const reactQuiz = [
  {
    id: 1,
    question: "React kya hai?",
    options: ["Database", "JavaScript library for UI", "CSS framework", "Backend framework"],
    answer: 1,
    explanation: "React ek JavaScript library hai jo user interfaces banane ke liye use hoti hai."
  },
  {
    id: 2,
    question: "React component return kya karta hai?",
    options: ["HTML", "JSX", "CSS", "JSON"],
    answer: 1,
    explanation: "React component JSX return karta hai jo HTML jaisa dikhta hai."
  },
  {
    id: 3,
    question: "Props kya hote hain?",
    options: ["Component state", "Component ke parameters", "Component style", "Component events"],
    answer: 1,
    explanation: "Props (properties) parent se child component mein data pass karne ke liye use hote hain."
  },
  {
    id: 4,
    question: "useState hook kya return karta hai?",
    options: ["Sirf value", "Sirf function", "Array [value, setter]", "Object"],
    answer: 2,
    explanation: "useState ek array return karta hai: current value aur ek setter function."
  },
  {
    id: 5,
    question: "useEffect ka second argument kya hota hai?",
    options: ["Callback", "Dependency array", "Timer", "State"],
    answer: 1,
    explanation: "Dependency array batata hai ki useEffect kab re-run karna hai."
  },
  {
    id: 6,
    question: "Virtual DOM kya hai?",
    options: ["Real DOM ki copy", "Browser API", "CSS framework", "Database"],
    answer: 0,
    explanation: "Virtual DOM real DOM ki lightweight copy hai jo performance optimize karta hai."
  },
  {
    id: 7,
    question: "React mein conditional rendering ke liye kya use hota hai?",
    options: ["if-else", "switch", "Ternary operator", "for loop"],
    answer: 2,
    explanation: "Ternary operator (condition ? true : false) common conditional rendering method hai."
  },
  {
    id: 8,
    question: "Key prop kis liye use hota hai?",
    options: ["Styling", "Unique identification", "Events handle", "Data store"],
    answer: 1,
    explanation: "Key prop React ko list items uniquely identify karne mein madad karta hai."
  },
  {
    id: 9,
    question: "React mein routing ke liye kaunsa library use hota hai?",
    options: ["react-router", "react-route", "react-navigation", "react-link"],
    answer: 0,
    explanation: "react-router-dom React applications mein routing provide karta hai."
  },
  {
    id: 10,
    question: "useRef kiske liye use hota hai?",
    options: ["State manage", "DOM reference", "API call", "Styling"],
    answer: 1,
    explanation: "useRef DOM elements ko directly access karne ke liye use hota hai."
  }
];

export default reactQuiz;
