import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../Components/Contexts/AuthContext";

import Login from "../Components/Login/Login";
import DashBoard from "../Components/Complain-Page/DashBoard";
import CreateComplainPage from "../Components/Create-Complain-Page/CreateComplainPage";
import AdminDashboard from "../Components/Admin/AdminDashboard";

export default function CMSRoutes() {
  const { currentUser } = useAuth();

  // 🔴 NOT LOGGED IN
  if (!currentUser) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  // 🔵 ADMIN
  if (currentUser.email === "admin@college.com") {
    return (
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    );
  }

  // 🟢 NORMAL USER
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route
        path="/:category/create-complain"
        element={<CreateComplainPage />}
      />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
