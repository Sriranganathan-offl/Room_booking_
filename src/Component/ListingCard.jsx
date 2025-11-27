import React from "react";
import { Link } from "react-router-dom";


export default function ListingCard({ listing }) {
  return (
    <article className="card">
      <Link to={`/listing/${listing.id}`} className="card-link">
        <div className="card-image">
          <img src={`/assets/${listing.images?.[0] ?? "placeholder.jpg"}`} alt={listing.name} onError={(e)=>{ e.target.src = 'https://via.placeholder.com/400x250?text=No+Image'; }} />
        </div>
        <div className="card-body">
          <h3>{listing.name}</h3>
          <p className="muted">Price: ${listing.price} · Guests: {listing.maxGuests}</p>
          <p className="rating">⭐ {listing.rating}</p>
        </div>
      </Link>
    </article>
  );
}
