import { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Result.css';

const Result = () => {
  const [selectExam, setSelectExam] = useState('All');

  const resultData = [
    {
      id: 1,
      exam: 'Mid-Term',
      result: 'Passed',
      percentage: '80',
      semester: '6th',
    },
    {
      id: 2,
      exam: 'Assessment',
      result: 'Failed',
      percentage: '40',
      semester: '6th',
    },
    {
      id: 3,
      exam: 'Board',
      result: 'Passed',
      percentage: '80',
      semester: '6th',
    },
  ];

  const filterData = selectExam === 'All' ? resultData : resultData.filter((examdata) => examdata.exam === selectExam);

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Result'} />
      <div className="result-box">
        <div className="result-info">
          <p> Note: One Credit Hour equals 32 Clock Hours </p>
          <p>TH: THEORY </p>
          <p>PR: PRACTICAL </p>
          <p>Abs: ABSENT </p>
          <p>W: WITHHELD </p>
          <p>
            This sheet is for general ideas of grade(s) you secured. This is not for official appear. If any mistakes
            appear; record at respective college administration or University will be referred.
          </p>
        </div>
        <div className="result-type">
          <select value={selectExam} onChange={(e) => setSelectExam(e.target.value)}>
            <option value="All">All</option>
            <option value="Assessment">Assessment</option>
            <option value="Mid-Term">Mid Term</option>
            <option value="Pre-Board">Pre-Board</option>
            <option value="Board">Board</option>
          </select>
        </div>
        {filterData.length > 0 ? (
          <div className="result-present">
            <table className="result-table">
              <thead>
                <tr>
                  <th>Examination</th>
                  <th>Semester</th>
                  <th>Result</th>
                  <th>Percentage</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((examdata) => (
                  <tr key={examdata.id}>
                    <td>{examdata.exam}</td>
                    <td>{examdata.semester}</td>
                    <td>{examdata.result}</td>
                    <td>{examdata.percentage}%</td>
                    <td>
                      <button className="view-button">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-result">
            <div className="icon">📄</div>
            <p>No published result for {selectExam}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Result;
