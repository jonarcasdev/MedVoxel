import { useEffect, useState } from "react";
import { obtenerResultadosQuiz } from "../../services/quizService";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerResultadosQuiz();
      const ordenado = data.sort((a, b) => b.correctas - a.correctas);
      setResultados(ordenado);
    };
    fetchData();
  }, []);

  return (
    <div className="leaderboard">
      <h2>🏆 Medallero del Quiz</h2>
      <table>
        <thead>
          <tr>
            <th>Posición</th>
            <th>Usuario</th>
            <th>Correctas</th>
            <th>Tiempo</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((r, index) => (
            <tr key={index}>
              <td>🥇 {index + 1}</td>
              <td>{r.usuario}</td>
              <td>{r.correctas}</td>
              <td>{r.tiempo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
