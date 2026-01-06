import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../websitecss/TeacherTask.css';

function TeacherTask() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/TeacherAuthentication');
  };

  const handleApplication = () => {
    navigate('/TeacherApplication'); // Update this route if needed
  };

  return (
    <section id="TeacherTask" className="teacher-task-container">
      <h2>Teacher Tasks</h2>
      <div className="button-container">
        <button className="task-button" onClick={handleSignIn}>
          Teacher Sign In
        </button>
        <button className="task-button" onClick={handleApplication}>
          Teacher Application
        </button>
      </div>
    </section>
  );
}

export default TeacherTask;
