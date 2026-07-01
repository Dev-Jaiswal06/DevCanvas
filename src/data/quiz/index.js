import htmlQuiz from "./htmlQuiz.js";
import cssQuiz from "./cssQuiz.js";
import javascriptQuiz from "./javascriptQuiz.js";
import reactQuiz from "./reactQuiz.js";

const quizzes = {
  html: { title: "HTML Quiz", data: htmlQuiz },
  css: { title: "CSS Quiz", data: cssQuiz },
  javascript: { title: "JavaScript Quiz", data: javascriptQuiz },
  react: { title: "React Quiz", data: reactQuiz }
};

export default quizzes;
