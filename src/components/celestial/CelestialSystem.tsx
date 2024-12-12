import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Star } from './Star';
import { BlackHole } from './BlackHole';
import { generateRandomStar } from '../../utils/celestialObjects';
import { useUniverseStore } from '../../store/universeStore';

export function CelestialSystem() {
  const groupRef = useRef<THREE.Group>(null);
  const { selectedObject, setSelectedObject } = useUniverseStore();
  
  // Generate a sample star system
  const star = generateRandomStar('1', [0, 0, 0]);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <group ref={groupRef}>
      <Star 
        data={star} 
        selected={selectedObject?.id === star.id}
        onClick={() => setSelectedObject(star)}
      />
    </group>
  );
}