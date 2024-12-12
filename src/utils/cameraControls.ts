import { useThree } from '@react-three/fiber';
import { useUniverseStore } from '../store/universeStore';
import { useEffect } from 'react';

export const useCameraControls = () => {
  const { camera } = useThree();
  const { cameraTarget, navigationSpeed } = useUniverseStore();

  useEffect(() => {
    camera.position.lerp(new THREE.Vector3(...cameraTarget), 0.1 * navigationSpeed);
  }, [camera, cameraTarget, navigationSpeed]);
};