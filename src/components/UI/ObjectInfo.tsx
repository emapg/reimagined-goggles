import { useUniverseStore } from '../../store/universeStore';

export function ObjectInfo() {
  const selectedObject = useUniverseStore((state) => state.selectedObject);

  if (!selectedObject) return null;

  return (
    <div className="fixed top-8 right-8 bg-black/50 backdrop-blur-md rounded-lg p-6 text-white max-w-md">
      <h2 className="text-2xl font-bold mb-2">{selectedObject.name}</h2>
      <p className="text-gray-300 mb-4">{selectedObject.description}</p>
      
      <div className="space-y-2">
        {Object.entries(selectedObject.properties).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-400">{key}:</span>
            <span className="text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}