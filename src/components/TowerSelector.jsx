import hotel2 from "../assets/hotel2.jpeg";
import { motion } from "framer-motion";

export default function TowerSelector({ towers, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {towers.map((t) => (
        <div
          key={t}
          className="cursor-pointer border rounded-xl p-6 text-center shadow-md hover:shadow-lg bg-white dark:bg-gray-800 flex flex-col items-center w-48 h-64 mx-auto"
          onClick={() => onSelect(t)}
        >
          <motion.img
            src={hotel2}
            alt={t}
            className="mb-4 rounded-lg object-cover w-full h-40"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <h2 className="text-xl font-semibold mt-auto">{t}</h2>
        </div>
      ))}
    </div>
  );
}
