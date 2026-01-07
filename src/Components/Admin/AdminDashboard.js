import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import {
  listAllComplaints,
  updateComplaintStatus
} from "../../firebase-service/complain-service";

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = async () => {
    const data = await listAllComplaints();
    setComplaints(data);
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Open" ? "Resolved" : "Open";
    await updateComplaintStatus(id, newStatus);
    loadComplaints(); // refresh UI
  };

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <p>Smart Campus Complaint Management System</p>
      </div>

      <div className="admin-stats">
        <div className="stat-card">
          <h4>Total Complaints</h4>
          <span>{complaints.length}</span>
        </div>
        <div className="stat-card">
          <h4>Resolved</h4>
          <span>{complaints.filter(c => c.status === "Resolved").length}</span>
        </div>
        <div className="stat-card">
          <h4>Pending</h4>
          <span>{complaints.filter(c => c.status === "Open").length}</span>
        </div>
      </div>

      <button className="toggle-btn" onClick={() => setShow(!show)}>
        {show ? "Hide Complaints ▲" : "Show Complaints ▼"}
      </button>

      {show && (
        <div className="admin-complaint-list">
          {complaints.map(c => (
            <div className="admin-complaint-card" key={c.id}>
              <h3>{c.category}</h3>

              <p><b>Description:</b> {c.description}</p>
              <p><b>Building:</b> {c.hostel}</p>
              <p><b>Room:</b> {c.room}</p>
              <p><b>Created By:</b> {c.createdBy}</p>
              <p><b>Status:</b>
                <span className={`status ${c.status.toLowerCase()}`}>
                  {c.status}
                </span>
              </p>

              <button
                className={`status-btn ${c.status === "Open" ? "resolve" : "reopen"}`}
                onClick={() => toggleStatus(c.id, c.status)}
              >
                {c.status === "Open" ? "Mark as Resolved" : "Reopen Complaint"}
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
