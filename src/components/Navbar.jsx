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

  const onLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      navigate('/login');
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
        <Link to="/assesment">Assesment</Link>
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
