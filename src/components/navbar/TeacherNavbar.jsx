import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const TeacherNavbar = ({ toggleDropdown, dropDown, handleLogout }) => {
  return (
    <>
      <div className="teacher-menuitem">
        <Link to="/syllabus">Syllabus</Link>
        <Link to="/teacherassignment">Assignment</Link>
        <Link to="/result">Result</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/notices">Notices</Link>
        <Link to="/attendance">Attendance</Link>
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
export default TeacherNavbar;
