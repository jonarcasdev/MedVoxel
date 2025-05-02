import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <Link to="/enfermedades/trombosis">Trombosis</Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;