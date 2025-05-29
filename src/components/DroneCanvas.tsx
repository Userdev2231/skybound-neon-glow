
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Drone = ({ position, scrollOffset }: { position: [number, number, number], scrollOffset: number }) => {
  const droneRef = useRef<THREE.Group>(null);
  const propellerRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (droneRef.current) {
      // Gentle floating motion
      droneRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      
      // Move based on scroll
      droneRef.current.position.x = position[0] + scrollOffset * 0.002;
      droneRef.current.position.z = position[2] + Math.sin(scrollOffset * 0.001) * 2;
      
      // Gentle rotation
      droneRef.current.rotation.y += 0.005;
    }

    // Rotate propellers
    propellerRefs.current.forEach((propeller) => {
      if (propeller) {
        propeller.rotation.y += 0.3;
      }
    });
  });

  return (
    <group ref={droneRef} position={position}>
      {/* Drone body */}
      <Box args={[0.3, 0.1, 0.3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#444444" />
      </Box>
      
      {/* Drone arms */}
      <Box args={[0.8, 0.02, 0.02]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#666666" />
      </Box>
      <Box args={[0.02, 0.02, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#666666" />
      </Box>
      
      {/* Propellers */}
      {[
        [-0.4, 0.05, -0.4],
        [0.4, 0.05, -0.4],
        [-0.4, 0.05, 0.4],
        [0.4, 0.05, 0.4]
      ].map((pos, index) => (
        <mesh
          key={index}
          ref={(el) => {
            if (el) propellerRefs.current[index] = el;
          }}
          position={pos as [number, number, number]}
        >
          <cylinderGeometry args={[0.15, 0.15, 0.01, 8]} />
          <meshStandardMaterial color="#333333" transparent opacity={0.7} />
        </mesh>
      ))}
      
      {/* LED lights */}
      <Sphere args={[0.02]} position={[0.15, -0.05, 0.15]}>
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere args={[0.02]} position={[-0.15, -0.05, -0.15]}>
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  );
};

const DroneSwarm = ({ scrollOffset }: { scrollOffset: number }) => {
  const drones = [
    [4, 2, -5],
    [-3, 1, -8],
    [6, 3, -12],
    [-5, 2.5, -15],
    [2, 1.5, -18],
    [-4, 3.5, -22],
    [5, 2, -25]
  ];

  return (
    <>
      {drones.map((position, index) => (
        <Drone 
          key={index} 
          position={position as [number, number, number]} 
          scrollOffset={scrollOffset}
        />
      ))}
    </>
  );
};

const DroneCanvas = ({ scrollOffset }: { scrollOffset: number }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#4fc3f7" />
        <DroneSwarm scrollOffset={scrollOffset} />
      </Canvas>
    </div>
  );
};

export default DroneCanvas;
