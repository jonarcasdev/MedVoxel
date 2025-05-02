import  { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Heart1 = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/models-3d/Heart.glb");
    const { actions } = useAnimations(animations, group);




    

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="Heart"
                    castShadow
                    receiveShadow
                    geometry={nodes.Heart.geometry}
                    material={materials.HeartMaterial}
                    rotation={[1.728, 0, 0]}
                    scale={0.01}
                />
            </group>
        </group>
    );
};

export default Heart1;

useGLTF.preload("/models-3d/Heart.glb");