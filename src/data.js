export const towers = ["Tower A", "Tower B", "Tower C"];
export const floors = Array.from({ length: 15 }, (_, i) => `Floor ${i + 1}`);

export const apartments = [
  {
    id: 1,
    type: "2BHK",
    area: "120 sqm",
    rooms: 2,
    price: "$150/night",
    available: true,
    amenities: ["WiFi", "Air Conditioning", "Balcony", "TV"],
    floor: 5,
    view: "City",
    bedType: "Queen",
    description:
      "Spacious 2-bedroom apartment with city view and modern amenities.",
  },
  {
    id: 2,
    type: "3BHK",
    area: "150 sqm",
    rooms: 3,
    price: "$200/night",
    available: false,
    amenities: ["WiFi", "Kitchen", "Balcony", "TV", "Washer"],
    floor: 10,
    view: "Sea",
    bedType: "King",
    description:
      "Luxurious 3-bedroom apartment with sea view and full kitchen.",
  },
  {
    id: 3,
    type: "Studio",
    area: "80 sqm",
    rooms: 1,
    price: "$100/night",
    available: true,
    amenities: ["WiFi", "TV"],
    floor: 2,
    view: "Garden",
    bedType: "Double",
    description: "Cozy studio perfect for solo travelers or couples.",
  },
  {
    id: 4,
    type: "Penthouse",
    area: "200 sqm",
    rooms: 4,
    price: "$350/night",
    available: true,
    amenities: ["WiFi", "Private Pool", "Terrace", "TV", "Jacuzzi"],
    floor: 15,
    view: "Panoramic",
    bedType: "King",
    description:
      "Exclusive penthouse with panoramic views and private amenities.",
  },
];
