import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Account.css';
import AccountType from '../../components/account/AccountType';
import AccountTable from '../../components/account/AccountTable';
import FormHeader from '../../components/common/FormHeader';
import CustomFormField from '../../components/customFormField';
import ButtonGroup from '../../components/common/ButtonGroup';

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

  const [createpop, setCreatePop] = useState(false);
  // const [formdata, setFormData] = useState(false);
  const [accountType, setAccountType] = useState('');
  const [isclubHead, setIsClubHead] = useState(false);
  const [isauthor, setIsAuthor] = useState(false);

  const handleCreate = () => {
    setCreatePop(!createpop);
  };

  const handleAddAccount = (type) => {
    setAccountType(type);
    setCreatePop(true); // Open the form
  };

  const handleIsClub = (event) => {
    setIsClubHead(event.target.checked);
  };
  const handleIsAuthor = (event) => {
    setIsAuthor(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('club', isclubHead);
    console.log('club', isauthor);
  };

  const filterData = selectaccount === 'All' ? data : data.filter((account) => account.role === selectaccount);

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Account'} />
      <div className="account-box">
        <div className="account-header">
          <div className="account-button">
            <button className="add-account-button" onClick={handleCreate}>
              Add Account
            </button>
          </div>
          <AccountType selectaccount={selectaccount} setSelectAccount={setSelectAccount} />
        </div>

        {filterData.length > 0 ? (
          <AccountTable filterData={filterData} />
        ) : (
          <div className="no-account">
            <p>No accounts for {selectaccount}</p>
          </div>
        )}
      </div>
      {createpop && (
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={() => handleAddAccount('Student')}>
            Add Student
          </button>
          <button className="dropdown-item" onClick={() => handleAddAccount('Teacher')}>
            Add Teacher
          </button>
        </div>
      )}
      {createpop && accountType === 'Student' && (
        <div className="form-overlay">
          <div className="form-design">
            <FormHeader title={`Create ${accountType}`} handleForm={handleAddAccount} />
            {/* Student Form */}
            <form onSubmit={handleSubmit}>
              <CustomFormField
                label={'Student Id'}
                name={'StudentId'}
                placeholder={'Enter the student id'}
                type={'text'}
              />
              <CustomFormField label={'Name'} name={'Name'} placeholder={'Enter the student name'} type={'text'} />
              <CustomFormField label={'Email'} name={'Email'} placeholder={'Enter the student email'} type={'email'} />
              <CustomFormField
                label={'Password'}
                name={'Password'}
                placeholder={'Enter the password'}
                type={'password'}
              />
              <CustomFormField
                label={'Phone Number'}
                name={'Phone'}
                placeholder={'Enter the student phone number'}
                type={'text'}
              />
              <CustomFormField
                label={'Address'}
                name={'Location'}
                placeholder={'Enter the student address'}
                type={'text'}
              />
              <div className="account-checkbox-container">
                <CustomFormField label={'Is ClubHead?'} name={'isClubHead'} type={'checkbox'} onChange={handleIsClub} />
                <CustomFormField label={'Is Author?'} name={'isAuthor'} type={'checkbox'} onChange={handleIsAuthor} />
              </div>

              <CustomFormField
                label={'Financial Id'}
                name={'FinancialId'}
                placeholder={'Enter the student financial id'}
                type={'text'}
              />
              <CustomFormField
                label={'Academic Id'}
                name={'AcademicId'}
                placeholder={'Enter the student academic id'}
                type={'text'}
              />
              <CustomFormField
                label={'College Id'}
                name={'CollegeId'}
                placeholder={'Enter the student college id'}
                type={'text'}
              />

              <ButtonGroup handleClose={handleAddAccount} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Account;
