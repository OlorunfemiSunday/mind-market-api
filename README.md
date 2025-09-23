# MINDMARKET Backend API

A comprehensive RESTful API backend for the **MINDMARKET platform** — connecting investors, skilled workers, hirers, and idea pitchers in a unified ecosystem.

---

## 📋 Table of Contents
- [Overview](#-overview)  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Prerequisites](#-prerequisites)  
- [Installation](#-installation)  
- [Configuration](#-configuration)  
- [API Documentation](#-api-documentation)  
- [Database Schema](#-database-schema)  
- [Authentication](#-authentication)  
- [Usage Examples](#-usage-examples)  
- [Testing](#-testing)  
- [Deployment](#-deployment)  
- [Project Structure](#-project-structure)  
- [Contributing](#-contributing)  
- [License](#-license)  

---

## 🌟 Overview
MINDMARKET Backend is a Node.js/Express.js API that powers a platform designed to connect four key user types:

- **Investors**: Individuals looking to invest in promising ideas and startups  
- **Skilled Workers**: Professionals offering their expertise and services  
- **Hirers**: Companies and individuals seeking to hire skilled professionals  
- **Idea Pitchers**: Entrepreneurs presenting their innovative ideas for funding  

The platform facilitates seamless interactions, profile management, and business connections across these user categories.

---

## ✨ Features

### Core Features
- **Multi-User Authentication**: JWT-based authentication for different user types  
- **Profile Management**: Comprehensive profile creation and management  
- **File Upload**: Support for profile pictures, portfolios, and documents  
- **Search & Filtering**: Advanced search capabilities across user types  
- **Real-time Notifications**: Email notifications for important events  
- **Data Validation**: Robust input validation and sanitization  
- **Error Handling**: Comprehensive error handling and logging  

### User-Specific Features

#### For Investors
- Investment range and preferences management  
- Industry interest tracking  
- Investment stage preferences  
- Risk tolerance settings  

#### For Skilled Workers
- Portfolio showcase  
- Skills and experience tracking  
- Hourly rate management  
- Work samples upload  

#### For Hirers
- Company profile management  
- Job posting capabilities  
- Budget range specifications  
- Skill requirement definitions  

#### For Idea Pitchers
- Idea presentation and documentation  
- Funding requirement specifications  
- Target market analysis  
- Supporting document uploads  

---

## 🛠 Tech Stack
- **Runtime**: Node.js (v14+)  
- **Framework**: Express.js  
- **Database**: MongoDB with Mongoose ODM  
- **Authentication**: JWT (JSON Web Tokens)  
- **File Upload**: Multer  
- **Validation**: Joi  
- **Email**: Nodemailer  
- **Security**: Helmet, CORS, bcryptjs  
- **Environment**: dotenv  
- **Development**: Nodemon  

---

## 📋 Prerequisites
- [Node.js](https://nodejs.org/) (v14.0.0 or higher)  
- [npm](https://www.npmjs.com/) (v6.0.0 or higher)  
- [MongoDB](https://www.mongodb.com/) (v4.0 or higher)  
- [Git](https://git-scm.com/)  

---

## 🚀 Installation
```bash
# Clone repository
git clone https://github.com/your-username/mindmarket-backend.git

# Navigate into project
cd mindmarket-backend

# Install dependencies
npm install
```

---

## ⚙️ Configuration
Create a `.env` file in the root with:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mindmarket
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.yourmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_password
```

---

## 📖 API Documentation
API documentation is available via **Postman collection** and **Swagger** (if enabled).  

Base URL (development):
```
http://localhost:5000/api/v1
```

---

## 🗄 Database Schema
MongoDB collections include:
- `users`  
- `investors`  
- `workers`  
- `hirers`  
- `ideas`  
- `notifications`  

---

## 🔑 Authentication
Authentication is implemented using **JWT**.  

- Register/Login → returns a JWT token  
- Use `Authorization: Bearer <token>` in headers  

---

## 💻 Usage Examples

### Register User
```http
POST /api/v1/auth/register
```

### Login User
```http
POST /api/v1/auth/login
```

### Get Profile
```http
GET /api/v1/users/profile
Authorization: Bearer <token>
```

---

## 🧪 Testing
Run tests using:
```bash
npm test
```

---

## 🚀 Deployment
To deploy to production:
```bash
npm run build
npm start
```

Ensure you set production `.env` variables.

---

## 📂 Project Structure
```
mindmarket-backend/
├── config/          # Database & environment configs
├── controllers/     # Request handlers
├── middleware/      # Authentication & validation
├── models/          # Mongoose schemas
├── routes/          # API endpoints
├── uploads/         # File uploads
├── utils/           # Helper functions
├── server.js        # App entry point
└── README.md
```

---

## 🤝 Developer
Olorunfemi Sunday for MindMarket Team

---

## 📜 License
This project is licensed under the **MIT License**.
