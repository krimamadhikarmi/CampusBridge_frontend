import '../styles/NormalPopup.css';

const NormalPopup = ({ onClose, title, message }) => (
  <div className="popup-overlay" onClick={onClose}>
    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
      <h3>{title}</h3>
      <p>{message}</p>
      <div className="button-group">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  </div>
);

export default NormalPopup;