import React from "react";
import { Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageCarousel } from "../components/home/Carousel";

const ContactGMC = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation for hover effects

  return (
    <motion.div
      className="min-h-screen  px-4 sm:px-6 lg:px-8 "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ImageCarousel />
      <div className="max-w-7xl mx-auto py-12">
        <motion.div className="text-center mb-12" variants={childVariants}>
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            Contact GMC Motors
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={childVariants}
          >
            We're here to assist you with all your inquiries. Reach out today!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {/* Contact Info Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full"
            variants={childVariants}
            whileHover="hover"
            // variants={hoverVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center"
              variants={childVariants}
            >
              <MapPin className="w-8 h-8 mr-3 text-[#4C4F56]" />
              Address & Phone
            </motion.h2>

            <div className="flex flex-col gap-6 flex-1">
              <motion.div
                className="p-6 bg-gray-50 rounded-xl"
                variants={childVariants}
                whileHover={{
                  backgroundColor: "#f3f4f6",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.h3
                  className="text-xl font-semibold text-gray-800 mb-3"
                  variants={childVariants}
                >
                  GMC Motors Birmingham
                </motion.h3>
                <motion.div
                  className="space-y-2 text-gray-700 text-base"
                  variants={childVariants}
                >
                  <p>70 Sampson Road North</p>
                  <p>Birmingham, West Midlands</p>
                  <p className="font-semibold">B11 1BG</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="p-6 bg-gray-50 rounded-xl"
                variants={childVariants}
                whileHover={{
                  backgroundColor: "#f3f4f6",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div className="space-y-4" variants={childVariants}>
                  <motion.a
                    href="tel:01217287724"
                    className="flex items-center gap-3 text-gray-800 hover:text-[#4C4F56]"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <Phone className="w-6 h-6" />
                    <span className="font-semibold text-lg">0121 728 7724</span>
                  </motion.a>
                  <motion.p
                    className="text-center text-gray-600 font-medium"
                    variants={childVariants}
                  >
                    or
                  </motion.p>
                  <motion.a
                    href="tel:07849494982"
                    className="flex items-center gap-3 text-gray-800 hover:text-[#4C4F56]"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <Phone className="w-6 h-6" />
                    <span className="font-semibold text-lg">07849 494982</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map & Hours Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full"
            variants={childVariants}
            whileHover="hover"
            // variants={hoverVariants}
          >
            <motion.div
              className="h-64 bg-linear-to-br from-[#4C4F56] to-[#6B6F76] flex items-center justify-center relative group"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>
              <motion.div
                className="relative z-10 text-center text-white"
                variants={childVariants}
              >
                <motion.div
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                </motion.div>
                <p className="text-xl font-semibold">Find Us on the Map</p>
                <p className="text-sm mt-2 opacity-90">
                  70 Sampson Road North, Birmingham
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="p-8 flex flex-col flex-1"
              variants={childVariants}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-800 mb-4"
                variants={childVariants}
              >
                Business Hours
              </motion.h3>
              <motion.div
                className="space-y-3 text-gray-700 text-base"
                variants={containerVariants}
              >
                <motion.div
                  className="flex justify-between py-2 px-3 border-b border-gray-200 rounded"
                  variants={childVariants}
                  whileHover={{
                    backgroundColor: "#f3f4f6",
                    x: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="font-semibold">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </motion.div>
                <motion.div
                  className="flex justify-between py-2 px-3 border-b border-gray-200 rounded"
                  variants={childVariants}
                  whileHover={{
                    backgroundColor: "#f3f4f6",
                    x: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="font-semibold">Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </motion.div>
                <motion.div
                  className="flex justify-between py-2 px-3 rounded"
                  variants={childVariants}
                  whileHover={{
                    backgroundColor: "#f3f4f6",
                    x: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="font-semibold">Sunday</span>
                  <span className="text-red-600 font-semibold">Closed</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactGMC;
