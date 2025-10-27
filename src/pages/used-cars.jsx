import { ImageCarousel } from "@/components/home/Carousel";
import React, { useEffect } from "react";
import CarFilterSelects from "./public/FilterContainer";
import SearchBar from "@/components/searchBar";
import CarCard from "@/components/carCard";

const UsedCars = () => {
  const cars = [
    {
      imageUrl:
        "https://www.gmcmotors.co.uk/images/mediacache/img-58261_maxw-512.jpg",
      make: "Audi",
      model: "A1 S-Line",
      variant: "Tfsi 1.4",
      trim: "TFSI s-line Sportback S",
      emissionStandard: "Tronic Euro 5",
      transmission: "Automatic",
      doors: "5",
      price: 7275,
      year: 2013,
      reg: "63",
      mileage: 72000,
      engine: "1.4",
      fuel: "Petrol",
      colour: "White",
    },
    {
      imageUrl:
        "https://www.gmcmotors.co.uk/images/mediacache/img-58261_maxw-512.jpg",
      make: "Audi",
      model: "A1 Sport",
      variant: "Tfsi 1.4",
      trim: "TFSI Sport Sportback S",
      emissionStandard: "Tronic Euro 5",
      transmission: "Automatic",
      doors: "5",
      price: 7975,
      year: 2012,
      reg: "12",
      mileage: 35000,
      engine: "1.4",
      fuel: "Petrol",
      colour: "Silver",
    },
    {
      imageUrl:
        "https://www.gmcmotors.co.uk/images/mediacache/img-58261_maxw-512.jpg",
      make: "Audi",
      model: "A1 S-Line",
      variant: "Tfsi 1.4",
      trim: "TFSI s-line Sportback S",
      emissionStandard: "Tronic Euro 5",
      transmission: "Automatic",
      doors: "5",
      price: 7275,
      year: 2013,
      reg: "63",
      mileage: 72000,
      engine: "1.4",
      fuel: "Petrol",
      colour: "White",
    },
    {
      imageUrl:
        "https://www.gmcmotors.co.uk/images/mediacache/img-58261_maxw-512.jpg",
      make: "Audi",
      model: "A1 Sport",
      variant: "Tfsi 1.4",
      trim: "TFSI Sport Sportback S",
      emissionStandard: "Tronic Euro 5",
      transmission: "Automatic",
      doors: "5",
      price: 7975,
      year: 2012,
      reg: "12",
      mileage: 35000,
      engine: "1.4",
      fuel: "Petrol",
      colour: "Silver",
    },
    {
      imageUrl:
        "https://www.gmcmotors.co.uk/images/mediacache/img-58261_maxw-512.jpg",
      make: "Audi",
      model: "A1 S-Line",
      variant: "Tfsi 1.4",
      trim: "TFSI s-line Sportback S",
      emissionStandard: "Tronic Euro 5",
      transmission: "Automatic",
      doors: "5",
      price: 7275,
      year: 2013,
      reg: "63",
      mileage: 72000,
      engine: "1.4",
      fuel: "Petrol",
      colour: "White",
    },
    {
      imageUrl:
        "https://www.gmcmotors.co.uk/images/mediacache/img-58261_maxw-512.jpg",
      make: "Audi",
      model: "A1 Sport",
      variant: "Tfsi 1.4",
      trim: "TFSI Sport Sportback S",
      emissionStandard: "Tronic Euro 5",
      transmission: "Automatic",
      doors: "5",
      price: 7975,
      year: 2012,
      reg: "12",
      mileage: 35000,
      engine: "1.4",
      fuel: "Petrol",
      colour: "Silver",
    },
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log("Query Parameters:", Object.fromEntries(params.entries()));
  }, []);

  return (
    <div>
      <ImageCarousel />
      <CarFilterSelects />
      <SearchBar />
      <div className="grid md:grid-cols-2 grid-cols-1 p-4">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default UsedCars;
