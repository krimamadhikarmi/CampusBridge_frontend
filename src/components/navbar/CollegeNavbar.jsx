import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const CollegeNavbar = ({ toggleDropdown, handleLogout, dropDown }) => {
  return (
    <>
      <div className="college-menuitem">
        <Link to="/account">Accounts</Link>
        <Link to="/result">Result</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/notices">Notices</Link>
        <Link to="/attendance">Attendance</Link>
        {/* <Link to="/syllabus">Syllabus</Link>
            <Link to="/assignment">Assignment</Link> */}
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
};
export default CollegeNavbar;
