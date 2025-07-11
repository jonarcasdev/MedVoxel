import "./Hipertension.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import Heart2 from "../../models3d/Heart2";
import Heart2_1 from "../../models3d/heart2_1.jsx"; // <-- nuevo modelo
import Lights2 from "../../../lights/lights2";

const Hipertension = () => {
    const leerMas = useRef(null);
    const [mensajeVisible, setMensajeVisible] = useState(true);
    const [usarNuevoModelo, setUsarNuevoModelo] = useState(false); // <-- nuevo estado

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
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            {/* Mensaje superpuesto */}
            {mensajeVisible && (
                <div
                    style={{
                        position: "absolute",
                        top: "270px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(0, 0, 0, 0.7)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        zIndex: 10,
                    }}
                >
                    *Manten clic izquiero para rotar la cámara <br />
                    *Rueda del ratón para acercar o alejar <br />
                    Haz clic para interactuar
                </div>
            )}

            <h1>Hipertensión</h1>

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

            <Canvas
                camera={{ position: [2, 0, 5] }}
                style={{ height: "420px" }}
                onClick={manejarClick}
            >
                <Lights2 />
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 10]} intensity={1} />
                <mesh>
                    {usarNuevoModelo ? <Heart2_1 /> : <Heart2 />}
                </mesh>
            </Canvas>

            {/* Sección a la que se desplazará */}
            <div className="cuadroHiper" ref={leerMas}>
                <div className="cardHiper">
                    <h2>Causas </h2>
                    <p style={{ textAlign: "justify" }}>
                        La hipertensión arterial, o presión arterial alta,
                        puede ser causada por una combinación de factores genéticos,
                        estilo de vida y condiciones subyacentes. Factores de riesgo que
                        contribuyen a la hipertensión incluyen antecedentes familiares, obesidad,
                        falta de actividad física, dieta alta en sal y baja en potasio, consumo de
                        alcohol y tabaco, entre otros. En algunos casos, la hipertensión es secundaria
                        a otras enfermedades o condiciones, como problemas renales o endocrinos.
                    </p>
                </div>
            </div>

            <div className="cuadroAzulHiper">
                <div className="cardHiper">
                    <h2>Síntomas</h2>
                    <p style={{ textAlign: "justify" }}>
                        La mayoría de las personas con hipertensión arterial no experimentan
                        síntomas evidentes. En algunos casos, la hipertensión puede causar síntomas
                        como dolor de cabeza, mareos, dificultad para respirar o sangrado nasal. Sin embargo,
                        estos síntomas suelen aparecer cuando la presión arterial es muy alta.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hipertension;
