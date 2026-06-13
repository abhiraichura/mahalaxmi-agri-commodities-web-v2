import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2.5, 2]} />
      <meshPhongMaterial 
        color="#DE2A72" 
        emissive="#4A0000" 
        wireframe 
        shininess={0} 
      />
    </mesh>
  );
};

const TradeGlobe = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} color="#ffffff" />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.3} 
          color="#DE2A72" 
        />
        <Globe />
        <Stars radius={100} depth={50} count={300} factor={2} saturation={0} fade speed={1} />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.2}
          minDistance={5}
          maxDistance={12}
        />
      </Canvas>
    </div>
  );
};

export default TradeGlobe;
