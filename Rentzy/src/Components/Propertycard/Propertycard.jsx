import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Propertycard.css";

const Propertycard = ({
  id,
  title,
  location,
  rent,
  beds,
  baths,
  area,
  image,
}) => {
  const navigate = useNavigate();

  const [isSaved, setIsSaved] = useState(() => {
    const savedProperties =
      JSON.parse(localStorage.getItem("savedProperties")) || [];

    return savedProperties.includes(id);
  });

  const toggleSave = () => {
    const savedProperties =
      JSON.parse(localStorage.getItem("savedProperties")) || [];

    if (savedProperties.includes(id)) {
      const updatedProperties = savedProperties.filter(
        (propertyId) => propertyId !== id
      );

      localStorage.setItem(
        "savedProperties",
        JSON.stringify(updatedProperties)
      );
      window.dispatchEvent(new Event("savedPropertiesUpdated"));

      setIsSaved(false);
    } else {
      savedProperties.push(id);

      localStorage.setItem(
        "savedProperties",
        JSON.stringify(savedProperties)
      );
window.dispatchEvent(new Event("savedPropertiesUpdated"));
      setIsSaved(true);
    }
  };

  return (
    <div className="property-card">

      <div className="property-image">
        <img src={image} alt={title} />
      </div>

      <div className="property-info">

        <h3>{title}</h3>

        <p className="property-location">
          📍 {location}
        </p>

        <div className="property-details">
          <span>🛏️ {beds} Beds</span>
          <span>🚿 {baths} Baths</span>
          <span>📐 {area} sqft</span>
        </div>

        <div className="property-bottom">

          <div>
            <strong>₹{rent}</strong>
            <span>/month</span>
          </div>

          <div className="property-actions">

            <button
              className={`save-btn ${isSaved ? "saved" : ""}`}
              onClick={toggleSave}
            >
              {isSaved ? "❤️" : "🤍"}
            </button>

            <button
              className="details-btn"
              onClick={() =>
                navigate(`/property/${id}`)
              }
            >
              View Details
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Propertycard;