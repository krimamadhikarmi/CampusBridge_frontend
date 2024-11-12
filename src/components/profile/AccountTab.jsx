import React from 'react';

const AccountTab = () => {
  const studentData = {
    name: 'Krima Madhikarmi',
    faculty: 'BSc.CSIT',
    semester: '7th',
    totalFee: 95000,
    // scholarshipAmount: 300,
    paymentStatus: 'Paid',
    dueDate: '2024-12-01',
  };
  return (
    <div className="account-tab-style">
      <div className="account-header">
        <h2>Semester Fee</h2>
      </div>

      <div className="student-info">
        <p>Name: {studentData.name}</p>
        <p>Semester: {studentData.semester}</p>
        <p>Faculty:{studentData.faculty}</p>
      </div>

      <div className="fee-table">
        <table className="fee-table-design">
          <thead>
            <tr>
              <th>Fee</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Semester Fee</td>
              <td>{studentData.totalFee}</td>
            </tr>
            <tr>
              <td>Scholarship Fee</td>
              <td>{studentData.scholarshipAmount ? studentData.scholarshipAmount : 0}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total Fee</td>
              <td>
                {studentData.scholarshipAmount
                  ? studentData.totalFee - studentData.scholarshipAmount
                  : studentData.totalFee}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="fee-instruction">
        <p className="duedate">Due Date: {studentData.dueDate}</p>
        {/* <p className='status'>Status: {studentData.paymentStatus}</p> */}
        <p className={`status ${studentData.paymentStatus.toLowerCase()}`}>Status: {studentData.paymentStatus}</p>
      </div>
    </div>
  );
};

export default AccountTab;
