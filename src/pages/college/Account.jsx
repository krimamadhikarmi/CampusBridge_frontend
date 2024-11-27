import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Account.css';
import AccountType from '../../components/account/AccountType';
import AccountTable from '../../components/account/AccountTable';

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
        <AccountType selectaccount={selectaccount} setSelectAccount={setSelectAccount} />
        {filterData.length > 0 ? (
          <AccountTable filterData={filterData} />
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
