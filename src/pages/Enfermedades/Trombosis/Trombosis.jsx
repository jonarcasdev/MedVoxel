import "./Trombosis.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Heart1 from "../../models3d/Heart1"; 
import Floor from "../../models3d/Floor";
import { useRef } from "react";
import Lights from "../../../lights/lights";

const Trombosis = () => {
    // Referencia para la sección a la que se desplazará
    const leerMas = useRef(null);

    // Función para manejar el scroll
    const handleScroll = () => {
        leerMas.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <h1>Trombosis</h1>
            <Canvas
                shadows
                camera={{
                    position: [2, 0, 5],
                    fov: 2,
                }}
            >
                <Lights />
                <OrbitControls />
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 10]} intensity={5} />

                <Heart1 />
                <Floor/>
            </Canvas>
            <button className="scroll-button" onClick={handleScroll}>
                Leer más
            </button>
            {/* Sección a la que se desplazará */}
            <div className="cuadro2" ref={leerMas}>
                <p>Contenido adicional sobre la trombosis...</p>
            </div>
        </div>
    );
};

export default Trombosis;