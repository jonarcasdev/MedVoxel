import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "./Register.css";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC7kC8mOohm7WmWwlaK46oxKgukMfw2Wo4",
  authDomain: "proyecto-final-integrado-895f1.firebaseapp.com",
  projectId: "proyecto-final-integrado-895f1",
  storageBucket: "proyecto-final-integrado-895f1.appspot.com",
  messagingSenderId: "718486698985",
  appId: "1:718486698985:web:43c39518637aab79ae978",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("✅ Usuario registrado exitosamente");
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="register">
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
