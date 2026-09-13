
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Propertycard from "../../Components/Propertycard/Propertycard";
import data from "../../Data/Data";
import "./Dashboard.css";

const Dashboard = () => {
  const userRole = localStorage.getItem("userRole");

  const [savedIds, setSavedIds] = useState([]);
  const [applications, setApplications] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const loadSavedProperties = () => {
    const savedProperties =
      JSON.parse(localStorage.getItem("savedProperties")) || [];

    setSavedIds(savedProperties);
  };

  const loadApplications = () => {
    const savedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(savedApplications);
  };

  const loadAnnouncements = () => {
    const savedAnnouncements =
      JSON.parse(localStorage.getItem("announcements")) || [];

    setAnnouncements(savedAnnouncements);
  };

  useEffect(() => {
    loadSavedProperties();
    loadApplications();
    loadAnnouncements();

    window.addEventListener(
      "savedPropertiesUpdated",
      loadSavedProperties
    );

    return () => {
      window.removeEventListener(
        "savedPropertiesUpdated",
        loadSavedProperties
      );
    };
  }, []);

  const savedOwnerProperties =
    JSON.parse(localStorage.getItem("properties")) || [];

  const allProperties = [
    ...data,
    ...savedOwnerProperties
  ];

  const savedProperties = allProperties.filter(
    (property) =>
      savedIds.includes(property.id)
  );

  const pendingApplications =
    applications.filter(
      (application) =>
        application.status === "Pending"
    ).length;

  const acceptedApplications =
    applications.filter(
      (application) =>
        application.status === "Accepted"
    ).length;

  /* Mark notification as read */

  const markAsRead = (id) => {
    const updatedAnnouncements = announcements.map(
      (item) =>
        item.id === id
          ? { ...item, read: true }
          : item
    );

    setAnnouncements(updatedAnnouncements);

    localStorage.setItem(
      "announcements",
      JSON.stringify(updatedAnnouncements)
    );
  };

  const unreadCount = announcements.filter(
    (item) => !item.read
  ).length;

  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">
        <div>
          <h1>Welcome to Rentzyy</h1>

          <p>
            Manage your rental activities from here.
          </p>
        </div>
      </div>

      {/* Dashboard Cards */}

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <span>🏠</span>

          <h3>Saved Properties</h3>

          <strong>
            {savedProperties.length}
          </strong>

          <p>
            Properties you saved
          </p>
        </div>

        <div className="dashboard-card">
          <span>📩</span>

          <h3>Applications</h3>

          <strong>
            {applications.length}
          </strong>

          <p>
            Your rental applications
          </p>
        </div>

        <div className="dashboard-card">
          <span>❤️</span>

          <h3>Favorites</h3>

          <strong>
            {savedProperties.length}
          </strong>

          <p>
            Your favorite properties
          </p>
        </div>

      </div>

      {/* Tenant Notifications */}

      {userRole === "Tenant" && (
        <section className="dashboard-section notifications-section">

          <div className="notifications-header">

            <div>
              <h2>
                Notifications & Announcements
              </h2>

              <p>
                Important updates from property owners.
              </p>
            </div>

            <span className="notification-count">
              {unreadCount}
            </span>

          </div>

          {announcements.length === 0 ? (

            <div className="no-notifications">

              <span>🔔</span>

              <h3>
                No New Notifications
              </h3>

              <p>
                You don't have any announcements right now.
              </p>

            </div>

          ) : (

            <div className="notifications-list">

              {announcements
                .slice()
                .reverse()
                .map((item) => (

                  <div
                    className={`notification-card ${
                      item.read ? "read" : "unread"
                    }`}
                    key={item.id}
                  >

                    <div className="notification-icon">
                      📢
                    </div>

                    <div className="notification-content">

                      <div className="notification-title">
                        <h3>
                          Announcement
                        </h3>

                        {!item.read && (
                          <span className="unread-badge">
                            New
                          </span>
                        )}
                      </div>

                      <p>
                        {item.message}
                      </p>

                      <small>
                        Published on {item.date}
                      </small>

                      {!item.read && (
                        <button
                          className="mark-read-btn"
                          onClick={() =>
                            markAsRead(item.id)
                          }
                        >
                          Mark as Read
                        </button>
                      )}

                    </div>

                  </div>

                ))}

            </div>

          )}

        </section>
      )}

      {/* Application Summary */}

      {applications.length > 0 && (
        <section className="dashboard-section">

          <h2>
            Application Summary
          </h2>

          <div className="dashboard-cards">

            <div className="dashboard-card">
              <span>🟡</span>

              <h3>Pending</h3>

              <strong>
                {pendingApplications}
              </strong>

              <p>
                Applications waiting for response
              </p>
            </div>

            <div className="dashboard-card">
              <span>🟢</span>

              <h3>Accepted</h3>

              <strong>
                {acceptedApplications}
              </strong>

              <p>
                Applications accepted by owner
              </p>
            </div>

            <div className="dashboard-card">
              <span>📋</span>

              <h3>Total</h3>

              <strong>
                {applications.length}
              </strong>

              <p>
                Total applications submitted
              </p>
            </div>

          </div>

        </section>
      )}

      {/* Saved Properties */}

      <section className="dashboard-section">

        <h2>
          Saved Properties
        </h2>

        {savedProperties.length > 0 ? (

          <div className="saved-properties">

            {savedProperties.map((property) => (

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

        ) : (

          <div className="empty-dashboard">

            <span>🏡</span>

            <h3>
              No saved properties
            </h3>

            <p>
              Start exploring properties and save your favorites.
            </p>

            <Link
              to="/Properties"
              className="explore-btn"
            >
              Explore Properties
            </Link>

          </div>

        )}

      </section>

      {/* Applications Button */}

      {applications.length > 0 && (
        <div
          style={{
            textAlign: "center",
            marginTop: "30px"
          }}
        >

          <Link
            to="/MyApplications"
            className="explore-btn"
          >
            View My Applications
          </Link>

        </div>
      )}

    </div>
  );
};

export default Dashboard;


