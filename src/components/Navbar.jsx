import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToken } from '../context/TokenContext';
import axios from 'axios';
import LogoutPopup from './LogoutPopup';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  const handleLogout = () => {
    setShowLogout(true);
  };

  const onLogout = async () => {
    // console.log('token:', token);
    // const confirmed = window.confirm('Are you sure you want to log out?');
    // if (confirmed) {
    try {
      const response = await axios.post('https://localhost:7276/api/Auth/Logout', token, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      setToken(null);
      navigate('/login');
    } catch (error) {
      alert('Network error. Please try again later.', error);
      console.error('Logout error:', error);
    }
  };

  return (
    <div id="nav">
      <div className="logo">
        <Link to="/dashboard">
          <img src="logo192.png" alt="Logo" width={50} />
        </Link>
      </div>
      <div className="menuitem">
        <Link to="/syllabus">Syllabus</Link>
        <Link to="/assignment">Assignment</Link>
        <Link to="/result">Result</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/notices">Notices</Link>
        <Link to="/help">Help</Link>
      </div>
      <div className="user">
        <div onClick={toggleDropdown} className="user-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        {dropDown && (
          <div className="dropdown">
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        )}
      </div>
      {showLogout && <LogoutPopup onConfirm={onLogout} onClose={()=>setShowLogout(false)} />}
    </div>
  );
};

export default Navbar;
