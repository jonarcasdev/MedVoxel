import { Outlet, useLocation } from "react-router";
import "./Enfermedades.css";

const Enfermedades = () => {

    const location= useLocation();
    const userData=location.state?.userData;

    return (
    <div className="Enfermedades">
        <h1 >Enfermedades</h1>
        <p>{userData?.displayName}</p>
        <Outlet /> 
    </div>
    )
}
export default Enfermedades;