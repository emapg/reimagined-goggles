import { useUniverseStore } from '../../store/universeStore';
import { 
  ZoomIn, 
  ZoomOut, 
  Compass, 
  PlayCircle, 
  PauseCircle,
  Layers,
  Settings
} from 'lucide-react';

export function NavigationControls() {
  const { 
    isTouring,
    showLabels,
    showConstellations,
    navigationSpeed,
    setTouring,
    toggleLabels,
    toggleConstellations,
    setNavigationSpeed
  } = useUniverseStore();

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-full p-2">
      <div className="flex items-center space-x-4">
        <button 
          className="p-2 text-white hover:text-blue-400 transition-colors"
          onClick={() => setNavigationSpeed(navigationSpeed * 1.5)}
        >
          <ZoomIn size={24} />
        </button>
        
        <button 
          className="p-2 text-white hover:text-blue-400 transition-colors"
          onClick={() => setNavigationSpeed(navigationSpeed * 0.75)}
        >
          <ZoomOut size={24} />
        </button>
        
        <button 
          className="p-2 text-white hover:text-blue-400 transition-colors"
          onClick={() => setTouring(!isTouring)}
        >
          {isTouring ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
        </button>
        
        <button 
          className="p-2 text-white hover:text-blue-400 transition-colors"
          onClick={toggleLabels}
        >
          <Layers size={24} />
        </button>
        
        <button 
          className="p-2 text-white hover:text-blue-400 transition-colors"
          onClick={toggleConstellations}
        >
          <Compass size={24} />
        </button>
        
        <button className="p-2 text-white hover:text-blue-400 transition-colors">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
}