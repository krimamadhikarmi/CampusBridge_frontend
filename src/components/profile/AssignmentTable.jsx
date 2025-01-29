import axios from "axios";
import { useEffect } from "react";
import { useToken } from "../../context/TokenContext";
import { useState } from "react";
const AssignmentTable = () => {

  const {id:stid} = useToken();
   const [submissions, setSubmissions] = useState([]);

    const fetchStudentSubmissions = async () =>{
      const response = await axios.get(`https://localhost:7276/api/Assignment/GetStudentSubmissions/${stid}`);
      setSubmissions(response.data);
      console.log('student submissions',response.data);
    }
    const handleDelete = async (sId) =>{
      const response = await axios.delete(`https://localhost:7276/api/Assignment/DeleteSubmission/${sId}/${stid}`)
      console.log(response.data);
      window.location.reload();

    }
    useEffect(() => {
      fetchStudentSubmissions();
    }, []);

  return (
    <div className="assignment-present">
      <table className="assignment-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Assignment</th>
            <th>Submission</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
        {submissions.map((submission, index) => (
          <tr key={index}>
        <td>{submission.courseName.trim()}</td>
          <td><a href={submission.assignmentFilePath} target="_blank" rel="noopener noreferrer">
                  {submission.question?submission.question:'Click here'}
                </a>
            </td>
                <td>
                <a href={submission.submissionFilePath} target="_blank" rel="noopener noreferrer">
                  {submission.answer? submission.answer:'Click here'}
                </a>
                </td>
          <td><button className="delete-button" onClick={() => handleDelete(submission.submissionId)}>
                  Delete
            </button></td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};
export default AssignmentTable;
