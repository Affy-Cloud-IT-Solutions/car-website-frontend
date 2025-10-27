// src/pages/public/Home.jsx
import React from "react";
// import { ButtonHover } from "../../components/ButtonHover";
import GMCWelcome from "../../components/home/GmcWelcome";
import CarCard from "../../components/carCard";
import SearchBar from "../../components/searchBar";
import { ImageCarousel } from "../../components/home/Carousel";
import CarFilterSelects from "./FilterContainer";

const Home = () => {
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
  ];
  return (
    <div>
      <ImageCarousel />
      <GMCWelcome />
      <CarFilterSelects />
      <SearchBar />
      {/* <FilterContainer /> */}
      <div className="grid md:grid-cols-2 grid-cols-1 p-4">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Home;
