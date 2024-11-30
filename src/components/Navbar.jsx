import '../styles/Navbar.css';

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToken } from '../context/TokenContext';
import axios from 'axios';
import ConfirmPopup from './LogoutPopup';
import UniversityNavbar from './navbar/UniversityNavbar';
import CollegeNavbar from './navbar/CollegeNavbar';
import TeacherNavbar from './navbar/TeacherNavbar';
import StudentNavbar from './navbar/StudentNavbar';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  // const [resultdropDown, setResultDropDown] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { token, setToken, setRole, role } = useToken();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    console.log(token);
    setDropDown(!dropDown);
  };

  // const role = 'Student';

  const handleLogout = () => {
    setShowLogout(true);
  };

  const onLogout = async () => {
    try {
      const response = await axios.post('https://localhost:7276/api/Auth/Logout', token, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      setToken(null);
      setRole([]);
      navigate('/login');
    } catch (error) {
      alert('Network error. Please try again later.', error);
      console.error('Logout error:', error);
    }
  };

  const renderItems = () => {
    if (role.includes('Student')) {
      return <StudentNavbar handleLogout={handleLogout} toggleDropdown={toggleDropdown} dropDown={dropDown} />;
    } else if (role.includes('University')) {
      return <UniversityNavbar handleLogout={handleLogout} dropDown={dropDown} toggleDropdown={toggleDropdown} />;
    } else if (role.includes('Teacher')) {
      return <TeacherNavbar toggleDropdown={toggleDropdown} dropDown={dropDown} handleLogout={handleLogout} />;
    } else {
      return <CollegeNavbar toggleDropdown={toggleDropdown} dropDown={dropDown} handleLogout={handleLogout} />;
    }
  };

  return (
    <div id="nav">
      <div className="logo">
        <Link to="/dashboard">
          <img src="logo4.png" alt="Logo" width={150} />
        </Link>
      </div>
      {renderItems()}
      {showLogout && (
        <ConfirmPopup
          onConfirm={onLogout}
          onClose={() => setShowLogout(false)}
          title={'Are you sure you want to logout?'}
        />
      )}
    </div>
  );
};

export default Navbar;
