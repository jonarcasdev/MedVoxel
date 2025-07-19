import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Heart4 = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/Heart4.glb');
  const heartRef = useRef();

  const baseScale = 0.9;

  useFrame(() => {
    const time = performance.now() * 0.002;
    const scaleValue = 1 + Math.sin(time) * 0.1;
    if (heartRef.current) {
      heartRef.current.scale.setScalar(baseScale * scaleValue);
      heartRef.current.rotation.y += 0.002; // rotación lenta
    }
  });

  return (
    <group {...props} dispose={null}>
      <group name="Scene" ref={heartRef}>
        <mesh
          name="Heart4"
          castShadow
          receiveShadow
          geometry={nodes.Heart4.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

export default Heart4;

useGLTF.preload('/models-3d/Heart4.glb');
