import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [userRole, setUserRole] = useState(
    localStorage.getItem("userRole")
  );

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");

    setIsLoggedIn(false);
    setUserRole(null);

    navigate("/Login");
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

        {isLoggedIn && userRole === "Tenant" && (
          <Link to="/MyApplications">
            My Applications
          </Link>
        )}

        {isLoggedIn && userRole === "Owner" && (
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