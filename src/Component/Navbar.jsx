import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">StayNest</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
