import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Heart4_3 = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/Heart4_3.glb');
  const meshGroupRef = useRef();

  const baseScale = 0.9;

  useFrame(() => {
    const t = performance.now() * 0.002;
    const scale = 1 + Math.sin(t) * 0.1;
    if (meshGroupRef.current) {
      meshGroupRef.current.scale.setScalar(baseScale * scale);
      meshGroupRef.current.rotation.y += 0.002; // rotación suave
    }
  });

  return (
    <group {...props} dispose={null}>
      <group ref={meshGroupRef}>
        {Object.values(nodes).map((node, i) => {
          if (node.type === 'Mesh') {
            return (
              <mesh
                key={i}
                geometry={node.geometry}
                material={
                  materials[node.material?.name] || Object.values(materials)[0]
                }
                castShadow
                receiveShadow
              />
            );
          }
          return null;
        })}
      </group>
    </group>
  );
};

useGLTF.preload('/models-3d/Heart4_3.glb');

export default Heart4_3;
