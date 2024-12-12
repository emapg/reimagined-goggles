import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import type { Star as StarType } from '../../types/celestial';

interface StarProps {
  data: StarType;
  selected?: boolean;
}

export function Star({ data, selected }: StarProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  const getStarColor = (temperature: number) => {
    if (temperature > 25000) return '#9bb0ff';
    if (temperature > 10000) return '#aabfff';
    if (temperature > 7500) return '#cad7ff';
    if (temperature > 6000) return '#fff4ea';
    if (temperature > 5000) return '#ffd2a1';
    if (temperature > 3500) return '#ffcc6f';
    return '#ff8a00';
  };

  return (
    <group position={data.position}>
      <Sphere ref={meshRef} args={[data.size, 32, 32]}>
        <MeshDistortMaterial
          color={getStarColor(data.properties.temperature)}
          emissive={getStarColor(data.properties.temperature)}
          emissiveIntensity={selected ? 2 : 1}
          distort={0.3}
          speed={0.5}
        />
      </Sphere>
    </group>
  );
}