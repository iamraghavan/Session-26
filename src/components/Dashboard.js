import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to="/students">Manage Students</Link>
      <Link to="/teachers">Manage Teachers</Link>
    </div>
  );
}

export default Dashboard;
