import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Assignment.css';
import { useState, useEffect } from 'react';
import AddAssignmentForm from '../../components/assignment/AddAssignmentForm';
import AssignmentList from '../../components/assignment/AssignmentList';

const TeacherAssignment = () => {
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

  const [popup, setPopUp] = useState(false);

  const [currentDate, setCurrentDate] = useState('');

  const handleAddForm = () => {
    setPopUp(!popup);
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
  }, []);

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
                <AssignmentList
                  title={assignment.title}
                  subject={assignment.subject}
                  submissionDate={assignment.submissionDate}
                  index={index}
                />
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
