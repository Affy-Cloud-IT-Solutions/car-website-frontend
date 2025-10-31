// src/layouts/PublicLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { ImageCarousel } from "../home/Carousel";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex-col">
      <Navbar />
      <ImageCarousel />
      <main className="max-w-7xl mx-auto p-2 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
