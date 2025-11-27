import { Link } from "react-router-dom";
import { FaInfoCircle, FaUser } from "react-icons/fa";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">StayNest</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>

        {/* About Icon */}
        <li>
          <Link to="/about" className="about-icon">
            <FaInfoCircle size={20} />
          </Link>
        </li>

        {/* Single Account Button */}
        <li>
          <Link to="/account" className="account-btn">
            <FaUser size={18} /> Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
