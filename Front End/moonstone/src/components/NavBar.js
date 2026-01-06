import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../websitecss/NavBar.css';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // State to manage navbar position
  const navigate = useNavigate();
  const drawerRef = useRef(null); // Ref for the mobile drawer

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path, sectionId = null) => {
    closeMobileMenu();
    navigate(path);
    if (sectionId) {
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle scroll event to toggle navbar position
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector('#home');
      if (homeSection) {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        setIsFixed(homeBottom <= 0); // Navbar becomes fixed after leaving the home section
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isFixed ? 'fixed' : ''}`}>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="Moonstone Academy Logo" />
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        &#9776; {/* Unicode for hamburger menu */}
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        ref={drawerRef} // Attach ref to the drawer
      >
        <button className="drawer-close-btn" onClick={closeMobileMenu}>
          &times; {/* Unicode for close button */}
        </button>
        <ul className="drawer-links">
          <li><button onClick={() => handleNavigation("/", "#home")}>Home</button></li>
          <li><button onClick={() => handleNavigation("/", "#admission")}>Admission</button></li>
          <li><button onClick={() => handleNavigation("/", "#about")}>About</button></li>
          <li><button onClick={() => handleNavigation("/", "#courses")}>Courses</button></li>
          <li><button onClick={() => handleNavigation("/", "#tutor")}>Tutor</button></li>
          <li><button onClick={() => handleNavigation("/", "#learning")}>Learning</button></li>
          <li><button onClick={() => handleNavigation("/", "#guide")}>Guide</button></li>
          <li><button onClick={() => handleNavigation("/", "#achievements")}>Achievements</button></li>
          <li><button onClick={() => handleNavigation("/", "#students")}>Students</button></li>
          <li><button onClick={() => handleNavigation("/", "#activities")}>Activities</button></li>
          <li><button onClick={() => handleNavigation("/", "#contact")}>Contact</button></li>
          <li><button onClick={() => navigate("/TeacherTask")}>Teacher</button></li>
          <li><button onClick={() => navigate("/signin")}>Sign In</button></li>
          <li><button onClick={() => navigate("/signup")}>Sign Up</button></li>
          <li><button onClick={() => navigate("/AdminAuthentication")}>Admin</button></li>
        </ul>
      </div>

      {/* Standard Navigation Links (for larger screens) */}
      <ul className="nav-links">
        <li><button onClick={() => handleNavigation("/", "#home")}>Home</button></li>
        <li><button onClick={() => handleNavigation("/", "#admission")}>Admission</button></li>
        <li><button onClick={() => handleNavigation("/", "#about")}>About</button></li>
        <li><button onClick={() => handleNavigation("/", "#courses")}>Courses</button></li>
        <li><button onClick={() => handleNavigation("/", "#tutor")}>Tutor</button></li>
        <li><button onClick={() => handleNavigation("/", "#learning")}>Learning</button></li>
        <li><button onClick={() => handleNavigation("/", "#guide")}>Guide</button></li>
        <li><button onClick={() => handleNavigation("/", "#achievements")}>Achievements</button></li>
        <li><button onClick={() => handleNavigation("/", "#students")}>Students</button></li>
        <li><button onClick={() => handleNavigation("/", "#activities")}>Activities</button></li>
        <li><button onClick={() => handleNavigation("/", "#contact")}>Contact</button></li>
        <li><button onClick={() => navigate("/TeacherTask")}>Teacher</button></li>
        <li><button onClick={() => navigate("/signin")}>Sign In</button></li>
        <li><button onClick={() => navigate("/signup")}>Sign Up</button></li>
        <li><button onClick={() => navigate("/AdminAuthentication")}>Admin</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;
