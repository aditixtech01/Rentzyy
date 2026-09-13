
import { useState } from "react";
import "./Properties.css";
import Propertycard from "../../Components/Propertycard/Propertycard";
import data from "../../Data/Data";

const Properties = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [maxRent, setMaxRent] = useState("");

  // Data.jsx properties
  // + Owner dashboard se added properties
  const savedProperties =
    JSON.parse(localStorage.getItem("properties")) || [];

  const allProperties = [...data, ...savedProperties];

  const filteredData = allProperties.filter((property) => {

    const locationMatch = property.location
      .toLowerCase()
      .includes(search.toLowerCase());

    const typeMatch =
      type === "" || property.type === type;

    const rentMatch =
      maxRent === "" ||
      Number(String(property.rent).replace(",", "")) <=
        Number(maxRent);

    return locationMatch && typeMatch && rentMatch;
  });

  return (
    <div className="properties-page">

      <h1>Find Your Perfect Property</h1>

      <p>
        Explore homes and apartments available for rent.
      </p>

      <div className="filter-box">

        {/* Location Search */}

        <input
          type="text"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Property Type */}

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Flat">Flat</option>
          <option value="House">House</option>
        </select>

        {/* Maximum Rent */}

        <input
          type="number"
          placeholder="Maximum Rent"
          value={maxRent}
          onChange={(e) => setMaxRent(e.target.value)}
        />

      </div>

      {/* Properties */}

      <div className="properties-container">

        {filteredData.length > 0 ? (

          filteredData.map((property) => (

            <Propertycard
              key={property.id}
              id={property.id}
              title={property.title}
              location={property.location}
              rent={property.rent}
              beds={property.beds}
              baths={property.baths}
              area={property.area}
              image={property.image}
            />

          ))

        ) : (

          <p>No properties found.</p>

        )}

      </div>

    </div>
  );
};

export default Properties;

