import { useReducer, useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Account.css';
import AccountType from '../../components/account/AccountType';
import AccountTable from '../../components/account/AccountTable';
import FormHeader from '../../components/common/FormHeader';
import CustomFormField from '../../components/customFormField';
import ButtonGroup from '../../components/common/ButtonGroup';
import {
  ClubReducer,
  ElectiveReducer,
  initialClub,
  initialElective,
  initialFields,
  SyllabusReducer,
} from '../../hooks/reducer';
import StudentForm from '../../components/account/StudentForm';

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

  const [clubState, clubdispatch] = useReducer(ClubReducer, initialClub);
  const [electiveState, electivedispatch] = useReducer(ElectiveReducer, initialElective);
  const [courseState, coursedispatch] = useReducer(SyllabusReducer, initialFields);

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

  const handleAddClub = (event) => {
    event.preventDefault();
    clubdispatch({ type: 'ADD_CLUB', name: 'ClubIds', placeholder: 'Enter the club id', value: '' });
  };

  const handleUpdateClub = (event, id) => {
    const value = event.target.value;
    clubdispatch({ type: 'UPDATE_CLUB', id: id, value: value });
  };

  const handleAddedClub = (event) => {
    event.preventDefault();
    console.log('added club');
  };

  const handleAddElective = (event) => {
    event.preventDefault();
    electivedispatch({ type: 'ADD_ELECTIVE', name: 'ElectiveIds', placeholder: 'Enter the elective id', value: '' });
  };

  const handleUpdateElective = (event, id) => {
    const value = event.target.value;
    electivedispatch({ type: 'UPDATE_ELECTIVE', id: id, value: value });
  };

  const handleAddedElective = (event) => {
    event.preventDefault();
    console.log('added elective');
  };

  const handleAddCourse = (event) => {
    event.preventDefault();
    coursedispatch({ type: 'ADD', name: 'CourseId', placeholder: 'Enter the course id', value: '' });
  };

  const handleUpdateCourse = (event, id) => {
    const value = event.target.value;
    coursedispatch({ type: 'UPDATE', id: id, value: value });
  };

  const handleAddedCourse = (event) => {
    event.preventDefault();
    console.log('added course');
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
        <StudentForm
          accountType={accountType}
          handleAddAccount={handleAddAccount}
          handleSubmit={handleSubmit}
          handleIsAuthor={handleIsAuthor}
          handleIsClub={handleIsClub}
          clubState={clubState}
          electiveState={electiveState}
          handleUpdateClub={handleUpdateClub}
          handleUpdateElective={handleUpdateElective}
          handleAddClub={handleAddClub}
          handleAddElective={handleAddElective}
          handleAddedClub={handleAddedClub}
          handleAddedElective={handleAddedElective}
        />
      )}
      {createpop && accountType === 'Teacher' && (
        <div className="form-overlay">
          <div className="form-design">
            <FormHeader title={`Create ${accountType}`} handleForm={handleAddAccount} />
            <form>
              <CustomFormField
                label={'Teacher Id'}
                name={'TeacherId'}
                placeholder={'Enter the teacher id'}
                type={'text'}
              />
              <CustomFormField label={'Name'} name={'Name'} placeholder={'Enter the teacher name'} type={'text'} />
              <CustomFormField label={'Email'} name={'Email'} placeholder={'Enter the teacher email'} type={'email'} />
              <CustomFormField
                label={'Password'}
                name={'Password'}
                placeholder={'Enter the password'}
                type={'password'}
              />
              <CustomFormField
                label={'Phone Number'}
                name={'Phone'}
                placeholder={'Enter the teacher phone number'}
                type={'text'}
              />

              {courseState.map((course) => {
                return (
                  <div key={course.id} className="course-field">
                    <CustomFormField
                      label={'Course Id'}
                      name={course.name}
                      type={'text'}
                      value={course.value}
                      placeholder={course.placeholder}
                      onChange={(e) => handleUpdateCourse(e, course.id)}
                    />
                    <button type="button" onClick={handleAddedCourse}>
                      Add
                    </button>
                  </div>
                );
              })}
              <div className="add-div">
                <button onClick={handleAddCourse} className="add-field-button">
                  Add More
                </button>
              </div>
              <ButtonGroup handleClose={handleAddAccount} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Account;
