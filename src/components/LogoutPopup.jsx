import '../styles/Navbar.css';
const ConfirmPopup = ({ onConfirm, onClose, title }) => (
  <div className="logout-overlay" onClick={onClose}>
    <div className="logout-box">
      <h3>{title}</h3>
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

export default ConfirmPopup;
