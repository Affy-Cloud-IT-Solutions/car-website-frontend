import { Button } from "./ui/button";

const CarCard = ({ car }) => {
  return (
    <div className="bg-[#4C4F56] text-white rounded-lg overflow-hidden shadow-lg my-4 sm:mx-4 relative hover:shadow-2xl transition-shadow duration-300">
      <div className="px-4 pt-4">
        <h1 className="text-2xl font-bold transition-transform duration-300 hover:scale-105">
          {car?.make || "Unknown"} {car?.model || "Model"} {car?.variant || ""}{" "}
          {car?.trim || ""}
        </h1>
        <p className="text-sm text-gray-300 mb-2">
          {car?.emissionStandard || "Unknown"} {car?.transmission || ""}{" "}
          {car?.doors || ""}dr
        </p>
      </div>

      <div className="px-4 flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex-1 overflow-hidden rounded-lg">
          <img
            src={car?.imageUrl || "https://via.placeholder.com/300x200"}
            alt={car?.model || "Car Image"}
            className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-1 gap-2 text-lg flex-1">
          <p className="transition-all duration-300 scale-105 hover:text-xl">
            <strong>Price:</strong> £{car?.price?.toLocaleString() || "N/A"}
          </p>
          <p className="transition-all duration-300 hover:scale-105 text-xl">
            <strong>Year:</strong> {car?.year || "N/A"} ({car?.reg || "N/A"}{" "}
            Reg)
          </p>
          <p className="transition-all duration-300 hover:scale-105 text-xl">
            <strong>Mileage:</strong> {car?.mileage?.toLocaleString() || "N/A"}
          </p>
          <p className="transition-all duration-300 hover:scale-105 text-xl">
            <strong>Engine:</strong> {car?.engine || "N/A"} {car?.fuel || ""}
          </p>
          <p className="transition-all duration-300 hover:scale-105 text-xl">
            <strong>Colour:</strong> {car?.colour || "N/A"}
          </p>
          <p className="transition-all duration-300 hover:scale-105 text-xl">
            <strong>Doors:</strong> {car?.doors || "N/A"}
          </p>
        </div>
      </div>

      <div className="p-4 flex justify-end items-end">
        <Button>More Info...</Button>
      </div>
    </div>
  );
};

export default CarCard;
