// src/Texto3DTest.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';

const TextoFlotante = () => {
  const ref = useRef();

  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.lookAt(camera.position);
    }
  });

  return (
    <Text3D
      ref={ref}
      font="/fonts/Roboto_Regular.json"
      size={0.5}
      height={0.1}
      position={[-1.5, 0, 0]}
      curveSegments={32}
      bevelEnabled
      bevelThickness={0.03}
      bevelSize={0.02}
      bevelSegments={5}
    >
      ¡Hola Luis!
      <meshStandardMaterial color="#e63946" />
    </Text3D>
  );
};

const Texto3DTest = () => {
  return (
    <div style={{ height: '100vh', background: '#f1faee' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <TextoFlotante />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Texto3DTest;
