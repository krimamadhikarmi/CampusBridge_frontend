import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ConfirmPopup from '../LogoutPopup';
import EditAssignmentForm from './EditAssignment.Form';
import CloseButton from '../common/CloseButton';
import axios from 'axios';

const AssignmentList = ({ title, subject, submissionDate, index,aid }) => {
  const [deletePop, setDeletePop] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const[assignmentPop,setAssignmentPop]=useState(false)
  const [submissions, setSubmissions] = useState([]);
//   const [currentDate, setCurrentDate] = useState('');

//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0];
//     setCurrentDate(today);
//   }, []);

const handleAssignmentPop = async () => {
  setAssignmentPop(!assignmentPop);

  if (!assignmentPop) {
    // Fetch submission details only when opening the popup
    await handleAssignmentFetch();
  }
};


  const handleDelete = () => {
    setDeletePop(!deletePop);
  };

  const handleEdit = () => {
    setEditForm(!editForm);
  };

  const handleAssignmentFetch = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7276/api/Assignment/GetSubmissionByAssignmentId/${aid}`
      );

      setSubmissions(response.data); // Set the fetched data
    } catch (e) {
      console.log(e);
    }
  };

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
      {/* {assignmentPop &&(
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
      )} */}
      {assignmentPop && (
        <div className="form-overlay">
          <div className="article-details-box">
            <CloseButton toggleBox={handleAssignmentPop} variant={'articlelist'} />
            <div className="article-details">
              <h2>{title}</h2>
              <div className="assignment-info">
                <p className="subject-style">{subject}</p>
                <p className="date-style">Submission Date: {submissionDate}</p>
              </div>
              {/* Table to display submission details */}
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>File Path</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission.submissionId}>
                      <td>{submission.studentDTO.studentId}</td>
                      <td>{submission.studentDTO.name}</td>
                      <td>
                        <a href={submission.filePath} target="_blank" rel="noopener noreferrer">
                          View File
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AssignmentList;
