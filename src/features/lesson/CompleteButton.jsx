import { useProgress } from "../../context/ProgressContext";

function CompleteButton({ id }) {
  const { completeLesson } = useProgress();

  return (
    <button
      onClick={() => completeLesson(id)}
      className="bg-green-500 text-black px-6 py-3 rounded-xl mt-8"
    >
      Mark Completed
    </button>
  );
}

export default CompleteButton;
