import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
const UniversityNavbar = ({ toggleDropdown, dropDown, handleLogout }) => {
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
        {/* <div className="menu-link" onClick={toggleResultDropdown}>
              Result
            </div> */}
        {/* {resultdropDown && (
              <div className="syllabus-dropdown">
                <Link to="/result">View Result</Link> */}
        <Link to="/createresult">Result</Link>
        {/* </div>
            )} */}

        {/* <Link to="/result">Result</Link> */}
        <Link to="/articles">Articles</Link>
        <Link to="/notices">Notices</Link>
        <Link to="/colleges">Colleges</Link>
        <Link to='/questionpage'>Questions</Link>
      </div>
      <div onClick={handleLogout} className="logout-icon">
        <FontAwesomeIcon icon={faSignOut} />
      </div>
    </>
  );
};
export default UniversityNavbar;
