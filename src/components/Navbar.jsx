import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import specific icon

const Navbar = () => {
  return (
    <div id="nav">
      <div className="logo">
        <a href="/">
          <img src="logo192.png" alt="Logo" width={50} />
          {/* yo logo just ahile lai place bauna matra haleko pachi replace garne */}
        </a>
      </div>
      <div className="menuitem">
        <a href="/">Syllabus</a>
        <a href="/">Assesment</a>
        <a href="/">Result</a>
        <a href="/">Articles</a>
        <a href="/">Notices</a>
        <a href="/">Help</a>
      </div>
      <div className="user">
        <a href="/">
          <FontAwesomeIcon icon={faUser} /> {/* Use Font Awesome icon */}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
