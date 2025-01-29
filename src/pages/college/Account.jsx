import { useEffect, useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Account.css';
import AccountType from '../../components/account/AccountType';
import AccountTable from '../../components/account/AccountTable';
import axios from 'axios';

import StudentForm from '../../components/account/StudentForm';
import TeacherForm from '../../components/account/TeacherForm';
import { useToken } from '../../context/TokenContext';

const Account = () => {
  const { id } = useToken();
  const [selectaccount, setSelectAccount] = useState('All');

  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [createpop, setCreatePop] = useState(false);
  const [accountType, setAccountType] = useState('');

  const [tbldata, setTbldata] = useState([]);

  const handleCreate = () => {
    setCreatePop(!createpop);
  };

  const handleAddAccount = (type) => {
    setAccountType(type);
    setCreatePop(true);
  };
  
    // const handleStudentFetch = async () => {
    //   try {
    //     const response = await axios.get('https://localhost:7276/api/Student/GetStudent');
    //     console.log('students', response.data);
    //     setStudents(response.data);
    //     const newTbldata = response.data.map(data => ({
    //       id: data.studentId,
    //       name: data.name,
    //       role: 'Student',
    //     }));
    //     setTbldata(prevData => [...prevData, ...newTbldata]);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };

    // const handleTeacherFetch = async () => {
    //   try {
    //     const response = await axios.get('https://localhost:7276/api/Teacher/GetTeacher');
    //     console.log('teachers', response.data);
    //     setTeachers(response.data);
    //     const newTbldata = response.data.map(data => ({
    //       id: data.teacherId,
    //       name: data.name,
    //       role: 'Teacher',
    //     }));
    //     setTbldata(prevData => [...prevData, ...newTbldata]);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };


    const fetchAllData = async () => {
      try {
        // Clear table data before fetch
        const studentResponse = await axios.get('https://localhost:7276/api/Student/GetStudent');
        const teacherResponse = await axios.get('https://localhost:7276/api/Teacher/GetTeacher');
  
        const studentData = studentResponse.data.map(data => ({
          id: data.studentId,
          name: data.name,
          role: 'Student',
        }));
  
        const teacherData = teacherResponse.data.map(data => ({
          id: data.teacherId,
          name: data.name,
          role: 'Teacher',
        }));
  
        setTbldata([...studentData, ...teacherData]);
      } catch (e) {
        console.error(e);
      }
    };




    useEffect(() => {
      fetchAllData();
    }, []);

  //create student form submit
  const handleStudentSubmit = async (studentData, event) => {
    if (studentData.isAuthor === '') {
      studentData.isAuthor = "false";
    }else{
      studentData.isAuthor = "true";
    }
    if (studentData.isClubHead === '') {
      studentData.isClubHead = "false";
    }
    else{
      studentData.isClubHead = "true";

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
      if (response.status === 200) { // Ensure it was created successfully
        const newStudent = {
          id: response.data.studentId,  // Adjust according to API response
          name: response.data.name,
          role: 'Student'
        };
  
        setTbldata(prevData => [...prevData, newStudent]);
      }
      console.log('Response data:', response.data);
      // handleStudentFetch();
    } catch (e) {
      console.log(e);
    }
  };

  //create teacher submit
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
      if (response.status === 200) { // Ensure successful creation
        const newTeacher = {
          id: response.data.teacherId, // Adjust based on actual API response
          name: response.data.name,
          role: 'Teacher'
        };
  
        setTbldata(prevData => [...prevData, newTeacher]);
      }
      // handleTeacherFetch();
    } catch (e) {
      console.log(e);
    }
  };

  // const filterData = () => {
  //   // if (selectaccount === 'All') {
  //   //   return [...students, ...teachers];
  //   // }
  //   if (selectaccount === 'Student') {
  //     return students;
  //   }
  //   if (selectaccount === 'Teacher') {
  //     return teachers;
  //   }
  //   return [];
  // };

  const filterData = selectaccount === 'All' ? tbldata : tbldata.filter((account) => account.role === selectaccount);

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
          <AccountTable
            filterData={filterData}
            // handleStudentFetch={handleStudentFetch()}
            // handleTeacherFetch={handleTeacherFetch()}
          />
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
          id={id}
        />
      )}
      {createpop && accountType === 'Teacher' && (
        <TeacherForm
          accountType={accountType}
          handleAddAccount={handleAddAccount}
          handleSubmit={handleTeacherSubmit}
          id={id}
        />
      )}
    </>
  );
};
export default Account;
