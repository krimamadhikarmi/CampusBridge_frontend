import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import { useState } from 'react';

const StudentForm = ({ accountType, handleAddAccount, handleSubmit, id }) => {
  const [StudentId, setStudentId] = useState('');
  const [StudentName, setStudentName] = useState('');
  const [StudentEmail, setStudentEmail] = useState('');
  const [StudentPassword, setStudentPassword] = useState('');
  const [StudentPhone, setStudentPhone] = useState('');
  const [StudentAddress, setStudentAddress] = useState('');
  const [IsClubHead, setIsClubHead] = useState('');
  const [IsAuthor, setIsAuthor] = useState('');
  const [FinancialId, setFinancialId] = useState('');
  const [AcademicId, setAcademicId] = useState('');
  const [Gender, setGender] = useState('');

  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    isClubHead: false,
    isAuthor: false,
    financialId: '',
    academicId: '',
    electiveIds: [],
    clubIds: [],
    collegeId: '',
    gender: '',
  });

  const [currentElective, setCurrentElective] = useState('');
  const [currentClubId, setCurrentClubId] = useState('');

  const addElective = () => {
    if (currentElective.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        electiveIds: [...prev.electiveIds, currentElective],
      }));
      setCurrentElective('');
    }
  };
  const addClubId = () => {
    if (currentClubId.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        clubIds: [...prev.clubIds, currentClubId],
      }));
      setCurrentClubId('');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const studentData = {
      studentId: StudentId,
      name: StudentName,
      email: StudentEmail,
      password: StudentPassword,
      phone: StudentPhone,
      location: StudentAddress,
      isClubHead: IsClubHead,
      isAuthor: IsAuthor,
      financialId: FinancialId,
      academicId: AcademicId,
      gender: Gender,
      clubIds: formData.clubIds,
      electiveIds: formData.electiveIds,
      collegeId: id,
    };
    console.log('Student Data', studentData);
    handleSubmit(event,studentData);
    console.log(JSON.stringify(studentData), 'dent');
  };

  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader title={`Create ${accountType}`} handleForm={handleAddAccount} />
        {/* Student Form */}
        <form onSubmit={handleFormSubmit}>
          <CustomFormField
            label={'Student Id'}
            name={'StudentId'}
            placeholder={'Enter the student id'}
            type={'text'}
            onChange={(e) => setStudentId(e.target.value)}
          />
          <CustomFormField
            label={'Name'}
            name={'Name'}
            placeholder={'Enter the student name'}
            type={'text'}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <CustomFormField
            label={'Email'}
            name={'Email'}
            placeholder={'Enter the student email'}
            type={'email'}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
          <CustomFormField
            label={'Password'}
            name={'Password'}
            placeholder={'Enter the password'}
            type={'password'}
            onChange={(e) => setStudentPassword(e.target.value)}
          />
          <CustomFormField
            label={'Phone Number'}
            name={'Phone'}
            placeholder={'Enter the student phone number'}
            type={'text'}
            onChange={(e) => setStudentPhone(e.target.value)}
          />
          <CustomFormField
            label={'Address'}
            name={'Location'}
            placeholder={'Enter the student address'}
            type={'text'}
            onChange={(e) => setStudentAddress(e.target.value)}
          />

          <div className="account-radio-button">
            <p id="login-label">
              <label>Gender:</label>
            </p>
            <CustomFormField
              label={'Male'}
              name={'gender'}
              type={'radio'}
              value={'Male'}
              onChange={(e) => setGender(e.target.value)}
            />
            <CustomFormField
              label={'Female'}
              name={'gender'}
              type={'radio'}
              value={'Female'}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <div className="account-checkbox-container">
            <CustomFormField
              label={'Is ClubHead?'}
              name={'isClubHead'}
              value={'isClubHead'}
              type={'checkbox'}
              checked={IsClubHead}
              onChange={(e) => setIsClubHead(e.target.checked)}
            />
            <CustomFormField
              label={'Is Author?'}
              name={'isAuthor'}
              type={'checkbox'}
              value={'isAuthor'}
              checked={IsAuthor}
              onChange={(e) => setIsAuthor(e.target.checked)}
            />
          </div>

          <CustomFormField
            label={'Financial Id'}
            name={'FinancialId'}
            placeholder={'Enter the student financial id'}
            type={'text'}
            onChange={(e) => setFinancialId(e.target.value)}
          />
          <CustomFormField
            label={'Academic Id'}
            name={'AcademicId'}
            placeholder={'Enter the student academic id'}
            type={'text'}
            onChange={(e) => setAcademicId(e.target.value)}
          />

          {/* {clubState.map((field) => {
            return (
              <div key={field.id} className="course-field">
                <CustomFormField
                  label={'Club Id'}
                  name={field.name}
                  type={'text'}
                  value={field.value}
                  placeholder={field.placeholder}
                  onChange={(e) => handleUpdateClub(e, field.id)}
                />
                <button type="button" onClick={handleAddedClub}>
                  Add
                </button>
              </div>
            );
          })}
          <div className="add-div">
            <button onClick={handleAddClub} className="add-field-button">
              Add More
            </button>
          </div> */}
          <div className="course-field">
            <CustomFormField
              label={'Club Id'}
              // name={currentClubId}
              type={'text'}
              value={currentClubId}
              placeholder={'Enter club Id'}
              onChange={(e) => setCurrentClubId(e.target.value)}
            />
            <button type="button" onClick={addClubId}>
              Add
            </button>
          </div>
          <div>
            <ul>
              {formData.clubIds.map((clubId, index) => (
                <li key={index}>{clubId}</li>
              ))}
            </ul>
          </div>

          <div className="course-field">
            <CustomFormField
              label={'Elective Id'}
              // name={elective.name}
              type={'text'}
              value={currentElective}
              placeholder={'Enter elective id'}
              onChange={(e) => setCurrentElective(e.target.value)}
            />
            <button type="button" onClick={addElective}>
              Add
            </button>
          </div>
          <div>
            <ul>
              {formData.electiveIds.map((electiveId, index) => (
                <li key={index}>{electiveId}</li>
              ))}
            </ul>
          </div>

          {/* {electiveState.map((elective) => {
            return (
              <div key={elective.id} className="course-field">
                <CustomFormField
                  label={'Elective Id'}
                  name={elective.name}
                  type={'text'}
                  value={elective.value}
                  placeholder={elective.placeholder}
                  onChange={(e) => handleUpdateElective(e, elective.id)}
                />
                <button type="button" onClick={handleAddedElective}>
                  Add
                </button>
              </div>
            );
          })}
          <div className="add-div">
            <button onClick={handleAddElective} className="add-field-button">
              Add More
            </button>
          </div> */}

          <ButtonGroup handleClose={handleAddAccount} />
        </form>
      </div>
    </div>
  );
};
export default StudentForm;
