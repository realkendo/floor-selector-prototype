import { useState } from "react";
import { towers, floors, apartments } from "./data";
import TowerSelector from "./components/TowerSelector";
import FloorSelector from "./components/FloorSelector";
import ApartmentGrid from "./components/ApartmentGrid";
import ApartmentDetail from "./components/ApartmentDetail";

export default function App() {
  const [tower, setTower] = useState(null);
  const [floor, setFloor] = useState(null);
  const [layout, setLayout] = useState(null);

  return (
    <div className="min-h-screen p-6 bg-royalPurple dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Real Estate Floor Selector</h1>

      {!tower && <TowerSelector towers={towers} onSelect={setTower} />}

      {tower && !floor && (
        <FloorSelector
          tower={tower}
          floors={floors}
          onBack={() => setTower(null)}
          onSelect={setFloor}
        />
      )}

      {tower && floor && !layout && (
        <ApartmentGrid
          tower={tower}
          floor={floor}
          apartments={apartments}
          onBack={() => setFloor(null)}
          onSelect={setLayout}
        />
      )}

      {layout && (
        <ApartmentDetail layout={layout} onBack={() => setLayout(null)} />
      )}
    </div>
  );
}
