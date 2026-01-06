import React, { useEffect, useState } from 'react';
import '../websitecss/AdminApplications.css';

function AdminApplications() {
  const [applications, setApplications] = useState([]);

  // Fetch applications from the database
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('https://server.moonstoneedu.in/api/teacher/applications');
        if (response.ok) {
          const data = await response.json();
          setApplications(data);
        } else {
          console.error('Failed to fetch applications');
        }
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  // Accept a single application
  const handleAccept = async (id) => {
    try {
      const response = await fetch(`https://server.moonstoneedu.in/api/teacher/application/${id}/accept`, {
        method: 'POST',
      });
      if (response.ok) {
        setApplications(applications.filter((app) => app._id !== id)); // Fixed filtering logic
        alert('Application accepted!');
      } else {
        console.error('Failed to accept application');
      }
    } catch (error) {
      console.error('Error accepting application:', error);
    }
  };

  // Confirm and remove all applications
  const handleRemoveAll = async () => {
    const confirmed = window.confirm('Do you really want to remove all applications?');
    if (confirmed) {
      try {
        const response = await fetch(`https://server.moonstoneedu.in/api/teacher/removeapplications`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setApplications([]);
          alert('All applications removed!');
        } else {
          console.error('Failed to remove all applications');
        }
      } catch (error) {
        console.error('Error removing all applications:', error);
      }
    }
  };

  return (
    <section id='Admin-Application' className="admin-applications">
      <h1>New Applications</h1>
      <div className="buttons-group">
        <button onClick={handleRemoveAll} className="action-button">Remove All</button>
      </div>
      <div className="applications-list">
        {applications.length === 0 ? (
          <p>No new applications available.</p>
        ) : (
          applications.map((application) => (
            <div key={application._id} className="application-card"> {/* Use _id */}
              <p><strong>Full Name:</strong> {application.fullName}</p>
              <p><strong>Mobile Number:</strong> {application.mobileNumber}</p>
              <p><strong>WhatsApp Number:</strong> {application.whatsappNumber}</p>
              <p><strong>Subject:</strong> {application.subject}</p>
              <p><strong>Address:</strong> {application.address}</p>
              <div className="card-buttons">
                <button onClick={() => handleAccept(application._id)} className="accept-button">
                  Accept
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default AdminApplications;
