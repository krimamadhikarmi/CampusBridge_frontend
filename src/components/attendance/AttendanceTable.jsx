// const AttendanceTable = ({students,attendance,handleCheckboxChange}) => {
//   return (
//     <table className="attendance-table">
//       <thead>
//         <tr>
//           <th>Roll No.</th>
//           <th>Student Name</th>
//           <th>Present</th>
//           <th>Absent</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map((student,index) => (
//           <tr key={student.studentId}>
//             <td>{student.studentId}</td>
//             <td>{student.name}</td>
//             <td>
//               <input
//                 type="radio"
//                 name={`attendance-${student.id}`}
//                 value="Present"
//                 checked={attendance[student.id] === 'Present'}
//                 onChange={() => handleCheckboxChange(student.id, 'Present')}
//               />
//             </td>
//             <td>
//               <input
//                 type="radio"
//                 name={`attendance-${student.id}`}
//                 value="Absent"
//                 checked={attendance[student.id] === 'Absent'}
//                 onChange={() => handleCheckboxChange(student.id, 'Absent')}
//               />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
const AttendanceTable = ({ students, attendance, handleCheckboxChange }) => {
  return (
    <table className="attendance-table">
      <thead>
        <tr>
          <th>Roll No.</th>
          <th>Student Name</th>
          <th>Present</th>
          <th>Absent</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.studentId}>
            <td>{student.studentId}</td>
            <td>{student.name}</td>
            <td>
              <input
                type="radio"
                name={`attendance-${student.studentId}`}
                value="Present"
                checked={attendance[student.studentId] === 'Present'}
                onChange={() => handleCheckboxChange(student.studentId, 'Present')}
              />
            </td>
            <td>
              <input
                type="radio"
                name={`attendance-${student.studentId}`}
                value="Absent"
                checked={attendance[student.studentId] === 'Absent'}
                onChange={() => handleCheckboxChange(student.studentId, 'Absent')}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
