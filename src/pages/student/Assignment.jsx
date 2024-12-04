import Navbar from '../../components/Navbar';
import StudentAssignmentList from '../../components/assignment/StudentAssignmentList';
import PageHeader from '../../components/common/PageHeader';
import '../../styles/Assignment.css';
import { useState } from 'react';

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

  const assignments = [
    {
      id: 1,
      title: 'Introduction to Data Science',
      subject: 'Data Science',
      submissionDate: '2024-12-10',
      question: './assignment.pdf',
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

  // Sort and filter assignments based on state
  const filteredAssignments = assignments.filter((assignment) => {
    const { statusText } = getStatus(assignment.submissionDate);
    return filterBy === 'all' || filterBy === statusText.toLowerCase().replace(' ', '-');
  });

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Assignments'} />

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
                key={assignment.id} // Always use a unique key when rendering lists
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
