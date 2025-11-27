import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { API_BASE } from "../api";
import image1 from "../assets/image1.jpg"

function saveBooking(booking) {
  const bs = JSON.parse(localStorage.getItem("bookings") || "[]");
  bs.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bs));
}

export default function ListingPage() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(API_BASE);
        const data = await res.json();
        const items = data.listings || data.data || data.hotels || data.items || [];
        const found = items.find(l => String(l.id) === String(id));
        setListing(found ?? null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!listing) return <div><p>Listing not found.</p><p><Link to="/">Back to home</Link></p></div>;

  function handleBook(e) {
    e.preventDefault();
    setMessage("");
    if (!from || !to) {
      setMessage("Please select check-in and check-out dates.");
      return;
    }
    if (new Date(to) <= new Date(from)) {
      setMessage("Check-out date must be after check-in.");
      return;
    }
    if (guests < 1 || guests > listing.maxGuests) {
      setMessage(`Guests must be between 1 and ${listing.maxGuests}`);
      return;
    }

    const booking = {
      id: `${listing.id}-${Date.now()}`,
      listingId: listing.id,
      listingName: listing.name,
      from,
      to,
      guests,
      pricePerNight: listing.price,
      createdAt: new Date().toISOString()
    };
    saveBooking(booking);
    setMessage("Booking saved! Redirecting to My Bookings...");
    setTimeout(() => navigate("/bookings"), 600);
  }

  return (
    <div className="listing-page">
      <Link to="/">← Back</Link>
      <h2>{listing.name}</h2>
      <div className="listing-grid">
        <div className="images">
          {(listing.images || []).map((img, i) => (
            <img
              key={i}
              src={`./assets/${img}`}
              alt={`${listing.name} ${i+1}`}
              onError={(e)=>{ e.target.src=image1; }}
            />
          ))}
        </div>
        <div className="details">
          <p>{listing.description}</p>
          <p><strong>Price:</strong> ${listing.price} / night</p>
          <p><strong>Max guests:</strong> {listing.maxGuests}</p>
          <form className="booking-form" onSubmit={handleBook}>
            <label>Check-in
              <input type="date" value={from} onChange={e=>setFrom(e.target.value)} />
            </label>
            <label>Check-out
              <input type="date" value={to} onChange={e=>setTo(e.target.value)} />
            </label>
            <label>Guests
              <input type="number" min="1" max={listing.maxGuests} value={guests} onChange={e=>setGuests(Number(e.target.value))} />
            </label>
            <button type="submit" className="btn">Book Now</button>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
