import htmlQuiz from "../data/quiz/htmlQuiz";
import cssQuiz from "../data/quiz/cssQuiz";
import javascriptQuiz from "../data/quiz/javascriptQuiz";
import reactQuiz from "../data/quiz/reactQuiz";

const quizData = { html: htmlQuiz, css: cssQuiz, javascript: javascriptQuiz, react: reactQuiz };

export function getQuiz(topic) {
  const quiz = quizData[topic];
  if (!quiz) return null;
  return quiz.map((q, i) => ({
    ...q,
    id: q.id || `${topic}-${i + 1}`,
    selectedAnswer: null,
    isCorrect: null,
  }));
}

export function getQuizTopics() {
  return Object.keys(quizData).map((key) => ({
    id: key,
    label: key.charAt(0).toUpperCase() + key.slice(1),
    questionCount: quizData[key].length,
  }));
}

export function checkAnswer(question, selectedIndex) {
  return {
    ...question,
    selectedAnswer: selectedIndex,
    isCorrect: selectedIndex === question.answer,
  };
}

export function calculateScore(questions) {
  const answered = questions.filter((q) => q.selectedAnswer !== null);
  const correct = answered.filter((q) => q.isCorrect);
  return { total: questions.length, answered: answered.length, correct: correct.length, score: Math.round((correct.length / questions.length) * 100) };
}

export function saveQuizAttempt(topic, questions) {
  const { score, total, correct } = calculateScore(questions);
  const attempts = JSON.parse(localStorage.getItem("devcanvas_quiz_attempts") || "[]");
  attempts.push({ topic, score, total, correct, date: new Date().toISOString() });
  localStorage.setItem("devcanvas_quiz_attempts", JSON.stringify(attempts));
  return { topic, score, total, correct };
}

export function getQuizHistory() {
  return JSON.parse(localStorage.getItem("devcanvas_quiz_attempts") || "[]");
}
