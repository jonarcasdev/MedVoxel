import { Outlet, useLocation } from "react-router";
import "./Enfermedades.css";

const Enfermedades = () => {

    const location= useLocation();
    const userData=location.state?.userData;

    return (
    <div>
        <h1>Enfermedades del corazon</h1>
        <p>{userData?.displayName}</p>
        <Outlet />
    </div>
    )
    
}
export default Enfermedades;