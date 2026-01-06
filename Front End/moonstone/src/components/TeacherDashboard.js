import React from 'react'; 
import { Link } from 'react-router-dom';
import '../websitecss/TeacherDashboard.css'; // External CSS for styling

function TeacherDashboard() {
  return (
    <section id="teacher-dashboard" className="dashboard-container">
      <h2>Welcome, Teacher</h2>
      <div className="dashboard-options">
        <Link to="/add-candidate" className="dashboard-option">
          <button>Add Candidate</button>
        </Link>
        <Link to="/remove-candidate" className="dashboard-option">
          <button>Remove Candidate</button>
        </Link>
        <Link to="/add-attendance" className="dashboard-option">
          <button>Add Attendance</button>
        </Link>
        <Link to="/view-attendance" className="dashboard-option">
          <button>View Attendance</button>
        </Link>
        <Link to="/edit-attendance" className="dashboard-option">
          <button>Edit Attendance</button>
        </Link>
        <Link to="/delete-attendance" className="dashboard-option">
          <button>Delete Attendance</button>
        </Link>
        <Link to="/new-request" className="dashboard-option">
          <button className="new-applications-button">New Applications</button>
        </Link>
        <Link to="/student-information" className="dashboard-option">
          <button>Students Information</button>
        </Link>
        <Link to="/Over-all-attendance" className="dashboard-option">
          <button>Over All Attendance</button>
        </Link>
      </div>
    </section>
  );
}

export default TeacherDashboard;
