import React, { useEffect, useState } from "react";
import { API_BASE } from "../api";
import ListingCard from "../Component/ListingCard.jsx";

export default function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(API_BASE);
        const data = await res.json();
        setListings(data.listings || []);
      } catch (err) {
        console.error("Failed to load listings", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const locations = Array.from(new Set(listings.map(l => l.locationId))).sort();

  const filtered = listings.filter(l => {
    if (q && !l.name.toLowerCase().includes(q.toLowerCase()) && !l.description.toLowerCase().includes(q.toLowerCase())) return false;
    if (locationFilter !== "all" && Number(locationFilter) !== l.locationId) return false;
    if (minPrice && l.price < Number(minPrice)) return false;
    if (maxPrice && l.price > Number(maxPrice)) return false;
    return true;
  });

  return (
    <div>
      <section className="search">
        <input placeholder="Search listings..." value={q} onChange={e => setQ(e.target.value)} />
        <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
          <option value="all">All locations</option>
          {locations.map(loc => <option key={loc} value={loc}>Location {loc}</option>)}
        </select>
        <input type="number" placeholder="min price" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
        <input type="number" placeholder="max price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
      </section>

      <section>
        {loading ? <p>Loading listings...</p> : (
          filtered.length === 0 ? <p>No listings found.</p> : (
            <div className="grid">
              {filtered.map(listing => <ListingCard key={listing.id} listing={listing} />)}
            </div>
          )
        )}
      </section>
    </div>
  );
}
