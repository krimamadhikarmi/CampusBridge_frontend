import '../../styles/common.css';
const ButtonGroup = ({ handleClose }) => {
  return (
    <div className="button-group">
      <button type="submit" className="submit-button">
        Save Changes
      </button>
      <button type="button" className="cancel-button" onClick={handleClose}>
        Cancel
      </button>
    </div>
  );
};

export default ButtonGroup;
