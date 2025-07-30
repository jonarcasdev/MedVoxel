import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import questions from "./questions";
import correctSound from "../../assets/correct.mp3";
import incorrectSound from "../../assets/incorrect.mp3";
import { guardarResultadoQuiz } from "../../services/quizService";
import { useAuth } from "../../context/AuthContext";
import "./Quiz.css";

const Quiz = () => {
  const { user } = useAuth();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [questionTime, setQuestionTime] = useState(0);
  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem("bestScore")) || 0
  );

  const totalTimer = useRef(null);
  const questionTimer = useRef(null);

  const correctAudio = new Audio(correctSound);
  const incorrectAudio = new Audio(incorrectSound);

  useEffect(() => {
    totalTimer.current = setInterval(() => {
      setTotalTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(totalTimer.current);
  }, []);

  useEffect(() => {
    questionTimer.current = setInterval(() => {
      setQuestionTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(questionTimer.current);
  }, [currentIndex]);

  const formatTime = (seconds) => `${Math.floor(seconds / 60)}m ${seconds % 60}s`;

  const handleAnswer = (option) => {
    if (selectedOption) return;

    setSelectedOption(option);
    setShowFeedback(true);

    const isCorrect = option === questions[currentIndex].answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      correctAudio.play();
    } else {
      incorrectAudio.play();
    }

    setTimeout(() => {
      const next = currentIndex + 1;
      const finalCorrect = score + (isCorrect ? 1 : 0);
      if (next < questions.length) {
        setCurrentIndex(next);
        setSelectedOption(null);
        setShowFeedback(false);
        setQuestionTime(0);
      } else {
        clearInterval(totalTimer.current);
        clearInterval(questionTimer.current);
        setShowResult(true);

        // Guarda resultado en Firestore
        guardarResultadoQuiz({
          usuario: user?.displayName || user?.email || "Anónimo",
          puntos: finalCorrect,
          tiempo: formatTime(totalTime)
        });

        // Actualiza mejor puntaje local
        if (finalCorrect > bestScore) {
          localStorage.setItem("bestScore", finalCorrect);
          setBestScore(finalCorrect);
        }
      }
    }, 1500);
  };

  const restartQuiz = () => {
    clearInterval(totalTimer.current);
    clearInterval(questionTimer.current);
    setScore(0);
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setShowResult(false);
    setTotalTime(0);
    setQuestionTime(0);
    totalTimer.current = setInterval(() => setTotalTime((prev) => prev + 1), 1000);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div className="quiz-card">
          <div className="quiz-header">
            <span className="quiz-progress">
              Pregunta {currentIndex + 1} de {questions.length}
            </span>
            <span className="quiz-timer">
              Total: {formatTime(totalTime)} | Pregunta: {questionTime}s
            </span>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2>{questions[currentIndex].question}</h2>
              <ul>
                {questions[currentIndex].options.map((option, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className={
                      selectedOption
                        ? option === questions[currentIndex].answer
                          ? "correct"
                          : option === selectedOption
                          ? "incorrect"
                          : ""
                        : ""
                    }
                  >
                    {option}
                  </li>
                ))}
              </ul>
              {showFeedback && (
                <div className="feedback">
                  {selectedOption === questions[currentIndex].answer
                    ? "✅ ¡Correcto!"
                    : "❌ Incorrecto"}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="quiz-result">
          <h2>Resultado</h2>
          <p>Puntuación: {score} / {questions.length}</p>
          <p>Tiempo total: {formatTime(totalTime)}</p>
          <p>🏆 Mejor puntaje: {bestScore}</p>
          <button onClick={restartQuiz} className="restart-btn">
            Repetir quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
