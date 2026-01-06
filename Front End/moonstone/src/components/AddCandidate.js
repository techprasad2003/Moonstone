import React, { useState } from 'react';
import axios from 'axios';
import '../websitecss/AddCandidate.css';

const AddCandidate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    standard: '',
    board: '',
    subject: '',
    mobileNumber: '',
    whatsappNumber: '',
    fathersFullName: '',
    mothersFullName: '',
    fathersMobile: '',
    mothersMobile: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCandidate = async () => {
    // Check if all required fields are filled
    if (
      !formData.fullName ||
      !formData.standard ||
      !formData.board ||
      !formData.subject ||
      !formData.mobileNumber ||
      !formData.fathersFullName ||
      !formData.mothersFullName ||
      !formData.fathersMobile ||
      !formData.mothersMobile ||
      !formData.address
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // Include 'present' and 'absent' fields with empty default values
      const payload = {
        ...formData,
        present: '',
        absent: '',
      };

      await axios.post('https://server.moonstoneedu.in/api/candidates', payload);
      alert('Student added successfully!');
      setFormData({
        fullName: '',
        standard: '',
        board: '',
        subject: '',
        mobileNumber: '',
        whatsappNumber: '',
        fathersFullName: '',
        mothersFullName: '',
        fathersMobile: '',
        mothersMobile: '',
        address: '',
      });
    } catch (error) {
      console.error('Error adding candidate:', error);
      alert('There was an error adding the student.');
    }
  };

  return (
    <section id="add-candidate" className="add-candidate-container">
      <h2>Add Candidate</h2>

      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter full name"
          required
        />
      </div>

      <div className="form-group">
        <label>Standard:</label>
        <select
          name="standard"
          value={formData.standard}
          onChange={handleChange}
          required
        >
          <option value="">Select standard</option>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Board:</label>
        <select
          name="board"
          value={formData.board}
          onChange={handleChange}
          required
        >
          <option value="">Select board</option>
          <option value="CBSE">CBSE</option>
          <option value="State Board">State Board</option>
        </select>
      </div>

      <div className="form-group">
        <label>Subject:</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="">Select subject</option>
          <option value="Science">Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="English">English</option>
        </select>
      </div>

      <div className="form-group">
        <label>Mobile Number:</label>
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Enter mobile number"
          required
        />
      </div>

      <div className="form-group">
        <label>WhatsApp Number:</label>
        <input
          type="text"
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={handleChange}
          placeholder="Enter WhatsApp number"
        />
      </div>

      <div className="form-group">
        <label>Father's Full Name:</label>
        <input
          type="text"
          name="fathersFullName"
          value={formData.fathersFullName}
          onChange={handleChange}
          placeholder="Enter father's full name"
        />
      </div>

      <div className="form-group">
        <label>Mother's Full Name:</label>
        <input
          type="text"
          name="mothersFullName"
          value={formData.mothersFullName}
          onChange={handleChange}
          placeholder="Enter mother's full name"
        />
      </div>

      <div className="form-group">
        <label>Father's Mobile:</label>
        <input
          type="text"
          name="fathersMobile"
          value={formData.fathersMobile}
          onChange={handleChange}
          placeholder="Enter father's mobile number"
        />
      </div>

      <div className="form-group">
        <label>Mother's Mobile:</label>
        <input
          type="text"
          name="mothersMobile"
          value={formData.mothersMobile}
          onChange={handleChange}
          placeholder="Enter mother's mobile number"
        />
      </div>

      <div className="form-group">
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
          required
        />
      </div>

      <button onClick={handleAddCandidate}>Add Candidate</button>
    </section>
  );
};

export default AddCandidate;
