import { Stars, Sky } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';

export function SpaceEnvironment() {
  return (
    <>
      <Stars
        radius={300}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
      />
      
      <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
      
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
        />
        <ChromaticAberration offset={[0.002, 0.002]} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
}