import React, { useState } from 'react';
import '../websitecss/AdminAuthentication.css';

function AdminAuthentication() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleAuthMode = () => {
    setIsSignUp(false);
    setIsChangePassword(false);
    setName('');
    setEmail('');
    setPassword('');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignUp
      ? 'https://server.moonstoneedu.in/api/admin/signup'
      : 'https://server.moonstoneedu.in/api/admin/signin';

    const data = isSignUp ? { name, email, password } : { email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert(`${isSignUp ? 'Sign up' : 'Sign in'} successful!`);
        console.log(result);

        if (!isSignUp && result.token) {
          localStorage.setItem('adminToken', result.token);
          window.location.href = '/admindashboard';
        }
      } else {
        alert(result.message || 'Authentication failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to the server. Please try again.');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }

    try {
      const response = await fetch('https://server.moonstoneedu.in/api/admin-change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, oldPassword, newPassword }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Password changed successfully!');
        toggleAuthMode();
      } else {
        alert(result.message || 'Failed to change password.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to the server. Please try again.');
    }
  };

  return (
    <section id="AdminAuthentication" className="auth-container">
      {!isChangePassword ? (
        <>
          <h2>{isSignUp ? 'Admin Sign Up' : 'Admin Sign In'}</h2>
          <form onSubmit={handleSubmit} className="auth-form">
            {isSignUp && (
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
            )}
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
            <button type="submit" className="form-button">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          <p className="auth-toggle">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span onClick={() => setIsSignUp((prev) => !prev)} className="auth-toggle-link">
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </span>
          </p>
          {!isSignUp && (
            <p className="auth-toggle">
              want to change your password?{' '}
              <span onClick={() => setIsChangePassword(true)} className="auth-toggle-link">
                Change Password
              </span>
            </p>
          )}
        </>
      ) : (
        <>
          <h2>Change Password</h2>
          <form onSubmit={handleChangePassword} className="auth-form">
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
              <label htmlFor="old-password">Old Password:</label>
              <input
                type="password"
                id="old-password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-password">New Password:</label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="form-button">
              Save Changes
            </button>
          </form>
          <p className="auth-toggle">
            <span onClick={toggleAuthMode} className="auth-toggle-link">
              Back to Sign In
            </span>
          </p>
        </>
      )}
    </section>
  );
}

export default AdminAuthentication;
