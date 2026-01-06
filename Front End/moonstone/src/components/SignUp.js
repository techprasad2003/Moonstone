import React, { useState } from 'react';
import '../websitecss/SignUpIn.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to store error messages
  const [successMessage, setSuccessMessage] = useState(''); // State to store success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, password };

    try {
      const response = await fetch('https://server.moonstoneedu.in/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const result = await response.json(); // Parse JSON response

      if (response.ok) {
        setSuccessMessage('Sign up successful!');  // Display success message
        setErrorMessage('');  // Clear error message
        setName('');
        setEmail('');
        setPassword('');
      } else {
        setSuccessMessage('');  // Clear success message
        setErrorMessage(result.error || 'Sign up failed. Please try again.'); // Display the error message from backend
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setSuccessMessage('');  // Clear success message
      setErrorMessage('Error connecting to the server. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-button">Sign Up</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
}

export default SignUp;
