import { useToken } from "../../context/TokenContext";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../api/axios";
const AttendanceTab = () => {
  // const monthsData = [
  //   { month: 'Baishak', operatingDays: 14, presentDays: 9 },
  //   { month: 'Jestha', operatingDays: 23, presentDays: 20 },
  //   { month: 'Ashad', operatingDays: 23, presentDays: 23 },
  // ];
  // return (
  //   <div className="attendance-tab-style">
  //     <div className="attendance-header">
  //       <h2>Attendance</h2>
  //     </div>
  //     <div className="attendance-chart">chart</div>
  //     <div className="attendance-list">
  //       {monthsData.map((data, index) => (
  //         <div className="attendance-item">
  //           <div className="month-design">{data.month}</div>
  //           <div className="days-design">
  //             <div className="day-info">
  //               <span className="day-count">{data.operatingDays}</span>
  //               <span className="day-label">Operating Days</span>
  //             </div>
  //             <div className="day-info">
  //               <span className="day-count">{data.presentDays}</span>
  //               <span className="day-label">Present Days</span>
  //             </div>
  //             <div className="day-info">
  //               <span className="day-count">{data.operatingDays - data.presentDays}</span>
  //               <span className="day-label">Absent Days</span>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  const {id:userId}=useToken();
  const[attendanceData,setAttendanceData] = useState([]);

useEffect(() => {
  const fetchAttendanceData = async()=>{
    const response = await api.get(`/Attendance/GetStudentAttendance/${userId}`);
    console.log(response.data);
    setAttendanceData(response.data);
  }
  fetchAttendanceData();
  }, [userId]);

  return (
    <table className="attendance-table">
      <thead>
        <tr>
          <th>AttendanceDate</th>
          <th>IsPresent</th>
        </tr>
      </thead>
      <tbody>
        {attendanceData.map((attendance, index) => (
          <tr key={index}>
          <td>{new Date(attendance.attendanceDate).toLocaleDateString()}</td>
          <td>{attendance.isPresent ? '✔️' : '❌'}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );


};
export default AttendanceTab;
