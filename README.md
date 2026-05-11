# 🧠 Second Brain App

A full-stack **Second Brain application** built to help users store, organize, search, and manage personal notes/resources in one centralized place.

The idea behind this project is inspired by the concept of a **“second brain”** — an external system to capture knowledge, ideas, links, and thoughts so they are always accessible.

Users can securely authenticate, create notes/resources, edit or delete them, search through saved content, and access their personal knowledge base from anywhere.

---

# 🌍 Live Demo

### Frontend
[Live Website](https://second-brain-self-ten.vercel.app)

### Backend API
[API Server](https://secondbrain-wrez.onrender.com)

### Swagger API Docs
`https://secondbrain-wrez.onrender.com/api-docs`

Example:

```txt
https://secondbrain-wrez.onrender.com/api-docs

📖 Project Overview

Second Brain is a secure knowledge management system where users can:

Store personal notes/resources
Save URLs alongside notes
Edit and update knowledge
Search through saved content
Manage all saved resources in one place

Unlike simple note-taking apps, this project focuses on:

authentication
protected routes
persistent sessions
backend API design
database relationships
real deployment architecture

This project demonstrates real-world full-stack engineering practices using:

frontend deployment
backend APIs
database ORM
authentication
state management
API documentation
✨ Features
🔐 Authentication System

A complete authentication flow using JWT + HTTP-only cookies.

Features
User registration
User login
Logout system
Protected API routes
Persistent login session
Secure cookie-based authentication
Security Measures
JWT token signing
Protected middleware
HTTP-only cookies
Cross-origin credential handling
Route authorization
Token verification
📝 Note Management (CRUD)

Users can fully manage their saved knowledge.

Create Notes

Users can create notes with:

title
message/content
optional resource URL
Read Notes

Users can:

view all saved notes
access individual note details
Update Notes

Users can:

edit title
modify message/content
Delete Notes

Users can permanently remove saved notes.

🔍 Smart Search System

Built-in search functionality allows users to quickly find notes.

Search Features
Search by title
Real-time search
Debounced API calls
Fast response
Case-insensitive search
📚 Personal Dashboard

Every authenticated user gets a personalized dashboard.

Features include:

all saved notes
organized note cards
quick access to resources
note preview
note navigation
📄 Swagger API Documentation

The backend includes fully documented APIs using Swagger.

Includes
endpoint documentation
request body schema
response types
testing interface
authentication endpoints
CRUD APIs

This makes backend testing and integration much easier.

⚙️ Tech Stack
Frontend
React.js
Vite
React Router DOM
Axios
Zustand
Tailwind CSS
Backend
Node.js
Express.js
JWT Authentication
Cookie Parser
CORS
Swagger
Database
PostgreSQL
Prisma ORM
Deployment
Frontend
Vercel
Backend
Render
Database
PostgreSQL
