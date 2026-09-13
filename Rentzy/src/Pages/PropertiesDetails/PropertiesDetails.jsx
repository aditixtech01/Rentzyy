
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../Data/Data";
import "./PropertiesDetails.css";

const PropertiesDetails = () => {
  const { id } = useParams();

  const savedProperties =
    JSON.parse(localStorage.getItem("properties")) || [];

  const allProperties = [...data, ...savedProperties];

  const property = allProperties.find(
    (item) => String(item.id) === String(id)
  );

  const [showForm, setShowForm] = useState(false);

  const [message, setMessage] = useState("");

  if (!property) {
    return (
      <div className="property-not-found">

        <h2>Property Not Found</h2>

        <Link to="/Properties">
          Back to Properties
        </Link>

      </div>
    );
  }

  const handleContactOwner = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Please enter a message");
      return;
    }

    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const newApplication = {
      id: Date.now(),
      propertyId: property.id,
      propertyTitle: property.title,
      location: property.location,
      message: message,
      status: "Pending",
    };

    applications.push(newApplication);

    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );

    alert("Application sent successfully!");

    setMessage("");
    setShowForm(false);
  };

  return (
    <div className="property-details-page">

      <div className="details-image-container">

        <img
          src={property.image}
          alt={property.title}
          className="details-image"
        />

      </div>


      <div className="details-content">

        <h1>{property.title}</h1>

        <p className="details-location">
          📍 {property.location}
        </p>

        <h2>
          ₹{property.rent}/month
        </h2>

        <div className="details-features">

          <span>🛏️ {property.beds} Beds</span>

          <span>🚿 {property.baths} Baths</span>

          <span>📐 {property.area} sqft</span>

          <span>🏠 {property.type}</span>

        </div>

        <button
          className="contact-btn"
          onClick={() => setShowForm(true)}
        >
          Contact Owner
        </button>

      </div>


      {/* Contact Form */}

      {showForm && (

        <div className="contact-form-overlay">

          <div className="contact-form">

            <button
              className="close-form"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <h2>
              Contact Owner
            </h2>

            <p>
              Send a message regarding this property.
            </p>

            <form onSubmit={handleContactOwner}>

              <textarea
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                className="send-message-btn"
              >
                Send Application
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default PropertiesDetails;

