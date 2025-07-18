import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Heart2_1 = () => {
    const ref = useRef();
    const { scene } = useGLTF("/models-3d/Heart2_1.glb");

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.003;
        }
    });

    return <primitive object={scene} ref={ref} />;
};

useGLTF.preload("/models-3d/Heart2_1.glb");

export default Heart2_1;
