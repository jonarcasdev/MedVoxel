import {useGLTF} from '@react-three/drei';
import { useEffect } from 'react';

const Heart2 = () => {
    const heartModel = useGLTF('/models-3d/heart2.glb');

  
    
    return(
        <mesh>
            <primitive object = {heartModel.scene}/>
        </mesh>
    );

};

export default Heart2;

useGLTF.preload('/models/heart2.glb');