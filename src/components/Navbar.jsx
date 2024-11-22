import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToken } from '../context/TokenContext';
import axios from 'axios';
import ConfirmPopup from './LogoutPopup';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { token, setToken, role, setRole } = useToken();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    console.log(token);
    setDropDown(!dropDown);
  };

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
      setRole(null);
      navigate('/login');
    } catch (error) {
      alert('Network error. Please try again later.', error);
      console.error('Logout error:', error);
    }
  };

  const renderItems = () => {
    if (role === 'Student') {
      return (
        <>
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
        </>
      );
    } else if (role === 'UniversityAdmin') {
      return (
        <>
          <div className="university-menuitem">
            <div className="menu-link" onClick={toggleDropdown}>
              Syllabus
            </div>
            {dropDown && (
              <div className="syllabus-dropdown">
                <Link to="/syllabus">View Syllabus</Link>
                <Link to="/createsyllabus">Create Syllabus</Link>
              </div>
            )}
            <Link to="/result">Result</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/notices">Notices</Link>
            <Link to="/colleges">Colleges</Link>
          </div>
          <div onClick={handleLogout} className="logout-icon">
            <FontAwesomeIcon icon={faSignOut} />
          </div>
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <div id="nav">
      <div className="logo">
        <Link to="/dashboard">
          <img src="logo192.png" alt="Logo" width={50} />
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
