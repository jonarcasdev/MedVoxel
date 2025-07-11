import React from "react";
import "./About.css"; // Asegúrate de que exista este archivo o comenta esta línea

const About = () => {
  return (
    <div className="about">
      <h1>Sobre nosotros ❤️</h1>
      <p>
        En <strong>MedVoxel</strong> creemos que el conocimiento es la mejor herramienta para cuidar tu salud.
        Nuestra plataforma interactiva está diseñada para enseñarte sobre enfermedades del corazón
        de forma visual, práctica y entretenida.
      </p>
      <p>
        El objetivo de este proyecto es brindar educación médica accesible, con un enfoque especial
        en enfermedades como la arritmia, hipertensión, trombosis y tumores cardíacos.
      </p>
      <p>
        ¡Gracias por aprender con nosotros! 💓
      </p>
    </div>
  );
};
console.log("El componente About se está mostrando");

export default About;
