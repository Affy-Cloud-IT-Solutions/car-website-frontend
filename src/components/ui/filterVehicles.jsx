import React from "react";

const VehicleFilter = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="text-gray-600 text-sm mb-2">
        Search for a vehicle: (187 available)
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filters.map((filter, index) => (
          <select
            key={index}
            className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={filter.value}
            onChange={(e) => onFilterChange(filter.id, e.target.value)}
          >
            <option value="">
              {filter.label} ({filter.default || "Any"})
            </option>
            {filter.options?.map((option, optIndex) => (
              <option key={optIndex} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};

export default VehicleFilter;
