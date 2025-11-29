import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/images";


export default function ListingCard({ listing }) {
  if (!listing) return null;

  // Get first image or fallback
  const mainImage = images[listing.images?.[0]] || images.fallback;

  return (
    <article className="card">
      <Link to={`/listing/${listing.id || listing._id}`} className="card-link">
        <div className="card-image">
          <img
            src={mainImage}
            alt={listing.name}
            onError={(e) => {
              e.target.src = images.fallback;
            }}
          />
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
