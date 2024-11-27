import AttendanceTable from '../../components/attendance/AttendanceTable';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Attendance.css';
import { useState, useEffect } from 'react';

const Attendance = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [attendance, setAttendance] = useState({});

  const students = [
    { id: 1, name: 'Krima Madhikarmi' },
    { id: 2, name: 'Shishant Shrestha' },
    { id: 3, name: 'Sarina Shrestha' },
  ];

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);

    // Initialize attendance state
    const initialAttendance = {};
    students.forEach((student) => {
      initialAttendance[student.id] = null; // null means no selection
    });
    setAttendance(initialAttendance);
  }, []);

  const handleCheckboxChange = (studentId, status) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentId]: status, // Update the status for the student
    }));
  };

  const handleSubmit = () => {
    const result = students.map((student) => ({
      name: student.name,
      status: attendance[student.id] || 'Not Marked',
    }));
    console.log('Attendance Submitted:', result);
  };

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Attendance'} />
      <div className="attendance-container">
        <div className="attendance-card">
          <h2>Today's Date:</h2>
          <p> {currentDate}</p>
        </div>
        <div className="attendance-table-container">
          <AttendanceTable students={students} attendance={attendance} handleCheckboxChange={handleCheckboxChange}/>
          
          <button className="submitbutton" onClick={handleSubmit}>
            Submit Attendance
          </button>
        </div>
      </div>
    </>
  );
};

export default Attendance;
