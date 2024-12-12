import { create } from 'zustand';
import type { CelestialObject } from '../types/celestial';

interface UniverseState {
  selectedObject: CelestialObject | null;
  cameraTarget: [number, number, number];
  isTouring: boolean;
  tourStep: number;
  showLabels: boolean;
  showConstellations: boolean;
  navigationSpeed: number;
  setSelectedObject: (object: CelestialObject | null) => void;
  setCameraTarget: (target: [number, number, number]) => void;
  setTouring: (touring: boolean) => void;
  setTourStep: (step: number) => void;
  toggleLabels: () => void;
  toggleConstellations: () => void;
  setNavigationSpeed: (speed: number) => void;
}

export const useUniverseStore = create<UniverseState>((set) => ({
  selectedObject: null,
  cameraTarget: [0, 0, 0],
  isTouring: false,
  tourStep: 0,
  showLabels: true,
  showConstellations: false,
  navigationSpeed: 1,
  
  setSelectedObject: (object) => set({ selectedObject: object }),
  setCameraTarget: (target) => set({ cameraTarget: target }),
  setTouring: (touring) => set({ isTouring: touring }),
  setTourStep: (step) => set({ tourStep: step }),
  toggleLabels: () => set((state) => ({ showLabels: !state.showLabels })),
  toggleConstellations: () => set((state) => ({ showConstellations: !state.showConstellations })),
  setNavigationSpeed: (speed) => set({ navigationSpeed: speed }),
}));