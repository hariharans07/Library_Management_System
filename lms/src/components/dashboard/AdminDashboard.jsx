import { useState } from "react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBooks: 1250,
    booksIssued: 450,
    totalUsers: 780,
    totalFines: 2500,
    recentActivities: [
      {
        id: 1,
        type: "ISSUE",
        book: "The Great Gatsby",
        user: "John Doe",
        date: "2025-07-28",
      },
      // Add more activities
    ],
  });

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Books</h3>
          <p className="stat-number">{stats.totalBooks}</p>
        </div>
        <div className="stat-card">
          <h3>Books Issued</h3>
          <p className="stat-number">{stats.booksIssued}</p>
        </div>
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{stats.totalUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Total Fines</h3>
          <p className="stat-number">₹{stats.totalFines}</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Recent Activities</h3>
        <div className="activities-list">
          {stats.recentActivities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <span className={`activity-type ${activity.type.toLowerCase()}`}>
                {activity.type}
              </span>
              <div className="activity-details">
                <p>{activity.book}</p>
                <p>User: {activity.user}</p>
                <p>Date: {activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-actions">
        <button className="btn-primary">Add New Book</button>
        <button className="btn-secondary">Manage Users</button>
        <button className="btn-info">View Reports</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
