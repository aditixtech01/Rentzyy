
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MyApplications.css";

const MyApplications = () => {
  const userRole = localStorage.getItem("userRole");

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(savedApplications);
  }, []);

  if (userRole !== "Tenant") {
    return (
      <div className="access-denied">

        <h2>Access Denied</h2>

        <p>
          My Applications is only available for tenants.
        </p>

        <Link to="/Dashboard">
          Go to Dashboard
        </Link>

      </div>
    );
  }

  return (
    <div className="my-applications">

      <div className="applications-header">

        <h1>My Applications</h1>

        <p>
          Track the status of your rental applications.
        </p>

      </div>


      {applications.length === 0 ? (

        <div className="no-applications">

          <h2>No Applications Yet</h2>

          <p>
            You haven't applied for any property yet.
          </p>

          <Link to="/Properties">
            Browse Properties
          </Link>

        </div>

      ) : (

        <div className="tenant-applications-list">

          {applications.map((application) => (

            <div
              className="tenant-application-card"
              key={application.id}
            >

              <div className="tenant-application-info">

                <h2>
                  {application.propertyTitle}
                </h2>

                <p>
                  📍 {application.location}
                </p>

                <p>
                  💬 {application.message}
                </p>

              </div>

              <div className="tenant-application-status">

                <span
                  className={`status-badge ${application.status.toLowerCase()}`}
                >
                  {application.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default MyApplications;

