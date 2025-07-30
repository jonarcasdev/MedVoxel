import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "./Login.css";

// 🔥 Configuración de tu Firebase (copiada de la consola)
const firebaseConfig = {
  apiKey: "AIzaSyC7kC8mOohm7WmWwlaK46oxKgukMfw2Wo4",
  authDomain: "proyecto-final-integrado-895f1.firebaseapp.com",
  projectId: "proyecto-final-integrado-895f1",
  storageBucket: "proyecto-final-integrado-895f1.appspot.com",
  messagingSenderId: "718486698985",
  appId: "1:718486698985:web:43c39518637aab79ae978",
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Usuario logueado:", user.displayName, user.email);
      // Aquí podrías redirigir al dashboard o guardar info del usuario
    } catch (error) {
      console.error("❌ Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="Login">
      <h1>Inicia sesión con Google</h1>
      <button onClick={handleLogin}>Iniciar sesión con Google</button>
    </div>
  );
};

export default Login;
