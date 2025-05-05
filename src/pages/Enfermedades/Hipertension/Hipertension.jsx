import "./Hipertension.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { useGLTF } from "@react-three/drei";

import { useRef } from "react";
import Heart2 from "../../models3d/Heart2"; 

const Hipertension = () => {

    // Referencia para la sección a la que se desplazará
    const leerMas = useRef(null);

    // Función para manejar el scroll
    const handleScroll = () => {
        leerMas.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <h1>Hipertension</h1>
            <Canvas
                camera={{ position: [2, 0, 5] }}
                style={{ height: "600px" }} // Adjust the height here
            >
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 10]} intensity={1} />
                <mesh>
                    <Heart2 />
                </mesh>
            </Canvas>
            <button className="scroll-button" onClick={handleScroll}>
                Leer más
            </button>
            {/* Sección a la que se desplazará */}
            <div className="cuadro2" ref={leerMas}>
                <p>Mas informacion sobre la Hipertension</p>
            </div>

            
            
        </div>
    );




};


export default Hipertension;

