import "./Arritmia.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import Heart4 from "../../models3d/Heart4";
import Heart2_1 from "../../models3d/heart2_1"; // modelo alternativo

const Arritmia = () => {
    const leerMas = useRef(null);
    const [mensajeVisible, setMensajeVisible] = useState(true);
    const [usarNuevoModelo, setUsarNuevoModelo] = useState(false); // nuevo estado

    const handleScroll = () => {
        leerMas.current.scrollIntoView({ behavior: "smooth" });
    };

    const manejarClick = () => {
        if (mensajeVisible) {
            setMensajeVisible(false);
        }
    };

    const cambiarModelo = () => {
        setUsarNuevoModelo(prev => !prev);
    };

    return (
        <div className="arritmia-container">
            {/* Mensaje superpuesto */}
            {mensajeVisible && (
                <div className="arritmia-info">
                    *Mantén clic izquierdo para rotar la cámara <br />
                    *Rueda del ratón para acercar o alejar <br />
                    Haz clic para interactuar
                </div>
            )}

            <h1 className="arritmia-title">Arritmia</h1>

            {/* Botón para cambiar modelo */}
            <button
                onClick={cambiarModelo}
                style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    zIndex: 11,
                    padding: "10px 15px",
                    backgroundColor: "#800020",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
            >
                Cambiar modelo 3D
            </button>

            {/* Canvas con modelos */}
            <Canvas
                camera={{ position: [2, 0, 5] }}
                style={{ height: "420px" }}
                onClick={manejarClick}
            >
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 10]} intensity={1} />
                <mesh>
                    {usarNuevoModelo ? <Heart2_1 /> : <Heart4 />}
                </mesh>
            </Canvas>

            {/* Contenido causas */}
            <div className="arritmia-cuadro" ref={leerMas}>
                <div className="arritmia-card">
                    <h2>Causas</h2>
                    <p style={{ textAlign: "justify" }}>
                        Las arritmias pueden ser causadas por diversas condiciones,
                        como enfermedad cardíaca, desequilibrios electrolíticos, cambios en el músculo cardíaco,
                        lesiones por un infarto, estrés o consumo excesivo de sustancias como cafeína,
                        nicotina, alcohol o drogas. Algunas arritmias pueden ser hereditarias o presentarse sin causa aparente.
                    </p>
                </div>
            </div>

            {/* Contenido síntomas */}
            <div className="arritmia-cuadro-azul">
                <div className="arritmia-card">
                    <h2>Síntomas</h2>
                    <p style={{ textAlign: "justify" }}>
                        Los síntomas de una arritmia pueden incluir palpitaciones,
                        latidos acelerados o irregulares, sensación de aleteo en el pecho,
                        mareo, debilidad, fatiga, desmayos o dolor en el pecho. Algunas arritmias pueden ser asintomáticas
                        y detectarse solo durante exámenes médicos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Arritmia;
