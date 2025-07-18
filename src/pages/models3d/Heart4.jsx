import React, { useRef, useState } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Heart4 = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/Heart4.glb');
  const heartRef = useRef();
  const [showInfo, setShowInfo] = useState(true);

  // Escala base del modelo
  const baseScale = [3, 3, 3];

  // Función de animación de latido
  useFrame(() => {
    const time = performance.now() * 0.002;
    const scaleValue = 1 + Math.sin(time) * 0.1;
    heartRef.current.scale.set(
      baseScale[0] * scaleValue,
      baseScale[1] * scaleValue,
      baseScale[2] * scaleValue
    );
  });

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Heart4"
          castShadow
          receiveShadow
          geometry={nodes.Heart4.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
          ref={heartRef}
        />
        
        {/* Tarjeta de información al lado derecho del corazón */}
        {showInfo && (
          <Html position={[4, 2, 0]} transform occlude>
            <div style={{
              backgroundColor: 'white',
              padding: '12px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              fontSize: '14px',
              color: '#000',
              maxWidth: '160px'
            }}>
              <strong>Latido activo ❤️</strong><br />
              El corazón presenta un ritmo animado<br />
              simulando el latido normal.
              <br />
              <button
                onClick={() => setShowInfo(false)}
                style={{
                  marginTop: '8px',
                  padding: '4px 8px',
                  fontSize: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#e63946',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Ocultar info
              </button>
            </div>
          </Html>
        )}

        {/* Botón flotante para mostrar la tarjeta si está oculta */}
        {!showInfo && (
          <Html position={[4, 2, 0]} transform occlude>
            <button
              onClick={() => setShowInfo(true)}
              style={{
                padding: '8px 12px',
                borderRadius: '10px',
                background: '#1d3557',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Mostrar info ❤️
            </button>
          </Html>
        )}
      </group>
    </group>
  );
};

export default Heart4;

useGLTF.preload('/models-3d/Heart4.glb');
