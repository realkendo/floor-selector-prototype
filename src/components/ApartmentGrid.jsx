import { motion } from "framer-motion";
import hotel1 from "../assets/hotel1.jpeg";
import { useState } from "react";

export default function ApartmentGrid({
  tower,
  floor,
  apartments,
  onBack,
  onSelect,
}) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="relative">
      <button className="mb-4 underline" onClick={onBack}>
        ← Back to Floors
      </button>
      <h2 className="text-2xl font-bold mb-4">
        {floor} - {tower}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {apartments.map((apt) => (
          <div
            key={apt.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl cursor-pointer"
            onClick={() => onSelect(apt)}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredId(apt.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative overflow-hidden rounded mb-2 aspect-square"
            >
              <img
                src={hotel1}
                alt="layout"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black rounded"
                animate={{ opacity: hoveredId === apt.id ? 0.7 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                aria-hidden="true"
              />
            </motion.div>
            <p className="font-semibold">{apt.type}</p>
            <p>{apt.area}</p>
            <p>{apt.rooms} rooms</p>
          </div>
        ))}
      </div>
    </div>
  );
}
