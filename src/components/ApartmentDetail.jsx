import hotel1 from "../assets/hotel1.jpeg";

export default function ApartmentDetail({ layout, onBack }) {
  return (
    <div>
      <button className="mb-4 underline" onClick={onBack}>
        ← Back to Layouts
      </button>
      <h2 className="text-2xl font-bold mb-4">{layout.type}</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-lg mx-auto">
        <img src={hotel1} alt="full layout" className="w-full rounded mb-4" />
        <p>
          <strong>Area:</strong> {layout.area}
        </p>
        <p>
          <strong>Type:</strong> {layout.type}
        </p>
        <p>
          <strong>Rooms:</strong> {layout.rooms}
        </p>
        <p>
          <strong>Price:</strong> {layout.price}
        </p>
        <p>
          <strong>Available:</strong> {layout.available ? "Yes" : "No"}
        </p>
        <p>
          <strong>Floor:</strong> {layout.floor}
        </p>
        <p>
          <strong>View:</strong> {layout.view}
        </p>
        <p>
          <strong>Bed Type:</strong> {layout.bedType}
        </p>
        <p>
          <strong>Amenities:</strong> {layout.amenities?.join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {layout.description}
        </p>
      </div>
    </div>
  );
}
