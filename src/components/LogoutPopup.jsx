import '../styles/Navbar.css';
const LogoutPopup = ({ onConfirm, onClose }) => (
  <div className="logout-overlay" onClick={onClose}>
    <div className="logout-box">
      <h3>Are you sure you want to logout?</h3>
      <div className="button-group">
        <button className="confirm-button" onClick={onConfirm}>
          Yes
        </button>
        <button className="cancel-button" onClick={onClose}>
          No
        </button>
      </div>
    </div>
  </div>
);

export default LogoutPopup;
