import React, { useEffect, useState } from "react";
import ListingCard from "../Component/ListingCard";
import "./Home.css";
import { API_BASE } from "../api";

export default function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API_BASE)
      .then((res) => res.json())
      .then((data) => {
        console.log("API FULL DATA:", data);
        const items = data.listings || data.data || data.hotels || data.items || [];
        if (Array.isArray(items)) {
          setListings(items);
        } else {
          setError("API response format not supported");
          console.error("Unknown API format:", data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    console.log("Search clicked:", search);

  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Stay</h1>
          <p>Best hotels at affordable prices. Hundreds of choices.</p>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search city, area or hotel name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="date" />
          <input type="date" />
          <button onClick={handleSearch}>Search</button>
        </div>
      </section>

      <section className="hotel-list">
        <h2>Popular Stays Near You</h2>

        {loading && <p>Loading hotels...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && (
          <div className="hotel-grid">
            {listings.map((item) => (
              <ListingCard key={item.id || item._id} listing={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
