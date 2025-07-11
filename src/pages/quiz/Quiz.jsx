import React, { useState } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import "./Quiz.css";

const preguntas = [
  {
    pregunta: "¿Qué es la arritmia?",
    opciones: [
      "Un tipo de tumor",
      "Latidos irregulares del corazón",
      "Presión alta en las arterias",
      "Acumulación de grasa en el corazón"
    ],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué causa la hipertensión?",
    opciones: [
      "Tener muchas emociones",
      "Bajo ritmo cardíaco",
      "Presión arterial constantemente alta",
      "Tumores en el corazón"
    ],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué es la trombosis?",
    opciones: [
      "Un coágulo sanguíneo que bloquea un vaso",
      "Falla renal",
      "Infección en el corazón",
      "Latido lento del corazón"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué caracteriza a un tumor cardíaco?",
    opciones: [
      "Dolor de cabeza constante",
      "Fiebre crónica",
      "Presencia anormal de células en el corazón",
      "Falta de aire"
    ],
    respuestaCorrecta: 2
  }
];

const Quiz = () => {
  const {
    quiz,
    incrementQuizProgress,
    clearQuizProgress
  } = useQuizStore();

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [seleccionado, setSeleccionado] = useState(null);
  const [finalizado, setFinalizado] = useState(false);

  const pregunta = preguntas[preguntaActual];

  const manejarRespuesta = (indice) => {
    if (seleccionado !== null) return; // prevenir doble clic

    const esCorrecta = indice === pregunta.respuestaCorrecta;
    setSeleccionado(indice);

    useQuizStore.setState((state) => ({
      quiz: {
        ...state.quiz,
        correctAnswers: esCorrecta
          ? state.quiz.correctAnswers + 1
          : state.quiz.correctAnswers,
        incorrectAnswers: !esCorrecta
          ? state.quiz.incorrectAnswers + 1
          : state.quiz.incorrectAnswers
      }
    }));

    incrementQuizProgress();

    setTimeout(() => {
      if (preguntaActual + 1 < preguntas.length) {
        setPreguntaActual(preguntaActual + 1);
        setSeleccionado(null);
      } else {
        setFinalizado(true);
      }
    }, 1200);
  };

  const reiniciar = () => {
    clearQuizProgress();
    setPreguntaActual(0);
    setSeleccionado(null);
    setFinalizado(false);
  };

  if (finalizado) {
    return (
      <div className="quiz">
        <h2>Resultado del Quiz</h2>
        <p>Correctas: {quiz.correctAnswers}</p>
        <p>Incorrectas: {quiz.incorrectAnswers}</p>
        <p>Puntaje final: {quiz.correctAnswers} / {preguntas.length}</p>
        <button className="btn-reiniciar" onClick={reiniciar}>Reiniciar Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h1>Quiz sobre enfermedades del corazón ❤️</h1>
      <p className="pregunta"><strong>{pregunta.pregunta}</strong></p>
      <div className="opciones">
        {pregunta.opciones.map((opcion, index) => {
          let className = "btn-opcion";
          if (seleccionado !== null) {
            if (index === pregunta.respuestaCorrecta) {
              className += " correcta";
            } else if (index === seleccionado) {
              className += " incorrecta";
            }
          }
          return (
            <button
              key={index}
              className={className}
              onClick={() => manejarRespuesta(index)}
              disabled={seleccionado !== null}
            >
              {opcion}
            </button>
          );
        })}
      </div>
      <p>Progreso del quiz: {quiz.percentageQuizCompleted}%</p>
    </div>
  );
};

export default Quiz;
