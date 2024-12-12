import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { generateGalaxyGeometry } from '../utils/galaxyGenerator';

export function Galaxy() {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => generateGalaxyGeometry(100000), []);
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.0001;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry {...geometry} />
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={true}
      />
    </points>
  );
}