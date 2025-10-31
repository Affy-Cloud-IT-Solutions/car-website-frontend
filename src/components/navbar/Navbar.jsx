import React, { useState } from "react";
import {
  Phone,
  Mail,
  Instagram,
  PhoneCall,
  Hamburger,
  X,
  AlignJustify,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const carBrands = [
    { name: "Audi", logo: "🅰️" },
    { name: "BMW", logo: "🔵" },
    { name: "Chevrolet", logo: "⭐" },
    { name: "Citroen", logo: "⚡" },
    { name: "Fiat", logo: "🔴" },
    { name: "Ford", logo: "🔷" },
    { name: "Honda", logo: "🅷" },
    { name: "Hyundai", logo: "🔶" },
    { name: "Kia", logo: "🔴" },
    { name: "Land Rover", logo: "🟢" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Used Cars", path: "/used-cars", dropdown: carBrands },
    { name: "Sold Vans", path: "/sold-vans" },
    { name: "Sold Gallery", path: "/sold-gallery" },
    { name: "Part Exchange", path: "/part-exchange" },
    { name: "Warranty", path: "/warranty" },
    { name: "Delivery", path: "/delivery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Opening Times", path: "/opening-times" },
    { name: "Our Location", path: "/our-location" },
    { name: "Contact Us", path: "/contact-us" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for slide
  const variants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <div className="w-full bg-white shadow-b-md">
      <div className="mx-auto ">
        {/* Top Section with Logo and Contact */}
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto ">
          {/* Social Icons Left */}
          {/* <div className="flex gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white text-xl">
            📡
          </div>
          <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center text-white text-xl">
            💬
          </div>
        </div> */}
          <div className="md:flex space-x-2 hidden  md:space-x-4 mb-4 md:mb-0 md:mr-4">
            <a
              href="https://www.instagram.com"
              className="text-pink-500 hover:text-blue-500"
            >
              {/* <Instagram className="h-8 w-8" /> */}
              <img
                src="	https://www.gmcmotors.co.uk/img/social_icons/rss.png"
                className="md:h-16 md:w-16 h-8 w-8 rounded-lg"
              />
            </a>
            <a
              href="https://wa.me/447539353599"
              className="text-black hover:text-blue-500"
            >
              {/* <PhoneCall className="h-8 w-8" /> */}
              <img
                src="https://www.gmcmotors.co.uk/img/social_icons/whatsapp.png"
                className="md:h-16 md:w-16 h-8 w-8 rounded-lg"
              />
            </a>
          </div>

          {/* Logo Center */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.gmcmotors.co.uk/images/mediacache/img-20529_maxw-512.png"
              alt="GMC Motors Birmingham"
              className="h-8 md:h-[14vh]"
            />
          </div>

          {/* Contact Info Right */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 md:text-2xl text-lg  font-semibold">
              <Phone className="w-6 h-6" />
              <span>01217287724</span>
            </div>
            <div className="flex items-center gap-2 md:text-2xl text-lg  font-semibold">
              <Mail className="w-6 h-6" />
              <span>07849494982</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-gray-700 text-white relative hidden md:flex">
          <ul className="flex justify-center items-center max-w-7xl mx-auto">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="block px-4 py-4 text-sm font-medium hover:bg-gray-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full w-56 bg-gray-600 shadow-lg z-50 border-t-2 border-cyan-500">
                    {item.dropdown.map((brand, idx) => (
                      <Link
                        key={idx}
                        href={`${item.path}/${brand.name.toLowerCase()}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-500 transition-colors duration-200 border-b border-gray-500"
                      >
                        <span className="text-xl">{brand.logo}</span>
                        <span className="text-sm font-medium">
                          {brand.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex md:hidden items-center justify-between p-4 bg-gray-800 text-white relative z-[100]">
          <h3 className="text-lg font-semibold">Menu</h3>

          {/* Hamburger button */}
          <Button
            variant="ghost"
            className="text-white "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </Button>

          {/* Background Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black backdrop-blur-sm z-[90]"
                onClick={() => setIsOpen(false)}
              />
            )}
          </AnimatePresence>

          {/* Sliding Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="menu"
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-xl z-[100] flex flex-col"
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <h3 className="text-lg font-semibold">Menu</h3>
                  <Button
                    variant="ghost"
                    className="text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={24} />
                  </Button>
                </div>

                <ul className="flex flex-col w-full">
                  {navItems.map((item, index) => (
                    <li key={index} className="border-b border-gray-700">
                      <Link
                        to={item.path}
                        className="block px-4 py-4 text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
