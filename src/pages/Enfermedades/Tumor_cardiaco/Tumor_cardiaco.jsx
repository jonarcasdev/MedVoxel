import "./Tumor_cardiaco.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Heart3 from "../../models3d/Heart3"; 
import { useRef } from "react";
import Lights from "../../../lights/lights";

const Tumor_cardiaco = () => {
    // Referencia para la sección a la que se desplazará
    const leerMas = useRef(null);

    // Función para manejar el scroll
    const handleScroll = () => {
        leerMas.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <h1>Tumor cardiaco en mixoma auricular</h1>
            <Canvas
                shadows
                camera={{
                    position: [5, 0, 0],
                    fov: 25,
                }}
            >
                <OrbitControls />
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 10]} intensity={5} />

                <Heart3 />
            </Canvas>
            <button className="scroll-button" onClick={handleScroll}>
                Leer más
            </button>
            {/* Sección a la que se desplazará */}
            <div className="cuadro2" ref={leerMas}>
                <p>Contenido adicional sobre el Tumor Cardiaco...</p>
            </div>
        </div>
    );
};

export default Tumor_cardiaco;