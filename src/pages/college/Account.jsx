import { useReducer, useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Account.css';
import AccountType from '../../components/account/AccountType';
import AccountTable from '../../components/account/AccountTable';
import axios from 'axios';

import {
  ClubReducer,
  ElectiveReducer,
  initialClub,
  initialElective,
  initialFields,
  SyllabusReducer,
} from '../../hooks/reducer';
import StudentForm from '../../components/account/StudentForm';
import TeacherForm from '../../components/account/TeacherForm';
import { useToken } from '../../context/TokenContext';

const Account = () => {
  const { id } = useToken();
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
  // const [isclubHead, setIsClubHead] = useState(false);
  // const [isauthor, setIsAuthor] = useState(false);

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

  // const handleIsClub = (event) => {
  //   setIsClubHead(event.target.checked);
  // };
  // const handleIsAuthor = (event) => {
  //   setIsAuthor(event.target.checked);
  // };

  const handleStudentSubmit = async (studentData) => {
    if (studentData.isAuthor === '') {
      studentData.isAuthor = false;
    }
    if (studentData.isClubHead === '') {
      studentData.isClubHead = false;
    }
    console.log(JSON.stringify(studentData), 'fullstdata');

    const completeStudentData = {
      studentId: studentData.studentId,
      name: studentData.name,
      email: studentData.email,
      password: studentData.password,
      phone: studentData.phone,
      location: studentData.location,
      isClubHead: studentData.isClubHead,
      isAuthor: studentData.isAuthor,
      financialId: studentData.financialId,
      academicId: studentData.academicId,
      electiveIds: studentData.electiveIds,
      clubIds: studentData.clubIds,
      collegeId: studentData.collegeId,
      gender: studentData.gender,
    };

    console.log(JSON.stringify(completeStudentData), 'cmdata');

    try {
      const response = await axios.post(
        'https://localhost:7276/api/Student/CreateStudent',
        JSON.stringify(completeStudentData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Response data:', response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleTeacherSubmit = async (teacherData) => {
    const completeTeacherData = {
      teacherId: teacherData.teacherId,
      name: teacherData.name,
      email: teacherData.email,
      password: teacherData.password,
      phone: teacherData.phone,
      courseIds: teacherData.courseIds,
      collegeId: teacherData.collegeId,
    };
    console.log(JSON.stringify(completeTeacherData), 'cmpltd');
    try {
      const response = await axios.post(
        'https://localhost:7276/api/Teacher/CreateTeacher',
        JSON.stringify(completeTeacherData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Response data:', response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleAddClub = (event) => {
  //   event.preventDefault();
  //   clubdispatch({ type: 'ADD_CLUB', name: 'ClubIds', placeholder: 'Enter the club id', value: '' });
  // };
  // const [clubIds, setClubIds] = useState([]);
  // const [n ewId,setNewId] = useState('');

  // const handleUpdateClub = (event, id) => {
  //   if (id) {
  //     setClubIds((prevIds) => prevIds.concat(id));
  //     // setNewId('');
  //   }
  //   const value = event.target.value;
  //   clubdispatch({ type: 'UPDATE_CLUB', id: id, value: value });
  // };

  // const handleAddedClub = (event) => {
  //   event.preventDefault();
  //   console.log('added club');
  // };

  // const handleAddElective = (event) => {
  //   event.preventDefault();
  //   electivedispatch({ type: 'ADD_ELECTIVE', name: 'ElectiveIds', placeholder: 'Enter the elective id', value: '' });
  // };

  // const [electives, setElectives] = useState([]);

  // const handleUpdateElective = (event, id) => {
  //   if (id) {
  //     setElectives((prevElec) => prevElec.concat(id));
  //   }
  //   const value = event.target.value;
  //   console.log(id);
  //   electivedispatch({ type: 'UPDATE_ELECTIVE', id: id, value: value });
  // };

  // const handleAddedElective = (event) => {
  //   event.preventDefault();
  //   console.log('added elective');
  // };

  // const handleAddCourse = (event) => {
  //   event.preventDefault();
  //   coursedispatch({ type: 'ADD', name: 'CourseId', placeholder: 'Enter the course id', value: '' });
  // };

  // const [courseIds, setCourseIds] = useState([]);

  // const handleUpdateCourse = (event, id) => {
  //   if (id) {
  //     setCourseIds((prevCourse) => prevCourse.concat(id));
  //   }
  //   const value = event.target.value;
  //   coursedispatch({ type: 'UPDATE', id: id, value: value });
  // };

  // const handleAddedCourse = (event) => {
  //   event.preventDefault();
  //   console.log('added course');
  // };

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
          handleSubmit={handleStudentSubmit}
          // handleIsAuthor={handleIsAuthor}
          // handleIsClub={handleIsClub}
          // clubState={clubState}
          // electiveState={electiveState}
          // handleUpdateClub={handleUpdateClub}
          // handleUpdateElective={handleUpdateElective}
          // handleAddClub={handleAddClub}
          // handleAddElective={handleAddElective}
          // handleAddedClub={handleAddedClub}
          // handleAddedElective={handleAddedElective}
          id={id}
        />
      )}
      {createpop && accountType === 'Teacher' && (
        <TeacherForm
          accountType={accountType}
          handleAddAccount={handleAddAccount}
          // courseState={courseState}
          handleSubmit={handleTeacherSubmit}
          // handleUpdateCourse={handleUpdateCourse}
          // handleAddCourse={handleAddCourse}
          // handleAddedCourse={handleAddedCourse}
          id={id}
        />
      )}
    </>
  );
};
export default Account;
