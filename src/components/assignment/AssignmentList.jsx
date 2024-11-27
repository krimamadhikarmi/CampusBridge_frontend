import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ConfirmPopup from '../LogoutPopup';
import EditAssignmentForm from './EditAssignment.Form';

const AssignmentList = ({ title, subject, submissionDate, index }) => {
  const [deletePop, setDeletePop] = useState(false);
  const [editForm, setEditForm] = useState(false);
//   const [currentDate, setCurrentDate] = useState('');

//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0];
//     setCurrentDate(today);
//   }, []);

  const handleDelete = () => {
    setDeletePop(!deletePop);
  };

  const handleEdit = () => {
    setEditForm(!editForm);
  };
  return (
    <>
      <div className="assignment-content">
        <h2 className="assignment-title">
          {index + 1}. {title}
        </h2>
        <div className="assignment-info">
          <p className="subject-style">{subject}</p>
          <p className="date-style">Submission Date: {submissionDate}</p>
        </div>
      </div>
      <div className="assignment-options">
        <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} className="fa-icon-trash" onClick={handleDelete} />
      </div>
      {editForm && (
        <EditAssignmentForm handleEdit={handleEdit} title={title} subject={subject} submissionDate={submissionDate} />
      )}
      {deletePop && (
        <ConfirmPopup onClose={handleDelete} onConfirm={handleDelete} title={'Are you sure you wnat to delete?'} />
      )}
    </>
  );
};
export default AssignmentList;
