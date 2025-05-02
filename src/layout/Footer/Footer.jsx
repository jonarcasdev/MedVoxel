import { Link } from "react-router";
import "./Footer.css";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h1 className="footer-title">Mapa del sitio</h1>
                <div className="footer-grid">
                    <div className="footer-column">
                        <h3>Inicio</h3>
                        <ul>
                            <li>Introducción</li>
                            <li>Enfermedades</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Enfermedades</h3>
                        <ul>
                            <li><Link to="/enfermedades/trombosis">Trombosis</Link></li>
                            <li>Síntomas</li>
                            <li>Causas</li>
                            <li>Tratamiento</li>
                            <li>Enfermedad 2</li>
                            <li>Síntomas</li>
                            <li>Causas</li>
                            <li>Tratamiento</li>
                            <li>Enfermedad 3</li>
                            <li>Síntomas</li>
                            <li>Causas</li>
                            <li>Tratamiento</li>
                            <li>Enfermedad 4</li>
                            <li>Síntomas</li>
                            <li>Causas</li>
                            <li>Tratamiento</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Quiz</h3>
                        <ul>
                            <li>Ranking</li>
                            <li>Quiz</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Sobre nosotros</h3>
                        <ul>
                            <li>Equipo de trabajo</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© Derechos reservados</p>
                    <div className="footer-icons">
                        <i className="icon">TikTok</i>
                        <i className="icon">Instagram</i>
                        <i className="icon">Facebook</i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
