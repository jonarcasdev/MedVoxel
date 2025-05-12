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
    <div className="trombosis-container">
        <section className="trombosis-section">
            <h2 className="section-title">🧠 ¿Qué es?</h2>
            <p className="section-content">
                Es la formación de un coágulo dentro de una arteria del corazón, bloqueando parcial o totalmente el flujo sanguíneo al miocardio (músculo cardíaco). Generalmente ocurre en arterias ya afectadas por aterosclerosis (acumulación de placas de grasa).
            </p>
        </section>

        <section className="trombosis-section">
            <h2 className="section-title">⚠️ Causas</h2>
            <p className="section-subtitle">Las causas más comunes incluyen:</p>
            <ul className="causes-list">
                <li><strong>Aterosclerosis:</strong> Placas de colesterol se acumulan en las arterias y pueden romperse, lo que activa la coagulación.</li>
                <li><strong>Hipertensión arterial:</strong> Daña las paredes de las arterias, facilitando la formación de trombos.</li>
                <li><strong>Colesterol alto y triglicéridos altos</strong></li>
                <li><strong>Tabaquismo</strong></li>
                <li><strong>Diabetes mellitus</strong></li>
                <li><strong>Obesidad y sedentarismo</strong></li>
                <li><strong>Estrés crónico</strong></li>
                <li><strong>Factores genéticos</strong></li>
            </ul>
        </section>

        <section className="trombosis-section">
            <h2 className="section-title">🩺 Efectos en el cuerpo humano</h2>
            <div className="effects-container">
                <div className="effect-item">
                    <h3>Infarto agudo de miocardio (ataque al corazón)</h3>
                    <p>Si el trombo bloquea completamente una arteria, el tejido cardíaco que depende de ese flujo comienza a morir por falta de oxígeno.</p>
                </div>
                
                <div className="effect-item">
                    <h3>Dolor torácico intenso (angina de pecho o dolor de infarto)</h3>
                    <p>Sensación de opresión en el pecho, que puede irradiarse al brazo izquierdo, mandíbula o espalda.</p>
                </div>
                
                <div className="effect-item">
                    <h3>Arritmias</h3>
                    <p>El daño al tejido cardíaco puede alterar el ritmo normal del corazón, causando latidos irregulares o incluso paro cardíaco.</p>
                </div>
                
                <div className="effect-item">
                    <h3>Falla cardíaca</h3>
                    <p>Si una parte del corazón queda dañada de forma permanente, el músculo puede debilitarse y no bombear bien la sangre.</p>
                </div>
                
                <div className="effect-item">
                    <h3>Muerte súbita</h3>
                    <p>En casos severos, la trombosis coronaria puede llevar a una parada cardíaca inmediata.</p>
                </div>
            </div>
        </section>
    </div>
</div>
        </div>
    );
};

export default Trombosis;