const htmlQuiz = [
  {
    id: 1,
    question: "HTML ka full form kya hai?",
    options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "None of these"],
    answer: 0,
    explanation: "HTML stands for HyperText Markup Language. Ye web pages ki structure banane ke liye use hota hai."
  },
  {
    id: 2,
    question: "HTML document ka correct structure kya hai?",
    options: ["<html><head><title>..</title></head><body>..</body></html>", "<head><html><body>..</body></html></head>", "<body><html><head>..</head></html></body>", "<html><body><head>..</head></body></html>"],
    answer: 0,
    explanation: "Correct structure: <html> ke andar <head> aur <body> aata hai."
  },
  {
    id: 3,
    question: "Sabse bada heading tag kaunsa hai?",
    options: ["<h6>", "<h1>", "<h0>", "<heading>"],
    answer: 1,
    explanation: "<h1> sabse bada aur <h6> sabse chhota heading tag hai."
  },
  {
    id: 4,
    question: "Line break ke liye kaunsa tag use hota hai?",
    options: ["<lb>", "<break>", "<br>", "<newline>"],
    answer: 2,
    explanation: "<br> tag line break ke liye use hota hai. Ye self-closing tag hai."
  },
  {
    id: 5,
    question: "Image dikhane ke liye kaunsa attribute use hota hai?",
    options: ["href", "src", "link", "img"],
    answer: 1,
    explanation: "<img> tag mein src attribute image ka path batata hai."
  },
  {
    id: 6,
    question: "<a> tag mein link dene ke liye kaunsa attribute use hota hai?",
    options: ["src", "link", "href", "url"],
    answer: 2,
    explanation: "href attribute link ki destination specify karta hai."
  },
  {
    id: 7,
    question: "Ordered list ke liye kaunsa tag use hota hai?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: 1,
    explanation: "<ol> ordered list (numbered) ke liye use hota hai."
  },
  {
    id: 8,
    question: "HTML table mein column header ke liye kaunsa tag use hota hai?",
    options: ["<td>", "<th>", "<thead>", "<tc>"],
    answer: 1,
    explanation: "<th> (table header) column headings ke liye use hota hai."
  },
  {
    id: 9,
    question: "Comment likhne ka syntax kya hai?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    answer: 0,
    explanation: "HTML comments <!-- --> ke andar likhe jaate hain."
  },
  {
    id: 10,
    question: "DOCTYPE declaration ka kya purpose hai?",
    options: ["CSS styles add karna", "Browser ko HTML version batana", "JavaScript enable karna", "Page ko fast karna"],
    answer: 1,
    explanation: "<!DOCTYPE> browser ko batata hai ki page HTML ke kis version mein likha hai."
  }
];

export default htmlQuiz;
