import React, { useState } from 'react';
import '../websitecss/TeacherAuthentication.css';

function TeacherAuthentication() {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const toggleChangePasswordMode = () => {
    setIsChangePassword(true);
    setEmail('');
    setPassword('');
    setOldPassword('');
    setNewPassword('');
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://server.moonstoneedu.in/api/teacher/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Sign in successful!');
        console.log(result);

        if (result.token) {
          localStorage.setItem('teacherToken', result.token);
          window.location.href = '/teacher-dashboard';
        }
      } else {
        alert(result.message || 'Sign in failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to the server. Please try again.');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://server.moonstoneedu.in/api/teacher-change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, oldPassword, newPassword }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Password changed successfully!');
        setIsChangePassword(false);
      } else {
        alert(result.message || 'Failed to change password.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to the server. Please try again.');
    }
  };

  return (
    <section id="TeacherAuthentication" className="auth-container">
      {!isChangePassword ? (
        <>
          <h2>Teacher Sign In</h2>
          <form onSubmit={handleSignIn} className="auth-form">
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
              Sign In
            </button>
          </form>
          <p className="auth-toggle">
            <span onClick={toggleChangePasswordMode} className="auth-toggle-link">
              Change Password
            </span>
          </p>
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
            <button type="submit" className="form-button">
              Save Changes
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default TeacherAuthentication;
