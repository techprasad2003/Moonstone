import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../websitecss/AdminRemoveCandidate.css';

function RemoveCandidate() {
  const [standards, setStandards] = useState([]);
  const [boards] = useState(['State Board', 'CBSE']); // Fixed values, no setter needed
  const [subjects] = useState(['Mathematics', 'Science', 'English']); // Fixed values, no setter needed
  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const standardsList = Array.from({ length: 10 }, (_, i) => `${i + 1}`);
    setStandards(standardsList);
  }, []);

  const fetchStudents = () => {
    if (!selectedStandard || !selectedBoard || !selectedSubject) {
      alert('Please select a standard, board, and subject.');
      return;
    }
    setIsLoading(true);
    axios
      .post('https://server.moonstoneedu.in/api/students/search', {
        standard: selectedStandard,
        board: selectedBoard,
        subject: selectedSubject,
      })
      .then((response) => {
        setStudents(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
        alert(
          'Error fetching students: ' +
            (error.response?.data?.error || error.message || 'Unknown error occurred')
        );
        setIsLoading(false);
      });
  };

  const removeStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      axios
        .post('https://server.moonstoneedu.in/api/removeStudent', { id })
        .then(() => {
          alert('Student removed successfully.');
          setStudents((prev) => prev.filter((student) => student._id !== id));
        })
        .catch((error) => {
          console.error('Error removing student:', error);
          alert('Error removing student: ' + (error.response?.data?.error || error.message));
        });
    }
  };

  const removeAllStudents = () => {
    if (window.confirm('Are you sure you want to delete all students in this list?')) {
      axios
        .post('https://server.moonstoneedu.in/api/removeAllStudents', { ids: students.map((student) => student._id) })
        .then(() => {
          alert('All students removed successfully.');
          setStudents([]);
        })
        .catch((error) => {
          console.error('Error removing all students:', error);
          alert('Error removing all students: ' + (error.response?.data?.error || error.message));
        });
    }
  };

  return (
    <section id="remove-candidate" className="remove-candidate-container">
      <h2>Remove Candidates</h2>

      <div className="filters">
        <select
          value={selectedStandard}
          onChange={(e) => setSelectedStandard(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Standard</option>
          {standards.map((standard) => (
            <option key={standard} value={standard}>
              {standard}
            </option>
          ))}
        </select>

        <select
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Board</option>
          {boards.map((board) => (
            <option key={board} value={board}>
              {board}
            </option>
          ))}
        </select>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Subject</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>

        <button className="search-button" onClick={fetchStudents}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </div>

      {students.length > 0 && (
        <>
          <button className="remove-all-button" onClick={removeAllStudents}>
            Remove All
          </button>
          <ul className="student-list">
            {students.map((student, index) => (
              <li key={student._id} className="student-item">
                <span>
                  {index + 1}. {student.fullName}
                </span>
                <button
                  className="remove-button"
                  onClick={() => removeStudent(student._id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default RemoveCandidate;
