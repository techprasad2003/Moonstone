import React, { useState } from 'react';
import '../websitecss/TeacherApplication.css';

function TeacherApplication() {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!fullName || !mobileNumber || !whatsappNumber || !subject || !email || !password || !confirmPassword || !address) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    const applicationData = {
      fullName,
      mobileNumber,
      whatsappNumber,
      subject,
      email,
      password,
      address,
    };
  
    try {
      const response = await fetch('https://server.moonstoneedu.in/api/teacher/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicationData),
      });
  
      if (response.ok) {
        alert('Application submitted successfully!');
        setFullName('');
        setMobileNumber('');
        setWhatsappNumber('');
        setSubject('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAddress('');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to submit application.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error connecting to the server. Please try again.');
    }
  };
  
  return (
    <section id="TeacherApplication" className="application-container">
      <h2>Teacher Application</h2>
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="whatsappNumber">WhatsApp Number:</label>
          <input
            type="tel"
            id="whatsappNumber"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Set Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Submit Application
        </button>
      </form>
    </section>
  );
}

export default TeacherApplication;
