// src/Components/Firebase/Config.js
// (or src/Firebase/Config.js — wherever this file is)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase configuration (same keys, no change)
const firebaseConfig = {
  apiKey: "AIzaSyBAq5rghxQHA1o9saTLD8ifk6zVr0KDOMY",
  authDomain: "complaint-management-sys-fe472.firebaseapp.com",
  projectId: "complaint-management-sys-fe472",
  storageBucket: "complaint-management-sys-fe472.firebasestorage.app",
  messagingSenderId: "9268942276",
  appId: "1:9268942276:web:01703e56b2e4ce5644c091",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT THESE (THIS WAS MISSING)
export const auth = getAuth(app);
export const firestoreDb = getFirestore(app);

// ❌ REMOVE analytics (not needed for this project)
