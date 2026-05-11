<h1 align="center">
 🧠 Second Brain App
</h1>

<p align="center">
A full-stack <b>Second Brain Application</b> to store, organize, search, and manage personal notes/resources in one centralized place.
</p>

<p align="center">
Inspired by the concept of a <b>"Second Brain"</b> — an external system to capture ideas, knowledge, resources, and thoughts so they are always accessible.
</p>

---

## 🌍 Live Demo

<div align="center">

### 🚀 Frontend  
🔗 https://second-brain-self-ten.vercel.app

### ⚙️ Backend API  
🔗 https://secondbrain-wrez.onrender.com

### 📘 Swagger Docs  
🔗 https://secondbrain-wrez.onrender.com/api-docs

</div>

---

## 📸 Screenshots

<div align="center">

### Dashboard

<img width="900" alt="Dashboard" src="https://github.com/user-attachments/assets/f36c348d-846b-4d2d-a3ad-e51e23eb2e82" />

<br/>
<br/>

### Notes View

<img width="900" alt="Notes" src="https://github.com/user-attachments/assets/04acd591-b8d8-4da4-884c-4a978e23ec8b" />

<br/>
<br/>

### Single Note Page

<img width="900" alt="Single Post" src="https://github.com/user-attachments/assets/f5958bb9-880e-4f7d-baaa-0f870c932024" />

</div>

---

# 📖 Project Overview

Second Brain is a **secure knowledge management system** where users can:

✅ Store personal notes/resources  
✅ Save URLs alongside notes  
✅ Edit and update knowledge  
✅ Search through saved content  
✅ Manage everything in one centralized dashboard

Unlike a basic CRUD notes app, this project focuses heavily on:

- Authentication
- Protected Routes
- Persistent Sessions
- Database Relationships
- API Design
- Real Deployment Architecture

This project demonstrates **real-world full-stack engineering practices** using:

- Frontend Deployment
- Backend APIs
- Database ORM
- Authentication
- State Management
- API Documentation

---

# ✨ Features

## 🔐 Authentication System

A complete authentication flow using **JWT + HTTP-only Cookies**.

### Features

| Feature | Description |
|----------|-------------|
| User Registration | Create a secure account |
| Login | Authenticate using email/password |
| Logout | Clear session securely |
| Protected Routes | Unauthorized users blocked |
| Session Persistence | Cookie-based login state |
| Token Verification | JWT validation middleware |

### Security Measures

- JWT Token Signing
- HTTP-only Cookies
- Cross-Origin Credential Handling
- Middleware Authorization
- Secure Protected APIs

---

## 📝 Notes Management (CRUD)

Users can fully manage their personal knowledge.

### Create Notes

Create notes with:

- **Title**
- **Message / Content**
- **Optional URL Resource**

### Read Notes

Users can:

- View all notes
- Open a single note
- Access saved resources

### Update Notes

Users can:

- Edit title
- Modify content
- Update resources

### Delete Notes

Permanent deletion support.

---

## 🔍 Smart Search

A fast and responsive search system.

### Search Features

| Feature | Description |
|----------|-------------|
| Search by Title | Quickly find notes |
| Real-time Search | Instant feedback |
| Debounced Requests | Prevent API spam |
| Case-insensitive | Better UX |

---

## 📚 Personal Dashboard

Every authenticated user gets their own dashboard.

### Includes

- Organized Notes
- Resource Links
- Quick Navigation
- Search Access
- Note Preview Cards

---

## 📄 Swagger API Documentation

The backend is fully documented using **Swagger**.

### Includes

✅ Endpoint Documentation  
✅ Request Body Schema  
✅ API Testing Interface  
✅ Response Structures  
✅ Authentication APIs  
✅ CRUD APIs

---

# ⚙️ Tech Stack

## Frontend

<p>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite" />
<img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwind-css" />
<img src="https://img.shields.io/badge/Zustand-black?style=for-the-badge" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge" />
</p>

## Backend

