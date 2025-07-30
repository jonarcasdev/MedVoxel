import { getAuth, signOut } from "firebase/auth";

const LogoutButton = () => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
};

export default LogoutButton;
