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
                <Floor />
            </Canvas>
            <button className="scroll-button" onClick={handleScroll}>
                Leer más
            </button>
            {/* Sección a la que se desplazará */}
            <div className="cuadro2" ref={leerMas}>
                <p>🧠 ¿Qué es?
                    Es la formación de un coágulo dentro de una arteria del corazón, bloqueando parcial o totalmente el flujo sanguíneo al miocardio (músculo cardíaco). Generalmente ocurre en arterias ya afectadas por aterosclerosis (acumulación de placas de grasa).

                    ⚠️ Causas
                    Las causas más comunes incluyen:

                    Aterosclerosis: Placas de colesterol se acumulan en las arterias y pueden romperse, lo que activa la coagulación.

                    Hipertensión arterial: Daña las paredes de las arterias, facilitando la formación de trombos.

                    Colesterol alto y triglicéridos altos

                    Tabaquismo

                    Diabetes mellitus

                    Obesidad y sedentarismo

                    Estrés crónico

                    Factores genéticos

                    🩺 Efectos en el cuerpo humano
                    Infarto agudo de miocardio (ataque al corazón)
                    Si el trombo bloquea completamente una arteria, el tejido cardíaco que depende de ese flujo comienza a morir por falta de oxígeno.

                    Dolor torácico intenso (angina de pecho o dolor de infarto)
                    Sensación de opresión en el pecho, que puede irradiarse al brazo izquierdo, mandíbula o espalda.

                    Arritmias
                    El daño al tejido cardíaco puede alterar el ritmo normal del corazón, causando latidos irregulares o incluso paro cardíaco.

                    Falla cardíaca
                    Si una parte del corazón queda dañada de forma permanente, el músculo puede debilitarse y no bombear bien la sangre.

                    Muerte súbita
                    En casos severos, la trombosis coronaria puede llevar a una parada cardíaca inmediata.</p>
            </div>
        </div>
    );
};

export default Trombosis;