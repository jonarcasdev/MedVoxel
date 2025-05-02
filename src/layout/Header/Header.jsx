import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
    return (
        <header className="Header">
            <a href="/">
                <p className="logo">MEDVOXEL</p>
            </a>
            <nav>
                <NavLink to="/" end>
                    Inicio
                </NavLink>
                <NavLink to="/enfermedades" end>
                    Enfermedades
                </NavLink>
                <NavLink to="/quiz" end>
                    Quiz
                </NavLink>
                <NavLink to="/about" end>
                    Sobre nosotros
                </NavLink>
                
            </nav>
        </header>
    );
};

export default Header;