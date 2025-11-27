import React from 'react'
import "./Home.css";
import Bookings from '../pages/Bookings';

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

      
          </section>
    </div>
          )
          }