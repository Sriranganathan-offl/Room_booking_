import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/listing1-1.jpg"
import { images as test } from "../assets/images";

export default function ListingCard({ listing }) {
  // listing must come from props
  if (!listing) return null;

  const firstImage = listing.images?.[0];


  return (
    <article className="card">
      <Link to={`/listing/${listing.id || listing._id}`} className="card-link">
        <div className="card-image">
          <img src={test["listing1-1"]} alt={listing.name} />
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
