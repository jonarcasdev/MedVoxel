import "./Arritmia.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sparkles } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import Heart4 from "../../models3d/Heart4";
import Heart2_1 from "../../models3d/Heart2_1";
import Heart4_3 from "../../models3d/Heart4_3";

const Arritmia = () => {
  const leerMas = useRef(null);
  const [mostrarInstrucciones, setMostrarInstrucciones] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [modeloIndex, setModeloIndex] = useState(0);

  const modelos = [<Heart4 />, <Heart2_1 />, <Heart4_3 />];

  const cambiarModelo = () => {
    setModeloIndex((prev) => (prev + 1) % modelos.length);
  };

  const toggleInstrucciones = () => {
    setMostrarInstrucciones((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "m") cambiarModelo();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="arritmia-container">
      <h1 className="arritmia-title">Arritmia</h1>

      {/* BOTONES SUPERIORES */}
      <div className="arritmia-buttons">
        <button onClick={toggleInstrucciones}>Mostrar instrucciones</button>
        <button onClick={cambiarModelo}>Cambiar modelo</button>
        <button onClick={() => setShowInfo((prev) => !prev)}>Mostrar info ❤️</button>
      </div>

      {/* CONTENEDOR DEL MODELO */}
      <div className="arritmia-modelo">
        <Canvas shadows camera={{ position: [2, 0, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 10]} intensity={1.5} castShadow />
          <spotLight position={[2, 5, 5]} angle={0.3} penumbra={1} intensity={1.2} castShadow />
          <OrbitControls enableZoom={true} />
          <Stars />
          <Sparkles count={60} scale={5} speed={1} />

          <mesh position={[0, 0, 0]}>
            {modelos[modeloIndex]}
          </mesh>
        </Canvas>

        {/* INSTRUCCIONES */}
        {mostrarInstrucciones && (
          <div className="arritmia-mensaje">
            <strong>Instrucciones:</strong><br />
            * Mantén clic izquierdo para rotar<br />
            * Usa la rueda del ratón para acercar o alejar<br />
            * Presiona <strong>M</strong> o haz clic en el botón para cambiar el modelo
          </div>
        )}

        {/* INFO */}
        {showInfo && (
          <div className="arritmia-info-box">
            <strong>Latido activo ❤️</strong><br />
            El corazón presenta un ritmo animado<br />
            simulando el latido normal.
          </div>
        )}
      </div>

      {/* TEXTO INFORMATIVO */}
      <div className="arritmia-info" ref={leerMas}>
        <section>
          <h2>Causas</h2>
          <p>
            Las arritmias pueden ser causadas por diversas condiciones como enfermedad cardíaca,
            desequilibrios electrolíticos, lesiones del corazón, estrés o sustancias como cafeína y alcohol.
            Algunas son hereditarias o pueden presentarse sin causa clara.
          </p>
        </section>

        <section>
          <h2>Síntomas</h2>
          <p>
            Los síntomas pueden incluir palpitaciones, latidos irregulares o acelerados, sensación de aleteo,
            mareo, debilidad, fatiga, desmayos o dolor en el pecho. Algunas personas no presentan síntomas.
          </p>
        </section>

        <section>
          <h2>Diagnóstico y tratamiento</h2>
          <p>
            El diagnóstico se realiza mediante electrocardiogramas (ECG), Holter o estudios electrofisiológicos.
            El tratamiento puede incluir medicamentos, cardioversión, ablación o marcapasos, según la gravedad.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Arritmia;
