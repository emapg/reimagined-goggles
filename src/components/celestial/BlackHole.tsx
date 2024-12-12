import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Ring } from '@react-three/drei';
import type { BlackHole as BlackHoleType } from '../../types/celestial';

interface BlackHoleProps {
  data: BlackHoleType;
  selected?: boolean;
}

export function BlackHole({ data, selected }: BlackHoleProps) {
  const diskRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (diskRef.current) {
      diskRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group position={data.position}>
      <Sphere args={[data.properties.eventHorizonRadius, 32, 32]}>
        <meshBasicMaterial color="black" />
      </Sphere>
      
      {data.properties.hasAccretionDisk && (
        <Ring
          ref={diskRef}
          args={[
            data.properties.eventHorizonRadius * 2,
            data.properties.eventHorizonRadius * 4,
            64
          ]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial
            color="#ff3300"
            opacity={0.6}
            transparent
            side={2}
          />
        </Ring>
      )}
    </group>
  );
}