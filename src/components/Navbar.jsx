import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  const onLogout = async () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      try {
        const response = await fetch('https://localhost:7276/api/Auth/Login', {
          method: 'DELETE',
        });

        if (response.ok) {
          navigate('/login');
        } else {
          const errorData = await response.json();
          alert(`Logout failed: ${errorData.message || 'Unknown error'}`);
        }
      } catch (error) {
        alert('Network error. Please try again later.', error);
        console.error('Logout error:', error);
      }
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
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
