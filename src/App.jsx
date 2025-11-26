import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingPage />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </div>
  );
}
