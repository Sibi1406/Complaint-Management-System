import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../Firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userEmail = userCredential.user.email;

        // ✅ ROLE-BASED REDIRECT
        if (userEmail === "admin@college.com") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login-page">
      <div className="login-bg"></div>

      <form className="login-form" onSubmit={submitForm}>
        <div className="login-card">
          <img src="logo.png" alt="College Logo" className="login-logo" />

          <h2>Smart Campus CMS</h2>
          <p className="subtitle">Login to continue</p>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter college email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
