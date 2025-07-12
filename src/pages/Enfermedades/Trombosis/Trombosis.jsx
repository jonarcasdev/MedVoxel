import "./Trombosis.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, KeyboardControls, Html } from "@react-three/drei";

import Heart1 from "../../models3d/Heart1";
import Floor from "../../models3d/Floor";
import { useRef, useState } from "react";
import Lights from "../../../lights/lights";
import SimpleEnvironment from "../../../lights/SimpleEnvironment";

const Trombosis = () => {
    // Referencia para la sección a la que se desplazará
    const leerMas = useRef(null);
    
    // Estado para controlar la visibilidad de la interfaz de instrucciones
    const [showInstructions, setShowInstructions] = useState(true);
    
    // Estados para controlar las transformaciones del corazón
    const [heartScale, setHeartScale] = useState(1);
    const [heartRotation, setHeartRotation] = useState(0);
    const [showHeartInfo, setShowHeartInfo] = useState(false);
    const [heartClickCount, setHeartClickCount] = useState(0);

    // Estados para el segundo canvas
    const [showInstructions2, setShowInstructions2] = useState(true);
    const [heartScale2, setHeartScale2] = useState(1);
    const [heartRotation2, setHeartRotation2] = useState(0);
    const [showHeartInfo2, setShowHeartInfo2] = useState(false);
    const [heartClickCount2, setHeartClickCount2] = useState(0);

    // Función para manejar el scroll
    const handleScroll = () => {
        leerMas.current.scrollIntoView({ behavior: "smooth" });
    };

    // Función para cerrar la interfaz de instrucciones
    const handleCloseInstructions = () => {
        setShowInstructions(false);
    };

    // Función para cerrar la interfaz de instrucciones del segundo canvas
    const handleCloseInstructions2 = () => {
        setShowInstructions2(false);
    };

    // Configuración de controles de teclado WASD
    const keyboardMap = [
        { name: "forward", keys: ["KeyW"] },
        { name: "backward", keys: ["KeyS"] },
        { name: "left", keys: ["KeyA"] },
        { name: "right", keys: ["KeyD"] },
    ];

    // Función para manejar eventos de teclado
    const handleKeyPress = (event) => {
        switch(event.code) {
            case "KeyW":
                setHeartRotation(prev => prev + 0.2);
                break;
            case "KeyS":
                setHeartRotation(prev => prev - 0.2);
                break;
            case "KeyA":
                setHeartScale(prev => Math.max(0.5, prev - 0.1));
                break;
            case "KeyD":
                setHeartScale(prev => Math.min(2, prev + 0.1));
                break;
            default:
                break;
        }
    };

    // Función para manejar eventos de teclado del segundo canvas
    const handleKeyPress2 = (event) => {
        switch(event.code) {
            case "KeyW":
                setHeartRotation2(prev => prev + 0.2);
                break;
            case "KeyS":
                setHeartRotation2(prev => prev - 0.2);
                break;
            case "KeyA":
                setHeartScale2(prev => Math.max(0.5, prev - 0.1));
                break;
            case "KeyD":
                setHeartScale2(prev => Math.min(2, prev + 0.1));
                break;
            default:
                break;
        }
    };

    // Función para manejar click en el corazón (elemento HTML 3D)
    const handleHeartInfoClick = () => {
        setHeartClickCount(prev => prev + 1);
        setShowHeartInfo(true);
        setTimeout(() => setShowHeartInfo(false), 3000);
    };

    // Función para manejar click en el corazón del segundo canvas
    const handleHeartInfoClick2 = () => {
        setHeartClickCount2(prev => prev + 1);
        setShowHeartInfo2(true);
        setTimeout(() => setShowHeartInfo2(false), 3000);
    };

    return (
        <div onKeyDown={handleKeyPress} tabIndex={0} style={{ outline: 'none' }}>
            <h1>Trombosis</h1>
            
            <div className="canvas-container">
                {/* Interfaz de instrucciones superpuesta */}
                {showInstructions && (
                    <div className="instructions-overlay" onClick={handleCloseInstructions}>
                        <div className="instructions-content">
                            <h3>🎮 Controles 3D:</h3>
                            <ul>
                                <li><strong>Click + Arrastrar:</strong> Girar cámara</li>
                                <li><strong>Rueda del Mouse:</strong> Zoom in/out</li>
                            </ul>
                            <h3>⌨️ Controles de Teclado (WASD):</h3>
                            <ul>
                                <li><strong>W:</strong> Rotar hacia arriba</li>
                                <li><strong>S:</strong> Rotar hacia abajo</li>
                                <li><strong>A:</strong> Reducir escala</li>
                                <li><strong>D:</strong> Aumentar escala</li>
                            </ul>
                            <p className="click-instruction">👆 Click para comenzar</p>
                        </div>
                    </div>
                )}

                <KeyboardControls map={keyboardMap}>
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

                        <group
                            scale={[heartScale, heartScale, heartScale]}
                            rotation={[heartRotation, heartRotation * 0.5, 0]}
                        >
                            <Heart1 />
                            
                            {/* Elemento HTML 3D - Botón interactivo */}
                            <Html
                                position={[-0.1, 0.030, 0.001]}
                                center
                                distanceFactor={0.19}
                                occlude
                            >
                                <div className="heart-html-3d">
                                    <button 
                                        className="heart-info-button"
                                        onClick={handleHeartInfoClick}
                                    >
                                        🫀 Info Corazón
                                    </button>
                                    {showHeartInfo && (
                                        <div className="heart-info-popup">
                                            <h3>Corazón Interactivo</h3>
                                            <p>Clicks: {heartClickCount}</p>
                                            <p>Escala: {heartScale.toFixed(1)}x</p>
                                            <p>Rotación: {heartRotation.toFixed(1)}°</p>
                                        </div>
                                    )}
                                </div>
                            </Html>

                            {/* Elemento HTML 3D - Título flotante */}
                            <Html
                                position={[-0.1, -0.01, 0.001]}
                                center
                                distanceFactor={0.19}
                                occlude
                            >
                                <div className="heart-title-3d">
                                    <h2>Modelo 3D: Trombosis Coronaria</h2>
                                </div>
                            </Html>
                        </group>
                        <Floor />
                    </Canvas>
                </KeyboardControls>
            </div>
            
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
            <h2 className="section-title">🩺 Síntomas principales de la trombosis coronaria:</h2>
            
            <div className="symptoms-container">
                <div className="symptom-item">
                    <h3>Dolor en el pecho (angina):</h3>
                    <ul>
                        <li>Dolor intenso, opresivo o punzante en el centro o lado izquierdo del pecho.</li>
                        <li>Puede irradiarse al brazo izquierdo, mandíbula, cuello, espalda o estómago.</li>
                        <li>Generalmente dura más de unos minutos o desaparece y vuelve.</li>
                    </ul>
                </div>

                <div className="symptom-item">
                    <h3>Dificultad para respirar (disnea):</h3>
                    <ul>
                        <li>Sensación de no poder respirar bien, incluso en reposo.</li>
                    </ul>
                </div>

                <div className="symptom-item">
                    <h3>Sudoración excesiva (diaforesis):</h3>
                    <ul>
                        <li>Sudor frío repentino y abundante, sin causa aparente.</li>
                    </ul>
                </div>

                <div className="symptom-item">
                    <h3>Náuseas o vómitos:</h3>
                    <ul>
                        <li>Especialmente en mujeres o adultos mayores.</li>
                    </ul>
                </div>

                <div className="symptom-item">
                    <h3>Mareos o aturdimiento:</h3>
                    <ul>
                        <li>Sensación de desmayo o pérdida del equilibrio.</li>
                    </ul>
                </div>

                <div className="symptom-item">
                    <h3>Otros síntomas:</h3>
                    <ul>
                        <li>Palpitaciones o ritmo cardíaco irregular.</li>
                        <li>Ansiedad o sensación de muerte inminente.</li>
                    </ul>
                </div>
            </div>

            <div className="warning-box">
                <h3>⚠️ Importante:</h3>
                <p>
                    <strong>Algunos pacientes, especialmente personas mayores o diabéticas, pueden presentar síntomas atípicos o incluso tener un infarto silencioso (sin dolor claro en el pecho).</strong>
                </p>
                <p>
                    <strong>La trombosis coronaria es una emergencia médica. Si se sospecha, se debe buscar atención inmediata.</strong>
                </p>
            </div>
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

            {/* SEGUNDO CANVAS - Con ambiente simple */}
            <div className="canvas-container canvas-environment" onKeyDown={handleKeyPress2} tabIndex={0} style={{ outline: 'none' }}>
                
                {/* Interfaz de instrucciones superpuesta para el segundo canvas */}
                {showInstructions2 && (
                    <div className="instructions-overlay" onClick={handleCloseInstructions2}>
                        <div className="instructions-content">
                            <h3>🎮 Controles 3D:</h3>
                            <ul>
                                <li><strong>Click + Arrastrar:</strong> Girar cámara</li>
                                <li><strong>Rueda del Mouse:</strong> Zoom in/out</li>
                            </ul>
                            <h3>⌨️ Controles de Teclado (WASD):</h3>
                            <ul>
                                <li><strong>W:</strong> Rotar hacia arriba</li>
                                <li><strong>S:</strong> Rotar hacia abajo</li>
                                <li><strong>A:</strong> Reducir escala</li>
                                <li><strong>D:</strong> Aumentar escala</li>
                            </ul>
                            <p className="click-instruction">👆 Click para comenzar</p>
                        </div>
                    </div>
                )}

                <KeyboardControls map={keyboardMap}>
                    <Canvas
                        shadows
                        camera={{
                            position: [2, 0, 5],
                            fov: 2,
                        }}
                    >
                        <SimpleEnvironment />
                        <Lights />
                        <OrbitControls />

                        <group
                            scale={[heartScale2, heartScale2, heartScale2]}
                            rotation={[heartRotation2, heartRotation2 * 0.5, 0]}
                        >
                            <Heart1 />
                            
                            {/* Elemento HTML 3D - Botón interactivo */}
                            <Html
                                position={[-0.1, 0.030, 0.001]}
                                center
                                distanceFactor={0.19}
                                occlude
                            >
                                <div className="heart-html-3d">
                                    <button 
                                        className="heart-info-button"
                                        onClick={handleHeartInfoClick2}
                                    >
                                        🫀 Info Corazón
                                    </button>
                                    {showHeartInfo2 && (
                                        <div className="heart-info-popup">
                                            <h3>Corazón Interactivo</h3>
                                            <p>Clicks: {heartClickCount2}</p>
                                            <p>Escala: {heartScale2.toFixed(1)}x</p>
                                            <p>Rotación: {heartRotation2.toFixed(1)}°</p>
                                        </div>
                                    )}
                                </div>
                            </Html>

                            {/* Elemento HTML 3D - Título flotante */}
                            <Html
                                position={[-0.1, -0.01, 0.001]}
                                center
                                distanceFactor={0.19}
                                occlude
                            >
                                <div className="heart-title-3d">
                                    <h2>Modelo 3D: Trombosis Coronaria</h2>
                                </div>
                            </Html>
                        </group>
                        <Floor />
                    </Canvas>
                </KeyboardControls>
            </div>
        </div>
    );
};

export default Trombosis;