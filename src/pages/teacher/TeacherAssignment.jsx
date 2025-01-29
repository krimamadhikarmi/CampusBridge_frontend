import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Assignment.css';
import { useState, useEffect } from 'react';
import AddAssignmentForm from '../../components/assignment/AddAssignmentForm';
import AssignmentList from '../../components/assignment/AssignmentList';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeacherAssignment = () => {
  
  const [popup, setPopUp] = useState(false);

  const [currentDate, setCurrentDate] = useState('');

  const handleAddForm = () => {
    setPopUp(!popup);
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
    fetchAssignments();
  }, []);

  
  const[assignments,setAssignment]=useState([]);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('https://localhost:7276/api/Assignment/GetAssignment');
      console.log('articles', response.data);
      
      const assignmentData = response.data.map(data=>({
        id:data.assignmentId,
        title:data.question,
        subject:data.courseDTO.courseTitle,
        submissionDate:data.submissionDate.split('T')[0]
      }));
      setAssignment(assignmentData);
      console.log(assignmentData);
    } catch (e) {
      console.log(e);
    }
  };



  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Assignment'} />
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
                aid={assignment.id}
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
      {popup && 
      <AddAssignmentForm currentDate={currentDate} handleAddForm={handleAddForm} assignments={assignments}
                  setAssignments={setAssignment} setPopUp={setPopUp}/>}
    </>
  );
};
export default TeacherAssignment;
