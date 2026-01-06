import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../websitecss/NewRequest.css';

function NewRequests() {
  const [requests, setRequests] = useState([]);

  // Fetch requests from the backend
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('https://server.moonstoneedu.in/api/applications');
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
    fetchRequests();
  }, []);

  // Handle Add button click
  const handleAdd = async (id) => {
    try {
      const response = await axios.post(`https://server.moonstoneedu.in/api/transfer/${id}`);
      if (response.status === 200) {
        alert(response.data.message);
        setRequests((prevRequests) => prevRequests.filter((request) => request._id !== id));
      }
    } catch (error) {
      console.error("Error adding request:", error);
      alert("Error adding request. Please try again.");
    }
  };

  // Handle Delete button click
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://server.moonstoneedu.in/api/applications/${id}`);
      if (response.status === 200) {
        alert(response.data.message);
        setRequests((prevRequests) => prevRequests.filter((request) => request._id !== id));
      }
    } catch (error) {
      console.error("Error deleting request:", error);
      alert("Error deleting request. Please try again.");
    }
  };

  return (
    <section id="new-request" className="new-requests-page">
      <h2>New Requests</h2>
      {requests.length > 0 ? (
        <ul className="requests-list">
          {requests.map((request) => (
            <li key={request._id} className="request-item">
              <div className="request-details">
                <p><strong>Name:</strong> {request.fullName}</p>
                <p><strong>Standard:</strong> {request.standard}</p>
                <p><strong>Board:</strong> {request.board}</p>
                <p><strong>Subject:</strong> {request.subject}</p>
                <p><strong>Mobile Number:</strong> {request.mobileNumber}</p>
                <p><strong>Whatsapp Number:</strong> {request.whatsappNumber}</p>
                <p><strong>Fathers FullName:</strong> {request.fathersFullName}</p>
                <p><strong>Mothers FullName:</strong> {request.mothersFullName}</p>
                <p><strong>Fathers Mobile:</strong> {request.fathersMobile}</p>
                <p><strong>Mother Mobile Number:</strong> {request.mothersMobile}</p>
                <p><strong>Address:</strong> {request.address}</p>
                
              </div>
              <div className="request-actions">
                <button className="add-button" onClick={() => handleAdd(request._id)}>Add</button>
                <button className="delete-button" onClick={() => handleDelete(request._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-requests-message">No New Requests</p>
      )}
    </section>
  );
}

export default NewRequests;
