import { useNavigate } from "react-router";
import { useCallback } from "react";
import "./Home.css";


//estados entre rutas
const Home = () => {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate("/enfermedades",{
        state: {userData: { displayName: "Jonathan Arboleda"}},
    });
    },[navigate]);

    //
    return (<div className="home">
        <h1>Corazon</h1>
        <button onClick={handleClick}>Ver enfermedades</button>
    </div>)    
};
export default Home;