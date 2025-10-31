import CarCard from "@/components/carCard";
import { ImageCarousel } from "@/components/home/Carousel";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";
import Slider from "react-slick";

const OurTimings = () => {
  return (
    <div>
      <h1 className="md:text-4xl text-3xl pt-8 font-bold text-center text-gray-800 mb-6">
        Opening Times
      </h1>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        {/* Opening Times Section */}
        <div className="w-full md:w-1/2 font-bold !text-black bg-white border border-black/10  p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Opening Times
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="!text-black">Monday</span>
              <span className="text-gray-800 font-[400]">9:00am - 6:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="!text-black">Tuesday</span>
              <span className="text-gray-800 font-[400]">9:00am - 6:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="!text-black">Wednesday</span>
              <span className="text-gray-800 font-[400]">9:00am - 6:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="!text-black">Thursday</span>
              <span className="text-gray-800 font-[400]">9:00am - 6:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="!text-black">Friday</span>
              <span className="text-gray-800 font-[400]">9:00am - 6:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="!text-black">Saturday</span>
              <span className="text-gray-800 font-[400]">9:30am - 5:30pm</span>
            </div>
            <div className="flex justify-between">
              <span className="!text-black">Sunday</span>
              <span className="text-gray-800 font-[400]">
                WE ARE OPEN ON BANK HOLIDAYS
              </span>
            </div>
          </div>
          <p className="!text-black mt-4 text-sm">
            Call 0121 772 7724 to arrange a viewing outside of these hours.
          </p>
        </div>

        {/* Address & Phone Nos. Section */}
        <div className="w-full md:w-1/2 bg-white border  border-black/10 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Address & Phone Nos.
          </h2>
          <div className="space-y-2">
            <p className="text-gray-800 font-[400]">GMC Motors Birmingham</p>
            <p className="text-gray-800 font-[400]">70 Sampson Road North</p>
            <p className="text-gray-800 font-[400]">Birmingham</p>
            <p className="text-gray-800 font-[400]">West Midlands</p>
            <p className="text-gray-800 font-[400]">B11 1BG</p>
            <p className="text-gray-800 font-[400]">☎ 0121 772 7724</p>
            <p className="text-gray-800 font-[400]">☎ 0784 949 4982</p>
          </div>
        </div>
      </div>
      <InfinteCarouselSlider />
    </div>
  );
};

export const InfinteCarouselSlider = ({ items }) => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="!absolute !right-4 sm:!right-6 md:!right-8 shadow-2xl !top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-1 sm:p-2 rounded-full hover:brightness-95 transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="!absolute !left-4 sm:!left-6 md:!left-8 !top-1/2 shadow-2xl -translate-y-1/2 z-10 bg-primary text-white p-1 sm:p-2 rounded-full  transition-all hover:brightness-95 cursor-pointer duration-300"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    );
  };
  // Slick settings for the carousel
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1, // Show 1 card on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Sample card data
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card description.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card description.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card description.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="carousel-container my-4 relative">
      <Slider {...settings}>
        {[...cards, ...cards].map((card) => (
          <CarCard car={card} key={card.id} />
        ))}
      </Slider>
    </div>
  );
};

export default OurTimings;
