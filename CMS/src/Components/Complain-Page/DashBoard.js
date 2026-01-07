import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import { Services } from "../../Constant/Services";
import { useNavigate } from "react-router-dom";
import ComplainCard from "../Complain-detail-card/ComplainCard";
import { listComplain } from "../../firebase-service/complain-service";
import { useAuth } from "../Contexts/AuthContext";

export default function DashBoard() {
  const [complainList, setComplainList] = useState([]);
  const [showComplaints, setShowComplaints] = useState(false);

  const { currentUser } = useAuth();
  const email = currentUser?.email;
  const navigate = useNavigate();

  function navigateToCreateComplainPage(category) {
    navigate(`/${category}/create-complain`);
  }

  useEffect(() => {
    if (email) {
      listComplain(email).then((res) => setComplainList(res));
    }
  }, [email]);

  return (
    <div className="user-dashboard">

      {/* HEADER */}
      <div className="user-header">
        <h2>Smart Campus CMS</h2>
        <p>Welcome, {email}</p>
      </div>

      {/* CATEGORY SECTION */}
      <div className="section">
        <h3 className="section-title">Raise a Complaint</h3>

        <div className="category-grid">
          {Object.keys(Services).map((name) => (
            <div
              key={name}
              className="category-button"
              onClick={() => navigateToCreateComplainPage(name)}
            >
              <img src={Services[name].image} alt={name} />
              <span>{Services[name].name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TOGGLE BUTTON */}
      <div
        className="toggle-complaints-btn"
        onClick={() => setShowComplaints(!showComplaints)}
      >
        {showComplaints
          ? "Hide My Complaints ▲"
          : "View My Complaints ▼"}
      </div>

      {/* COMPLAINT LIST */}
      {showComplaints && (
        <div className="complaint-section">
          {complainList.length > 0 ? (
            complainList.map((complain) => (
              <ComplainCard key={complain.id} {...complain} />
            ))
          ) : (
            <p className="empty-text">No complaints raised yet</p>
          )}
        </div>
      )}
    </div>
  );
}
