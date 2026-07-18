import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ConfirmPopup from '../LogoutPopup';
import EditAssignmentForm from './EditAssignment.Form';
import CloseButton from '../common/CloseButton';
import { useToken } from '../../context/TokenContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomFormField from '../customFormField';
import api from '../../api/axios';

const AssignmentList = ({ title, subject, submissionDate, index, aid }) => {
  const [deletePop, setDeletePop] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [assignmentPop, setAssignmentPop] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  // const [score,setScore]=useState('');
  const [scores, setScores] = useState({});
  // const [score, setScore] = useState({});
  const { id: tid } = useToken();
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
  const handleDeleteAssignment = async () => {
    try {
      console.log('aid', aid);
      console.log('tid', tid);
      const response = await api.delete(`/Assignment/DeleteAssignment/${aid}/${tid}`);
      console.log(response.data);
      toast.success('Assignment deleted successfully!', {
        style: {
          backgroundColor: '#004d4d',
          color: '#ffffff',
        },
      });
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  const handleAssignmentFetch = async () => {
    try {
      const response = await api.get(`/Assignment/GetSubmissionByAssignmentId/${aid}`);

      setSubmissions(response.data); // Set the fetched data
    } catch (e) {
      console.log(e);
    }
  };
  // const handleScoreChange = (value) => {
  //   setScore(value); // Directly update the score as a string
  // };

  const handleScoreChange = (subid, value) => {
    setScores((prevScores) => ({
      ...prevScores,
      [subid]: value, // Store score per submission ID
    }));
  };

  const gradeAssignment = async (subid) => {
    const score = scores[subid];
    await api.get(`/Assignment/GradeAssignment/${subid}/${score}`);
    toast.success('Score updated successfully!');
    window.location.reload();
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
        <ConfirmPopup
          onClose={handleDelete}
          onConfirm={handleDeleteAssignment}
          title={'Are you sure you want to delete?'}
        />
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
                    <th>Score</th>
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
                      <td>
                        {submission.score !== '' ? (
                          submission.score
                        ) : (
                          <>
                            <CustomFormField
                              placeholder="Enter score"
                              onChange={(e) => handleScoreChange(submission.submissionId, e.target.value)}
                              value={scores[submission.submissionId] || ''} // Ensure each field only updates its corresponding state
                            />
                            <button onClick={() => gradeAssignment(submission.submissionId)}>Grade</button>
                          </>
                        )}
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
