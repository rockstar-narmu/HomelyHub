# 🏨 Homely Hub – Hotel Booking Web App (MERN Stack)

**Homely Hub** is a fully responsive hotel booking platform built using the **MERN Stack**. Developed during the **Webstack Academy MERN Internship**, this project enables users to search, filter, book, and manage hotel stays seamlessly.

---

## 🚀 Features

- 🔐 **User Authentication**  
  Secure sign-up, login, and password reset via Mailtrap.

- 🏘️ **Hotel Listings**  
  Browse and filter hotels by city, amenities, price, and room type.

- 🗓️ **Booking System**  
  Book stays with date and guest selection, and pay securely using **Stripe**.

- 👤 **User Dashboard**  
  Manage personal details and upload avatars (stored in **Cloudinary**).

- 🏠 **List Accommodations**  
  Users can list new properties with full details and photo uploads.

- 📦 **Full-Stack Integration**  
  Real-time data handling with MongoDB, Node.js, and Express.

---

## 🛠️ Tech Stack

| Frontend  | Backend            | Database | Tools & APIs                |
|-----------|--------------------|----------|-----------------------------|
| React.js  | Node.js, Express.js| MongoDB  | Cloudinary, Mailtrap, Stripe|

---

## 📁 Folder Structure
```bash
Homely-Hub/
├── frontend/       # React app (UI & components)
├── backend/        # Express server (API routes & logic)
├── database/       # MongoDB schemas and seed data
├── .env            # Environment variables

```

---

## ⚙️ Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/homely-hub.git
cd homely-hub
```

### 2. Install Dependencies
#### Frontend

```bash
cd frontend
npm install
```

#### Backend
```bash
cd ../backend
npm install
```

### 3. Configure Environment Variables
Create a **`.env`** file inside the **`backend/`** directory:
```bash
MONGO_URI=your_mongo_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 2. Start the Application
#### Frontend

```bash
cd frontend
npm start
```

#### Backend
```bash
cd ../backend
npm start
```

---

## 🎓 Internship Experience
This project was developed as part of a 1-month MERN Stack Internship at **Webstack Academy**. It helped reinforce core full-stack concepts and provided hands-on experience in building a real-world application.
