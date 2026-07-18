import Navbar from '../../components/Navbar';
import StudentAssignmentList from '../../components/assignment/StudentAssignmentList';
import PageHeader from '../../components/common/PageHeader';
import '../../styles/Assignment.css';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../api/axios';

//function to get assignment status
const getStatus = (submissionDate) => {
  const today = new Date();
  const dueDate = new Date(submissionDate);
  const diffTime = dueDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 7) return { statusText: 'Upcoming', statusClass: 'status-upcoming' };
  if (diffDays > 0) return { statusText: 'Due Soon', statusClass: 'status-due-soon' };
  return { statusText: 'Past Due', statusClass: 'status-past-due' };
};

const Assignment = () => {
  const [filterBy, setFilterBy] = useState('all'); // State to track filtering

  const [assignments, setAssignment] = useState([]);

  useEffect(() => {
    setAssignment([]);
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await api.get('/Assignment/GetAssignment');
      console.log('articles', response.data);

      const assignmentData = response.data.map((data) => ({
        id: data.assignmentId,
        title: data.question,
        subject: data.courseDTO.courseTitle,
        submissionDate: data.submissionDate.split('T')[0],
        question: data.filePath,
      }));
      setAssignment(assignmentData);
      console.log(assignmentData);
    } catch (e) {
      console.log(e);
    }
  };

  // Sort and filter assignments based on state
  const filteredAssignments = assignments.filter((assignment) => {
    const { statusText } = getStatus(assignment.submissionDate);
    return filterBy === 'all' || filterBy === statusText.toLowerCase().replace(' ', '-');
  });

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Assignments'} />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeButton={false}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />
      {/* Header with Sorting and Filtering Options */}
      <div className="assignment-header">
        <select onChange={(e) => setFilterBy(e.target.value)} className="filter-dropdown">
          <option value="all">All Assignments</option>
          <option value="upcoming">Upcoming</option>
          <option value="due-soon">Due Soon</option>
          <option value="past-due">Past Due</option>
        </select>
      </div>

      {/* Assignment List */}
      <div className="assignment-box">
        <div className="assignment-list">
          {filteredAssignments.map((assignment, index) => {
            const { statusText, statusClass } = getStatus(assignment.submissionDate);
            return (
              <StudentAssignmentList
                key={assignment.id}
                index={index}
                id={assignment.id}
                title={assignment.title}
                subject={assignment.subject}
                submissionDate={assignment.submissionDate}
                statusClass={statusClass}
                statusText={statusText}
                question={assignment.question}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Assignment;
