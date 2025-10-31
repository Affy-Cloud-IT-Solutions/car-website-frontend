import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card"; // Adjust path based on your shadcn setup
import { ImageCarousel } from "@/components/home/Carousel";
import { motion } from "motion/react";

const LocationSection = () => {
  return (
    <div>
      <div className="w-full pt-8 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Our Location
        </h2>
      </div>
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-white to-gray-50">
        {/* Map Section */}
        <motion.div
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/path-to-your-map-image.jpg" // Replace with the path to the uploaded image or a map API URL
            alt="Map of GMC Motors Birmingham"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Title Section */}

        {/* Address and Phone Section */}
        <motion.div
          className="w-full md:w-1/2 rounded-xl bg-white p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Address & Phone Nos.
          </h3>
          <div className="space-y-3">
            <p className="text-xl font-semibold text-gray-700">
              GMC Motors Birmingham
            </p>
            <p className="text-xl font-semibold text-gray-700">
              70 Sampson Road North
            </p>
            <p className="text-xl font-semibold text-gray-700">Birmingham</p>
            <p className="text-xl font-semibold text-gray-700">West Midlands</p>
            <p className="text-xl font-semibold text-gray-700">B11 1BG</p>
            <p className="text-xl font-semibold text-gray-700 flex items-center gap-2">
              ☎ <span>0121 772 7704</span>
            </p>
            <p className="text-xl font-semibold text-gray-700">or</p>
            <p className="text-xl font-semibold text-gray-700 flex items-center gap-2">
              ☎ <span>0784 949 4962</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationSection;
