import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import specific icon

const Navbar = () => {
  return (
    <div id="nav">
      <div className="logo">
        <a href="/dashboard">
          <img src="logo192.png" alt="Logo" width={50} />
          {/* yo logo just ahile lai place bauna matra haleko pachi replace garne */}
        </a>
      </div>
      <div className="menuitem">
        <a href="/syllabus">Syllabus</a>
        <a href="/assesment">Assesment</a>
        <a href="/result">Result</a>
        <a href="/articles">Articles</a>
        <a href="/notices">Notices</a>
        <a href="/help">Help</a>
      </div>
      <div className="user">
        <a href="/profile">
          <FontAwesomeIcon icon={faUser} /> 
        </a>
      </div>
    </div>
  );
};

export default Navbar;
