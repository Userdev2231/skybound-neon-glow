
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Drone = ({ position }: { position: [number, number, number] }) => {
  const droneRef = useRef<THREE.Group>(null);
  const propeller1Ref = useRef<THREE.Mesh>(null);
  const propeller2Ref = useRef<THREE.Mesh>(null);
  const propeller3Ref = useRef<THREE.Mesh>(null);
  const propeller4Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (droneRef.current) {
      // Gentle floating motion only
      droneRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      
      // Gentle rotation
      droneRef.current.rotation.y += 0.005;
    }

    // Rotate propellers
    [propeller1Ref, propeller2Ref, propeller3Ref, propeller4Ref].forEach((ref) => {
      if (ref.current) {
        ref.current.rotation.y += 0.3;
      }
    });
  });

  return (
    <group ref={droneRef} position={position}>
      {/* Drone body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.3]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      
      {/* Drone arms */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.02, 0.02]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.02, 0.02, 0.8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      
      {/* Propellers */}
      <mesh ref={propeller1Ref} position={[-0.4, 0.05, -0.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.01, 8]} />
        <meshStandardMaterial color="#333333" transparent opacity={0.7} />
      </mesh>
      
      <mesh ref={propeller2Ref} position={[0.4, 0.05, -0.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.01, 8]} />
        <meshStandardMaterial color="#333333" transparent opacity={0.7} />
      </mesh>
      
      <mesh ref={propeller3Ref} position={[-0.4, 0.05, 0.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.01, 8]} />
        <meshStandardMaterial color="#333333" transparent opacity={0.7} />
      </mesh>
      
      <mesh ref={propeller4Ref} position={[0.4, 0.05, 0.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.01, 8]} />
        <meshStandardMaterial color="#333333" transparent opacity={0.7} />
      </mesh>
      
      {/* LED lights */}
      <mesh position={[0.15, -0.05, 0.15]}>
        <sphereGeometry args={[0.02]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.15, -0.05, -0.15]}>
        <sphereGeometry args={[0.02]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

const DroneSwarm = () => {
  const drones = [
    [4, 2, -5],
    [-3, 1, -8],
    [6, 3, -12],
    [-5, 2.5, -15],
    [2, 1.5, -18]
  ];

  return (
    <>
      {drones.map((position, index) => (
        <Drone 
          key={index} 
          position={position as [number, number, number]} 
        />
      ))}
    </>
  );
};

const DroneCanvas = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#4fc3f7" />
        <DroneSwarm />
      </Canvas>
    </div>
  );
};

export default DroneCanvas;
