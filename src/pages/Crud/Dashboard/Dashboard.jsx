import { useAuth } from "../../../context/AuthContext";
import LogoutButton from "../../../components/LogoutButton";


const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {user ? (
        <>
          <p>Bienvenido, {user.email}</p>
          <LogoutButton />
        </>
      ) : (
        <p>Cargando usuario...</p>
      )}
    </div>
  );
};

export default Dashboard;
