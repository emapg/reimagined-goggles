export type CelestialObjectType = 'star' | 'planet' | 'blackHole' | 'nebula' | 'asteroidField';

export interface CelestialObject {
  id: string;
  type: CelestialObjectType;
  position: [number, number, number];
  name: string;
  description: string;
  size: number;
  properties: Record<string, any>;
}

export interface Star extends CelestialObject {
  type: 'star';
  properties: {
    spectralClass: string;
    temperature: number;
    magnitude: number;
    mass: number;
  };
}

export interface Planet extends CelestialObject {
  type: 'planet';
  properties: {
    type: 'terrestrial' | 'gas-giant' | 'ice-giant';
    atmosphere: boolean;
    rings: boolean;
    moons: number;
    habitabilityIndex: number;
  };
}

export interface BlackHole extends CelestialObject {
  type: 'blackHole';
  properties: {
    mass: number;
    eventHorizonRadius: number;
    hasAccretionDisk: boolean;
  };
}