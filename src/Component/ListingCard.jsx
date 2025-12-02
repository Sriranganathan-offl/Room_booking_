import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/images";

export default function ListingCard({ listing }) {
  if (!listing) return null;

  const firstImage = listing.images?.[0];
  // const mainImage = images[firstImage];

  return (
    <article className="card">
      <Link 
      to={`/listing/${listing.id || listing._id}`} className="card-link">
        <div className="card-image">
          <img src={listing.images?.[0]} alt={listing.name} />
        </div>

        <div className="card-body">
          <h3>{listing.name}</h3>
          <p className="muted">
            Price: ${listing.price} · Guests: {listing.maxGuests}
          </p>
          <p className="rating">⭐ {listing.rating ?? "N/A"}</p>
        </div>
      </Link>
    </article>
  );
}
