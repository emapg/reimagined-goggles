import React from 'react';
import { Settings, ZoomIn, ZoomOut, Compass, Info } from 'lucide-react';

export function Controls() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-full p-2">
      <div className="flex items-center space-x-4">
        <button className="p-2 text-white hover:text-blue-400 transition-colors">
          <ZoomIn size={24} />
        </button>
        <button className="p-2 text-white hover:text-blue-400 transition-colors">
          <ZoomOut size={24} />
        </button>
        <button className="p-2 text-white hover:text-blue-400 transition-colors">
          <Compass size={24} />
        </button>
        <button className="p-2 text-white hover:text-blue-400 transition-colors">
          <Info size={24} />
        </button>
        <button className="p-2 text-white hover:text-blue-400 transition-colors">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
}