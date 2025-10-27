import React from "react";

const GMCWelcome = () => {
  return (
    <div className=" p-4 text-center py-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
        Welcome to GMC Motors, Great Deals on Used Cars in Birmingham
      </h1>
      <p className="text-sm  md:text-base mb-2 font-[300] sm:mb-4">
        We have extensive experience in the automotive industry, specializing in
        car deals. Our team understands the intricacies of the car market,
        including pricing, financing options, and vehicle specifications,
        allowing us to provide expert guidance and support throughout the deal
        process.
      </p>
      <p className="text-sm  md:text-base mb-2 font-[300] sm:mb-4">
        We offer a diverse range of cars, including various makes, models, and
        price points. Whether you're looking for a luxury sedan, a reliable
        family SUV, or an economical compact car, we have a wide selection to
        cater to your preferences and budget.
      </p>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
        Book your free Auto Inspection
      </h2>
      <p className="text-sm  md:text-base mb-2 font-[300] sm:mb-4">
        Book your free auto inspection with us today and let our expert
        technicians thoroughly assess your vehicle to ensure its safety,
        performance, and overall condition.
      </p>
      <p className="text-sm  font-[300] md:text-base mb-2 sm:mb-4">
        Our extensive inventory includes a wide selection of high-quality
        vehicles from various makes and models. Whether you're searching for a
        practical sedan, a versatile SUV, or a sporty coupe, our knowledgeable
        sales team will assist you in finding the perfect vehicle that matches
        your preferences and budget. We regularly update our inventory to ensure
        you have access to the latest models and competitive prices.
      </p>
      <a
        href="https://vizionfinance.com" // Replace with actual Vizion Finance URL
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block ms-auto bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base md:text-lg"
      >
        Car Finance By
        <span className="font-bold"> Vizion Finance</span>
      </a>
    </div>
  );
};

export default GMCWelcome;
