# 🏠 Rentzyy – Find. Rent. Live.

Rentzyy is a modern rental property platform built with React.js.

It helps tenants discover rental properties, apply for properties, track application status, save favorites, and receive important announcements.

Owners can manage rental properties, view tenant applications, accept or reject applications, and publish announcements.

## 🚀 Features

### 👤 Tenant

* Tenant Signup & Login
* Browse rental properties
* Search by location
* Filter by property type
* Filter by maximum rent
* View property details
* Contact owner
* Apply for properties
* Track application status
* Save favorite properties
* Receive announcements
* Mark notifications as read

### 🏢 Owner

* Owner Signup & Login
* Owner Dashboard
* Add rental properties
* Manage properties
* View tenant applications
* Accept or Reject applications
* Publish announcements
* Delete announcements
* View dashboard statistics

## 🔐 Authentication

* Tenant and Owner role-based login
* Protected routes
* Role-based dashboard access
* LocalStorage-based authentication

## 🛠️ Tech Stack

* React.js
* JavaScript
* HTML5
* CSS3
* React Router
* LocalStorage
* Vite
* Git & GitHub

## 📂 Project Structure

```text
Rentzyy/
│
├── public/
│
├── src/
│   ├── Components/
│   │   ├── Navbar/
│   │   ├── Propertycard/
│   │   └── Searchbar/
│   │
│   ├── Data/
│   │   └── Data.jsx
│   │
│   ├── Pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Signup/
│   │   ├── Dashboard/
│   │   ├── Properties/
│   │   ├── PropertiesDetails/
│   │   ├── MyApplications/
│   │   └── OwnerDashboard/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project folder:

```bash
cd Rentzyy
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 🔄 Application Flow

### Tenant Flow

```text
Signup
   ↓
Login
   ↓
Browse Properties
   ↓
View Property Details
   ↓
Apply for Property
   ↓
My Applications
   ↓
Pending / Accepted / Rejected
```

### Owner Flow

```text
Signup
   ↓
Login
   ↓
Owner Dashboard
   ↓
Manage Properties
   ↓
View Applications
   ↓
Accept / Reject
   ↓
Publish Announcements
```

## 💾 Current Data Storage

The current frontend MVP uses LocalStorage for:

* User authentication
* Properties
* Applications
* Favorites
* Announcements
* Notifications

A backend and database will be integrated in a future version.

## 🔮 Future Improvements

* Backend API integration
* Database integration
* Secure authentication
* Real-time notifications
* Online rent payment
* Tenant document verification
* Police verification system
* Rent payment history
* Late payment penalties
* Cloud image storage
* Advanced property search
* Deployment

## 👩‍💻 Developer

**Aditi**

Built & Designed with ❤️ using React.js.

### Rentzyy

**Find. Rent. Live.**
