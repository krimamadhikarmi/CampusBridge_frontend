import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Account.css';

const Account = () => {
  const [selectaccount, setSelectAccount] = useState('All');
  const data = [
    {
      id: 1,
      name: 'Krima Madhikarmi',
      role: 'Student',
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'Student',
    },
    {
      id: 3,
      name: 'Jane Smith',
      role: 'Teacher',
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Teacher',
    },
    {
      id: 5,
      name: 'Michael Johnson',
      role: 'Student',
    },
    {
      id: 6,
      name: 'Alice Williams',
      role: 'Teacher',
    },
    {
      id: 7,
      name: 'David Brown',
      role: 'Student',
    },
    {
      id: 8,
      name: 'Sophia White',
      role: 'Teacher',
    },
    {
      id: 9,
      name: 'Liam Lee',
      role: 'Student',
    },
    {
      id: 10,
      name: 'Olivia Garcia',
      role: 'Teacher',
    },
  ];

  const filterData = selectaccount === 'All' ? data : data.filter((account) => account.role === selectaccount);

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Account'} />
      <div className="account-box">
        <div className="account-type">
          <select value={selectaccount} onChange={(e) => setSelectAccount(e.target.value)}>
            <option value="All">All</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </select>
        </div>
        {filterData.length > 0 ? (
          <div className="account-present">
            <table className="account-table">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((account, index) => (
                  <tr key={account.id}>
                    <td>{index + 1}</td>
                    <td>{account.name}</td>
                    <td>{account.role}</td>
                    <td className="activity-button">
                      <button className="view-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-account">
            <p>No accounts for {selectaccount}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default Account;
