import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
const TeacherNavbar = ({ toggleDropdown, dropDown, handleLogout }) => {
  return (
    <>
      <div className="teacher-menuitem">
        <Link to="/syllabus">Syllabus</Link>
        <Link to="/teacherassignment">Assignment</Link>
        {/* <Link to="/result">Result</Link> */}
        <Link to="/articles">Articles</Link>
        <Link to="/notices">Notices</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to='/questionpage'>Questions</Link>
      </div>
      <div onClick={handleLogout} className="logout-icon">
        <FontAwesomeIcon icon={faSignOut} />
      </div>
    </>
  );
};
export default TeacherNavbar;
