import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">RoomBooking</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/bookings">My Bookings</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
