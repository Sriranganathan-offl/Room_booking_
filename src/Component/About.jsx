import "../index.css";
import { FaHotel, FaThumbsUp, FaHeadset, FaMapMarkedAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About StayNest</h1>
        <p>Your trusted partner for comfortable, affordable and reliable stays.</p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          StayNest is a modern hotel booking platform designed to make travel easy, enjoyable, and stress-free. 
          We bring you verified hotels, seamless booking, and the best stay experience at affordable prices.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <FaHotel className="feature-icon" />
          <h3>Verified Hotels</h3>
          <p>Only quality-checked and reliable hotels are listed to ensure a peaceful stay.</p>
        </div>

        <div className="feature-card">
          <FaThumbsUp className="feature-icon" />
          <h3>Best Pricing</h3>
          <p>Budget-friendly options and exclusive deals to save more on every booking.</p>
        </div>

        <div className="feature-card">
          <FaMapMarkedAlt className="feature-icon" />
          <h3>Wide Coverage</h3>
          <p>Find your perfect stay across multiple cities with thousands of options.</p>
        </div>

        <div className="feature-card">
          <FaHeadset className="feature-icon" />
          <h3>24/7 Support</h3>
          <p>Our team is always here to help — anytime, anywhere.</p>
        </div>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          We aim to redefine the hotel booking experience by combining technology, comfort, and trust. 
          With StayNest, every journey feels like home.
        </p>
      </div>
    </div>
  );
};

export default About;
