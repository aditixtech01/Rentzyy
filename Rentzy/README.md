 🏠 Rentzyy – Find. Rent. Live.

Rentzyy is a modern rental property platform built with git statusReact.js.

It provides a simple platform where tenants can discover rental properties, apply for properties, track application status, save favorites, and receive important announcements.

Owners can manage rental properties, view tenant applications, accept or reject applications, and publish announcements.

> 🚧 Project Status:Frontend MVP completed. Backend integration is planned for future versions.

---

 ✨ Features

👤 Tenant

* Tenant Signup & Login
* Browse rental properties
* Search properties by location
* Filter by property type
* Filter by maximum rent
* View detailed property information
* Contact property owner
* Apply for rental properties
* Track application status
* Save favorite properties
* Receive announcements
* Mark notifications as read

 🏢 Owner

* Owner Signup & Login
* Owner Dashboard
* Add rental properties
* Manage properties
* View tenant applications
* Accept or Reject applications
* Publish announcements
* Delete announcements
* View dashboard statistics

---
🔐 Authentication & Access Control

* Tenant and Owner role-based authentication
* Protected routes
* Role-based dashboard access
* LocalStorage-based authentication
* Separate Tenant and Owner workflows

 🛠️ Tech Stack

| Technology   | Usage                       |
| ------------ | --------------------------- |
| React.js     | Frontend development        |
| JavaScript   | Application logic           |
| HTML5        | Structure                   |
| CSS3         | Styling & responsive design |
| React Router | Page navigation & routing   |
| LocalStorage | Frontend data persistence   |
| Vite         | Development & build tool    |
| Git & GitHub | Version control             |

---

 📂 Project Structure


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


---

 🚀 Installation & Setup

 1. Clone the repository

bash
git clone https://github.com/aditixtech01/Rentzyy.git


 2. Enter the project folder

bash
cd Rentzyy


 3. Install dependencies

bash
npm install


 4. Start the development server

bash
npm run dev


Open the local URL provided by Vite in your browser.

---

🔄 Application Flow
👤 Tenant Flow


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

 🏢 Owner Flow


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


💾 Current Data Storage

The current frontend MVP uses LocalStorage for:

* User authentication
* Properties
* Applications
* Favorites
* Announcements
* Notifications

A backend API and database will be integrated in a future version.

---

🔮 Future Improvements

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
* Property owner profiles
* User reviews and ratings
* Production deployment

---

👩‍💻 Developer

Aditi

Built & Designed with ❤️ using React.js.

---

 🏠 Rentzyy
Find. Rent. Live.

A modern rental platform designed to make finding and managing rental properties easier.
