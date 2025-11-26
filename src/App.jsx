import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import Bookings from "./pages/Bookings";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing/:id" element={<ListingPage />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </main>
      
    </div>
  );
}
