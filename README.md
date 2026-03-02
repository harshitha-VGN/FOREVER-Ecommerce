# 🛍️ FOREVER Ecommerce – Full Stack MERN Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**FOREVER** is a premium, fully-functional e-commerce solution built using the **MERN Stack**. It features a dynamic user frontend, a comprehensive admin dashboard, and secure payment integrations.

---

## 🚀 Key Features

### 👤 User Side
- **Responsive UI:** Elegant shopping experience across mobile, tablet, and desktop.
- **Product Discovery:** Advanced filtering by category, sub-category, and price sorting.
- **Cart System:** Persistent shopping cart with real-time quantity updates.
- **Secure Checkout:** Integration with **Stripe** and **Razorpay** for online payments + Cash on Delivery (COD).
- **Order History:** Users can track order status and view past purchases.

### 🛠️ Admin Dashboard
- **Inventory Management:** Full CRUD operations to add, edit, and remove products.
- **Order Control:** Manage customer orders, update delivery statuses, and track sales.
- **Cloud Media:** Integrated with **Cloudinary** for high-performance image hosting.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, React Router DOM, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Authentication:** JSON Web Tokens (JWT) & Bcrypt
- **Payments:** Stripe & Razorpay
- **Image Storage:** Cloudinary

---

## 📂 Project Structure

```text
FOREVER-Ecommerce/
├── frontend/           # React application (Vite)
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Home, Collection, Cart, Orders, etc.
│   │   └── context/    # Shop Context for state management
├── admin/              # Admin Panel (React)
│   └── src/
│       ├── pages/      # Add Items, List Items, Orders
├── backend/            # Node/Express API
│   ├── controllers/    # Request logic
│   ├── models/         # MongoDB Schemas
│   ├── routes/         # API Endpoints
│   └── middleware/     # Auth & Admin verification
└── README.md

⚙️ Installation & Setup

1. Clone the repository

git clone [https://github.com/harshitha-VGN/FOREVER-Ecommerce.git](https://github.com/harshitha-VGN/FOREVER-Ecommerce.git)
cd FOREVER-Ecommerce

2. Configure Environment Variables

Create a .env file in the backend folder:

MONGODB_URI=your_mongodb_uri
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET_KEY=your_secret
CLOUDINARY_NAME=your_name
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
RAZORPAY_KEY_ID=your_razorpay_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin_password

3. Install Dependencies & Run

For Backend:

cd backend
npm install
npm start

For Frontend:

cd frontend
npm install
npm run dev

For Admin Panel:

cd admin
npm install
npm run dev

🤝 Contributing

Contributions are welcome!

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

Developed with ❤️ by Harshitha
