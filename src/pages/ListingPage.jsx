import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ListingPage.css";

const listingsData = [
  {
    id: 1,
    name: "Cozy Apartment in London",
    description:
      "This beautiful and spacious apartment is located in the heart of London...",
    locationId: 1,
    images: [
      "listing1-1.jpg",
      "listing1-2.jpg",
      "listing1-3.jpg",
      "listing1-4.jpg",
      "listing1-5.jpg",
      "listing1-6.jpg",
      "listing1-7.jpg",
    ],
    rating: 4.5,
    price: 100,
    maxGuests: 4,
  },
  {
    id: 2,
    name: "Charming Studio in Paris",
    description: "This charming studio is located in the heart of Paris...",
    locationId: 2,
    images: [
      "listing2-1.jpg",
      "listing2-2.jpg",
      "listing2-3.jpg",
      "listing2-4.jpg",
      "listing2-5.jpg",
      "listing2-6.jpg",
      "listing2-7.jpg",
    ],
    rating: 4.8,
    price: 120,
    maxGuests: 2,
  },
  {
    id: 3,
    name: "Spacious House in London",
    description: "This spacious house is located near metro station...",
    locationId: 1,
    images: [
      "listing3-1.jpg",
      "listing3-2.jpg",
      "listing3-3.jpg",
      "listing3-4.jpg",
      "listing3-5.jpg",
      "listing3-6.jpg",
      "listing3-7.jpg",
    ],
    rating: 4.2,
    price: 150,
    maxGuests: 6,
  },
  {
    id: 4,
    name: "Stylish Loft in Paris",
    description: "This stylish loft is located near major attractions...",
    locationId: 2,
    images: [
      "listing4-1.jpg",
      "listing4-2.jpg",
      "listing4-3.jpg",
      "listing4-4.jpg",
      "listing4-5.jpg",
      "listing4-6.jpg",
      "listing4-7.jpg",
    ],
    rating: 4.1,
    price: 80,
    maxGuests: 8,
  },
  {
    id: 5,
    name: "Modern Apartment in London",
    description: "A modern apartment near restaurants and museums...",
    locationId: 1,
    images: [
      "listing5-1.jpg",
      "listing5-2.jpg",
      "listing5-3.jpg",
      "listing5-4.jpg",
      "listing5-5.jpg",
      "listing5-6.jpg",
      "listing5-7.jpg",
    ],
    rating: 3.8,
    price: 90,
    maxGuests: 4,
  },
  {
    id: 6,
    name: "Cozy Cottage in Paris",
    description: "A cozy cottage near museums and city hotspots...",
    locationId: 2,
    images: [
      "listing6-1.jpg",
      "listing6-2.jpg",
      "listing6-3.jpg",
      "listing6-4.jpg",
      "listing6-5.jpg",
      "listing6-6.jpg",
      "listing6-7.jpg",
    ],
    rating: 4.3,
    price: 110,
    maxGuests: 16,
  },
  {
    id: 7,
    name: "Luxury Villa in London",
    description: "This beautiful villa has modern amenities...",
    locationId: 1,
    images: [
      "listing7-1.jpg",
      "listing7-2.jpg",
      "listing7-3.jpg",
      "listing7-4.jpg",
      "listing7-5.jpg",
      "listing7-6.jpg",
      "listing7-7.jpg",
    ],
    rating: 4.7,
    price: 100,
    maxGuests: 20,
  },
  {
    id: 8,
    name: "Charming Houseboat in Paris",
    description: "A unique houseboat stay in Paris...",
    locationId: 2,
    images: [
      "listing8-1.jpg",
      "listing8-2.jpg",
      "listing8-3.jpg",
      "listing8-4.jpg",
      "listing8-5.jpg",
      "listing8-6.jpg",
      "listing8-7.jpg",
    ],
    rating: 4.6,
    price: 120,
    maxGuests: 10,
  },
  {
    id: 9,
    name: "Sunny Apartment in London",
    description: "A spacious sunny apartment with full kitchen...",
    locationId: 1,
    images: [
      "listing9-1.jpg",
      "listing9-2.jpg",
      "listing9-3.jpg",
      "listing9-4.jpg",
      "listing9-5.jpg",
      "listing9-6.jpg",
      "listing9-7.jpg",
    ],
    rating: 4.4,
    price: 150,
    maxGuests: 6,
  },
  {
    id: 10,
    name: "Cozy Studio in Paris",
    description: "A stylish and cozy studio...",
    locationId: 2,
    images: [
      "listing10-1.jpg",
      "listing10-2.jpg",
      "listing10-3.jpg",
      "listing10-4.jpg",
      "listing10-5.jpg",
      "listing10-6.jpg",
      "listing10-7.jpg",
    ],
    rating: 4.0,
    price: 80,
    maxGuests: 2,
  },
  {
    id: 11,
    name: "Spacious House in London",
    description: "A modern house with two bedrooms...",
    locationId: 1,
    images: [
      "listing11-1.jpg",
      "listing11-2.jpg",
      "listing11-3.jpg",
      "listing11-4.jpg",
      "listing11-5.jpg",
      "listing11-6.jpg",
      "listing11-7.jpg",
    ],
    rating: 4.9,
    price: 90,
    maxGuests: 4,
  },
  {
    id: 12,
    name: "Stylish Loft in Paris",
    description: "A cozy loft on 3rd floor...",
    locationId: 2,
    images: [
      "listing12-1.jpg",
      "listing12-2.jpg",
      "listing12-3.jpg",
      "listing12-4.jpg",
      "listing12-5.jpg",
      "listing12-6.jpg",
      "listing12-7.jpg",
    ],
    rating: 4.5,
    price: 110,
    maxGuests: 8,
  },
];

