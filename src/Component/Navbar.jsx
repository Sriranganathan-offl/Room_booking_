import {Link} from "react-router-dom"
import "../index.css";

const Navbar=()=>{
    return(
        <nav className="navbar">
            <h2 className="logo">RoomBooking</h2>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;