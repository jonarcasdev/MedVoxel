import "./Trombosis.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Heart1 from "../../models3d/Heart1";
import { useRef } from "react";

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
                camera={{
                    position: [2, 0, 5],
                    fov: 0.65,
                }}
            >
                <OrbitControls />
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 10]} intensity={5} />

                <Heart1 />
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