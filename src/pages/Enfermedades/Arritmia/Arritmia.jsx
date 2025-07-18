import "./Arritmia.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { useRef, useState } from "react";
import Heart4 from "../../models3d/Heart4";
import Heart2_1 from "../../models3d/heart2_1";

const Arritmia = () => {
  const leerMas = useRef(null);
  const [mensajeVisible, setMensajeVisible] = useState(true);
  const [usarNuevoModelo, setUsarNuevoModelo] = useState(false);

  const handleScroll = () => {
    leerMas.current.scrollIntoView({ behavior: "smooth" });
  };

  const manejarClick = () => {
    if (mensajeVisible) setMensajeVisible(false);
  };

  const cambiarModelo = () => {
    setUsarNuevoModelo(prev => !prev);
  };

  return (
    <div className="arritmia-container">
      {mensajeVisible && (
        <div className="arritmia-info" onClick={manejarClick}>
          <strong>¡Interactúa con el corazón 3D!</strong><br />
          🖱 Mantén clic izquierdo para rotar <br />
          🔍 Usa la rueda para acercar/alejar <br />
          👉 Haz clic en cualquier parte para continuar
        </div>
      )}

      <h1 className="arritmia-title">Arritmia Cardíaca</h1>

      <button onClick={cambiarModelo} className="arritmia-boton-modelo">
        Cambiar modelo 3D
      </button>

      <div className="arritmia-canvas-container">
        <Canvas camera={{ position: [2, 0, 5], fov: 45 }} onClick={manejarClick}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls enableZoom={true} />
          <Stage environment="city" intensity={0.6} shadows>
            {usarNuevoModelo ? <Heart2_1 /> : <Heart4 />}
          </Stage>
        </Canvas>
      </div>

      <section className="arritmia-cuadro" ref={leerMas}>
        <div className="arritmia-card">
          <h2>¿Qué es una arritmia?</h2>
          <p>
            Una <strong>arritmia</strong> es una alteración del ritmo normal del corazón. Esto puede significar que el corazón late muy rápido
            (taquicardia), muy lento (bradicardia), o de forma irregular. Aunque algunas arritmias son inofensivas, otras pueden ser
            potencialmente mortales si afectan la capacidad del corazón para bombear sangre adecuadamente.
          </p>
        </div>
      </section>

      <section className="arritmia-cuadro">
        <div className="arritmia-card">
          <h2>Causas</h2>
          <ul>
            <li>Enfermedad coronaria o insuficiencia cardíaca</li>
            <li>Desequilibrios electrolíticos (potasio, sodio, calcio)</li>
            <li>Infarto previo o cicatrices cardíacas</li>
            <li>Estilo de vida: estrés, alcohol, tabaco o drogas</li>
            <li>Factores genéticos o congénitos</li>
          </ul>
        </div>
      </section>

      <section className="arritmia-cuadro-azul">
        <div className="arritmia-card">
          <h2>Síntomas comunes</h2>
          <ul>
            <li>Palpitaciones o sensación de aleteo</li>
            <li>Mareos, debilidad o desmayos</li>
            <li>Fatiga excesiva o dificultad para respirar</li>
            <li>Dolor en el pecho o ansiedad</li>
            <li>Ausencia de síntomas (descubierta por ECG)</li>
          </ul>
        </div>
      </section>

      <section className="arritmia-cuadro">
        <div className="arritmia-card">
          <h2>Diagnóstico y tratamiento</h2>
          <p>
            El diagnóstico incluye exámenes como el <strong>electrocardiograma (ECG)</strong>, monitores Holter, y pruebas de esfuerzo.
            El tratamiento depende del tipo y severidad: desde cambios de estilo de vida y medicamentos hasta procedimientos como la
            cardioversión, ablación o implantación de marcapasos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Arritmia;
