import { useState, useEffect } from "react";

export function ImageCarousel() {
  const images = [
    "https://www.gmcmotors.co.uk/images/mediacache/img-9_maxw-1024.jpg",
    "https://www.gmcmotors.co.uk/images/mediacache/img-10_maxw-1024.jpg",
    "https://www.gmcmotors.co.uk/images/mediacache/img-11_maxw-1024.jpg",
    "https://www.gmcmotors.co.uk/images/mediacache/img-12_maxw-1024.jpg",
    "https://www.gmcmotors.co.uk/images/mediacache/img-13_maxw-1024.jpg",
    "https://www.gmcmotors.co.uk/images/mediacache/img-14_maxw-1024.jpg",
    "https://www.gmcmotors.co.uk/images/mediacache/img-15_maxw-1024.jpg",
    "https://www.gmcmotors.co.uk/images/mediacache/img-16_maxw-1024.jpg",
    "https://www.gmcmotors.co.uk/images/mediacache/img-17_maxw-1024.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full flex flex-col overflow-hidden ">
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full max-h-[400px] object-cover min-h-[200px]  transition-all duration-700 ease-in-out"
        />
        {/* Optional caption overlay */}
        {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 text-white text-sm">
          Slide {currentIndex + 1} of {images.length}
        </div> */}
      </div>
    </div>
  );
}
