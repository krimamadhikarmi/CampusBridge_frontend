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
          <table className="attendance-table">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Student Name</th>
                <th>Present</th>
                <th>Absent</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <input
                      type="radio"
                      name={`attendance-${student.id}`}
                      value="Present"
                      checked={attendance[student.id] === 'Present'}
                      onChange={() => handleCheckboxChange(student.id, 'Present')}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name={`attendance-${student.id}`}
                      value="Absent"
                      checked={attendance[student.id] === 'Absent'}
                      onChange={() => handleCheckboxChange(student.id, 'Absent')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="submitbutton" onClick={handleSubmit}>
            Submit Attendance
          </button>
        </div>
      </div>
    </>
  );
};

export default Attendance;
