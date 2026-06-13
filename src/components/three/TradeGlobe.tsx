import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Extend THREE.Line to avoid TypeScript conflict with SVG <line>
extend({ Line_: THREE.Line });

declare module '@react-three/fiber' {
  interface ThreeElements {
    line_: THREE.Line;
  }
}

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const globeGeometry = useMemo(() => {
    return new THREE.IcosahedronGeometry(2, 2);
  }, []);

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 300;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const tradeHubs = useMemo(() => [
    { lat: 23.0225, lon: 72.5714, name: 'Ahmedabad' },
    { lat: 19.0760, lon: 72.8777, name: 'Mumbai' },
    { lat: 13.0827, lon: 80.2707, name: 'Chennai' },
    { lat: 28.6139, lon: 77.2090, name: 'Delhi' },
    { lat: 22.5726, lon: 88.3639, name: 'Kolkata' },
  ], []);

  const latLonToVector3 = (lat: number, lon: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group>
      {/* Wireframe Globe */}
      <mesh ref={meshRef} geometry={globeGeometry}>
        <meshBasicMaterial 
          color="#DE2A72" 
          wireframe 
          transparent 
          opacity={0.3}
        />
      </mesh>

      {/* Inner sphere for depth */}
      <mesh geometry={new THREE.IcosahedronGeometry(1.98, 2)}>
        <meshBasicMaterial 
          color="#DE2A72" 
          transparent 
          opacity={0.05}
        />
      </mesh>

      {/* Trade Hub Points */}
      {tradeHubs.map((hub, i) => {
        const pos = latLonToVector3(hub.lat, hub.lon, 2.05);
        return (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#DE2A72" />
          </mesh>
        );
      })}

      {/* Trade Arcs using extended line_ element */}
      {tradeHubs.slice(1).map((hub, i) => {
        const start = latLonToVector3(tradeHubs[0].lat, tradeHubs[0].lon, 2.05);
        const end = latLonToVector3(hub.lat, hub.lon, 2.05);
        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        mid.normalize().multiplyScalar(3.5);

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const points = curve.getPoints(50);
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <line_ key={i} geometry={lineGeometry}>
            <lineBasicMaterial color="#DE2A72" transparent opacity={0.4} />
          </line_>
        );
      })}

      {/* Particles */}
      <points ref={particlesRef} geometry={particlesGeometry}>
        <pointsMaterial 
          color="#FFFFFF" 
          size={0.02} 
          transparent 
          opacity={0.6}
        />
      </points>

      {/* Lighting */}
      <ambientLight intensity={0.6} color="#FFFFFF" />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.3} 
        color="#DE2A72"
      />
    </group>
  );
}

function MobileFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
        <circle cx="200" cy="200" r="150" fill="none" stroke="#DE2A72" strokeWidth="1" opacity="0.3" />
        <circle cx="200" cy="200" r="145" fill="none" stroke="#DE2A72" strokeWidth="0.5" opacity="0.1" />

        {/* India outline approximation */}
        <path 
          d="M200 80 L220 100 L240 120 L250 150 L245 180 L235 210 L220 240 L200 260 L180 240 L165 210 L155 180 L150 150 L160 120 L180 100 Z" 
          fill="none" 
          stroke="#DE2A72" 
          strokeWidth="1.5" 
          opacity="0.4"
        />

        {/* Trade route lines */}
        <line x1="200" y1="200" x2="320" y2="120" stroke="#DE2A72" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="340" y2="200" stroke="#DE2A72" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="300" y2="280" stroke="#DE2A72" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="180" y2="320" stroke="#DE2A72" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />

        {/* Hub points */}
        <circle cx="200" cy="200" r="5" fill="#DE2A72" />
        <circle cx="320" cy="120" r="3" fill="#DE2A72" opacity="0.7" />
        <circle cx="340" cy="200" r="3" fill="#DE2A72" opacity="0.7" />
        <circle cx="300" cy="280" r="3" fill="#DE2A72" opacity="0.7" />
        <circle cx="180" cy="320" r="3" fill="#DE2A72" opacity="0.7" />

        <text x="200" y="190" textAnchor="middle" fill="#DE2A72" fontSize="10" fontFamily="Barlow">Ahmedabad</text>
      </svg>
    </div>
  );
}

export default function TradeGlobe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(hover: none)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <MobileFallback />;
  }

  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Globe />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
