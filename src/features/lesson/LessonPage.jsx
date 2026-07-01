import { useProgress } from "../../context/ProgressContext";
import { getCourse } from "../../utils/getCourse";
import LessonBreadcrumb from "./components/LessonBreadcrumb";
import LessonHero from "./components/LessonHero";
import LessonHeader from "./LessonHeader";
import LessonInfo from "./components/LessonInfo";
import ProgressBar from "./ProgressBar";
import LessonTableOfContents from "./components/LessonTableOfContents";
import LessonTheory from "./LessonTheory";
import LessonDiagram from "./components/LessonDiagram";
import LessonSyntax from "./components/LessonSyntax";
import LessonExamples from "./components/LessonExamples";
import LessonCode from "./components/LessonCode";
import LessonOutput from "./components/LessonOutput";
import LessonMistakes from "./LessonMistakes";
import LessonBestPractices from "./components/LessonBestPractices";
import LessonPractices from "./components/LessonPractice";
import LessonExercise from "./components/LessonExercise";
import LessonAssignment from "./components/LessonAssignment";
import LessonQuiz from "./components/LessonQuiz";
import LessonInterview from "./components/LessonInterview";
import LessonResources from "./components/LessonResources";
import LessonSummary from "./LessonSummary";
import LessonNavigation from "./LessonNavigation";
import CompleteButton from "./CompleteButton";

function LessonPage({ lesson, courseName, previous, next }) {
  const { progress } = useProgress();
  const course = getCourse(courseName);
  const totalLessons = course?.lessons?.length || 0;
  const completedCount = (course?.lessons || []).filter((l) => progress.completedLessons.includes(l.id)).length;

  return (
    <>
      <LessonBreadcrumb course={courseName} lesson={lesson.title} />
      <LessonHero heroImage={lesson.heroImage} title={lesson.title} />
      <LessonHeader lesson={lesson} />
      <LessonInfo difficulty={lesson.difficulty} duration={lesson.duration} tags={lesson.tags} />
      <ProgressBar completed={completedCount} total={totalLessons} />
      <LessonTableOfContents />
      <LessonTheory theory={lesson.theory} />
      <LessonDiagram diagram={lesson.diagram} />
      <LessonSyntax syntax={lesson.syntax} />
      <LessonExamples examples={lesson.examples} />
      <LessonCode code={lesson.code} />
      <LessonOutput output={lesson.output} />
      <LessonMistakes mistakes={lesson.commonMistakes || lesson.mistakes} />
      <LessonBestPractices practices={lesson.bestPractices} />
      <LessonPractices practice={lesson.practice} />
      <LessonExercise exercise={lesson.exercise} />
      <CompleteButton id={lesson.id} />
      <LessonAssignment assignment={lesson.assignment} />
      <LessonQuiz quiz={lesson.quiz} />
      <LessonInterview interview={lesson.interview} />
      <LessonResources resources={lesson.resources} />
      <LessonSummary summary={lesson.summary} />
      <LessonNavigation courseName={courseName} previous={previous} next={next} />
    </>
  );
}

export default LessonPage;
