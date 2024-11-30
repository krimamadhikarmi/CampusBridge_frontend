import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import { useState } from 'react';

const StudentForm = ({
  accountType,
  handleAddAccount,
  handleSubmit,
  handleIsAuthor,
  handleIsClub,
  clubState,
  electiveState,
  handleUpdateClub,
  handleUpdateElective,
  handleAddClub,
  handleAddElective,
  handleAddedClub,
  handleAddedElective
}) => {

  const [StudentId, setStudentId] = useState('');
  const [StudentName,setStudentName] = useState('');
  const [StudentEmail,setStudentEmail] = useState('');
  const [StudentPassword, setStudentPassword] = useState('');
  const [StudentPhone, setStudentPhone] = useState('');
  const [StudentAddress, setStudentAddress] = useState('');
  const [isClubHead, setIsClubHead] = useState('');
  const [isAuthor, setIsAuthor] = useState('');
  const [financialId, setFinancialId] = useState('');
  const [academicId, setAcademicId] = useState('');

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    const formData = {
      StudentId,StudentName,StudentEmail,StudentPassword,StudentPhone,StudentAddress,
      isClubHead, isAuthor, financialId, academicId
    }
    handleSubmit(formData);
  }



  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader title={`Create ${accountType}`} handleForm={handleAddAccount} />
        {/* Student Form */}
        <form onSubmit={handleFormSubmit}>
          <CustomFormField label={'Student Id'} name={'StudentId'} placeholder={'Enter the student id'} type={'text'} onChange={(e)=>setStudentId(e.target.value)} />
          <CustomFormField label={'Name'} name={'Name'} placeholder={'Enter the student name'} type={'text'}
          onChange={(e)=>setStudentName(e.target.value)}
          />
          <CustomFormField label={'Email'} name={'Email'} placeholder={'Enter the student email'} type={'email'}
          onChange={(e)=>setStudentEmail(e.target.value)} />
          <CustomFormField label={'Password'} name={'Password'} placeholder={'Enter the password'} type={'password'}
          onChange={(e)=>setStudentPassword(e.target.value)}
           />
          <CustomFormField
            label={'Phone Number'}
            name={'Phone'}
            placeholder={'Enter the student phone number'}
            type={'text'}
            onChange={(e)=>setStudentPhone(e.target.value)}
          />
          <CustomFormField
            label={'Address'}
            name={'Location'}
            placeholder={'Enter the student address'}
            type={'text'}
            onChange={(e)=>setStudentAddress(e.target.value)}
          />
          <div className="account-checkbox-container">
            <CustomFormField label={'Is ClubHead?'} name={'isClubHead'} type={'checkbox'} onChange={(e)=>setIsClubHead(e.target.checked)} />
            <CustomFormField label={'Is Author?'} name={'isAuthor'} type={'checkbox'} onChange={(e)=>setIsAuthor(e.target.checked)} />
          </div>

          <CustomFormField
            label={'Financial Id'}
            name={'FinancialId'}
            placeholder={'Enter the student financial id'}
            type={'text'}
            onChange={(e)=>setFinancialId(e.target.value)}
          />
          <CustomFormField
            label={'Academic Id'}
            name={'AcademicId'}
            placeholder={'Enter the student academic id'}
            type={'text'}
            onChange={(e)=>setAcademicId(e.target.value)}
          />
          <CustomFormField
            label={'College Id'}
            name={'CollegeId'}
            placeholder={'Enter the student college id'}
            type={'text'}
          />

          {clubState.map((field) => {
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
          </div>

          {electiveState.map((elective) => {
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
          </div>

          <ButtonGroup handleClose={handleAddAccount} />
        </form>
      </div>
    </div>
  );
};
export default StudentForm;
