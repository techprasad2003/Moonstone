import React, { useState } from 'react';
import axios from 'axios';
import '../websitecss/OverAllAttendance.css';

const AllAttendance = () => {
    const [standard, setStandard] = useState('');
    const [board, setBoard] = useState('');
    const [subject, setSubject] = useState('');
    const [students, setStudents] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!standard || !board || !subject) {
            setError('Please select standard, board, and subject.');
            return;
        }
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('https://server.moonstoneedu.in/overallattendance', {
                params: { standard, board, subject },
            });
            setStudents(response.data);
        } catch (err) {
            setError('Error fetching attendance data.');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAllAttendance = async () => {
        try {
            await axios.delete('https://server.moonstoneedu.in/deleteallattendance', {
                params: { standard, board, subject },
            });
            setStudents([]);
        } catch (err) {
            console.error('Error deleting attendance:', err);
            setError('Error deleting all attendance records. Please try again.');
        }
    };

    return (
        <section id="over-all-attendance">
            <h1>All Attendance</h1>
            <div className="drawer">
                <div className="dropdown">
                    <label htmlFor="standard">Standard:</label>
                    <select
                        id="standard"
                        value={standard}
                        onChange={(e) => setStandard(e.target.value)}
                    >
                        <option value="">Select Standard</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className="dropdown">
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
                <div className="dropdown">
                    <label htmlFor="subject">Subject:</label>
                    <select
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    >
                        <option value="">Select Subject</option>
                        <option value="Science">Science</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="English">English</option>
                    </select>
                </div>
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && students.length > 0 && (
                <div className="attendance-results">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Present Dates</th>
                                <th>Absent Dates</th>
                                <th>Total Attendance (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student._id}>
                                    <td>{student.name}</td>
                                    <td>{student.presentDates.join(', ')}</td>
                                    <td>{student.absentDates.join(', ')}</td>
                                    <td>
                                        {(
                                            (student.presentDates.length /
                                                (student.presentDates.length +
                                                    student.absentDates.length)) *
                                            100
                                        ).toFixed(2)}
                                        %
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        onClick={handleDeleteAllAttendance}
                        className="delete-all-button"
                    >
                        Delete All Attendance
                    </button>
                </div>
            )}
            {!loading && students.length === 0 && (
                <p>No attendance data available for the selected filters.</p>
            )}
        </section>
    );
};

export default AllAttendance;
