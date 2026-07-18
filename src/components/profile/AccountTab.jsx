import React from 'react';
import { useToken } from '../../context/TokenContext';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../api/axios';
const AccountTab = () => {
  const { id:studentid } = useToken();
  const [info, setInfo] = useState(null);
 useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log('Fetching user data...');
        const response = await api.get(`/Student/GetStudentById/${studentid}`);
        console.log('response', response.data);
        setInfo(response.data);
      } catch (e) {
        console.error('Error fetching user data:', e);
      }
    };

    fetchUser();
  }, [studentid]);


  return (
    <div className="account-tab-style">
      <div className="account-header">
        <h2>Semester Fee</h2>
      </div>

      <div className="student-info">
        <p>Name: {info?.name}</p>
        <p>Semester: {info?.academicDTO.semester}</p>
        <p>Faculty:{info?.academicDTO.faculty}</p>
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
              <td>{info?.financialDTO.fee}</td>
            </tr>
            <tr>
              <td>Scholarship Fee</td>
              <td>{info?.financialDTO.scholarship ? info.financialDTO.scholarship : 0}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total Fee</td>
              <td>
                {info?.financialDTO.scholarship
                  ? info?.financialDTO.fee -info?.financialDTO.scholarship
                  : info?.financialDTO.fee}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="fee-instruction">
        <p>
          {info?.financialDTO.feePaid===false?(
 <button className="pay-now-button">Pay Now</button>
          ):<p>Fee Paid</p>}
        </p>
       
      </div>
    </div>
  );
};

export default AccountTab;
