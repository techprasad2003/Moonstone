import React, { useState, useEffect } from 'react';
import '../websitecss/ViewAttendance.css';

function ViewAttendance() {
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [attendanceData, setAttendanceData] = useState({ present: [], absent: [] });

  const standards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const boards = ['CBSE', 'State Board'];
  const subjects = ['English', 'Mathematics', 'Science'];

  useEffect(() => {
    // Fetch available dates from the backend
    const fetchAvailableDates = async () => {
      try {
        const response = await fetch('https://server.moonstoneedu.in/api/attendance/dates');
        const dates = await response.json();
        setAvailableDates(dates);
      } catch (error) {
        console.error('Error fetching available dates:', error);
      }
    };
    fetchAvailableDates();
  }, []);

  const handleSearch = async () => {
    if (!selectedDate || !selectedStandard || !selectedBoard || !selectedSubject) {
      alert('Please select all fields.');
      return;
    }

    try {
      const response = await fetch('https://server.moonstoneedu.in/api/attendanceview/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: selectedDate,
          standard: selectedStandard,
          board: selectedBoard,
          subject: selectedSubject,
        }),
      });
      const data = await response.json();
      setAttendanceData({
        present: data.present, // List of present student names
        absent: data.absent,   // List of absent student names
      });
    } catch (error) {
      console.error('Error fetching attendance data:', error);
      alert('Failed to fetch attendance data.');
    }
  };

  return (
    <section id="view-attendance" className="view-attendance-page">
      <h2>View Attendance</h2>

      {/* Date Drawer */}
      <div className="drawer">
        <label htmlFor="date-select">Available Dates</label>
        <select
          id="date-select"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          <option value="">-- Choose a Date --</option>
          {availableDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      {/* Standard Drawer */}
      <div className="drawer">
        <label htmlFor="standard-select">Standard</label>
        <select
          id="standard-select"
          value={selectedStandard}
          onChange={(e) => setSelectedStandard(e.target.value)}
        >
          <option value="">-- Choose a Standard --</option>
          {standards.map((standard) => (
            <option key={standard} value={standard}>
              {standard}
            </option>
          ))}
        </select>
      </div>

      {/* Board Drawer */}
      <div className="drawer">
        <label htmlFor="board-select">Board</label>
        <select
          id="board-select"
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value)}
        >
          <option value="">-- Choose a Board --</option>
          {boards.map((board) => (
            <option key={board} value={board}>
              {board}
            </option>
          ))}
        </select>
      </div>

      {/* Subject Drawer */}
      <div className="drawer">
        <label htmlFor="subject-select">Subject</label>
        <select
          id="subject-select"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">-- Choose a Subject --</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      {/* Attendance Details */}
      {selectedDate && (
        <div className="attendance-summary">
          <h3>Attendance Summary for {selectedDate}</h3>
          <h4>Present Students</h4>
          <ul>
            {attendanceData.present.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <h4>Absent Students</h4>
          <ul>
            {attendanceData.absent.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <p>Total Present: {attendanceData.present.length}</p>
          <p>Total Absent: {attendanceData.absent.length}</p>
        </div>
      )}
    </section>
  );
}

export default ViewAttendance;
