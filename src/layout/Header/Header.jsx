import React, { useEffect } from "react";
import "./Header.css"; // Asegúrate de importar los estilos

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (window.scrollY > 50) {
                header.classList.add("scrolled"); // Cambia a tamaño reducido
            } else {
                header.classList.remove("scrolled"); // Vuelve al tamaño inicial
            }
        };

        // Agregar el evento de scroll
        window.addEventListener("scroll", handleScroll);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header>
            <div className="logo">MEDVOXEL</div>
            <nav>
                <a href="/">Inicio</a>
                <div className="dropdown">
                    <a href="/enfermedades" className="dropdown-toggle">Enfermedades</a>
                    <div className="dropdown-menu">
                        <a href="/enfermedades/trombosis">Trombosis</a>
                        <a href="/enfermedades/tumor_cardiaco">Tumor Cardiaco</a>
                        <a href="/enfermedades/infecciosas">Infecciosas</a>
                        <a href="/enfermedades/hipertension">Hipertension</a>
                    </div>
                </div>
                <a href="/quiz">Quiz</a>
                <a href="/sobre-nosotros">Sobre nosotros</a>
            </nav>
        </header>
    );
}; 

export default Header;