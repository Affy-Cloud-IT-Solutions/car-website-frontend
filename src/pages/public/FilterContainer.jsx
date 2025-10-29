import React, { useState } from "react";

export const CustomSelect = ({ label, options, value, onChange, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#4C4F56] text-white px-4 py-3 rounded-lg flex items-center justify-between hover:bg-[#5A5D64] transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-xl">{icon}</span>}
          <span className="text-base">{value || label}</span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-2 bg-[#4C4F56] rounded-lg shadow-lg max-h-64 overflow-y-auto">
            <div className="py-1">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left text-white hover:bg-[#5A5D64] transition-colors duration-150 flex items-center gap-3"
                >
                  {option.icon && (
                    <span className="text-xl">{option.icon}</span>
                  )}
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const CarFilterSelects = () => {
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    bodyType: "",
    transmission: "",
    fuel: "",
    engineSize: "",
    minPrice: "",
    maxPrice: "",
    sort: "",
  });

  const makes = [
    { label: "Audi", value: "audi", icon: "🅰️" },
    { label: "BMW", value: "bmw", icon: "🔷" },
    { label: "Mercedes", value: "mercedes", icon: "⭐" },
    { label: "Toyota", value: "toyota", icon: "🚗" },
    { label: "Ford", value: "ford", icon: "🔵" },
  ];

  const models = [
    { label: "A3", value: "a3" },
    { label: "A4", value: "a4" },
    { label: "Q5", value: "q5" },
    { label: "3 Series", value: "3series" },
    { label: "5 Series", value: "5series" },
  ];

  const bodyTypes = [
    { label: "Sedan", value: "sedan" },
    { label: "SUV", value: "suv" },
    { label: "Hatchback", value: "hatchback" },
    { label: "Coupe", value: "coupe" },
    { label: "Estate", value: "estate" },
  ];

  const transmissions = [
    { label: "Automatic", value: "automatic" },
    { label: "Manual", value: "manual" },
    { label: "Semi-Automatic", value: "semi-automatic" },
  ];

  const fuels = [
    { label: "Petrol", value: "petrol" },
    { label: "Diesel", value: "diesel" },
    { label: "Electric", value: "electric" },
    { label: "Hybrid", value: "hybrid" },
  ];

  const engineSizes = [
    { label: "1.0L", value: "1.0" },
    { label: "1.5L", value: "1.5" },
    { label: "2.0L", value: "2.0" },
    { label: "2.5L", value: "2.5" },
    { label: "3.0L", value: "3.0" },
  ];

  const prices = [
    { label: "£5,000", value: "5000" },
    { label: "£10,000", value: "10000" },
    { label: "£15,000", value: "15000" },
    { label: "£20,000", value: "20000" },
    { label: "£30,000", value: "30000" },
    { label: "£50,000", value: "50000" },
  ];

  const sortOptions = [
    { label: "Make", value: "make" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Year: Newest", value: "year_desc" },
    { label: "Mileage: Lowest", value: "mileage_asc" },
  ];

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Car Search Filters
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <CustomSelect
            label="Make (Any)"
            options={makes}
            value={filters.make}
            onChange={(val) => updateFilter("make", val)}
          />
          <CustomSelect
            label="Model (Any)"
            options={models}
            value={filters.model}
            onChange={(val) => updateFilter("model", val)}
          />
          <CustomSelect
            label="Body Type (Any)"
            options={bodyTypes}
            value={filters.bodyType}
            onChange={(val) => updateFilter("bodyType", val)}
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <CustomSelect
            label="Transmission (Any)"
            options={transmissions}
            value={filters.transmission}
            onChange={(val) => updateFilter("transmission", val)}
          />
          <CustomSelect
            label="Fuel (Any)"
            options={fuels}
            value={filters.fuel}
            onChange={(val) => updateFilter("fuel", val)}
          />
          <CustomSelect
            label="Engine Size (Any)"
            options={engineSizes}
            value={filters.engineSize}
            onChange={(val) => updateFilter("engineSize", val)}
          />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <CustomSelect
            label="Min. Price (None)"
            options={prices}
            value={filters.minPrice}
            onChange={(val) => updateFilter("minPrice", val)}
          />
          <CustomSelect
            label="Max Price (None)"
            options={prices}
            value={filters.maxPrice}
            onChange={(val) => updateFilter("maxPrice", val)}
          />
          <CustomSelect
            label="Sort: Make"
            options={sortOptions}
            value={filters.sort}
            onChange={(val) => updateFilter("sort", val)}
          />
        </div>

        {/* Display Selected Filters */}
        {/* <div className="mt-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Selected Filters:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            {Object.entries(filters).map(
              ([key, value]) =>
                value && (
                  <div key={key}>
                    <span className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:{" "}
                    </span>
                    <span>{value}</span>
                  </div>
                )
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CarFilterSelects;
