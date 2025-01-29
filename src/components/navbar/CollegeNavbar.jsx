import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
const CollegeNavbar = ({ toggleDropdown, handleLogout, dropDown }) => {
  return (
    <>
      <div className="college-menuitem">
        <Link to="/syllabus">Syllabus</Link>
        {/* <Link to="/result">Result</Link> */}
        <Link to="/articles">Articles</Link>
        <Link to="/notices">Notices</Link>
        <Link to="/account">Accounts</Link>
        <Link to="/questionpage">Questions</Link>
      </div>

      <div onClick={handleLogout} className="logout-icon">
        <FontAwesomeIcon icon={faSignOut} />
      </div>
    </>
  );
};
export default CollegeNavbar;
