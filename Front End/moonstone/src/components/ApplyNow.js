import React, { useState } from 'react';
import '../websitecss/ApplyNow.css'; // Add styles for the form

function ApplyNow() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    standard: '',
    board: '',
    subject: '',
    mobileNumber: '',
    whatsappNumber: '',
    address: '',
    fathersFullName: '',
    mothersFullName: '',
    fathersMobile: '',
    mothersMobile: '',
  });

  // Error message state
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate phone numbers (simple validation for this case)
  const validatePhoneNumber = (number) => {
    const regex = /^[0-9]{10}$/; // Simple check for 10 digit number
    return regex.test(number);
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { mobileNumber, whatsappNumber, fathersMobile, mothersMobile } = formData;

    if (
      !validatePhoneNumber(mobileNumber) ||
      !validatePhoneNumber(whatsappNumber) ||
      !validatePhoneNumber(fathersMobile) ||
      !validatePhoneNumber(mothersMobile)
    ) {
      setErrorMessage('Please enter valid 10-digit phone numbers.');
      return;
    }

    console.log('Form Submitted:', formData);

    try {
      const response = await fetch('https://server.moonstoneedu.in/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message); // Show success message from the backend
        setErrorMessage(''); // Clear any error messages
        setFormData({
          fullName: '',
          standard: '',
          board: '',
          subject: '',
          mobileNumber: '',
          whatsappNumber: '',
          address: '',
          fathersFullName: '',
          mothersFullName: '',
          fathersMobile: '',
          mothersMobile: '',
        }); // Reset form fields
      } else {
        setSuccessMessage(''); // Clear success message
        setErrorMessage(result.error || 'Application submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setSuccessMessage(''); // Clear success message
      setErrorMessage('Error connecting to the server. Please try again later.');
    }
  };

  // Handler for resetting the form
  const handleReset = () => {
    setFormData({
      fullName: '',
      standard: '',
      board: '',
      subject: '',
      mobileNumber: '',
      whatsappNumber: '',
      address: '',
      fathersFullName: '',
      mothersFullName: '',
      fathersMobile: '',
      mothersMobile: '',
    });
    setErrorMessage(''); // Clear error message on reset
    setSuccessMessage(''); // Clear success message on reset
  };

  return (
    <div className="apply-now-container">
      <h2>Apply Now</h2>
      <form className="apply-now-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="standard">Standard (1st to 10th):</label>
          <input
            type="number"
            id="standard"
            name="standard"
            value={formData.standard}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="board">Board:</label>
          <select
            id="board"
            name="board"
            value={formData.board}
            onChange={handleChange}
            required
          >
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="State Board">State Board</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject Applying For:</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="Science">Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="English">English</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="whatsappNumber">WhatsApp Number:</label>
          <input
            type="tel"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fathersFullName">Father's Full Name:</label>
          <input
            type="text"
            id="fathersFullName"
            name="fathersFullName"
            value={formData.fathersFullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mothersFullName">Mother's Full Name:</label>
          <input
            type="text"
            id="mothersFullName"
            name="mothersFullName"
            value={formData.mothersFullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fathersMobile">Father's Mobile Number:</label>
          <input
            type="tel"
            id="fathersMobile"
            name="fathersMobile"
            value={formData.fathersMobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mothersMobile">Mother's Mobile Number:</label>
          <input
            type="tel"
            id="mothersMobile"
            name="mothersMobile"
            value={formData.mothersMobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-btn">Apply</button>
          <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ApplyNow;
