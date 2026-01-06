import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../websitecss/AddAttendance.css';

function AddAttendance() {
  const [systemDate, setSystemDate] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedStandard, setSelectedStandard] = useState('');
  const [students, setStudents] = useState([]);
  const [boards] = useState(['CBSE', 'State Board']);
  const [standards] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);

  useEffect(() => {
    // Set system date to today's date by default
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setSystemDate(formattedDate);
  }, []);

  const fetchStudents = () => {
    if (!selectedBoard || !selectedStandard || !selectedSubject) {
      alert('Please select Board, Standard, and Subject.');
      return;
    }

    axios
      .post('https://server.moonstoneedu.in/api/students/search', {
        board: selectedBoard,
        standard: selectedStandard,
        subject: selectedSubject,
      })
      .then((response) => {
        setStudents(
          response.data.map((student) => ({
            ...student,
            isPresent: false, // Initialize the attendance status for each student
          }))
        );
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
        setStudents([]);
      });
  };

  const handleSubmit = () => {
    const attendanceRecords = students.map((student) => ({
      studentId: student._id,
      isPresent: student.isPresent,
    }));

    axios
      .post('https://server.moonstoneedu.in/api/attendance/submit', {
        date: systemDate,
        subject: selectedSubject,
        board: selectedBoard,
        standard: selectedStandard,
        attendanceRecords,
      })
      .then(() => {
        alert('Attendance submitted successfully.');
        setStudents([]);
      })
      .catch((error) => {
        console.error('Error submitting attendance:', error);
        alert('Error submitting attendance.');
      });
  };

  return (
    <section id="add-attendance" className="add-attendance-page">
      <h2>Add Attendance</h2>

      <div className="attendance-form">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={systemDate}
          onChange={(e) => setSystemDate(e.target.value)}
        />

        <label htmlFor="subject">Subject:</label>
        <select
          id="subject"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">-- Select Subject --</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>

        <label htmlFor="board">Board:</label>
        <select
          id="board"
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value)}
        >
          <option value="">-- Select Board --</option>
          {boards.map((board) => (
            <option key={board} value={board}>
              {board}
            </option>
          ))}
        </select>

        <label htmlFor="standard">Standard:</label>
        <select
          id="standard"
          value={selectedStandard}
          onChange={(e) => setSelectedStandard(e.target.value)}
        >
          <option value="">-- Select Standard --</option>
          {standards.map((standard) => (
            <option key={standard} value={standard}>
              {standard}
            </option>
          ))}
        </select>

        <button className="search-button" onClick={fetchStudents}>
          Search Students
        </button>

        <h3>Student List</h3>
        {students.length > 0 ? (
          <ul>
            {students.map((student) => (
              <li key={student._id} className="student-item">
                {student.rollNo} - {student.fullName}
                <input
                  type="checkbox"
                  checked={student.isPresent}
                  onChange={() =>
                    setStudents((prev) =>
                      prev.map((s) =>
                        s._id === student._id ? { ...s, isPresent: !s.isPresent } : s
                      )
                    )
                  }
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No students found.</p>
        )}

        <button onClick={handleSubmit}>Submit Attendance</button>
      </div>
    </section>
  );
}

export default AddAttendance;
