const javascriptQuiz = [
  {
    id: 1,
    question: "JavaScript mein variable declare karne ka correct tarika kaunsa hai?",
    options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
    answer: 0,
    explanation: "JavaScript mein variables var, let, ya const se declare kiye jaate hain."
  },
  {
    id: 2,
    question: "Array ka length nikalne ke liye kaunsa property use hota hai?",
    options: ["size", "length", "count", "len"],
    answer: 1,
    explanation: ".length property array ya string ka length return karta hai."
  },
  {
    id: 3,
    question: "Console mein kuch print karne ke liye kaunsa function?",
    options: ["print()", "echo()", "console.log()", "write()"],
    answer: 2,
    explanation: "console.log() browser console mein output dikhata hai."
  },
  {
    id: 4,
    question: "=== operator kya check karta hai?",
    options: ["Sirf value", "Sirf type", "Value aur type dono", "Kuch nahi"],
    answer: 2,
    explanation: "=== (strict equality) value aur type dono check karta hai."
  },
  {
    id: 5,
    question: "Function define karne ka syntax kya hai?",
    options: ["function myFunc() {}", "func myFunc() {}", "define myFunc() {}", "create myFunc() {}"],
    answer: 0,
    explanation: "function keyword se function define kiya jaata hai."
  },
  {
    id: 6,
    question: "setTimeout() kya karta hai?",
    options: ["Immediately code run karna", "Delay ke baad code run karna", "Code ko repeat karna", "Code ko stop karna"],
    answer: 1,
    explanation: "setTimeout() specified delay ke baad function execute karta hai."
  },
  {
    id: 7,
    question: "Promise ke teen states kaunsi hain?",
    options: ["Start, Middle, End", "Pending, Resolved, Rejected", "Wait, Done, Fail", "Open, Close, Error"],
    answer: 1,
    explanation: "Promise ke 3 states: Pending (waiting), Resolved (success), Rejected (error)."
  },
  {
    id: 8,
    question: "JSON.parse() kya karta hai?",
    options: ["Object ko JSON mein convert", "JSON string ko object mein convert", "Array ko string mein", "String ko number mein"],
    answer: 1,
    explanation: "JSON.parse() JSON string ko JavaScript object mein convert karta hai."
  },
  {
    id: 9,
    question: "Template literal ka syntax kya hai?",
    options: ["'string ${var}'", '"string ${var}"', "`string ${var}`", "/string ${var}/"],
    answer: 2,
    explanation: "Template literals backticks (`) ke andar likhe jaate hain aur ${} se variables embed hote hain."
  },
  {
    id: 10,
    question: "async/await kya hai?",
    options: ["CSS property", "Promise handle karne ka modern tarika", "HTML attribute", "Database query"],
    answer: 1,
    explanation: "async/await promises ke saath asynchronous code likhne ka modern tarika hai."
  }
];

export default javascriptQuiz;
