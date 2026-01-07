import React from "react";
import { useAuth } from "../Contexts/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <span className="navbar-brand d-flex align-items-center">
          <img
            src="logo.png"
            alt="CMS Logo"
            className="navbar-logo"
          />
        </span>

        <button
          onClick={logout}
          type="button"
          className="btn btn-primary"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
