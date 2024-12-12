import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { SpaceEnvironment } from './effects/SpaceEnvironment';
import { CelestialSystem } from './celestial/CelestialSystem';
import { useUniverseStore } from '../store/universeStore';

export function Scene() {
  const { navigationSpeed } = useUniverseStore();

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 100]} />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        maxDistance={1000}
        minDistance={1}
        rotateSpeed={navigationSpeed * 0.5}
        zoomSpeed={navigationSpeed}
      />
      
      <SpaceEnvironment />
      <CelestialSystem />
    </Canvas>
  );
}