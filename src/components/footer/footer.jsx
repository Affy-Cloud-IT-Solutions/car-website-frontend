import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/used-cars", label: "Used Cars" },
    { path: "/sold-vans", label: "Sold Vans" },
    { path: "/sold-gallery", label: "Sold Gallery" },
    { path: "/part-exchange", label: "Part Exchange" },
    { path: "/warranty", label: "Warranty" },
    { path: "/delivery", label: "Delivery" },
    { path: "/reviews", label: "Reviews" },
    { path: "/opening-times", label: "Opening Times" },
    { path: "/our-location", label: "Our Location" },
    { path: "/contact-us", label: "Contact Us" },
    { path: "/terms-conditions", label: "Terms & Conditions" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-4 px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} className="hover:text-gray-300">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-center md:text-right text-xs">
          <p>&copy;2025 GMC Motors Birmingham trading as GMC Motors</p>
          <p>
            Registered Office: ENGLAND, Registered in England and Wales Company
            Registration Number 12699469
          </p>
          <p>
            All product names, logos, brands, trademarks and registered
            trademarks are property of their respective owners.
          </p>
        </div>
      </div>
      <div className="mt-4 text-center text-xs">
        <p>
          The Complete Motor Trade Website Solution from Car Dealer Website Ltd.
          1st Month FREE
        </p>
        <div className="flex justify-center items-center mt-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Car Dealer Website Logo"
            className="h-6 mr-2"
          />
          <span>CARDEALERWEBSITE.CO.UK</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
