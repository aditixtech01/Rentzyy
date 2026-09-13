
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Properties from "./Pages/Properties/Properties";
import PropertiesDetails from "./Pages/PropertiesDetails/PropertiesDetails";
import MyApplications from "./Pages/MyApplications/MyApplications";
import OwnerDashboard from "./Pages/OwnerDashboard/OwnerDashboard";

import Navbar from "./Components/Navbar/Navbar";


const ProtectedRoute = ({ children, allowedRole }) => {

  const userRole = localStorage.getItem("userRole");

  if (!userRole) {
    return <Navigate to="/Login" replace />;
  }

  if (allowedRole && userRole !== allowedRole) {
    return <Navigate to="/Dashboard" replace />;
  }

  return children;
};


function App() {

  return (
    <div>

      <Navbar />

      <Routes>

        {/* Public Pages */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/Login"
          element={<Login />}
        />

        <Route
          path="/Signup"
          element={<Signup />}
        />

        <Route
          path="/Properties"
          element={<Properties />}
        />

        <Route
          path="/property/:id"
          element={<PropertiesDetails />}
        />


        {/* Logged-in User */}

        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* Tenant Only */}

        <Route
          path="/MyApplications"
          element={
            <ProtectedRoute allowedRole="Tenant">
              <MyApplications />
            </ProtectedRoute>
          }
        />


        {/* Owner Only */}

        <Route
          path="/OwnerDashboard"
          element={
            <ProtectedRoute allowedRole="Owner">
              <OwnerDashboard />
            </ProtectedRoute>
          }
        />


        {/* Wrong URL */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </div>
  );
}

export default App;

