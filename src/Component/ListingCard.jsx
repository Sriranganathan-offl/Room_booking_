import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.jpg"

export default function ListingCard({ listing }) {
  return (
    <article className="card">
      <Link to={`/listing/${listing.id}`} className="card-link">
        <div className="card-image">
          <img
            src={`/assets/${listing.images?.[0] ?? "placeholder.jpg"}`}
            alt={listing.name}
            onError={(e) => { e.target.src = image1; }}
          />
        </div>
        <div className="card-body">
          <h3>{listing.name}</h3>
          <p className="muted">Price: ${listing.price} · Guests: {listing.maxGuests}</p>
          <p className="rating">⭐ {listing.rating ?? "N/A"}</p>
        </div>
      </Link>
    </article>
  );
}