<p>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js" />
<img src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express" />
<img src="https://img.shields.io/badge/JWT-red?style=for-the-badge" />
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger" />
</p>

## Database

<p>
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql" />
<img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma" />
</p>

## Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | PostgreSQL |

---

# 🏗️ Architecture Overview

```txt
                ┌──────────────────┐
                │    Frontend      │
                │ React + Vite     │
                │ (Vercel)         │
                └────────┬─────────┘
                         │
                         │ HTTP Requests
                         ▼
                ┌──────────────────┐
                │ Backend API      │
                │ Express + JWT    │
                │ (Render)         │
                └────────┬─────────┘
                         │
                         │ Prisma ORM
                         ▼
                ┌──────────────────┐
                │ PostgreSQL DB    │
                └──────────────────┘
```

---

# 🔐 Authentication Flow (JWT + Cookies)

```txt
Login Request
      │
      ▼
Validate Credentials
      │
      ▼
Generate JWT Token
      │
      ▼
Store Token in Cookie
      │
      ▼
Protected Routes Access
```

### Why Cookies?

- More secure than LocalStorage
- Prevents XSS access
- Automatic browser handling
- Persistent login sessions

---

# 📘 API Documentation

### Authentication Routes

```http
POST /auth/signUp
POST /auth/login
POST /auth/logout
```

### Notes Routes

```http
POST /api/writePost
GET /api/myposts
GET /api/getPost/:id
PUT /api/updatePost/:id
DELETE /api/deletePost/:id
```

### Search

```http
GET /api/search?q=
```

---

# 📂 Folder Structure

```txt
SecondBrain/
│
├── FE/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── store/
│   │   ├── lib/
│   │   └── App.jsx
│
├── BE/
│   ├── controller/
│   ├── middleware/
│   ├── prisma/
│   ├── routes/
│   ├── swagger/
│   └── index.js
│
└── README.md
```

---

# 🚀 Local Setup

### Clone Repository

```bash
git clone https://github.com/Kartik-619/SecondBrain.git
```

### Install Dependencies

#### Frontend

```bash
cd FE
npm install
```

#### Backend

```bash
cd BE
npm install
```

### Prisma Setup

```bash
npx prisma migrate dev
npx prisma generate
```

### Run Backend

```bash
npm run dev
```

### Run Frontend

```bash
npm run dev
```

---

# 🔑 Environment Variables

### Backend `.env`

```env
DATABASE_URL=

JWT_SECRET=

CLIENT_URL=http://localhost:5173

PORT=3009
```

### Frontend `.env`

```env
VITE_API_URL=http://localhost:3009
```

---

# 🌐 Deployment

## Frontend (Vercel)

```bash
Build Command:
npm run build
```

```txt
Output Directory:
dist
```

## Backend (Render)

```bash
Build Command:
npm install
```

```bash
Start Command:
node index.js
```

---

# 🚧 Challenges Solved

### CORS Handling

Solved frontend ↔ backend communication between:

```txt
Vercel ↔ Render
```

### Cross-Origin Cookies

Configured:

```txt
SameSite=None
Secure=true
```

### Prisma + PostgreSQL

Handled:

- Relations
- Schema Design
- Migrations
- ORM Queries

### Swagger Documentation

Built maintainable API docs.

---

# 📈 Future Improvements

- Rich Text Editor
- Markdown Notes
- Tags & Categories
- Dark Mode
- AI Summaries
- File Uploads
- Pagination
- Full Text Search
- bcrypt Password Hashing
- Email Verification
- RBAC Authorization

---

# 📚 Learning Outcomes

### Frontend

- React Architecture
- Zustand State Management
- Protected Routes
- API Integration

### Backend

- REST APIs
- JWT Authentication
- Middleware
- Cookie Auth
- Swagger

### Database

- Prisma ORM
- PostgreSQL
- Schema Design

### DevOps

- Vercel Deployment
- Render Deployment
- Production Debugging
- CORS Handling

---

<h3 align="center">
Built with ❤️ by Kartik Sharma
</h3>
