import React, { useRef, useEffect } from 'react';
import { useGLTF, Text3D } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const Heart4_4 = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/Heart4_4.glb');
  const meshGroupRef = useRef();
  const { camera } = useThree();
  const baseScale = 0.9;

  const textRef = useRef();
  const textRef2 = useRef();

  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((mat) => {
        mat.metalness = 0.4;
        mat.roughness = 0.3;
      });
    }
  }, [materials]);

  useFrame(() => {
    const t = performance.now() * 0.002;
    const scale = 1 + Math.sin(t) * 0.1;

    if (meshGroupRef.current) {
      meshGroupRef.current.scale.setScalar(baseScale * scale);
      meshGroupRef.current.rotation.y += 0.002;
    }

    // Parpadeo del texto
    if (textRef.current) {
      textRef.current.material.opacity = 0.8 + 0.2 * Math.sin(t * 3);
      textRef.current.lookAt(camera.position);
    }

    if (textRef2.current) {
      textRef2.current.lookAt(camera.position);
    }
  });

  return (
    <group {...props} dispose={null}>
      <group ref={meshGroupRef}>
        {/* Modelo 3D */}
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

        {/* Texto flotante frente al corazón */}
        <Text3D
          ref={textRef}
          font="/fonts/Roboto_Regular.json"
          size={0.14}
          height={0.03}
          position={[0, 1.5, 0]}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.005}
        >
          Latido Fuerte ❤️
          <meshStandardMaterial color="#e63946" transparent opacity={1} />
        </Text3D>

        {/* Texto inferior, también flotante */}
        <Text3D
          ref={textRef2}
          font="/fonts/Roboto_Regular.json"
          size={0.09}
          height={0.02}
          position={[0, -1.3, 0]}
        >
          Modelo Experimental
          <meshStandardMaterial color="#457b9d" />
        </Text3D>
      </group>
    </group>
  );
};

useGLTF.preload('/models-3d/Heart4_4.glb');
export default Heart4_4;