function saveBooking(booking) {
  const bs = JSON.parse(localStorage.getItem("bookings") || "[]");
  bs.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bs));
}

export default function ListingPage() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Load listing by ID
  useEffect(() => {
    const found = listingsData.find((l) => String(l.id) === String(id));
    setListing(found || null);
  }, [id]);

  if (!listing)
    return (
      <div>
        <p>Listing not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );

  // Build image URL
  function getImageUrl(file) {
    return `/src/assets/${file}`;
  }

  // Booking handler
  function handleBook(e) {
    e.preventDefault();
    setMessage("");

    if (!from || !to) return setMessage("Select both dates.");
    if (new Date(to) <= new Date(from))
      return setMessage("Check-out must be after check-in.");
    if (guests < 1 || guests > listing.maxGuests)
      return setMessage(`Guests must be between 1 and ${listing.maxGuests}`);

    saveBooking({
      id: `${listing.id}-${Date.now()}`,
      listingId: listing.id,
      listingName: listing.name,
      from,
      to,
      guests,
      pricePerNight: listing.price,
      createdAt: new Date().toISOString(),
    });

    setMessage("Booking saved! Redirecting...");
    setTimeout(() => navigate("/bookings"), 600);
  }

  return (
    <div className="listing-page">
      <Link to="/">← Back</Link>

      <h2>{listing.name}</h2>

      <div className="listing-grid">
        {/* Images */}
        <div className="images">
          {listing.images.map((img, i) => (
            <img key={i} src={getImageUrl(img)} alt="" />
          ))}
        </div>

        {/* Details */}
        <div className="details">
          <p>{listing.description}</p>

          <p>
            <strong>Price:</strong> ${listing.price} / night
          </p>
          <p>
            <strong>Max Guests:</strong> {listing.maxGuests}
          </p>

          <form onSubmit={handleBook} className="booking-form">
            <label>
              Check-in
              <input
                type="date"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </label>

            <label>
              Check-out
              <input
                type="date"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </label>

            <label>
              Guests
              <input
                type="number"
                min="1"
                max={listing.maxGuests}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              />
            </label>

            <button className="btn">Book Now</button>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
