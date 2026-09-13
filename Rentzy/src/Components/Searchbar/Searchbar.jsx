import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar">

      <div className="search-item">
        <span>📍</span>

        <div>
          <small>Location</small>
          <p>Bangalore</p>
        </div>
      </div>

      <div className="search-item">
        <span>🏠</span>

        <div>
          <small>Property Type</small>
          <p>Apartment</p>
        </div>
      </div>

      <div className="search-item">
        <span>₹</span>

        <div>
          <small>Max Rent</small>
          <p>₹30,000</p>
        </div>
      </div>

      <button className="search-btn">
        Search 🔍
      </button>

    </div>
  );
};

export default Searchbar;
