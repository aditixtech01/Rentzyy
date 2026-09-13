
import Propertycard from "../../Components/Propertycard/Propertycard";
import Searchbar from "../../Components/Searchbar/Searchbar";
import data from "../../Data/Data";
import "./Home.css";

const Home = () => {

  const savedProperties =
    JSON.parse(localStorage.getItem("properties")) || [];

  const allProperties = [...data, ...savedProperties];

  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Find Your Perfect
            <br />
            Rental Home
          </h1>

          <p>
            Discover apartments, houses and rooms
            that fit your lifestyle.
          </p>

          <Searchbar />

        </div>

      </section>


      {/* Featured Properties */}

      <section className="featured">

        <h2>Featured Properties</h2>

        <p>
          Explore some of our popular rental properties
        </p>

        <div className="property-container">

          {allProperties.map((property) => (

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

          ))}

        </div>
        

      </section>
    



{/* Footer */}

<footer className="footer">
  <p>© 2026 Rentzyy</p>
  <p>Built & Designed by Aditi</p>
</footer>



    </div>
  );
};

export default Home;

