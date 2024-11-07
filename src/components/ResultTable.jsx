import React from 'react';

const ResultTable = ({ filterData }) => {
  return (
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
  );
};

export default ResultTable;
