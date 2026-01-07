🏫 Campus Complaint Management System (CMS)

The Smart Campus Complaint Management System (CMS) is a web-based application built using React.js and Firebase to simplify the process of lodging, tracking, and resolving campus-related complaints.
It enables students to raise complaints easily while allowing administrators to monitor and resolve them efficiently.

🚀 Features
👤 User Features

Secure login using Firebase Authentication

Raise complaints under different categories (Hostel, Classroom, Infrastructure, etc.)

Track complaint status (Open / Resolved)

Clean and responsive user dashboard

🛠️ Admin Features

Single login system (role-based access)

View all complaints submitted by users

Update complaint status (Open → Resolved / Reopen)

Professional admin dashboard with statistics

⚙️ System Features

Real-time data storage using Firebase Firestore

Role-based redirection (User / Admin)

Responsive UI (mobile, tablet, desktop)

Hosted on Google Cloud via Firebase Hosting

🛠️ Technologies Used

Frontend: React.js

State Management: React Hooks

Authentication: Firebase Authentication

Database: Firebase Firestore

Hosting: Firebase Hosting (Google Cloud)

Version Control: Git & GitHub

🏁 Getting Started (Local Setup)
Prerequisites

Make sure you have installed:

Node.js

npm

Installation Steps

Clone the repository:

git clone https://github.com/YOUR_USERNAME/Complaint-Management-System.git


Navigate to the project directory:

cd Complaint-Management-System


Install dependencies:

npm install


Start the development server:

npm start


The app will run on:

http://localhost:3000

🔐 Firebase Configuration

Create a .env file in the root directory and add your Firebase credentials:

REACT_APP_API_KEY=your-api-key
REACT_APP_AUTH_DOMAIN=your-auth-domain
REACT_APP_PROJECT_ID=your-project-id
REACT_APP_STORAGE_BUCKET=your-storage-bucket
REACT_APP_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_APP_ID=your-app-id


⚠️ Do not upload .env to GitHub (already ignored using .gitignore).

🌍 Deployment (Google Cloud)

This project is deployed using Firebase Hosting, which runs on Google Cloud infrastructure.

Deployment Steps
npm run build
firebase deploy


After deployment, the application will be live at:

https://your-project-id.web.app

📂 Project Structure
.
├── public
├── src
│   ├── Components
│   │   ├── Login
│   │   ├── Complain-Page
│   │   ├── Admin
│   │   └── Contexts
│   ├── firebase-service
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md

🎓 Academic Note

This project was developed as a college academic project, focusing on:

Practical use of React

Firebase Authentication & Firestore

Cloud deployment

Real-world complaint management workflo
