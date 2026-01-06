import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import '../websitecss/AdminDashboard.css';

const AdminDashboard = () => {
  const [teachers, setTeachers] = useState([]); // State to store teachers
  const [showTeachers, setShowTeachers] = useState(false); // State to toggle teacher list display
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch teachers from backend
  useEffect(() => {
    if (showTeachers) {
      axios
        .get('https://server.moonstoneedu.in/api/adminremoveteachers') // Replace with your backend endpoint
        .then((response) => {
          setTeachers(response.data);
        })
        .catch((error) => {
          console.error('Error fetching teachers:', error);
        });
    }
  }, [showTeachers]);

  const handleRemoveTeacher = (teacherId) => {
    axios
      .delete(`https://server.moonstoneedu.in/api/adminremoveteachers/${teacherId}`) // Use the actual teacherId here
      .then(() => {
        // Remove the teacher from the local state
        setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher._id !== teacherId));
      })
      .catch((error) => {
        console.error('Error removing teacher:', error);
      });
  };

  return (
    <section id="admindashboard" className="admin-dashboard">
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
        <button onClick={() => navigate('/Admin-Application')}>New Application</button> {/* Navigate to New Application */}
        <button onClick={() => setShowTeachers((prev) => !prev)}>Remove Teacher</button>

        {showTeachers && (
          <div className="teacher-list">
            <h2>Teachers List</h2>
            {teachers.length > 0 ? (
              teachers.map((teacher) => (
                <div key={teacher._id} className="teacher-item"> {/* Use _id as the key */}
                  <p>
                    <strong>Name:</strong> {teacher.name} | <strong>Subject:</strong> {teacher.subject} |
                    <strong>Email:</strong> {teacher.email} | <strong>Mobile Number:</strong> {teacher.mobileNumber} |
                    <strong>Whatsapp Number:</strong> {teacher.whatsappNumber} | <strong>Address:</strong> {teacher.address}
                  </p>
                  <button
                    className="remove-teacher-button"
                    onClick={() => handleRemoveTeacher(teacher._id)} // Pass _id instead of id
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p>No teachers found.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
