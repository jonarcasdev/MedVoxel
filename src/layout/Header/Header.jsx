import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
    return (
        <header>
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
                    Acerca de nosotros
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;