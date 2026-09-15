import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("Tenant");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Check empty fields
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // Get registered user
    const savedUser =
      JSON.parse(localStorage.getItem("user"));

    // No account
    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    // Check email and password
    if (
      email !== savedUser.email ||
      password !== savedUser.password
    ) {
      alert("Invalid email or password");
      return;
    }

    // Check selected role
    if (role !== savedUser.role) {
      alert(`Please login as ${savedUser.role}`);
      return;
    }

    // Save login information
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", savedUser.role);

    alert("Login successful!");

    // Tenant → My Applications
    if (savedUser.role === "Tenant") {
      navigate("/MyApplications");
    }

    // Owner → Owner Dashboard
    else if (savedUser.role === "Owner") {
      navigate("/OwnerDashboard");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>
          Login to continue to Rentzyy
        </p>

        {/* Role Selection */}
        <div className="role-selection">

          <button
            type="button"
            className={
              role === "Tenant"
                ? "active"
                : ""
            }
            onClick={() => setRole("Tenant")}
          >
            Tenant
          </button>

          <button
            type="button"
            className={
              role === "Owner"
                ? "active"
                : ""
            }
            onClick={() => setRole("Owner")}
          >
            Owner
          </button>

        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          {/* Password */}
          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>

          {/* Login Button */}
          <button
            className="login-btn"
            type="submit"
          >
            Login
          </button>

        </form>

        {/* Signup */}
        <p className="signup-text">

          Don't have an account?

          <Link to="/Signup">
            {" "}Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;