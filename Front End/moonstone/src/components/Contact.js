import React, { useState } from 'react';
import '../websitecss/Contact.css'; // Assuming global styles are in App.css

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending form data to the server
    try {
      const response = await fetch('https://server.moonstoneedu.in/api/queries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message || 'Query submitted successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>

      {/* Contact Details Table */}
      <div className="contact-table">
        <table>
          <thead>
            <tr>
              <th>Mobile Number & WhatsApp Number</th>
              <th>Email Address</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8275451623</td>
              <td>moonstoneacademy@gmail.com</td>
              
            </tr>
          </tbody>
        </table>
      </div>

      {/* Google Map */}
      <div className="google-map">
        <h3>Our Location</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.2745471415747!2d74.64330967498583!3d19.39127368187926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc93a4fc3badcd%3A0x6172e0828aeb9fde!2sMoonstone%20Educational%20Academy!5e1!3m2!1sen!2sin!4v1731433312780!5m2!1sen!2sin"
          width="80%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Submit Query Form */}
      <div className="submit-query">
        <h3>Submit Your Query</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
