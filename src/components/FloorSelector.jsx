export default function FloorSelector({ tower, floors, onBack, onSelect }) {
  return (
    <div>
      <button className="mb-4 underline" onClick={onBack}>
        ← Back to Towers
      </button>
      <h2 className="text-2xl font-bold mb-4">{tower}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {floors.map((f) => (
          <div
            key={f}
            className="cursor-pointer bg-white dark:bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => onSelect(f)}
          >
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}