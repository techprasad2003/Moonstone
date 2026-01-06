import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../websitecss/DeleteAttendance.css';

function DeleteAttendance() {
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [attendanceStats, setAttendanceStats] = useState(null);

  const boards = ['CBSE', 'State Board'];
  const standards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const subjects = ['English', 'Mathematics', 'Science'];

  // Fetch available dates for attendance
  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await axios.get('https://server.moonstoneedu.in/api/attendance/dates');
        setAvailableDates(response.data);
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };
    fetchDates();
  }, []);
  

  // Fetch attendance statistics
  const fetchStatistics = async () => {
    if (!selectedDate || !selectedStandard || !selectedBoard || !selectedSubject) {
      alert('Please select Date, Standard, Board, and Subject.');
      return;
    }

    try {
      const response = await axios.post('https://server.moonstoneedu.in/api/attendance/stats', {
        date: selectedDate,
        standard: selectedStandard,
        board: selectedBoard,
        subject: selectedSubject,
      });
      setAttendanceStats(response.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
      alert('Failed to fetch attendance statistics.');
    }
  };

  // Handle attendance deletion
  const handleDelete = async () => {
    if (!selectedDate || !selectedStandard || !selectedBoard || !selectedSubject) {
      alert('Please select Date, Standard, Board, and Subject.');
      return;
    }

    if (window.confirm('Do you want to delete this attendance record?')) {
      try {
        await axios.post('https://server.moonstoneedu.in/api/attendance/delete', {
          date: selectedDate,
          standard: selectedStandard,
          board: selectedBoard,
          subject: selectedSubject,
        });
        alert('Attendance deleted successfully.');
        setAttendanceStats(null);
        setAvailableDates(availableDates.filter((date) => date !== selectedDate));
      } catch (error) {
        console.error('Error deleting attendance:', error);
        alert('Failed to delete attendance.');
      }
    }
  };

  return (
    <section id="delete-attendance" className="delete-attendance-page">
      <h2>Delete Attendance</h2>

      <div className="selection-form">
        <label htmlFor="date-select">Available Dates:</label>
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

        <label htmlFor="standard-select">Standard:</label>
        <select
          id="standard-select"
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

        <label htmlFor="board-select">Board:</label>
        <select
          id="board-select"
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

        <label htmlFor="subject-select">Subject:</label>
        <select
          id="subject-select"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">-- Select Subject --</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>

        <button className="search-button" onClick={fetchStatistics}>
          Search
        </button>
      </div>

      {attendanceStats && (
        <div className="statistics">
          <h3>Attendance Statistics</h3>
          <p>Present: {attendanceStats.presentCount}</p>
          <p>Absent: {attendanceStats.absentCount}</p>
          <p>Total: {attendanceStats.totalCount}</p>
          <button className="delete-button" onClick={handleDelete}>
            Delete Attendance
          </button>
        </div>
      )}
    </section>
  );
}

export default DeleteAttendance;
