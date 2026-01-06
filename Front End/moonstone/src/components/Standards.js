// Standards.js
import React from 'react';
import { Link } from 'react-router-dom';

function Standards() {
  return (
    <div className="standards-page">
      <h2>Standards List</h2>
      <ul>
        <li>Standard 1: Mathematics</li>
        <li>Standard 2: Science</li>
        {/* Add more standards as needed */}
      </ul>
      <Link to="/operations">
        <button>Select Standard</button>
      </Link>
    </div>
  );
}

export default Standards;
