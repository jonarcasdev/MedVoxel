import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Heart2 = () => {
    const heartModel = useGLTF('/models-3d/heart2.glb');
    const heartRef = useRef();

    useFrame(() => {
        if (heartRef.current) {
            heartRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={heartRef}>
            <primitive object={heartModel.scene} />
        </mesh>
    );
};

export default Heart2;

useGLTF.preload('/models-3d/heart2.glb'); 
