
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const ParticleField = () => {
  const particles = useRef<THREE.Points>(null);
  const [positions, setPositions] = useState<Float32Array | null>(null);
  
  useEffect(() => {
    const particleCount = 3000;
    const particlePositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 15;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 15;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    
    setPositions(particlePositions);
  }, []);
  
  useFrame(({ clock }) => {
    if (particles.current) {
      particles.current.rotation.y = clock.getElapsedTime() * 0.08;
      particles.current.rotation.z = clock.getElapsedTime() * 0.05;
      
      // Add pulsating effect
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      particles.current.scale.set(scale, scale, scale);
    }
  });
  
  if (!positions) return null;
  
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#8B5CF6" 
        sizeAttenuation={true} 
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

const FloatingObjects = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.5;
      group.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.2) * 0.3;
      
      // Add breathing effect
      const breathe = 1 + Math.sin(clock.getElapsedTime()) * 0.1;
      group.current.scale.set(breathe, breathe, breathe);
    }
  });
  
  return (
    <group ref={group}>
      <mesh position={[-3, -1, -4]}>
        <octahedronGeometry args={[1.5]} />
        <meshStandardMaterial 
          color="#D946EF" 
          wireframe={true} 
          transparent={true}
          opacity={0.7}
          emissive="#D946EF"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      <mesh position={[3, 2, -3]}>
        <tetrahedronGeometry args={[1.2]} />
        <meshStandardMaterial 
          color="#0EA5E9" 
          wireframe={true} 
          transparent={true}
          opacity={0.8}
          emissive="#0EA5E9"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      <mesh position={[0, -3, -2]}>
        <icosahedronGeometry args={[1.2]} />
        <meshStandardMaterial 
          color="#F97316" 
          wireframe={true} 
          transparent={true}
          opacity={0.7}
          emissive="#F97316"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      <mesh position={[-2, 3, -5]}>
        <dodecahedronGeometry args={[1]} />
        <meshStandardMaterial 
          color="#10B981" 
          wireframe={true} 
          transparent={true}
          opacity={0.7}
          emissive="#10B981"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="three-bg">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75, near: 0.1, far: 1000 }} 
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0EA5E9" />
        <ParticleField />
        <FloatingObjects />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          rotateSpeed={0.3}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
