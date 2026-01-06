import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AcademyDetails from './components/AcademyDetails';
import About from './components/About';
import Admission from './components/Admission';
import AdmissionDetails from './components/AdmissionDetails';
import ApplyNow from './components/ApplyNow';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';
import Tutor from './components/Tutor';
import TutorDetails from './components/TutorDetails';
import LearningSection from './components/LearningSection';
import GuideSection from './components/GuideSection';
import Achievements from './components/Achievements';
import StudentsSection from './components/StudentsSection';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import TeacherDashboard from './components/TeacherDashboard';
import TeacherAuthentication from './components/TeacherAuthentication';
import AddCandidate from './components/AddCandidate';
import RemoveCandidate from './components/AdminRemoveCandidate';
import AddAttendance from './components/AddAttendance';
import ViewAttendance from './components/ViewAttendance';
import EditAttendance from './components/EditAttendance';
import DeleteAttendance from './components/DeleteAttendance';
import NewRequest from './components/NewRequest';
import StudentInformation from './components/StudentInformation';
import AdminDashboard from './components/AdminDashboard';
import TeacherTask from './components/TeacherTask';
import TeacherApplication from './components/TeacherApplication';
import AdminAuthentication from './components/AdminAuthentication';
import AdminApplications from './components/AdminApplications';
import OverAllAttendance from './components/OverAllAttendance';





function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Main Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Admission />
                <About />
                <Courses />
                <Tutor />
                <LearningSection />
                <GuideSection />
                <Achievements />
                <StudentsSection />
                <Activities />
                <Contact />
                <Newsletter />
                <Footer />
              </>
            }
          />

          {/* Additional Pages */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/academy-details" element={<AcademyDetails />} />
          <Route path="/admission-details" element={<AdmissionDetails />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/tutor-details" element={<TutorDetails />} />
          <Route path="/course-details" element={<CourseDetails />} /> 
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/TeacherAuthentication" element={<TeacherAuthentication />} />
          <Route path="/add-candidate" element={<AddCandidate />} />
          <Route path="/remove-candidate" element={<RemoveCandidate />} />
          <Route path="/add-attendance" element={<AddAttendance/>} />
          <Route path="/view-attendance" element={<ViewAttendance/>} />
          <Route path="/edit-attendance" element={<EditAttendance/>} />
          <Route path="/delete-attendance" element={<DeleteAttendance/>} />
          <Route path="/new-request" element={<NewRequest/>} />
          <Route path="/student-information" element={<StudentInformation/>} />
          <Route path="/AdminAuthentication" element={<AdminAuthentication/>} />
          <Route path="/TeacherTask" element={<TeacherTask />} />
          <Route path="/TeacherApplication" element={<TeacherApplication />} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/Admin-Application" element={<AdminApplications/>} />
          <Route path="/over-all-attendance" element={<OverAllAttendance/>} />
          
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
