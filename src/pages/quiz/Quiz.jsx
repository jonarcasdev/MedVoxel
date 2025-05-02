import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import "./Quiz.css";
const Quiz = () => {
    const{quiz,incrementQuizProgress} = useQuizStore();

    const handleQuizNext = useCallback(() => {
        incrementQuizProgress();
    },[incrementQuizProgress]);
    return (
    <div className="quiz">
        <h1>Quiz</h1>
        <span>Progreso del quiz: {quiz.percentageQuizCompleted} % </span>
        <button onClick={handleQuizNext}>siguiente</button>
    </div>)
}
export default Quiz;