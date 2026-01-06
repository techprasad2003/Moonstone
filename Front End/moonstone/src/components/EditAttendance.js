import React, { useState, useEffect } from 'react';
import '../websitecss/EditAttendance.css';

function EditAttendance() {
  const [availableDates, setAvailableDates] = useState([]);
  const [filters, setFilters] = useState({
    date: '',
    standard: '',
    board: '',
    subject: '',
  });
  const [attendanceList, setAttendanceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const standards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const boards = ['CBSE', 'State Board'];
  const subjects = ['English', 'Mathematics', 'Science'];

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await fetch('https://server.moonstoneedu.in/api/attendance/dates');
        const dates = await response.json();
        setAvailableDates(dates);
      } catch (error) {
        console.error('Error fetching dates:', error);
        setError('Failed to load available dates.');
      }
    };
    fetchDates();
  }, []);

  const handleInputChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = async () => {
    const { date, standard, board, subject } = filters;
    if (!date || !standard || !board || !subject) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://server.moonstoneedu.in/api/attendanceview/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filters),
      });

      if (response.ok) {
        const data = await response.json();
        const combinedList = [
          ...data.present.map((name) => ({ name, selected: true })),
          ...data.absent.map((name) => ({ name, selected: false })),
        ];
        setAttendanceList(combinedList);
      } else {
        console.error('Error fetching attendance:', response.statusText);
        setError('Failed to fetch attendance.');
      }
    } catch (error) {
      console.error('Error fetching attendance:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectionChange = (index) => {
    setAttendanceList((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, selected: !item.selected } : item))
    );
  };

  const handleSave = async () => {
    const { date, standard, board } = filters;
    if (!date) {
      setError('Please select a date first.');
      return;
    }

    try {
      const attendanceRecords = attendanceList.map(({ name, selected }) => ({
        name,
        isPresent: selected,
      }));

      const response = await fetch('https://server.moonstoneedu.in/api/attendance/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date,
          standard,
          board,
          attendanceRecords,
        }),
      });

      if (response.ok) {
        alert(`Attendance for ${date} has been updated.`);
      } else {
        console.error('Error saving attendance:', response.statusText);
        setError('Failed to save attendance.');
      }
    } catch (error) {
      console.error('Error saving attendance:', error);
      setError('An error occurred while saving.');
    }
  };

  return (
    <section id="edit-attendance" className="edit-attendance-page">
      <h2>Edit Attendance</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="filters">
        {[
          { label: 'Available Dates', name: 'date', options: availableDates },
          { label: 'Standard', name: 'standard', options: standards },
          { label: 'Board', name: 'board', options: boards },
          { label: 'Subject', name: 'subject', options: subjects },
        ].map(({ label, name, options }) => (
          <div className="filter" key={name}>
            <label htmlFor={`${name}-select`}>{label}</label>
            <select
              id={`${name}-select`}
              value={filters[name]}
              onChange={(e) => handleInputChange(name, e.target.value)}
            >
              <option value="">-- Select --</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button className="search-button" onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {attendanceList.length > 0 && (
        <div className="attendance-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Present</th>
              </tr>
            </thead>
            <tbody>
              {attendanceList.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={entry.selected}
                      onChange={() => handleSelectionChange(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button onClick={handleSave} className="save-button">
        Save Attendance
      </button>
    </section>
  );
}

export default EditAttendance;
