import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router";
import { useCallback, useRef } from "react";
import "./Home.css";
import VirusImage from "../../assets/Virus.svg";

function HeartModel() {
    const { scene } = useGLTF("/models-3d/Heartprincipal.glb");
    return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

const Home = () => {
    const navigate = useNavigate();

    // Referencia para la sección a la que se desplazará
    const enfermedadesRef = useRef(null);
    const enfermedadesRef1 = useRef(null);

    const handleClick = useCallback(() => {
        navigate("/enfermedades", {
            state: { userData: { displayName: "Jonathan Arboleda" } },
        });
    }, [navigate]);

    // Función para manejar el scroll
    const scrollToEnfermedades = () => {
        enfermedadesRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToEnfermedades1 = () => {
        enfermedadesRef1.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="home">
            <h1 className="title">El Corazón</h1>

            {/* 🎯 MODELO 3D */}
            <div className="canvas-container">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} />
                    <OrbitControls />
                    <HeartModel />
                </Canvas>
            </div>

            <div className="inicio">
                <h2>¿Sabes cuales son las enfermedades del corazon?</h2>
                {/* <button className="buttom-inicio" onClick={handleClick}>
    Ver enfermedades
</button> */}
                <button className="scroll-button" onClick={scrollToEnfermedades}>
                    Leer más
                </button>
                <div className="cuadro" ref={enfermedadesRef}>
                    <button className="scroll-button" onClick={scrollToEnfermedades1}>
                        Leer más

                    </button>
                </div>
                <div className="cuadro2" ref={enfermedadesRef1}>
                    <div className="enfermedades-container">
                        <h1 className="enfermedades-title">Enfermedades</h1>
                        <div className="enfermedades-grid">
                            <div className="card">
                                <h2>Trombosis</h2>
                                <p>Formación de un coágulo de sangre dentro de un vaso sanguíneo.</p>
                                <button
                                    className="card-button"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: "smooth" }); // Desplaza hacia arriba
                                        navigate("/enfermedades/trombosis"); // Navega a la nueva página
                                    }}
                                >
                                    Saber más
                                </button>
                            </div>
                            <div className="card">
                                <h2>Tumor cardiaco en mixoma auricular</h2>
                                <p>El mixoma auricular es el tumor cardíaco primario más común en adultos, 
                                    y suele localizarse en la aurícula izquierda.</p>
                                <button
                                    className="card-button"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: "smooth" }); // Desplaza hacia arriba
                                        navigate("/enfermedades/tumor_cardiaco"); // Navega a la nueva página
                                    }}
                                >
                                    Saber más
                                </button>
                            </div>
                            <div className="card">
                                <h2>Arritmia</h2>
                                <p>Es una alteración del ritmo cardíaco que puede provocar latidos irregulares,
                                demasiado rápidos o demasiado lentos. Puede causar síntomas como palpitaciones,
                                mareos, fatiga o incluso desmayos.
                                </p>
                                <button
                                    className="card-button"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: "smooth" }); // Desplaza hacia arriba
                                        navigate("/enfermedades/arritmia"); // Navega a la nueva página
                                    }}
                                >
                                    Saber más
                                </button>
                            </div>
                            <div className="card">
                                <h2>Hipertension </h2>
                                <p>es una condición médica donde la fuerza de la sangre contra
                                    las paredes de las arterias es constantemente demasiado alta</p>
                                <button
                                    className="card-button"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: "smooth" }); // Desplaza hacia arriba
                                        navigate("/enfermedades/hipertension"); // Navega a la nueva página
                                    }}
                                >
                                    Saber más
                                </button>
                            </div>
                        </div>
                    </div>
                    <img className="virus" src={VirusImage} alt="Virus" />
                </div>
            </div>
        </div>
    );
};

export default Home;