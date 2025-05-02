import { useNavigate } from "react-router";
import { useCallback } from "react";
import "./Home.css";
import VirusImage from "../../assets/Virus.svg";


//estados entre rutas
const Home = () => {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate("/enfermedades", {
            state: { userData: { displayName: "Jonathan Arboleda" } },
        });
    }, [navigate]);

    //
    return (<div className="home">
        <h1>El Corazon</h1>

        <div className="inicio">
            <h2>¿Sabes cuales son las enfermedades del corazon?</h2>
            <button className="buttom-inicio" onClick={handleClick}>Ver enfermedades</button>
            <div className="cuadro">
            </div>
            <div className="cuadro2">
                <div className="enfermedades-container">
                    <h1 className="enfermedades-title">Enfermedades</h1>
                    <div className="enfermedades-grid">
                        <div className="card">
                            <h2>Trombosis</h2>
                            <p>Formación de un coágulo de sangre dentro de un vaso sanguíneo.</p>
                            <button className="card-button"  onClick={()=>navigate("/enfermedades/trombosis")}>Saber más</button>
                        </div>
                        <div className="card">
                            <h2>Enfermedad 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="card-button">Saber más</button>
                        </div>
                        <div className="card">
                            <h2>Enfermedad 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="card-button">Saber más</button>
                        </div>
                        <div className="card">
                            <h2>Enfermedad 4</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="card-button">Saber más</button>
                        </div>
                    </div>

                </div>
                <img className="virus" src={VirusImage} alt="Virus" />
            </div>
        </div>
    </div>)


};

export default Home;