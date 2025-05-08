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

        <div className="container">
                          
        </div>
        <div className="container2">
                          
        </div>
        <div className="container3">
                          
        </div>
        <div className="container4">
                          
        </div>
        <div className="container5">
                          
        </div>
        <div className="container6">
                          
        </div>
        <div className="container7">
                          
        </div>
        <div className="container8">
                          
        </div>
    </div>
    )
}
export default Enfermedades;