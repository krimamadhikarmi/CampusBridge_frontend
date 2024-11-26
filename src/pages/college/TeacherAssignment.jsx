import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Assignment.css';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import AddAssignmentForm from '../../components/assignment/AddAssignmentForm';

const TeacherAssignment = () => {
  const [popup, setPopUp] = useState(false);

  const handleAddForm = () => {
    setPopUp(!popup);
  };

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
  }, []);
  const assignments = [
    {
      id: 1,
      title: 'Introduction to Data Science',
      subject: 'Data Science',
      submissionDate: '2024-12-10',
    },
    {
      id: 2,
      title: 'Advanced React Concepts',
      subject: 'Web Development',
      submissionDate: '2024-11-15',
    },
    {
      id: 3,
      title: 'Java React Concepts',
      subject: 'Development',
      submissionDate: '2024-01-15',
    },
  ];
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Assignment'} />
      <div className="teacher-assignment-box">
        <div className="button-div">
          <button className="add-assignment-button" onClick={handleAddForm}>
            Add Assignment
          </button>
        </div>
        <div className="assignment-list">
          {assignments.map((assignment, index) => {
            return (
              <div key={assignment.id} className="assignment-item">
                <div className="assignment-content">
                  <h2 className="assignment-title">
                    {index + 1}. {assignment.title}
                  </h2>
                  <div className="assignment-info">
                    <p className="subject-style">{assignment.subject}</p>
                    <p className="date-style">Submission Date: {assignment.submissionDate}</p>
                  </div>
                </div>
                <div className="assignment-options">
                  <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" />
                  <FontAwesomeIcon icon={faTrash} className="fa-icon-trash" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {popup && <AddAssignmentForm currentDate={currentDate} handleAddForm={handleAddForm} />}
    </>
  );
};
export default TeacherAssignment;
