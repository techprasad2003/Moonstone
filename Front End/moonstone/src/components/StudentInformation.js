import React, { useState } from 'react'; 
import axios from 'axios';
import '../websitecss/StudentInformation.css';

function StudentInformation() {
  const [standard, setStandard] = useState('');
  const [board, setBoard] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!standard || !board) {
      alert('Please select both Standard and Board.');
      return;
    }
  
    setLoading(true);
    try {
      console.log('Sending request with:', { standard, board }); // Debug log
      const response = await axios.post('https://server.moonstoneedu.in/api/studentsinfo/search', { standard, board });
      console.log('Response data:', response.data); // Debug log
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching student information:', error);
      alert('Failed to fetch student information. Please check the console for more details.');
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <section id="student-information" className="student-information-section">
      <h2>Search Student Information</h2>

      <div className="filters">
        <div className="filter-group">
          <label htmlFor="standard">Standard:</label>
          <select
            id="standard"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
          >
            <option value="">Select Standard</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={`${i + 1}`}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="board">Board:</label>
          <select
            id="board"
            value={board}
            onChange={(e) => setBoard(e.target.value)}
          >
            <option value="">Select Board</option>
            <option value="State Board">State Board</option>
            
            <option value="CBSE">CBSE</option>
          </select>
        </div>

        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {students.length > 0 ? (
        <div className="student-table-container">
          <table className="student-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Standard</th>
                <th>Board</th>
                <th>Subject</th>
                <th>Mobile Number</th>
                <th>WhatsApp Number</th>
                <th>Father's Name</th>
                <th>Mother's Name</th>
                <th>Father's Mobile</th>
                <th>Mother's Mobile</th>
                <th>Address</th>
                <th>Present</th>
                <th>Absent</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.fullName}</td>
                  <td>{student.standard}</td>
                  <td>{student.board}</td>
                  <td>{student.subject}</td>
                  <td>{student.mobileNumber}</td>
                  <td>{student.whatsappNumber}</td>
                  <td>{student.fathersFullName}</td>
                  <td>{student.mothersFullName}</td>
                  <td>{student.fathersMobile}</td>
                  <td>{student.mothersMobile}</td>
                  <td>{student.address}</td>
                  <td>{student.present}</td>
                  <td>{student.absent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-information-message">
          {loading ? 'Fetching data...' : 'No information found for the selected criteria.'}
        </p>
      )}
    </section>
  );
}

export default StudentInformation;
