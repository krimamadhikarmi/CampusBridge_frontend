import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ConfirmPopup from '../LogoutPopup';
import EditAssignmentForm from './EditAssignment.Form';
import CloseButton from '../common/CloseButton';
import axios from 'axios';

const AssignmentList = ({ title, subject, submissionDate, index }) => {
  const [deletePop, setDeletePop] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const[assignmentPop,setAssignmentPop]=useState(false)
//   const [currentDate, setCurrentDate] = useState('');

//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0];
//     setCurrentDate(today);
//   }, []);

   const handleAssignmentPop=()=>{
      setAssignmentPop(true)
   }

  const handleDelete = () => {
    setDeletePop(!deletePop);
  };

  const handleEdit = () => {
    setEditForm(!editForm);
  };

  const handleAssignmentFetch=async(aid)=>{
    try{
      const response=await axios.get(``)

    }
    catch(e){

    }

  }
  return (
    <>
      <div className="assignment-content">
        <h2 className="assignment-title" onClick={handleAssignmentPop}>
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
        <ConfirmPopup onClose={handleDelete} onConfirm={handleDelete} title={'Are you sure you want to delete?'} />
      )}
      {assignmentPop &&(
        <div className='form-overlay'>
          <div className="article-details-box">
            <CloseButton toggleBox={handleAssignmentPop} variant={'articlelist'}/>
            <div className='article-details'>
              <h2>{title}</h2>
              <div className="assignment-info">
          <p className="subject-style">{subject}</p>
          <p className="date-style">Submission Date: {submissionDate}</p>
        </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AssignmentList;
