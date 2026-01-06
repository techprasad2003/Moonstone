import React, { useState } from 'react'; 
import '../websitecss/Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('https://server.moonstoneedu.in/api/newsletters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing to our newsletter!');
        setEmail('');
      } else {
        setMessage('There was an issue subscribing. Please try again.');
      }
    } catch (error) {
      setMessage('Error connecting to the server. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Moonstone Academy</h2>
          <p>Subscribe to our newsletter for the latest updates on features and releases.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Your email here"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Join</button>
          </form>
          {message && <p className="newsletter-message">{message}</p>}
          <p className="consent-text">
            By subscribing, you consent to our Privacy Policy and agree to receive updates.
          </p>
        </div>

        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#tutors">Our Tutors</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#blog">Blog Posts</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect With Us</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/share/oVWXaPP5KdBNYyZK/" target="_blank" rel="noreferrer">
                📘 Facebook Page
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/saurbh.aher?igsh=MW0wcjNrbXYwaWJmNw==" target="_blank" rel="noreferrer">
                📸 Instagram Feed
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                🐦 Twitter Account
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                💼 LinkedIn Profile
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@moonstoneeduacademy?si=WdUCpsqzXLnzS41P" target="_blank" rel="noreferrer">
                ▶️ YouTube Channel
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-update">
          <h3>Stay Updated</h3>
          <ul className="social-icons">
          <li>
              <a href="https://www.facebook.com/share/oVWXaPP5KdBNYyZK/" target="_blank" rel="noreferrer">
                📘 Facebook Page
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/saurbh.aher?igsh=MW0wcjNrbXYwaWJmNw==" target="_blank" rel="noreferrer">
                📸 Instagram Feed
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                🐦 Twitter Account
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                💼 LinkedIn Profile
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@moonstoneeduacademy?si=WdUCpsqzXLnzS41P" target="_blank" rel="noreferrer">
                ▶️ YouTube Channel
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Moonstone Academy. All rights reserved.</p>
        <div className="footer-policy">
          <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Use</a> | <a href="#cookies">Cookie Settings</a> | <a href="#cookies">Design and Developed by Prasad Gaikwad & Rishikesh Guldagad</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
