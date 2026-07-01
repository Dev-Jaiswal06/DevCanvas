import { createContext, useContext, useState, useCallback } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const startQuiz = useCallback((quizData) => {
    setCurrentQuiz(quizData);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  }, []);

  const answerQuestion = useCallback((questionId, answerIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  }, []);

  const nextQuestion = useCallback(() => {
    if (currentQuiz && currentQuestion < currentQuiz.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [currentQuiz, currentQuestion]);

  const prevQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const finishQuiz = useCallback(() => {
    setShowResults(true);
  }, []);

  const resetQuiz = useCallback(() => {
    setCurrentQuiz(null);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  }, []);

  const correctCount = currentQuiz
    ? currentQuiz.filter((q) => answers[q.id] === q.answer).length
    : 0;

  const score = currentQuiz ? Math.round((correctCount / currentQuiz.length) * 100) : 0;

  return (
    <QuizContext.Provider
      value={{
        currentQuiz,
        currentQuestion,
        answers,
        showResults,
        startQuiz,
        answerQuestion,
        nextQuestion,
        prevQuestion,
        finishQuiz,
        resetQuiz,
        correctCount,
        score,
        totalQuestions: currentQuiz?.length || 0,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}

export default QuizContext;
