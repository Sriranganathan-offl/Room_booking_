import React from 'react'
import "./Home.css";

export default function Home() {
  return (
    <div>
        <section className="hero">
            <div className="hero-content">
                <h1>Find Your Perfect Stay</h1>
                <p>Best hotels at affordable prices. Hundreds of choices.</p>
            </div>
            <div className="search-box">
            <input type="text" placeholder="Search city, area or hotel name" />
            <input type="date" />
            <input type="date" />
            <button>Search</button>
          </div>
          </section>
          
          <section className="hotel-list">
        <h2>Popular Stays Near You</h2>

        <div className="hotels">

          <div className="hotel-card">
            <img src="https://picsum.photos/300/200?random=1" alt="" />
            <h3>StayNest Premium Rooms</h3>
            <p>Cozy rooms with AC, WiFi & Breakfast</p>
            <span>₹1499 / Night</span>
          </div>

          <div className="hotel-card">
            <img src="https://picsum.photos/300/200?random=2" alt="" />
            <h3>StayNest Luxury Suite</h3>
            <p>Top-class luxury & comfort</p>
            <span>₹2499 / Night</span>
          </div>

          <div className="hotel-card">
            <img src="https://picsum.photos/300/200?random=3" alt="" />
            <h3>StayNest Budget Rooms</h3>
            <p>Affordable stays, premium comfort</p>
            <span>₹999 / Night</span>
          </div>

        </div>
      
          </section>
    </div>
          )
          }