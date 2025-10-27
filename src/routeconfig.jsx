// src/RoutesConfig.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layouts/PublicLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import ProtectedRoute from "./components/protectedRoute";
import ContactGMC from "./pages/contactus";
import LocationSection from "./pages/our-location";
import OurTimings from "./pages/our-timings";
import DeliveryPolicy from "./pages/Delivery";
import WarrantyPolicy from "./pages/warranty-policy";
import UsedCars from "./pages/used-cars";

// Lazy load pages
const Home = lazy(() => import("./pages/public/Home"));
const Login = lazy(() => import("./pages/public/Login"));
const Dashboard = lazy(() => import("./pages/protected/Dashboard"));
const NotFound = lazy(() => import("./pages/public/not-found"));
const SoldGallery = lazy(() => import("./pages/sold-gallery"));

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600"></div>
  </div>
);

const RoutesConfig = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<ContactGMC />} />
          <Route path="/our-location" element={<LocationSection />} />
          <Route path="/opening-times" element={<OurTimings />} />
          <Route path="/delivery" element={<DeliveryPolicy />} />
          <Route path="/warranty" element={<WarrantyPolicy />} />
          <Route path="/sold-gallery" element={<SoldGallery />} />
          <Route path="/sold-vans" element={<SoldGallery />} />
          <Route path="/used-cars" element={<UsedCars />} />
        </Route>

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesConfig;
