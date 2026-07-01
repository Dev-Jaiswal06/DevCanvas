import htmlQuestions from "./htmlQuestions";
import cssQuestions from "./cssQuestions";
import jsQuestions from "./jsQuestions";
import reactQuestions from "./reactQuestions";

const interviewQuestions = {
  html: { title: "HTML Interview Questions", data: htmlQuestions },
  css: { title: "CSS Interview Questions", data: cssQuestions },
  javascript: { title: "JavaScript Interview Questions", data: jsQuestions },
  react: { title: "React Interview Questions", data: reactQuestions },
};

export const getAllQuestions = () => {
  return [
    ...htmlQuestions.map((q) => ({ ...q, course: "html" })),
    ...cssQuestions.map((q) => ({ ...q, course: "css" })),
    ...jsQuestions.map((q) => ({ ...q, course: "javascript" })),
    ...reactQuestions.map((q) => ({ ...q, course: "react" })),
  ];
};

export default interviewQuestions;
