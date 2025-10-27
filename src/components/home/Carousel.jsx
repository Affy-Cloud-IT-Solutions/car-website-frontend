import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Optional: only if you want default styles

export function ImageCarousel() {
  return (
    <Carousel
      animationHandler="fade"
      autoPlay
      interval={4000}
      infiniteLoop
      showThumbs={false}
      className=" mx-0"
    >
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1215"
          alt="Slide 1"
          className="w-full max-h-[400px] animation-duration-initial object-cover rounded-lg"
        />
        {/* <div className="absolute bottom-0 p-4 bg-black/50 text-white rounded-b-lg">
          <p className="text-lg font-semibold">Slide 1 Caption</p>
        </div> */}
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          alt="Slide 2"
          className="w-full max-h-[400px]  object-cover rounded-lg"
        />
        {/* <div className="absolute bottom-0 p-4 bg-black/50 text-white rounded-b-lg">
          <p className="text-lg font-semibold">Slide 2 Caption</p>
        </div> */}
      </div>
    </Carousel>
  );
}
