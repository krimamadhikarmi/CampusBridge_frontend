import AttendanceTable from '../../components/attendance/AttendanceTable';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Attendance.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Attendance = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [attendance, setAttendance] = useState({});
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchAttendance = async () => {
    try {
      const response = await axios.get('https://localhost:7276/api/Student/GetStudent');
      setStudents(response.data);
    } catch (e) {
      console.error(e, 'error');
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);

    // Initialize attendance state
    const initialAttendance = {};
    students.forEach((student) => {
      initialAttendance[student.id] = null; // null means no selection
    });
    setAttendance(initialAttendance);

fetchAttendance();
    
  }, []);


  const handleCheckboxChange = (studentId, status) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentId]: status, // Update the status for the student
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    // const attendanceData = students.map((student) => ({
    //   studentId: student.id,
    //   studentName: student.name,
    //   attendanceStatus: attendance[student.id] || 'Not Marked',
    //   date: currentDate,
    // }));


      const studentPresence = {};
      students.forEach((student) => {
        studentPresence[student.studentId] = attendance[student.studentId] === 'Present';
      });

    const completeAttendanceData = {
        //  id:1,
         attendanceDate : currentDate,
         studentPresence:studentPresence
    }
    // attendanceData.map((student)=>{
    //   const getResponse = await axios.get("")
    // })
    console.log('completeattendancedate',JSON.stringify(completeAttendanceData));
    try {
      const response = await axios.post(
        'https://localhost:7276/api/Attendance/CreateAttendance',
        JSON.stringify(completeAttendanceData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Attendance Submission Response:', response.data);
    } catch (error) {
      console.error('Error submitting attendance:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Attendance'} />
      <div className="attendance-container">
        <div className="attendance-card">
          <h2>Today's Date:</h2>
          <p>{currentDate}</p>
        </div>
        <div className="attendance-table-container">
          <AttendanceTable
            students={students}
            attendance={attendance}
            handleCheckboxChange={handleCheckboxChange}
          />
          <button
            className="submitbutton"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Attendance'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Attendance;