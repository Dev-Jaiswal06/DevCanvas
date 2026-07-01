import { useTour } from "../../context/TourContext";
import { Joyride, STATUS } from "react-joyride";

const STEPS = [
  {
    target: "body",
    content: "Welcome to DevCanvas! Let's take a quick tour to show you around.",
    placement: "center",
    title: "Welcome to DevCanvas",
    disableBeacon: true,
  },
  {
    target: "nav a[href='/html']",
    content: "Start with the HTML course. Complete lessons to earn XP and unlock achievements.",
    title: "HTML Course",
  },
  {
    target: "nav a[href='/playground']",
    content: "Write and test code in real-time with our interactive coding playground.",
    title: "Code Playground",
  },
  {
    target: "nav a[href='/quiz']",
    content: "Test your knowledge with topic-wise quizzes. Each quiz gives instant feedback.",
    title: "Quiz Yourself",
  },
  {
    target: "nav a[href='/interview']",
    content: "Prepare for job interviews with 60+ curated questions across all topics.",
    title: "Interview Prep",
  },
  {
    target: "nav a[href='/projects']",
    content: "Build real-world projects with step-by-step instructions and starter code.",
    title: "Practice Projects",
  },
  {
    target: "nav a[href='/roadmap']",
    content: "Follow our interactive roadmap from beginner to full-stack developer.",
    title: "Learning Roadmap",
  },
  {
    target: "body",
    content: "That's it! Start your learning journey now. Happy coding!",
    placement: "center",
    title: "Ready to Go!",
  },
];

function OnboardingTour() {
  const { runTour, completeTour } = useTour();

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      completeTour();
    }
  };

  return (
    <Joyride
      steps={STEPS}
      run={runTour}
      callback={handleJoyrideCallback}
      continuous
      showProgress
      showSkipButton
      spotlightClicks
      disableScrollParentFix
      styles={{
        options: {
          arrowColor: "#1e293b",
          backgroundColor: "#1e293b",
          primaryColor: "#06b6d4",
          textColor: "#e2e8f0",
          overlayColor: "rgba(7, 11, 26, 0.7)",
          zIndex: 10000,
        },
        tooltipContainer: { textAlign: "left" },
        tooltipTitle: { fontSize: 18, fontWeight: 700, marginBottom: 8 },
        tooltipContent: { fontSize: 14, lineHeight: 1.6, color: "#94a3b8" },
        buttonNext: {
          backgroundColor: "#06b6d4",
          borderRadius: 12,
          fontSize: 13,
          fontWeight: 600,
          padding: "8px 20px",
        },
        buttonBack: { color: "#94a3b8", fontSize: 13, marginRight: 8 },
        buttonSkip: { color: "#64748b", fontSize: 12 },
      }}
    />
  );
}

export default OnboardingTour;
