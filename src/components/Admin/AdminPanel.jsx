// src/components/Admin/AdminPanel.jsx
import React from 'react';
import './Admin.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <div className="admin-section">
        <h2>User Management</h2>
        <p>Manage roles and permissions for users.</p>
        <table className="admin-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>admin@example.com</td>
              <td>Admin</td>
              <td>
                <button className="admin-btn">Edit</button>
                <button className="admin-btn delete">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="admin-section">
        <h2>Billing</h2>
        <p>View and manage billing information.</p>
        <button className="admin-btn">View Invoices</button>
      </div>
    </div>
  );
};

export default AdminPanel;
