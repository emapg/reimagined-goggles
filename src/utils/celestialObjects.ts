import { Star, Planet, BlackHole } from '../types/celestial';

export const generateRandomStar = (id: string, position: [number, number, number]): Star => ({
  id,
  type: 'star',
  position,
  name: `Star-${id}`,
  description: 'A luminous spheroid of plasma held together by its own gravity.',
  size: Math.random() * 2 + 0.5,
  properties: {
    spectralClass: ['O', 'B', 'A', 'F', 'G', 'K', 'M'][Math.floor(Math.random() * 7)],
    temperature: Math.random() * 30000 + 3000,
    magnitude: Math.random() * 15 - 5,
    mass: Math.random() * 50 + 0.1,
  },
});

export const generateRandomPlanet = (id: string, position: [number, number, number]): Planet => ({
  id,
  type: 'planet',
  position,
  name: `Planet-${id}`,
  description: 'A celestial body that orbits a star.',
  size: Math.random() * 1 + 0.2,
  properties: {
    type: ['terrestrial', 'gas-giant', 'ice-giant'][Math.floor(Math.random() * 3)] as Planet['properties']['type'],
    atmosphere: Math.random() > 0.3,
    rings: Math.random() > 0.8,
    moons: Math.floor(Math.random() * 20),
    habitabilityIndex: Math.random(),
  },
});