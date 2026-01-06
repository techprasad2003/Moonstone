import React, { useState } from 'react';  
import '../websitecss/Newsletter.css'; // Ensure the CSS file is linked

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Simulating form submission (replace with actual API call)
      const response = await fetch('https://server.moonstoneedu.in/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setMessage('Error connecting to the server. Please try again later.');
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Stay Updated with Moonstone Academy</h2>
        <p>Subscribe to our newsletter for the latest news and updates from Moonstone Academy.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            aria-label="Email"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        {message && <p className="newsletter-message">{message}</p>}
        <p className="terms">
          By clicking Sign Up, you agree to our <a href="/terms">Terms and Conditions</a>.
        </p>
      </div>
      <div className="newsletter-image">
        <img
          src={process.env.PUBLIC_URL + '/Update.jpg'}
          alt="Newsletter visual"
        />
      </div>
    </div>
  );
}

export default Newsletter;
