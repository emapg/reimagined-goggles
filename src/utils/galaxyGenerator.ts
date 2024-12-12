import * as THREE from 'three';

export function generateGalaxyGeometry(particleCount: number) {
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  const colorInside = new THREE.Color('#ff6030');
  const colorOutside = new THREE.Color('#1b3984');
  
  const radius = 50;
  const branches = 5;
  const spin = 1;
  const randomness = 0.5;
  const randomnessPower = 3;
  
  for(let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    
    // Position
    const radius_i = Math.random() * radius;
    const branchAngle = (i % branches) / branches * Math.PI * 2;
    const spinAngle = radius_i * spin;
    
    const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius_i;
    const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius_i;
    const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius_i;
    
    positions[i3] = Math.cos(branchAngle + spinAngle) * radius_i + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius_i + randomZ;
    
    // Color
    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius_i / radius);
    
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }
  
  return {
    attributes: {
      position: new THREE.BufferAttribute(positions, 3),
      color: new THREE.BufferAttribute(colors, 3)
    }
  };
}