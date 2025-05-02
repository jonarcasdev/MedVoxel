import "./Trombosis.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Heart1 from "../../models3d/Heart1";

const Trombosis = () => {
    return <div>
        <h1>Trombosis</h1>
        <Canvas 
        camera={{ position: [2, 0, 5], 
        fov:0.15,
        }}>
            <OrbitControls/>
            <ambientLight intensity = {1.5} />
            <directionalLight position={[5, 5, 10]} intensity={5} />

            <Heart1/>
        </Canvas>
    </div>;
}
export default Trombosis;