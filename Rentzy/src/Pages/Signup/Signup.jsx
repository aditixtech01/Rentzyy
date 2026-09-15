import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("Tenant");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (name.length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      name,
      email,
      password,
      role,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    navigate("/Login");
  };

  return (
    <div className="signup-page">

      <div className="signup-card">

        <h1>Create Account</h1>

        <p>Join Rentzyy today</p>

        <div className="role-selection">

          <button
            type="button"
            className={role === "Tenant" ? "active" : ""}
            onClick={() => setRole("Tenant")}
          >
            Tenant
          </button>

          <button
            type="button"
            className={role === "Owner" ? "active" : ""}
            onClick={() => setRole("Owner")}
          >
            Owner
          </button>

        </div>

        <form onSubmit={handleSignup}>

          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            className="signup-btn"
            type="submit"
          >
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account?
          <Link to="/Login"> Login</Link>
        </p>

      </div>

    </div>
  );
};

export default Signup;