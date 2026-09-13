
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/Data";
import "./OwnerDashboard.css";

const OwnerDashboard = () => {
  const userRole = localStorage.getItem("userRole");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [announcement, setAnnouncement] = useState("");

  const [announcements, setAnnouncements] = useState(
    JSON.parse(localStorage.getItem("announcements")) || []
  );

  const emptyProperty = {
    title: "",
    location: "",
    type: "",
    rent: "",
    beds: "",
    baths: "",
    area: "",
    image: "",
  };

  const [property, setProperty] = useState(emptyProperty);

  const savedProperties =
    JSON.parse(localStorage.getItem("properties")) || [];

  const allProperties = [...data, ...savedProperties];

  const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update Property
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !property.title ||
      !property.location ||
      !property.type ||
      !property.rent ||
      !property.beds ||
      !property.baths ||
      !property.area ||
      !property.image
    ) {
      alert("Please fill all fields");
      return;
    }

    let properties =
      JSON.parse(localStorage.getItem("properties")) || [];

    if (editingId) {
      properties = properties.map((item) =>
        item.id === editingId
          ? { ...property, id: editingId }
          : item
      );

      localStorage.setItem(
        "properties",
        JSON.stringify(properties)
      );

      alert("Property updated successfully!");
    } else {
      const newProperty = {
        ...property,
        id: Date.now(),
      };

      properties.push(newProperty);

      localStorage.setItem(
        "properties",
        JSON.stringify(properties)
      );

      alert("Property added successfully!");
    }

    setProperty(emptyProperty);
    setEditingId(null);
    setShowForm(false);

    window.location.reload();
  };

  // Edit Property
  const handleEdit = (item) => {
    setProperty({
      title: item.title,
      location: item.location,
      type: item.type || "",
      rent: item.rent,
      beds: item.beds,
      baths: item.baths,
      area: item.area,
      image: item.image,
    });

    setEditingId(item.id);
    setShowForm(true);
  };

  // Delete Property
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) {
      return;
    }

    const properties =
      JSON.parse(localStorage.getItem("properties")) || [];

    const updatedProperties = properties.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "properties",
      JSON.stringify(updatedProperties)
    );

    alert("Property deleted successfully!");

    window.location.reload();
  };

  // Accept Application
  const handleAccept = (id) => {
    const updatedApplications = applications.map(
      (application) =>
        application.id === id
          ? { ...application, status: "Accepted" }
          : application
    );

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    alert("Application accepted!");

    window.location.reload();
  };

  // Reject Application
  const handleReject = (id) => {
    const updatedApplications = applications.map(
      (application) =>
        application.id === id
          ? { ...application, status: "Rejected" }
          : application
    );

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    alert("Application rejected!");

    window.location.reload();
  };

  // Add Announcement
  const handleAnnouncement = (e) => {
    e.preventDefault();

    if (!announcement.trim()) {
      alert("Please write an announcement");
      return;
    }

    const newAnnouncement = {
      id: Date.now(),
      message: announcement,
      date: new Date().toLocaleDateString(),
    };

    const updatedAnnouncements = [
      ...announcements,
      newAnnouncement,
    ];

    localStorage.setItem(
      "announcements",
      JSON.stringify(updatedAnnouncements)
    );

    setAnnouncements(updatedAnnouncements);
    setAnnouncement("");

    alert("Announcement published successfully!");
  };

  // Delete Announcement
  const handleDeleteAnnouncement = (id) => {
    const updatedAnnouncements = announcements.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "announcements",
      JSON.stringify(updatedAnnouncements)
    );

    setAnnouncements(updatedAnnouncements);
  };

  // Access Protection
  if (userRole !== "Owner") {
    return (
      <div className="access-denied">
        <h2>Access Denied</h2>

        <p>
          This dashboard is only available for property owners.
        </p>

        <Link to="/Dashboard">
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="owner-dashboard">

      {/* Header */}

      <div className="owner-header">

        <div>
          <h1>Owner Dashboard</h1>

          <p>
            Manage your properties and rental activities.
          </p>
        </div>

        <button
          className="add-property-btn"
          onClick={() => {
            setProperty(emptyProperty);
            setEditingId(null);
            setShowForm(true);
          }}
        >
          + Add Property
        </button>

      </div>


      {/* Stats */}

      <div className="owner-stats">

        <div className="owner-stat-card">
          <span>🏠</span>

          <h3>Total Properties</h3>

          <strong>
            {allProperties.length}
          </strong>
        </div>


        <div className="owner-stat-card">
          <span>📩</span>

          <h3>Applications</h3>

          <strong>
            {applications.length}
          </strong>
        </div>


        <div className="owner-stat-card">
          <span>📢</span>

          <h3>Announcements</h3>

          <strong>
            {announcements.length}
          </strong>
        </div>

      </div>


      {/* Announcements */}

      <section className="announcements-section">

        <div className="announcements-header">

          <div>
            <h2>Announcements</h2>

            <p>
              Share important updates with your tenants.
            </p>
          </div>

        </div>


        <form
          className="announcement-form"
          onSubmit={handleAnnouncement}
        >

          <textarea
            placeholder="Write an announcement for tenants..."
            value={announcement}
            onChange={(e) =>
              setAnnouncement(e.target.value)
            }
          />

          <button
            type="submit"
            className="publish-announcement-btn"
          >
            📢 Publish Announcement
          </button>

        </form>


        {announcements.length === 0 ? (

          <div className="no-announcements">

            <span>📢</span>

            <h3>No Announcements Yet</h3>

            <p>
              Publish an announcement to notify your tenants.
            </p>

          </div>

        ) : (

          <div className="announcements-list">

            {announcements
              .slice()
              .reverse()
              .map((item) => (

                <div
                  className="announcement-card"
                  key={item.id}
                >

                  <div className="announcement-content">

                    <span className="announcement-icon">
                      📢
                    </span>

                    <div>

                      <p>
                        {item.message}
                      </p>

                      <small>
                        Published on {item.date}
                      </small>

                    </div>

                  </div>


                  <button
                    className="delete-announcement-btn"
                    onClick={() =>
                      handleDeleteAnnouncement(item.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              ))}

          </div>

        )}

      </section>


      {/* Properties */}

      <section className="owner-properties">

        <h2>My Properties</h2>

        <div className="owner-property-list">

          {allProperties.map((item) => (

            <div
              className="owner-property"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />


              <div className="owner-property-info">

                <h3>
                  {item.title}
                </h3>

                <p>
                  📍 {item.location}
                </p>

                <p>
                  🏠 {item.type || "Property"}
                </p>

                <strong>
                  ₹{item.rent}/month
                </strong>

              </div>


              <div className="property-actions">

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>


                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Applications */}

      <section className="applications-section">

        <h2>Applications</h2>

        {applications.length === 0 ? (

          <p className="no-applications">
            No applications received yet.
          </p>

        ) : (

          <div className="applications-list">

            {applications.map((application) => (

              <div
                className="application-card"
                key={application.id}
              >

                <div className="application-info">

                  <h3>
                    {application.propertyTitle}
                  </h3>

                  <p>
                    📍 {application.location}
                  </p>

                  <p>
                    💬 {application.message}
                  </p>

                  <span
                    className={`application-status ${application.status.toLowerCase()}`}
                  >
                    {application.status}
                  </span>

                </div>


                <div className="application-actions">

                  {application.status === "Pending" && (
                    <>

                      <button
                        className="accept-btn"
                        onClick={() =>
                          handleAccept(application.id)
                        }
                      >
                        Accept
                      </button>


                      <button
                        className="reject-btn"
                        onClick={() =>
                          handleReject(application.id)
                        }
                      >
                        Reject
                      </button>

                    </>
                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* Add / Edit Property Form */}

      {showForm && (

        <div className="property-form-overlay">

          <div className="property-form">

            <button
              className="close-form"
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
                setProperty(emptyProperty);
              }}
            >
              ✕
            </button>


            <h2>
              {editingId
                ? "Edit Property"
                : "Add New Property"}
            </h2>


            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="title"
                placeholder="Property Title"
                value={property.title}
                onChange={handleChange}
              />


              <input
                type="text"
                name="location"
                placeholder="Location"
                value={property.location}
                onChange={handleChange}
              />


              <select
                name="type"
                value={property.type}
                onChange={handleChange}
              >

                <option value="">
                  Select Property Type
                </option>

                <option value="Apartment">
                  Apartment
                </option>

                <option value="Flat">
                  Flat
                </option>

                <option value="House">
                  House
                </option>

              </select>


              <input
                type="number"
                name="rent"
                placeholder="Monthly Rent"
                value={property.rent}
                onChange={handleChange}
              />


              <input
                type="number"
                name="beds"
                placeholder="Number of Beds"
                value={property.beds}
                onChange={handleChange}
              />


              <input
                type="number"
                name="baths"
                placeholder="Number of Baths"
                value={property.baths}
                onChange={handleChange}
              />


              <input
                type="number"
                name="area"
                placeholder="Area (sqft)"
                value={property.area}
                onChange={handleChange}
              />


              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={property.image}
                onChange={handleChange}
              />


              <button
                type="submit"
                className="save-property-btn"
              >
                {editingId
                  ? "Update Property"
                  : "Add Property"}
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default OwnerDashboard;

