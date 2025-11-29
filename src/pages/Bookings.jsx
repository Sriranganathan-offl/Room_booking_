import React, { useEffect, useState } from "react";
import "./Bookings.css";



export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const bs = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(bs);
  }, []);

  function cancel(id) {
    if (!confirm("Cancel this booking?")) return;
    const bs = bookings.filter(b => b.id !== id);
    localStorage.setItem("bookings", JSON.stringify(bs));
    setBookings(bs);
  }

  if (bookings.length === 0) {
    return (
      <div>
        <h2>My Bookings</h2>
        <p>No bookings yet. Book a place from the home page.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>My Bookings</h2>
      <div className="bookings-list">
        {bookings.map(b => (
          <div key={b.id} className="booking-card">
            <h3>{b.listingName}</h3>
            <p><strong>Dates:</strong> {b.from} → {b.to}</p>
            <p><strong>Guests:</strong> {b.guests}</p>
            <p><strong>Price/Night:</strong> ${b.pricePerNight}</p>
            <p className="muted">Booked at: {new Date(b.createdAt).toLocaleString()}</p>
            <button className="btn-outline" onClick={() => cancel(b.id)}>Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
}
