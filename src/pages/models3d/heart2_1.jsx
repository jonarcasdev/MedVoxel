import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Heart2_1(props) {
  const { nodes, materials } = useGLTF('/models-3d/heart2_1.glb');
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={materials[nodes.mesh_0.material.name]}
      />
    </group>
  );
}

useGLTF.preload('/models-3d/heart2_1.glb');
