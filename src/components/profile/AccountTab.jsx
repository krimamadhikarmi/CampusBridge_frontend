import React from 'react';

const AccountTab = () => {
  return (
    <div className="tab-style">
      <div className="account-header">
        <h2>Semester Fee</h2>
      </div>

      <div className="student-info">
        <p>Name: Krima Madhikarmi</p>
        <p>Semester: 7th Semester</p>
        <p>Faculty: BSc.CSIT</p>
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
              <td>95,000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total Fee</td>
              <td>95,000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AccountTab;
