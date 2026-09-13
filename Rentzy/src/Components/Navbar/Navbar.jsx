import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");

    window.location.href = "/Login";
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">Rentzyy</Link>
      </div>

      <div className="navbar-links">

        <Link to="/">Home</Link>

        <Link to="/Properties">
          Properties
        </Link>

        <Link to="/Dashboard">
          Dashboard
        </Link>
        {localStorage.getItem("userRole") === "Tenant" && (
  <Link to="/MyApplications">
    My Applications
  </Link>
)}
        {localStorage.getItem("userRole") === "Owner" && (
  <Link to="/OwnerDashboard">
    Owner Dashboard
  </Link>
)}
        {isLoggedIn ? (
          <button
            className="navbar-login"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/Login"
            className="navbar-login"
          >
            Login
          </Link>
        )}

      </div>

    </nav>
  );
};

export default Navbar;