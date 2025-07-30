import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// Obtener resultados del quiz
export const obtenerResultadosQuiz = async () => {
  const db = getFirestore();
  const resultadosRef = collection(db, "resultados");

  const snapshot = await getDocs(resultadosRef);

  const resultados = snapshot.docs.map((doc) => ({
    id: doc.id,
    usuario: doc.data().Usuario,
    correctas: doc.data().Puntos,
    tiempo: doc.data().Tiempo,
  }));

  return resultados;
};

// Guardar nuevo resultado del quiz
export const guardarResultadoQuiz = async ({ usuario, puntos, tiempo }) => {
  const db = getFirestore();
  const resultadosRef = collection(db, "resultados");

  await addDoc(resultadosRef, {
    Usuario: usuario,
    Puntos: puntos,
    Tiempo: tiempo,
  });
};
