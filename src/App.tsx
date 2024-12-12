import React from 'react';
import { Scene } from './components/Scene';
import { Controls } from './components/UI/Controls';

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <Scene />
      <Controls />
      <div className="fixed top-8 left-8 text-white">
        <h1 className="text-3xl font-bold">Galaxy Explorer</h1>
        <p className="text-gray-400">Navigate through the cosmos</p>
      </div>
    </div>
  );
}

export default App;